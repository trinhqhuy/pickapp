import memberController from "../controllers/memberControllers.js";
import { Router } from "express";
import middlewareController from "../controllers/middlewareControllers.js";

const router = Router();

router.post(
  "/search/:name",
  middlewareController.verifyToken,
  memberController.searchMember
);
router.get(
  "/:id",
  middlewareController.verifyToken,
  memberController.getAllMember
);
router.post("/", middlewareController.verifyToken, memberController.addMember);
router.delete(
  "/:id",
  middlewareController.verifyToken,
  memberController.deleteMember
);
router.get(
  "/noti/:id",
  middlewareController.verifyToken,
  memberController.getAllNotify
);
router.put(
  "/noti/:id",
  middlewareController.verifyToken,
  memberController.updateNotify
);
router.post(
  "/noti/:id",
  middlewareController.verifyToken,
  memberController.seenNotify
);
export default router;
