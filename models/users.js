const mongoose = require("mongoose");
const Post = require("./posts");

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    maxLength: 20,
    minLength: 1,
  },
  lastName: {
    type: String,
    required: true,
    maxLength: 20,
    minLength: 1,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    maxLength: 20,
    minLength: 5,
  },
  post: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Post",
  },
});

usersSchema.virtual("url").get(function () {
  return `/home/${this.id}`;
});

modules.exports = mongoose.Model("User", usersSchema);
