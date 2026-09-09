const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Enter a valid email address."],
    },
    imageUrl: {
      type: String,
      default: null,
    },
    originalImagePath: {
      type: String,
      default: null,
      select: false,
    },
    zoom: { type: Number, default: 1, min: 1, max: 2.5 },
    positionX: { type: Number, default: 0 },
    positionY: { type: Number, default: 0 },
    rotation: { type: Number, default: 0 },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Profile", profileSchema);
