// src/models/notice.model.js
import mongoose from "mongoose";

const NoticeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: ["Title is required.", true],
      trim: true,
      maxlength: 200,
    },
    target_department: {
      type: [String],
      required: ["Target department is required", true],
    },
    employee_id: { type: String },
    employee_name: { type: String },
    employee_position: { type: String },
    type: {
      type: String,
      required: ["Notice type is required", true],
    },
    publish_date: {
      type: Date,
      required: ["Publish date is required.", true],
    },
    body: { type: String },
    attaches: [String],
    status: {
      type: String,
      enum: ["published", "unpublished", "draft"],
      default: "unpublished",
      index: true,
    },
  },
  { timestamps: true }
);

NoticeSchema.index({ publish_date: 1, isPublished: 1 });
const Notice = mongoose.model("Notice", NoticeSchema);

export default Notice;
