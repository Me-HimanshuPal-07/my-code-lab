const userProfile = (req, res)=>{
    try {
        console.log("✅ Route reached");
        const body = req.body;
        const file = req.file;
        console.log(body);
        console.log(file);

        return res.status(201).json({
            message: "Profile Created successfuly",
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error.",
            error: error,
        });
    }
}

module.exports = userProfile;
