import "dotenv/config";

export const config = {
  PORT: process.env.PORT || 3000,
  MONGO_URI: process.env.MONGO_URI,
  NODE_ENV: process.env.NODE_ENV || "development",
  BCRYPT_ROUNDS: Number(process.env.BCRYPT_ROUNDS) || 12,
};

if (!config.MONGO_URI) {
  throw new Error("MONGO_URI is missing in .env");
}