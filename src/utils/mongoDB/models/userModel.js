import mongoose from "mongoose";

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    phone: {
      type: String
    },
    password: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
    },
    role: {
      type: String,
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Users ||
  mongoose.model("Users", userSchema);
