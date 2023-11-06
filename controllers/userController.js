const asyncHandler = require("express-async-handler");

const Post = require("../models/users");
const User = require("../models/users");

exports.get_all_users = asyncHandler(async (req, res, next) => {
  res.send("all_users");
});

exports.user_create_get = asyncHandler(async (req, res, next) => {
  res.send("user_create_get");
});

exports.user_create_post = asyncHandler(async (req, res, next) => {
  res.send("user_create_user");
});

exports.user_delete_get = asyncHandler(async (req, res, next) => {
  res.send("user_delete_get");
});

exports.user_delete_post = asyncHandler(async (req, res, next) => {
  res.send("user_delete_user");
});

exports.user_update_get = asyncHandler(async (req, res, next) => {
  res.send("user_update_get");
});

exports.user_update_post = asyncHandler(async (req, res, next) => {
  res.send("user_update_user");
});
