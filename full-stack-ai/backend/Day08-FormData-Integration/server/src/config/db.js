const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    throw new Error("MongoDB connection string is missing. Set MONGODB_URI in .env.");
  }

  await mongoose.connect(mongoUri);
  console.log("MongoDB connected.");
};

module.exports = connectDB;
