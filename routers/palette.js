const paletteController = require("../controllers/palatteControllers");
const middlewareController = require("../controllers/middlewareControllers");

const router = require("express").Router();

router.get("/:id", middlewareController.verifyToken, paletteController.read);
router.post("/", middlewareController.verifyToken, paletteController.create);
router.put("/:id", middlewareController.verifyToken, paletteController.update);
router.delete(
  "/:id",
  middlewareController.verifyToken,
  paletteController.delete
);
module.exports = router;
