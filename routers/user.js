import { Router } from "express";
import userController from "../controllers/userControllers.js";
import middlewareController from "../controllers/middlewareControllers.js";

const router = Router();

router.put(
  "/:id",
  middlewareController.verifyToken,
  userController.updateInfoUser
);
export default router;
