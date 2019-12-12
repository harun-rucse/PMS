const express = require("express");
const router = express.Router();
const indexCollection = require("./../controller/indexController");

/* GET home page. */
router.get("/", indexCollection.getIndex);

/* POST home page. */
router.post("/", indexCollection.postIndex);

/* GET singup page. */
router.get("/signup", indexCollection.getSignup);

/* POST singup page. */
router.post("/signup", indexCollection.signup);

/* GET password category page. */
router.get(
  "/passwordCategory",
  indexCollection.checkLoginUser,
  indexCollection.getPasswordCategory
);

/* POST password category page. */
router.post(
  "/passwordCategory",
  indexCollection.checkLoginUser,
  indexCollection.postPasswordCategory
);

/* DELETE password category page. */
router.get(
  "/passwordCategory/delete/:id",
  indexCollection.checkLoginUser,
  indexCollection.deletePasswordCategory
);

/* UPDATE password category page. */
router.get(
  "/passwordCategory/edit/:id",
  indexCollection.checkLoginUser,
  indexCollection.editPasswordCategory
);

router.post(
  "/editPassCategory",
  indexCollection.checkLoginUser,
  indexCollection.updatePasswordCategory
);

/* GET password details page. */
router.get(
  "/passwordDetails",
  indexCollection.checkLoginUser,
  indexCollection.getPasswordDetails
);

/* POST password details page. */
router.post(
  "/passwordDetails",
  indexCollection.checkLoginUser,
  indexCollection.postPasswordDetails
);

/* DELETE password details page. */
router.get(
  "/passwordDetails/delete/:id",
  indexCollection.checkLoginUser,
  indexCollection.deletePasswordDetails
);

/* UPDATE password details page. */
router.get(
  "/passwordDetails/edit/:id",
  indexCollection.checkLoginUser,
  indexCollection.editPasswordDetails
);

router.post(
  "/editPassDetails",
  indexCollection.checkLoginUser,
  indexCollection.updatePasswordDetails
);
/* GET dashboard page. */
router.get(
  "/dashboard",
  indexCollection.checkLoginUser,
  indexCollection.dashboard
);

//* UPDATE user dashboard page. */
router.get(
  "/dashboard/edit/:id",
  indexCollection.checkLoginUser,
  indexCollection.editUserAccount
);

router.post(
  "/editUserAccount",
  indexCollection.checkLoginUser,
  indexCollection.updateUserAccount
);

/* DELETE user dashboard page. */
router.get(
  "/dashboard/delete/:id",
  indexCollection.checkLoginUser,
  indexCollection.deleteUserAccount
);

/* GET admin dashboard page. */
router.get(
  "/admin",
  indexCollection.checkLoginUser,
  indexCollection.checkAdmin,
  indexCollection.admin
);

/* DELETE admin dashboard page. */
router.get(
  "/admin/delete/:id",
  indexCollection.checkLoginUser,
  indexCollection.checkAdmin,
  indexCollection.deleteAdmin
);

//* UPDATE admin dashboard page. */
router.get(
  "/admin/edit/:id",
  indexCollection.checkLoginUser,
  indexCollection.checkAdmin,
  indexCollection.editAdmin
);

router.post(
  "/editUser",
  indexCollection.checkLoginUser,
  indexCollection.updateAdmin
);

/* GET logout page. */
router.get("/logout", indexCollection.logout);

module.exports = router;
