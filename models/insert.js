import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  desc: { type: String, required: true },
});

const formModel =
  mongoose.models.developer_homepage ||
  mongoose.model("developer_homepage", userSchema);

export default formModel;
