import express from "express";
import cors from "cors";

import ReportRoute from "./routes/reportRoute.js";
import AIReportRoute from "./routes/AIReportRoute.js";

const app = express();

// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// allow request from other origin (Frontend which is at different port)
app.use(cors());

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Backend server is running!" });
});

// use routes
app.use("/api/reports", ReportRoute);
app.use("/api/ai-report", AIReportRoute);

export default app;