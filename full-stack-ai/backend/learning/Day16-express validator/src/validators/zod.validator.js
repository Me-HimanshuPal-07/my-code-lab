import { z } from "zod";

export const registerSchema = z.object({
  email: z
    .string({ error: "Email is required!" })
    .trim()
    .toLowerCase()
    .pipe(z.email({ error: "Invalid email address!" })),
  phone: z
    .string({ error: "Phone number is required!" })
    .transform((v) => v.replace(/[\s-]/g, ""))
    .transform((v) => (/^[6-9]\d{9}$/.test(v) ? `+91${v}` : v))
    .pipe(z.string().regex(/^\+91[6-9]\d{9}$/, "Invalid phone number!")),
  password: z
    .string({ error: "Password is required!" })
    .min(8, "Password must be at least 8 characters!")
    .refine((v) => Buffer.byteLength(v, "utf8") <= 72, "Password is too long!"),
});