import mongoose from "mongoose";

const { Schema } = mongoose;

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
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("posts", postSchema);