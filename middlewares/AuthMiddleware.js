const users = require("../models/userModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).send({
      message: "No token, authorization denied",
      success: false,
    });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res
        .status(401)
        .send({ message: "Token is not valid", success: false });
    } else {
      const user = await users.findById(data.id);
      if (user) {
        return res.status(200).send({ success: true, user: user.username });
        // next();
      } else {
        return res
          .status(401)
          .send({ message: "User not found", success: false });
      }
    }
  });
};
