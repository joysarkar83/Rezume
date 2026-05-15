import TokenBlacklist from "../models/tokenBlacklist.model.js";
import User from "../models/users.model.js";
import jwt from "jsonwebtoken";
import config from "../configs/config.js";

const verifyToken = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const tokenBlacklisted = await TokenBlacklist.findOne({ token });
  if (tokenBlacklisted) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const tokenData = jwt.verify(token, config.JWT_SECRET);
  const user = await User.findOne({ _id: tokenData.id });

  if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  req.user = user;
  next();
};

export default verifyToken;