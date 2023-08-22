import mongoose from "mongoose";

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

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
    // phone: {
    //   type: String,
    // },
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

export default mongoose.models.Users ||
  mongoose.model("Users", userSchema);