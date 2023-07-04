const collectionController = require("../controllers/collectionControllers");
const middlewareController = require("../controllers/middlewareControllers");

const router = require("express").Router();

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
module.exports = router;
