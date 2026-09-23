const userProfile = (req, res)=>{
    try {
        const body = req.body;
        const files = req.files;
        console.log(body);
        console.log(files);

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
