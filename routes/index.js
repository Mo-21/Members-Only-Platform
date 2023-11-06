var express = require("express");
var router = express.Router();
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/users");

const form_controller = require("../controllers/formController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Messenger and More",
    user: req.user,
  });
});

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
