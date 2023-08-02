import mongoose from "mongoose";

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const customerSchema = new Schema({
  name: {
    type: String,
    required: "Please supply a name",
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: "Please Supply an email address",
  },
});

export default mongoose.models.Customer ||
  mongoose.model("Customer", customerSchema);
