import crypto from "crypto";

// Generate a 6 characters long short unique code. for URLs which is made from a-z, A-Z, and 0-9.

export const generateCode = (length = 6) => {
  const mainString =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let shortCode = "";

  for (let i = 0; i < length; i++) {
    shortCode += mainString.charAt(crypto.randomInt(mainString.length));
  }

  return shortCode;
};
