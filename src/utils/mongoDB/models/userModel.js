import mongoose from "mongoose";

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      require: true,
    },
    email: {
      type: String,
      unique: true,
      require: true,
    },
    phone: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      require: true,
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
