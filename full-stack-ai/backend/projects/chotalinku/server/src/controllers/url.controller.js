import { urlModel } from "../models/url.model.js";
import { generateCode } from "../utils/generatecode.js";
import { config } from "../config/config.js";

const MAX_RETRIES = 5;

export const createShortUrl = async (req, res, next) => {
  try {
    const { originalUrl } = req.body;

    for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
      try {
        const url = await urlModel.create({
          originalUrl,
          shortCode: generateCode(),
        });

        return res.status(201).json({
          message: "Url shortened successfully.",
          data: {
            originalUrl: url.originalUrl,
            shortCode: url.shortCode,
          },
          shortUrl: `${config.BASE_URL}/${url.shortCode}`,
        });
      } catch (err) {
        if (err.code !== 11000) throw err;
      }
    }

    return res
      .status(500)
      .json({ message: "Short code nahi ban paya, dobara try karo" });
  } catch (err) {
    next(err);
  }
};

export const getUrls = async (req, res, next) => {
  try {
    const urls = await urlModel.find().lean();

    if (!urls) {
      return res.status(200).json({
        message: "urls fetch successfuly.",
        data: {
          urls,
        },
      });
    }

    return res.status(404).json({
      message: "No URLs exist.",
    });
  } catch (err) {
    next(err);
  }
};
