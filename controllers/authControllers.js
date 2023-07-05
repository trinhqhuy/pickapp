const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const refreshTokens = require("../models/refreshToken.js");
const authController = {
  signUp: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);
      const validUser = await User.find({ username: req.body.username });
      const validEmail = await User.find({ email: req.body.email });
      if (validUser.length > 0) {
        return res.status(409).json({ message: "Your username was used" });
      }
      if (validEmail.length > 0) {
        return res.status(409).json({ message: "Your email was used" });
      }
      const newUser = new User({
        username: req.body.username,
        password: hashed,
        email: req.body.email,
        avatar: 0,
      });
      const user = await newUser.save();
      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  generateAccessToken: (user) => {
    return jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_ACCESS_KEY,
      { expiresIn: "100s" }
    );
  },
  generateRefreshToken: (user) => {
    return jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_REFRESH_KEY,
      { expiresIn: "100d" }
    );
  },
  saveRefreshToken: async (token) => {
    try {
      const newRefreshToken = new refreshTokens({
        token,
      });
      const savedToken = await newRefreshToken.save();
      return savedToken;
    } catch (err) {
      console.log(err);
      throw new Error("Could not save refresh token to database");
    }
  },
  signIn: async (req, res) => {
    try {
      const user = await User.findOne({
        username: req.body.username,
      });

      if (!user) return res.status(404).json({ message: "User not founded" });

      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (!validPassword)
        return res.status(400).json({ message: "Wrong password" });

      if (user && validPassword) {
        const accessToken = authController.generateAccessToken(user);
        const refreshToken = authController.generateRefreshToken(user);
        const savedToken = await authController.saveRefreshToken(refreshToken);
        if (savedToken) {
          const isSafari = req.body.isSafari === true && refreshToken;
          res.header("Access-Control-Allow-Origin", "*");
          res.header("Access-Control-Allow-Credentials", true);
          res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept"
          );

          res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: false,
            maxAge: 100 * 24 * 60 * 60 * 1000,
            path: "/",
            sameSite: "none",
          });
          return res.status(200).json({
            user,
            accessToken,
            isSafari,
          });
        }
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  signOut: async (req, res) => {
    try {
      res.clearCookie("refreshToken");
      await refreshTokens.deleteOne({
        token: req.cookies.refreshToken,
      });
      return res.status(200).json("SignOut is successfully");
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  requestRefreshToken: async (req, res) => {
    if (req.body.isSafari === null) {
      const refreshToken = req.cookies.refreshToken;
      if (!refreshToken)
        return res.status(401).json("You're not authenticated");

      const validToken = await refreshTokens.findOne({
        token: refreshToken,
      });

      if (!validToken)
        return res.status(403).json("Refresh token is not valid");
      jwt.verify(
        refreshToken,
        process.env.JWT_REFRESH_KEY,
        async (err, user) => {
          if (err) {
            console.log(err);
          }
          const newAccessToken = authController.generateAccessToken(user);
          const newRefreshToken = authController.generateRefreshToken(user);
          const updatedRefreshToken = await refreshTokens.findOneAndUpdate(
            { token: refreshToken },
            { token: newRefreshToken },
            { new: true }
          );
          if (!updatedRefreshToken) {
            return res.status(500).json("Failed to update refresh token");
          }
          if (updatedRefreshToken) {
            const isSafari = req.body.isSafari === true && refreshToken;
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Credentials", true);
            res.header(
              "Access-Control-Allow-Headers",
              "Origin, X-Requested-With, Content-Type, Accept"
            );

            res.cookie("refreshToken", newRefreshToken, {
              httpOnly: true,
              secure: false,
              domain: ".onrender.com",
              maxAge: 100 * 24 * 60 * 60 * 1000,
              sameSite: "none",
            });
            return res
              .status(200)
              .json({ accessToken: newAccessToken, refreshToken: isSafari });
          }
        }
      );
    }
    if (req.body.isSafari !== null) {
      const refreshTokenSafari = req.body.isSafari;
      if (!refreshTokenSafari)
        return res.status(401).json("You're not authenticated");

      const validToken = await refreshTokens.findOne({
        token: refreshTokenSafari,
      });

      if (!validToken)
        return res.status(403).json("Refresh token is not valid");

      jwt.verify(
        refreshTokenSafari,
        process.env.JWT_REFRESH_KEY,
        async (err, user) => {
          if (err) {
            console.log(err);
          }
          const newAccessToken = authController.generateAccessToken(user);
          const newRefreshToken = authController.generateRefreshToken(user);
          const updatedRefreshToken = await refreshTokens.findOneAndUpdate(
            { token: refreshTokenSafari },
            { token: newRefreshToken },
            { new: true }
          );
          if (!updatedRefreshToken) {
            return res.status(500).json("Failed to update refresh token");
          }
          if (updatedRefreshToken) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Credentials", true);
            res.header(
              "Access-Control-Allow-Headers",
              "Origin, X-Requested-With, Content-Type, Accept"
            );

            res.cookie("refreshToken", newRefreshToken, {
              httpOnly: true,
              secure: false,
              domain: ".onrender.com",
              maxAge: 100 * 24 * 60 * 60 * 1000,
              sameSite: "none",
            });
            return res.status(200).json({
              accessToken: newAccessToken,
              refreshToken: newRefreshToken,
            });
          }
        }
      );
    }
  },
};
module.exports = authController;
