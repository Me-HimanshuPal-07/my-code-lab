const mongoose = require("mongoose");

const connectDB = async ()=>{
    try {
        const data = await mongoose.connect(process.env.mongodb_uri);
        console.log("Mongo Db Connected");
        
    } catch (error) {
        console.log("Error while connecting DB", error);
        
    }
};

module.exports = connectDB;