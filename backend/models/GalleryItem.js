import mongoose from "mongoose";

const galleryItemSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  alt: { type: String, default: "Gallery photo" },
  order: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model("GalleryItem", galleryItemSchema);