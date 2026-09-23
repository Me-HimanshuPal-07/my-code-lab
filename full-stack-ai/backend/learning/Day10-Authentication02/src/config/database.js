import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected Successfully.");
  } catch (error) {
    console.log("Mongo DB Not Connected Due to : ", error);
    
  }
}
