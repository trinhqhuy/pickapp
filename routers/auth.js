import { Router } from "express";
import authController from "../controllers/authControllers.js";
import middlewareController from "../controllers/middlewareControllers.js";

const router = Router();

router.post("/signup", authController.signUp);
router.post("/signin", authController.signIn);
router.post("/refresh", authController.requestRefreshToken);
router.post(
  "/signout",
  middlewareController.verifyToken,
  authController.signOut
);

export default router;
