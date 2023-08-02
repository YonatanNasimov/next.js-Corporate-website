import mongoose from "mongoose";

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const postSchema = new Schema({
  title: {
    type: String,
    required: "Please supply a title",
    trim: true,
  },
  desc: {
    type: String,
    required: "Please supply a desc",
    trim: true,
  },
  imgUrl: {
    type: String,
    required: "Please supply a imgUrl",
  },
  content: {
    type: String,
    required: "Please supply a content"
  },
  user: {
    type: String,
    required: "Please supply a user",
    trim: true,
  },
});

export default mongoose.models.Posts ||
  mongoose.model("Posts", postSchema);