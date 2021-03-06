const router = require("express").Router();
const user = require("../controllers/user.controllers");

router.get("/users", user.getUsers);
router.route("/user").get(user.getUser).delete(user.deleteUser);

router
  .route("/staff")
  .post(user.createStaff)
  .get(user.getStaffs)
  .get(user.getStaff);

module.exports = router;
