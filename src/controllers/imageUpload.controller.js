// src/controllers/imageUpload.controller.js
import { uploadAttachesToCloudinary } from "../services/cloudinary.service.js";

export const attachmentsUpload = async (req, res, next) => {
  try {
    const files = req.files;

    // If no files received
    if (!files) {
      return res.status(200).json({ message: "No attach file found." });
    }

    // Upload to Cloudinary
    const results = await uploadAttachesToCloudinary(files);

    // Filter essential fields before sending
    const attaches = results.map((r) => ({
      public_id: r.public_id,
      url: r.secure_url,
    }));

    res.json({ success: true, attaches });
  } catch (err) {
    next(err);  // pass to the global error handler
  }
};
