import config from "@/secret/config";
import mongoose from "mongoose";

const connect = () => {
  mongoose
    .connect(`${config.MONGO_DB_URL}`)
    .then(() => {
      console.log("mongo connect...");
    })
    .catch((error) => {
      console.log("Error connecting to the database", error);
    });
};

export default connect;

// const connection = async () => {
//   try {
//     await mongoose.connect(config.MONGO_DB_URL);
//     console.log("mongo connect!")
//   } catch (err) {
//     throw new Error("connection failed: " + err);
//   }
// };
