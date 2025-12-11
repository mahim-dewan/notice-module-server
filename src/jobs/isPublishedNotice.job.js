// src/jobs/isPublishedNotice.job.js
import cron from "node-cron";
import Notice from "../models/notice.model.js";

export const startPublishStatusJob = async () => {
  cron.schedule("*/5 * * * *", async function () {
    try {
      const now = new Date();

      const notice = await Notice.updateMany(
        {
          status: "unpublished",
          publish_date: { $lte: now },
        },
        {
          $set: { status: "published" },
        }
      );

      if (notice.modifiedCount > 0) {
        console.log(
          `🟢 Auto Published: ${
            notice.modifiedCount
          } notice(s) at ${now.toISOString()}`
        );
      }
    } catch (err) {
      console.log("❌ Cron Error:", err.message);
    }
  });
};
