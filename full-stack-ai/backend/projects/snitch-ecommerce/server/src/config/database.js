import mongoose from "mongoose";
import { env } from "./env.js";

export const connectDb = async () => {
  try {
    await mongoose.connect(env.databaseUrl);
    console.log("Database Connected Successfully.");
  } catch (error) {
    console.log("Database Connection Fail !!");
  }
};
