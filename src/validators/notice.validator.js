// src/validators/notice.validator.js
import Joi from "joi";

export const createNoticeValidator = Joi.object({
  // Notice title: required string, max 200 chars
  title: Joi.string().max(200).required().messages({
    "string.empty": "Title is required",
    "string.max": "Title cannot exceed 200 characters",
  }),

  // Target departments: must be an array with at least one item
  target_department: Joi.array()
    .items(Joi.string())
    .min(1)
    .required()
    .messages({
      "any.required": "Target department is required",
      "array.base": "Target department must be an array",
      "array.min": "Select at least one department",
    }),

  // Conditional employee fields: only required if 'Individual' is selected
  employee_id: Joi.string()
    .empty("")
    .when("target_department", {
      is: Joi.array().items(Joi.string()).has("Individual"),
      then: Joi.required().messages({
        "any.required": "Employee ID is required for Individual department",
      }),
      otherwise: Joi.optional().strip(),
    }),

  employee_name: Joi.string()
    .empty("")
    .when("target_department", {
      is: Joi.array().items(Joi.string()).has("Individual"),
      then: Joi.required().messages({
        "any.required": "Employee name is required for Individual",
      }),
      otherwise: Joi.optional().strip(),
    }),

  employee_position: Joi.string()
    .empty("")
    .when("target_department", {
      is: Joi.array().items(Joi.string()).has("Individual"),
      then: Joi.required().messages({
        "any.required": "Employee position is required for Individual",
        //   "string.empty": "Invalid value for employee position"
      }),
      otherwise: Joi.optional().strip(),
    }),

  // Notice type: always required
  type: Joi.string()
    .required()
    .messages({ "string.empty": "Notice type is required" }),

  // Publish date: must be a valid date
  publish_date: Joi.date().required().messages({
    "date.base": "Publish date must be a valid date",
    "any.required": "Publish date is required",
  }),

  // Optional fields
  body: Joi.string(),
  attaches: Joi.array().items(Joi.string()),
});
