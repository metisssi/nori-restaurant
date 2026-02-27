import express from "express";
import GalleryItem from "../models/GalleryItem.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// GET /api/gallery — public
router.get("/", async (req, res) => {
  try {
    const items = await GalleryItem.find().sort({ order: 1, createdAt: 1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/gallery — admin only
router.post("/", protect, async (req, res) => {
  try {
    const item = new GalleryItem(req.body);
    const saved = await item.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT /api/gallery/:id — admin only
router.put("/:id", protect, async (req, res) => {
  try {
    const updated = await GalleryItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ message: "Not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE /api/gallery/:id — admin only
router.delete("/:id", protect, async (req, res) => {
  try {
    await GalleryItem.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;