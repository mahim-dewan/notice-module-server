// src/controllers/notice.controller.js
import Notice from "../models/notice.model.js";
import { createNoticeService } from "../services/notice.service.js";
import { createNoticeValidator } from "../validators/notice.validator.js";

/**
 * createNotice
 * -------------
 * Controller to handle publishing a new notice.
 * - Validates request body using Joi validator
 * - Calls service layer to persist notice
 * - Returns success response or validation errors
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
    next(err); // pass to global error handler
  }
};

/**
 * getNotices
 * -----------
 * Fetch paginated list of notices.
 * - Supports pagination via query params
 * - Sorted by latest first (createdAt DESC)
 */
export const getNotices = async (req, res, next) => {
  try {
    // Get page from query params (default = 1)
    const page = req.query.page || 1;

    // Pagination settings
    const limit = 8;
    const skip = (page - 1) * limit;

    // Fetch notices with pagination
    const notices = await Notice.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    // Get total count for frontend pagination UI
    const total = await Notice.countDocuments();

    // Send successful response
    return res.status(200).json({
      success: true,
      count: notices.length,
      total,
      currentPage: Number(page),
      totalPages: Math.ceil(total / limit),
      data: notices,
    });
  } catch (err) {
    next(err);
  }
};
