import express from "express";
import { sendMessage, getmessages } from "../controllers/message.controller.js";
import protectedRoute from "../middelwear/protectedRoute.js";

const router = express.Router();

router.get("/:id", protectedRoute, getmessages);
router.post("/send/:id", protectedRoute, sendMessage);

export default router;
