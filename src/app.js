// src/app.js
import express from "express";
import cors from "cors";
import { logger } from "./middlewares/logger.middleware.js";
import NoticeRouter from "./routes/notice.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import { startPublishStatusJob } from "./jobs/isPublishedNotice.job.js";
import UploadRouter from "./routes/upload.routes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(logger);

// Health Check
app.get("/", async (req, res) => {
  res.send("<h2>Nebs IT Notice Module Backend Part</h2>");
});

// Start scheduled jobs
startPublishStatusJob()

// Routes
app.use("/api/notices", NoticeRouter);
app.use("/api/uploads", UploadRouter);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ success: 404, message: "Page not found" });
});

// Global error middleware
app.use(errorHandler);

export default app;
