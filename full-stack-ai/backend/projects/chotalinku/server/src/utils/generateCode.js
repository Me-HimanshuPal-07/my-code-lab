import crypt from "crypto";

// Generate a 6 characters long short unique code. for URLs which is made from a-z, A-Z, and 0-9.

const generateCode = () => {
  return crypto.randomBytes(6).toString("base64url").slice(0, 6);
};
