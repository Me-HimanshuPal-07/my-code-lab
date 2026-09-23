import mongoose from "mongoose";
import config from "./config.js";

const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGO_URI);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Database not Connected : ", error);
  }
};

export default connectDB;