const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protect = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (token && token.startsWith("Bearer ")) {
      token = token.split(" ")[1]; //extract token
      const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.user = await User.findById(decode.id).select("-password");
      next();
    } else {
      res.status(401).json({ message: "Not Authorized, no token" });
    }
  } catch (err) {
    res.status(401).json({ message: "Token failed", error: err.message });
  }
};

module.exports = { protect };
