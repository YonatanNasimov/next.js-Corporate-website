import config from "@/secret/config";

const connect = async () => {
  try {
    await mongoose.connect(config.MONGO_DB_URL);
    console.log("mongoDB connected!");
  } catch (err) {
    console.log("There is error connecting to mongoDB: " + err);
  }
};

export default connect;
