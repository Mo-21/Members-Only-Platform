const asyncHandler = require("express-async-handler");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");

const User = require("../models/users");

exports.form_signIn_get = asyncHandler(async (req, res, next) => {
  res.render("formView/signIn_form", {
    title: "Sign In",
  });
});

exports.form_logout_get = asyncHandler((req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

exports.form_signUp_get = asyncHandler(async (req, res, next) => {
  res.render("formView/signUp_form", {
    title: "Sign Up",
  });
});

exports.form_signUp_post = [
  body("firstname")
    .trim()
    .isLength({ min: 1 })
    .withMessage("First Name is Required")
    .escape(),
  body("lastname")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Last Name is Required")
    .escape(),
  body("email").trim().isEmail().withMessage("Not Valid Email").escape(),
  body("password")
    .trim()
    .isLength({ max: 100 })
    .withMessage("Not Valid Password")
    .escape(),
  body("passwordConfirmation")
    .trim()
    .escape()
    .custom((value, { req }) => {
      return value === req.body.password;
    })
    .withMessage("Passwords do not match"),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const user = new User({
      firstName: req.body.firstname,
      lastName: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
    });

    if (!errors.isEmpty()) {
      res.render("formView/signUp_form", {
        title: "Sign-up",
        errors: errors.array(),
      });
      return;
    } else {
      await user.save();
      res.redirect(`/${user.id}/id-check`);
    }
  }),
];

exports.form_invitation_key_get = asyncHandler(async (req, res, next) => {
  res.render("formView/key_form", {
    title: "Join us",
  });
});

exports.form_invitation_key_post = [
  body("invitation")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Key is Required")
    .custom((key, { req }) => {
      return key === "invitation";
    })
    .withMessage("Invalid Invitation Key")
    .escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    const user = await User.findById(req.params.id).exec();

    if (!errors.isEmpty()) {
      res.render("formView/key_form", {
        title: "Join us",
        errors: errors.array(),
      });
      return;
    } else {
      user.membershipStatus = true;
      await user.save();
      res.render("index", {
        title: "Messenger and More",
        user: user,
      });
    }
  }),
];
