// src/routes/upload.routes.js
import express from "express";
import upload from "../middlewares/upload.middleware.js";
import { attachmentsUpload } from "../controllers/imageUpload.controller.js";

const UploadRouter = express.Router();

// Upload attachments route
UploadRouter.post("/images", upload.array("attaches", 5), attachmentsUpload);

export default UploadRouter;
