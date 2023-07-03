import collectionController from "../controllers/collectionControllers.js";
import { Router } from "express";
import middlewareController from "../controllers/middlewareControllers.js";
const router = Router();
router.get(
  "/:id",
  middlewareController.verifyToken,
  collectionController.readCollection
);
router.post(
  "/",
  middlewareController.verifyToken,
  collectionController.createCollection
);
router.put(
  "/:id",
  middlewareController.verifyToken,
  collectionController.updateCollection
);
router.delete(
  "/:id",
  middlewareController.verifyToken,
  collectionController.deleteCollection
);
export default router;
