import express from "express";
import cors from "cors";

// import ItemRoute from "./routes/itemRoute.js";
// import MemberRoute from "./routes/memberRoute.js";
import ReportRoute from "./routes/reportRoute.js";

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
// app.use("/items", ItemRoute);
// app.use("/members", MemberRoute);
app.use("/api/reports", ReportRoute);

export default app;