const router = require("express").Router();
const users = require("../models/userModel");
const { createSecretToken } = require("../config/SecretToken");
const bcrypt = require("bcryptjs");

// admin signup
router.post("/admin-signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await users.findOne({ username });
    if (existingUser) {
      return res.send({
        success: false,
        message: "User already exists",
      });
    }

    const user = await users.create({ username, password });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res.status(201).send({
      data: user,
      message: "User signed in successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/admin-login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.send({
        message: "All fields are required",
        success: false,
      });
    }
    const user = await users.findOne("username");
    if (!user) {
      return res.json({
        message: "Incorrect password or email.",
        success: false,
      });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({
        message: "Incorrect password or email.",
        success: false,
      });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res.status(201).send({
      message: "User logged in succesffully!",
      success: true,
    });
    next();
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
