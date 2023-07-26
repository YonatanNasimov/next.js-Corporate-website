import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
      require: true,
    },
    imgUrl: {
      type: String,
    },
    content: {
      type: String,
      require: true,
    },
    user: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.model("posts", postSchema);
export default PostModel;
