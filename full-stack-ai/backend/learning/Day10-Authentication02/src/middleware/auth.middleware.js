import jwt from "jsonwebtoken";
import userModel from "../models/user.models.js";
import "dotenv/config";

export const authenticate = async (req, res, next) => {
  const token = req.headers.authorization;

  if(!token){
    res.status(401).json({
        message: "Token Not Found", 
    })
  }

  const data = jwt.verify(token, process.env.JWT_SECRET);

  const user = await userModel.findById(data.id);
  req.user = user;
  next();
};
