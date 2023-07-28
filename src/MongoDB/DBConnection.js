import config from "@/secret/config";
import mongoose from "mongoose";

export const connection = async () => {
  try {
    await mongoose.connect(config.MONGO_DB_URL);
    console.log("mongo connect!")
  } catch (err) {
    throw new Error("connection failed: " + err);
  }
};

