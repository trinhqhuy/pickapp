const authController = require("../controllers/authControllers");
const middlewareController = require("../controllers/middlewareControllers");

const router = require("express").Router();

router.post("/signup", authController.signUp);
router.post("/signin", authController.signIn);
router.post("/refresh", authController.requestRefreshToken);
router.post(
  "/signout",
  middlewareController.verifyToken,
  authController.signOut
);

module.exports = router;
