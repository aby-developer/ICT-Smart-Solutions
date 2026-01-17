import express from "express";
import {
  getDashboardStats,
  getAllApplications,
  updateApplicationStatus,
  getAllMessages,
  markMessageRead
} from "../controllers/adminDashboardController.js";

import { protectAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Dashboard stats
router.get("/dashboard", protectAdmin, getDashboardStats);

// Applications
router.get("/applications", protectAdmin, getAllApplications);
router.patch("/applications/:id", protectAdmin, updateApplicationStatus);

// Messages
router.get("/messages", protectAdmin, getAllMessages);
router.patch("/messages/:id/read", protectAdmin, markMessageRead);

export default router;
