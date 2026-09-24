import { config } from "../config/config.js";

const MAX_URL_LENGTH = 2048;
const BASE_HOST = new URL(config.BASE_URL).host; // once, at startup

export const validateUrl = (req, res, next) => {
  const rawUrl = req.body?.originalUrl;

  // type check first, string methods after
  if (typeof rawUrl !== "string" || !rawUrl.trim()) {
    return res.status(400).json({ message: "Url is required" });
  }

  const trimmed = rawUrl.trim();

  if (trimmed.length > MAX_URL_LENGTH) {
    return res.status(400).json({ message: "Url is too long" });
  }

  let url;
  try {
    url = new URL(trimmed);
  } catch {
    return res.status(400).json({ message: "Invalid URL" });
  }

  if (url.protocol !== "http:" && url.protocol !== "https:") {
    return res
      .status(400)
      .json({ message: "Only http and https URLs are allowed" });
  }

  if (url.username || url.password) {
    return res
      .status(400)
      .json({ message: "URLs with credentials are not allowed" });
  }

  if (url.host === BASE_HOST) {
    return res.status(400).json({ message: "This URL can't be shortened" });
  }

  // normalized href can be longer than the input (percent-encoding)
  if (url.href.length > MAX_URL_LENGTH) {
    return res.status(400).json({ message: "Url is too long" });
  }

  req.body.originalUrl = url.href;
  next();
};