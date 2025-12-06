// src/services/notice.service.js
import Notice from "../models/notice.model.js";

/**
 * createNoticeService
 * -------------------
 * Handles creation of a new notice in the database.
 *
 * @param {Object} noticeData - The validated notice data
 * @returns {Promise<Object>} - The newly created notice document
 */
export const createNoticeService = async (noticeData) => {
  // Initialize a new Notice document
  const newNotice = new Notice(noticeData);

  // Save to MongoDB
  const createdNotice = await newNotice.save();

  // Return the saved document
  return createdNotice;
};
