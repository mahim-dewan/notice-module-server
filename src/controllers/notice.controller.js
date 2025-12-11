// src/controllers/notice.controller.js
import {
  createNoticeService,
  getNoticesService,
} from "../services/notice.service.js";
import { createNoticeValidator } from "../validators/notice.validator.js";

/**
 * createNotice
 */
export const createNotice = async (req, res, next) => {
  try {    
    // Validate request body
    const { value, error } = createNoticeValidator.validate(req.body, {
      abortEarly: false,
    });
    
    // If validation fails, return all error messages
    if (error) {
      const errors = error.details.map((e) => e.message.replace(/"/g, ""));
      return res.status(400).json({ success: false, message: errors });
    }
    
    // Call service to create notice in database
    const notice = await createNoticeService(value);

    // Return success response
    return res.status(201).json({
      success: true,
      message: "New notice published successfully",
      data: notice,
    });
  } catch (err) {
    console.error("🔥 Mongoose save error:", err);
    next(err); // pass to global error handler
  }
};

/**
 * getNotices
 */
export const getNotices = async (req, res, next) => {
  try {
    // Get page from query params (default = 1)
    const page = req.query.page || 1;
    const { status, department } = req.query;

    const limit = 8;

    const { notices, total, draftNotices, activeNotices } =
      await getNoticesService({ status, department }, page, limit);

    // Send successful response
    return res.status(200).json({
      success: true,
      count: notices.length,
      totalData: total,
      activeNotices,
      draftNotices,
      currentPage: Number(page),
      totalPages: Math.ceil(total / limit),
      data: notices,
    });
  } catch (err) {
    next(err);
  }
};
