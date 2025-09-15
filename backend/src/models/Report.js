import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  place: {
    type: String,
    required: [true, "Place name is required"],
    trim: true
  },
  issue: {
    type: String,
    required: [true, "Issue description is required"],
    trim: true
  }
}, {
  timestamps: true
});

const Report = mongoose.model("Report", reportSchema);

export default Report;
