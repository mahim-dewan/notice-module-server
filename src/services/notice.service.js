// src/services/notice.service.js
import Notice from "../models/notice.model.js";

/**
 * createNoticeService
 */
export const createNoticeService = async (noticeData) => {
  // Initialize a new Notice document
  const newNotice = new Notice(noticeData);

  // Save to MongoDB
  const createdNotice = await newNotice.save();

  // Return the saved document
  return createdNotice;
};

/**
 * Get paginated and filtered notices
 */
export const getNoticesService = async (
  { status, department },
  page = 1,
  limit = 8
) => {
  let filter = {};

  // Status filter
  if (status) {
    const statusArr = Array.isArray(status) ? status : [status];
    filter.status = { $in: statusArr };
  }

  // Department filter
  if (department) {
    const deptArr = Array.isArray(department) ? department : [department];
    filter.target_department = { $in: deptArr };
  }

  const skip = (page - 1) * limit;

  // Fetch notices with pagination
  const notices = await Notice.find(filter)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  const activeNotices = await Notice.countDocuments({ status: "published" });
  const draftNotices = await Notice.countDocuments({ status: "draft" });

  const total = await Notice.countDocuments(filter);

  return { total, notices, activeNotices, draftNotices };
};
