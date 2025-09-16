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
    
    // Simple AI processing - extract place and issue from text
    // This is a basic implementation - you can enhance it with actual AI
    const reports = [];
    
    // Split text by common separators and look for patterns
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    
    for (const sentence of sentences) {
      const trimmed = sentence.trim();
      if (trimmed.length > 10) { // Only process meaningful sentences
        // Look for library names in the text
        const libraryNames = [
          "Engineering Library", "Policy Science Library", "Law Library",
          "Architecture Library", "Arts Library", "Communication Arts Library",
          "Dentistry Library", "Science Library", "Chula Business School Library",
          "Education Library", "Fine & Applied Arts Library", "Economics Library",
          "Medicine Library", "Pharmaceutical Science Library", "Veterinary Science Library",
          "Central Library"
        ];
        
        let foundLibrary = null;
        for (const library of libraryNames) {
          if (trimmed.toLowerCase().includes(library.toLowerCase())) {
            foundLibrary = library;
            break;
          }
        }
        
        if (foundLibrary) {
          // Extract the issue (everything after the library name)
          const issue = trimmed.replace(new RegExp(foundLibrary, 'gi'), '').trim();
          if (issue.length > 0) {
            reports.push({
              place: foundLibrary,
              issue: issue
            });
          }
        } else {
          // If no specific library found, use the whole sentence as issue
          // and try to guess the library from context
          reports.push({
            place: "General Library", // Default place
            issue: trimmed
          });
        }
      }
    }
    
    // If no reports were extracted, create a general one
    if (reports.length === 0) {
      reports.push({
        place: "General Library",
        issue: text.substring(0, 100) + (text.length > 100 ? "..." : "")
      });
    }
    
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