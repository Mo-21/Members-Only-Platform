const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postsSchema = new Schema({
  title: {
    type: String,
    maxLength: 50,
    minLength: 5,
    required: true,
  },
  content: {
    type: String,
    maxLength: 300,
    minLength: 1,
    required: true,
  },
  postDate: {
    type: Date,
    required: true,
    immutable: true,
    default: () => Date.now(),
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

postsSchema.virtual("url").get(function () {
  return `/home/${this.id}`;
});

module.exports = mongoose.model("Post", postsSchema);
