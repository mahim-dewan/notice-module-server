// src/routes/notice.routes.js
import express from "express"
import { createNotice, getNotices } from "../controllers/notice.controller.js"

const NoticeRouter = express.Router()

NoticeRouter.post("/", createNotice)
NoticeRouter.get("/", getNotices)

export default NoticeRouter