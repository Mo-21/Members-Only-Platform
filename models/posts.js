const mongoose = require("mongoose");
const { DateTime } = require("luxon");

const Schema = mongoose.Schema;

const postsSchema = new Schema({
  title: {
    type: String,
    maxLength: 50,
    minLength: 1,
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
  return `${this.id}`;
});

postsSchema.virtual("creation_formatted").get(function () {
  return DateTime.fromJSDate(this.postDate).toLocaleString(DateTime.DATE_MED);
});

module.exports = mongoose.model("Post", postsSchema);
