var express = require("express");
var router = express.Router();
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/users");

const form_controller = require("../controllers/formController");
const post_controller = require("../controllers/postController");

/* GET home page. */
router.get("/", post_controller.get_all_posts);

//Posts Routes
//Post Creation
router.get("/:id/post", post_controller.post_create_get);
router.post("/:id/post", post_controller.post_create_post);

//Post Delete
router.get("/delete-post", post_controller.post_delete_get);
router.post("/delete-post", post_controller.post_delete_post);

//Post Update
router.get("/update-post", post_controller.post_update_get);
router.post("/update-post", post_controller.post_update_post);

//Registration Routes
router.get("/sign-in", form_controller.form_signIn_get);
router.post(
  "/sign-in",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/sign-in",
  })
);

router.get("/sign-up", form_controller.form_signUp_get);
router.post("/sign-up", form_controller.form_signUp_post);

router.get("/sign-out", function (req, res, next) {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/sign-in");
  });
});

router.get("/:id/id-check", form_controller.form_invitation_key_get);
router.post("/:id/id-check", form_controller.form_invitation_key_post);

module.exports = router;
