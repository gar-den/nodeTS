import mongoose, { Schema, model } from "mongoose";

const BookSchema: Schema = new Schema({
  title: String,
  author: String,
  price: Number,
});

export default mongoose.model("Books", BookSchema);
