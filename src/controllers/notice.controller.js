// src/controllers/notice.controller.js
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
 * Controller to fetch all notices.
 * Currently a placeholder route.
 */
export const getNotices = async (req, res) => {
  res.send("Notice Get Route");
};
