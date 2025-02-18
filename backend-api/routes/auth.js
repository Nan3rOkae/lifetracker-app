const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.post("/login", async (req, res, next) => {
  try {
    const user = await User.login(res.body);
    return res.status(200).json({ user });
  } catch (err) {
    next(err);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    const user = await User.login(res.body);
    return res.status(200).json({ user });
  } catch (err) {
    next(err);
  }
});
module.exports = router;
