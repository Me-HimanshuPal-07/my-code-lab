import { verifyAccessToken } from "../utils/auth.js";

export const requireAuth = (req, res, next) =>{
    const accessToken = req.headers.authorization?.split(" ")[1];

    if(!accessToken){
        return res.status(401).json({
            message: "Unauthorized!, No Token found."
        });
    }

    try {
        const decoded = verifyAccessToken(accessToken);    
        req.userId = decoded.userId;     
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Unauthorized!, Invalid or Expired Token",
        });
    }
} 