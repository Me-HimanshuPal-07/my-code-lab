import { Router } from "express";
import { register } from "../controllers/auth.controller.js";

import { validateRegisterManual } from "../middlewares/validate.manual.js";
import { validateZod } from "../middlewares/validate.zod.js";
import { validateExpressValidator } from "../middlewares/validate.expressValidator.js";

import { registerSchema } from "../validators/zod.validator.js";
import { registerRules } from "../validators/expressValidator.validator.js";

const router = Router();

// Teeno same kaam karte hain, ek time pe ek hi use karo
router.post("/register/manual", validateRegisterManual, register);
router.post("/register/zod", validateZod(registerSchema), register);
router.post("/register/ev", registerRules, validateExpressValidator, register);

export default router;