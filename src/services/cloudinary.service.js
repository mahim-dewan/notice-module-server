// src/services/cloudinary.service.js
import cloudinary from "../config/cloudinary.js";

export const uploadAttachesToCloudinary = async (files) => {
  /**
   * uploadToCloudinary
   * -------------------
   * Helper function to upload a single file buffer using Cloudinary's upload_stream.
   *
   * @param {Buffer} fileBuffer - Raw file buffer from multer
   * @returns {Promise}
   */
  const uploadToCloudinary = (fileBuffer) => {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { resource_type: "image", folder: "nebsIT" },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );
      // Write the buffer to Cloudinary stream
      stream.end(fileBuffer);
    });
  };

  // Upload all files concurrently
  const results = await Promise.all(
    files.map((f) => uploadToCloudinary(f.buffer))
  );

  return results;
};
