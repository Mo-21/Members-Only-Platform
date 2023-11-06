const asyncHandler = require("express-async-handler");

const Post = require("../models/posts");
const User = require("../models/users");

exports.index = asyncHandler(async (req, res, next) => {
  res.render("index", {
    title: "Messenger and More",
    user: req.user,
  });
});

exports.get_all_posts = asyncHandler(async (req, res, next) => {
  res.send("all_posts");
});

exports.post_create_get = asyncHandler(async (req, res, next) => {
  res.send("post_create_get");
});

exports.post_create_post = asyncHandler(async (req, res, next) => {
  res.send("post_create_post");
});

exports.post_delete_get = asyncHandler(async (req, res, next) => {
  res.send("post_delete_get");
});

exports.post_delete_post = asyncHandler(async (req, res, next) => {
  res.send("post_delete_post");
});

exports.post_update_get = asyncHandler(async (req, res, next) => {
  res.send("post_update_get");
});

exports.post_update_post = asyncHandler(async (req, res, next) => {
  res.send("post_update_post");
});
