import express from "express";
import {
  aiGetAllReports,
  aiCreateReport,
  aiUpdateReport,
  aiDeleteReport,
} from "../controllers/AIReportController.js";

const router = express.Router();

// @route   GET /api/reports
// @desc    Get all reports
// @access  Public
router.get("/", aiGetAllReports);

// @route   POST /api/reports
// @desc    Create new report
// @access  Public
// Body: { place: string, issue: string }
router.post("/", aiCreateReport);

// @route   PUT /api/reports/:id
// @desc    Update report
// @access  Public
// Body: { place: string, issue: string }
router.put("/:id", aiUpdateReport);

// @route   DELETE /api/reports/:id
// @desc    Delete report
// @access  Public
router.delete("/:id", aiDeleteReport);

export default router;
