import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectedRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwts;

    if (!token) {
      return res.status(401).json({ error: "unauthorised access 1" });
    }
    const decode = jwt.verify(token, process.env.JWT_Key);
    if (!decode) {
      return res
        .status(401)
        .json({ error: "unauthorised access in decodeing " });
    }
    const user = await User.findById(decode.userId).select("-password");
    if (!user) {
      res.status(404).json({ error: "user not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("error in protected route", error.message);
    res.status(500).json({ error: "internal server error" });
  }
};
export default protectedRoute;
