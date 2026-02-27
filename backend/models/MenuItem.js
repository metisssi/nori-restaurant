import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
  name_cs: { type: String, required: true },
  name_en: { type: String, default: "" },
  description_cs: { type: String, default: "" },
  description_en: { type: String, default: "" },
  price: { type: String, default: "" },
  imageUrl: { type: String, required: true },
  order: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model("MenuItem", menuItemSchema);