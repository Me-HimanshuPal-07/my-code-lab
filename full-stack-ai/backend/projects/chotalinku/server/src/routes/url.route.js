import { Router } from "express";
import { validateUrl } from "../middlewares/validateUrl.js";
import { createShortUrl } from "../controllers/url.controller.js";

const router = Router();

router.post("/shorten", validateUrl, createShortUrl);
// router.get("/:shortCode", redirectToOriginal);

export default router;
