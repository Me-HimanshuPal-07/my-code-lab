import mongoose from "mongoose";
import { config } from "./config.js";

export const connectDb = async () => {
    try {
        await mongoose.connect(config.MONGO_URI);
        console.log("Databse Connected Successfully.");
    } catch (error) {
        console.log("Databse Not Connected Successfully : ", error);
        
    }
}