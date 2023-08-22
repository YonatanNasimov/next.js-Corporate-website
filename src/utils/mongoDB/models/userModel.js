import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      require: true,
      trim: true,
    },
    phone: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      trim: true,
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

const UserModel = mongoose.model("users", userSchema);
export default UserModel;
