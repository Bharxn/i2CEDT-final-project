import express from "express";
import {
  getAllReports,
  createReport,
  updateReport,
  deleteReport,
  processAIReport,
} from "../controllers/reportController.js";

const router = express.Router();

// @route   GET /api/reports
// @desc    Get all reports
// @access  Public
router.get("/", getAllReports);

// @route   POST /api/reports
// @desc    Create new report
// @access  Public
// Body: { place: string, issue: string }
router.post("/", createReport);

// @route   PUT /api/reports/:id
// @desc    Update report
// @access  Public
// Body: { place: string, issue: string }
router.put("/:id", updateReport);

// @route   DELETE /api/reports/:id
// @desc    Delete report
// @access  Public
router.delete("/:id", deleteReport);

// @route   POST /api/ai-report
// @desc    Process AI report
// @access  Public
// Body: { text: string }
router.post("/ai-report", processAIReport);

export default router;
