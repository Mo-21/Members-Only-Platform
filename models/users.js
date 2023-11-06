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
    maxLength: 100,
    minLength: 5,
  },
  membershipStatus: {
    type: Boolean,
  },
});

usersSchema.virtual("url").get(function () {
  return `/home/${this.id}`;
});

module.exports = mongoose.model("User", usersSchema);
