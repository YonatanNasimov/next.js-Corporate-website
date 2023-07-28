import config from "@/secret/config";
import mongoose from "mongoose";

export const connect = () => {
  mongoose
    .connect(`${config.MONGO_DB_URL}`)
    .then(() => {
      console.log("mongo connect...");
    })
    .catch((error) => {
      console.log("Error connecting to the database", error);
    });
};


export const connection = async () => {
  try {
    await mongoose.connect(config.MONGO_DB_URL);
    console.log("mongo connect!")
  } catch (err) {
    throw new Error("connection failed: " + err);
  }
};

