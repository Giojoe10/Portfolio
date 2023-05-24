const users = require("../models/userModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res
            .status(401)
            .resp({
                message: "No token, authorization denied",
                success: false,
            });
    }
    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
        if (err) {
            return res
                .status(401)
                .resp({ message: "Token is not valid", success: false });
        } else {
            const user = await users.findById(data.id);
            if (user) {
                return res
                    .status(200)
                    .resp({
                        message: "Authorized",
                        success: true,
                        user: user.username,
                    });
            } else {
                return res
                    .status(401)
                    .resp({ message: "User not found", success: false });
            }
        }
    });
};
