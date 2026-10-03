import { registerUser } from "../services/auth.service.js";

export const register = async (req, res) => {
  const user = await registerUser(req.body);

  return res.status(201).json({
    success: true,
    message: "Registration successful!",
    data: { id: user._id, email: user.email, phone: user.phone },
  });
};