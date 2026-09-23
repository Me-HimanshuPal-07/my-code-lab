//DB Connection
const { mongoose } = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(
    "mongodb+srv://palhimanshu504_db_user:25674723Shree@chorot-cluster.9tfvj3s.mongodb.net/",
  );
  console.log("Mongo Db Conneced.");
  } catch (error) {
    console.log("Error while Connecting DB", error);
    
  }
};

module.exports = connectDB;