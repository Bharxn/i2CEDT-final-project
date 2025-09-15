import Report from "../models/Report.js";

// @desc    Get all reports
// @route   GET /api/reports
// @access  Public
export const getAllReports = async (req, res) => {
  try {
    const reports = await Report.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      reports: reports
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching reports",
      error: error.message
    });
  }
};

// @desc    Create new report
// @route   POST /api/reports
// @access  Public
export const createReport = async (req, res) => {
  try {
    const { place, issue } = req.body;
    
    if (!place || !issue) {
      return res.status(400).json({
        success: false,
        message: "Place and issue are required"
      });
    }
    
    const report = await Report.create({ place, issue });
    
    res.status(201).json({
      success: true,
      message: "Report created successfully",
      report: report
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating report",
      error: error.message
    });
  }
};

// @desc    Update report
// @route   PUT /api/reports/:id
// @access  Public
export const updateReport = async (req, res) => {
  try {
    const { place, issue } = req.body;
    
    if (!place || !issue) {
      return res.status(400).json({
        success: false,
        message: "Place and issue are required"
      });
    }
    
    const report = await Report.findByIdAndUpdate(
      req.params.id,
      { place, issue },
      { new: true, runValidators: true }
    );
    
    if (!report) {
      return res.status(404).json({
        success: false,
        message: "Report not found"
      });
    }
    
    res.status(200).json({
      success: true,
      message: "Report updated successfully",
      report: report
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: "Invalid report ID"
      });
    }
    
    res.status(500).json({
      success: false,
      message: "Error updating report",
      error: error.message
    });
  }
};

// @desc    Delete report
// @route   DELETE /api/reports/:id
// @access  Public
export const deleteReport = async (req, res) => {
  try {
    console.log(`Attempting to delete report with ID: ${req.params.id}`);
    const report = await Report.findByIdAndDelete(req.params.id);
    
    if (!report) {
      console.log(`Report not found with ID: ${req.params.id}`);
      return res.status(404).json({
        success: false,
        message: "Report not found"
      });
    }
    
    console.log(`Successfully deleted report: ${report._id}`);
    res.status(200).json({
      success: true,
      message: "Report deleted successfully"
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: "Invalid report ID"
      });
    }
    
    res.status(500).json({
      success: false,
      message: "Error deleting report",
      error: error.message
    });
  }
};

// @desc    Process AI report
// @route   POST /api/ai-report
// @access  Public
export const processAIReport = async (req, res) => {
  try {
    const { text } = req.body;
    
    if (!text) {
      return res.status(400).json({
        success: false,
        message: "Text is required"
      });
    }
    
    // For now, return a simple response structure that matches frontend expectations
    // This will be replaced with actual AI processing later
    const reports = [
      {
        place: "Sample Place",
        issue: "Sample issue extracted from: " + text.substring(0, 50) + "..."
      }
    ];
    
    res.status(200).json({
      success: true,
      message: "AI report processed successfully",
      reports: reports
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error processing AI report",
      error: error.message
    });
  }
};
