import { Router } from "express";
import paletteController from "../controllers/palatteControllers.js";
import middlewareController from "../controllers/middlewareControllers.js";
const router = Router();

router.get("/:id", middlewareController.verifyToken, paletteController.read);
router.post("/", middlewareController.verifyToken, paletteController.create);
router.put("/:id", middlewareController.verifyToken, paletteController.update);
router.delete(
  "/:id",
  middlewareController.verifyToken,
  paletteController.delete
);
export default router;
