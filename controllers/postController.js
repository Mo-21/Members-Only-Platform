const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const session = require("express-session");
const passport = require("passport");

const Post = require("../models/posts");
const User = require("../models/users");

exports.get_all_posts = asyncHandler(async (req, res, next) => {
  const posts = await Post.find({})
    .sort({ postDate: -1 })
    .populate("author")
    .exec();

  res.render("index", {
    title: "Messenger and More",
    user: req.user,
    authStatus: req.isAuthenticated(),
    posts: posts,
  });
});

exports.post_create_get = asyncHandler(async (req, res, next) => {
  res.render("postView/create_post", {
    title: "Send Post",
  });
});

exports.post_create_post = [
  body("title")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Title is required!")
    .escape(),
  body("content")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Content is required!")
    .escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render("postView/create_post", {
        title: "Send Post",
        errors: errors.array(),
      });
      return;
    } else {
      const post = new Post({
        title: req.body.title,
        content: req.body.content,
        postDate: Date.now(),
        author: req.params.id,
      });
      await post.save();
    }
    res.redirect("/");
  }),
];

exports.post_delete_post = asyncHandler(async (req, res, next) => {
  // await Post.findById(req.params.id).exec();
  const post = await Post.findById(req.params.id).exec();
  console.log(post);
  await Post.findByIdAndDelete(req.params.id);
  res.redirect("/");
});
