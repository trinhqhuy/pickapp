const userController = require("../controllers/userControllers");
const middlewareController = require("../controllers/middlewareControllers");
const router = require("express").Router();

router.put(
  "/:id",
  middlewareController.verifyToken,
  userController.updateInfoUser
);
module.exports = router;
