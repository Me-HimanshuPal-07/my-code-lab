const fs = require("fs/promises");
const path = require("path");
const { randomUUID } = require("crypto");
const sharp = require("sharp");
const Profile = require("../models/profile.model");
const { originalDirectory, profileDirectory } = require("../config/multer.config");

const createProfileImage = async ({ sourcePath, outputPath, zoom, positionX, positionY, rotation }) => {
    const rotatedImage = sharp(sourcePath).rotate(rotation);
    const metadata = await rotatedImage.metadata();
    const sourceWidth = metadata.width;
    const sourceHeight = metadata.height;
    const scale = Math.max(512 / sourceWidth, 512 / sourceHeight) * zoom;
    const resizedWidth = Math.ceil(sourceWidth * scale);
    const resizedHeight = Math.ceil(sourceHeight * scale);
    const left = Math.max(0, Math.min(
        resizedWidth - 512,
        Math.round((resizedWidth - 512) / 2 - positionX * (512 / 180)),
    ));
    const top = Math.max(0, Math.min(
        resizedHeight - 512,
        Math.round((resizedHeight - 512) / 2 - positionY * (512 / 180)),
    ));

    await rotatedImage
        .resize(resizedWidth, resizedHeight)
        .extract({ left, top, width: 512, height: 512 })
        .webp({ quality: 88 })
        .toFile(outputPath);
};

const migrateLegacyProfileImage = async (profile, req) => {
    if (!profile?.imageUrl || profile.imageUrl.includes("/uploads/profiles/")) {
        return profile;
    }

    const legacyPath = path.join(__dirname, "../../uploads", path.basename(profile.imageUrl));
    const originalPath = path.join(originalDirectory, path.basename(legacyPath));
    const generatedPath = path.join(profileDirectory, `${randomUUID()}-512.webp`);

    try {
        await fs.access(legacyPath);
        await createProfileImage({
            sourcePath: legacyPath,
            outputPath: generatedPath,
            zoom: profile.zoom ?? 1,
            positionX: profile.positionX ?? 0,
            positionY: profile.positionY ?? 0,
            rotation: profile.rotation ?? 0,
        });
        await fs.rename(legacyPath, originalPath);

        const migratedProfile = await Profile.findByIdAndUpdate(
            profile._id,
            {
                imageUrl: `${req.protocol}://${req.get("host")}/uploads/profiles/${path.basename(generatedPath)}`,
                originalImagePath: originalPath,
            },
            { new: true },
        );

        return migratedProfile;
    } catch (error) {
        await fs.unlink(generatedPath).catch(() => {});
        return profile;
    }
};

const uploadFile = async (req, res, next) => {
    const name = req.body.name?.trim();
    const email = req.body.email?.trim();

    const zoom = Number(req.body.zoom ?? 1);
    const positionX = Number(req.body.positionX ?? 0);
    const positionY = Number(req.body.positionY ?? 0);
    const rotation = Number(req.body.rotation ?? 0);

    if (
        !name
        || !email
        || !/^\S+@\S+\.\S+$/.test(email)
        || !Number.isFinite(zoom)
        || !Number.isFinite(positionX)
        || !Number.isFinite(positionY)
        || !Number.isFinite(rotation)
    ) {
        if (req.file) {
            await fs.unlink(req.file.path).catch(() => {});
        }

        return res.status(400).json({
            message: "A valid name and email are required.",
        });
    }

    let generatedImagePath;

    try {
        const currentProfile = await Profile.findOne().select("+originalImagePath");
        const shouldRemoveImage = req.body.removeImage === "true";
        const update = { name, email, zoom, positionX, positionY, rotation };
        if (req.file) {
            generatedImagePath = path.join(profileDirectory, `${randomUUID()}-512.webp`);
            await createProfileImage({
                sourcePath: req.file.path,
                outputPath: generatedImagePath,
                zoom,
                positionX,
                positionY,
                rotation,
            });
            update.imageUrl = `${req.protocol}://${req.get("host")}/uploads/profiles/${path.basename(generatedImagePath)}`;
            update.originalImagePath = req.file.path;
        } else if (shouldRemoveImage) {
            update.imageUrl = null;
            update.originalImagePath = null;
        }

        const profile = await Profile.findOneAndUpdate(
            {},
            { $set: update },
            { new: true, upsert: true, runValidators: true, setDefaultsOnInsert: true },
        );

        const oldImageUrl = currentProfile?.imageUrl;
        const imageWasReplaced = req.file || shouldRemoveImage;

        if (oldImageUrl && imageWasReplaced) {
            const oldFilename = path.basename(oldImageUrl);
            await fs.unlink(path.join(profileDirectory, oldFilename)).catch(() => {});
        }

        if (currentProfile?.originalImagePath && imageWasReplaced) {
            await fs.unlink(currentProfile.originalImagePath).catch(() => {});
        }

        return res.status(201).json({
            message: "Profile saved successfully.",
            profile,
        });
    } catch (error) {
        if (req.file) {
            await fs.unlink(req.file.path).catch(() => {});
        }

        if (generatedImagePath) {
            await fs.unlink(generatedImagePath).catch(() => {});
        }

        return next(error);
    }
};

const getProfile = async (req, res, next) => {
    try {
        const profile = await Profile.findOne();
        const migratedProfile = await migrateLegacyProfileImage(profile, req);
        return res.json({ profile: migratedProfile });
    } catch (error) {
        return next(error);
    }
};

module.exports = { getProfile, uploadFile };