import Report from "../models/Report.js";
import { Groq } from 'groq-sdk';

const groq = new Groq();

// @desc    Get all reports
// @route   GET /api/reports
// @access  Public
export const aiGetAllReports = async (req, res) => {
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
export const aiCreateReport = async (req, res) => {
  try {
    const { place, issue } = req.body;
    
    if (!place || !issue) {
      return res.status(400).json({
        success: false,
        message: "Place and issue are required"
      });
    }
    
    const system_prompt = `You are a precise information-extraction assistant.
TASK
•  From a LONG free-form incident report (English or Thai), extract every (place, issue) pair that describes a REAL problem observed or reported.
•  Produce ONLY a JSON array of objects in this exact schema:
  [
    {"place": "<one of the allowed names below>", "issue": "<short phrase, keep reporter’s language>"},
    ...
  ]
•  Do not include any extra text, comments, keys, or metadata. No trailing commas. UTF-8 text only.

PLACES (allowed values; must match EXACTLY one of these English names)
•  Engineering Library
•  Policy Science Library
•  Law Library
•  Architecture Library
•  Arts Library
•  Communication Arts Library
•  Dentistry Library
•  Science Library
•  Chula Business School Library
•  Education Library
•  Fine & Applied Arts Library
•  Economics Library
•  Medicine Library
•  Pharmaceutical Science Library
•  Veterinary Science Library
•  Central Library, Office of Academic Resources
LANGUAGE & MAPPING
•  Input may be English or Thai (or mixed).
•  "place" MUST be one of the allowed English names above.
•  If a place is mentioned in Thai (e.g., “หอสมุดวิศวฯ”), translate/map it to the exact English label (e.g., "Engineering Library"). If unsure, omit.
•  "issue" should stay in the reporter’s original language (Thai stays Thai, English stays English), shortened to a concise phrase (≤ 12 words) without trailing punctuation.

MULTIPLE & DEDUP
•  Extract ALL issues mentioned. If a place has multiple distinct issues, output one object per issue.
•  If the same (place, issue) repeats, include it only once.

NEGATION & HYPOTHETICALS
•  IGNORE negated, resolved, or hypothetical statements (e.g., “no wifi problem”, “จะซ่อมพรุ่งนี้”, “ถ้าไฟดับ…”).
•  Only include issues that actually happened or are currently happening.

SCOPING
•  If an issue is “campus-wide” or place-agnostic and no allowed place is named, do not output it.
•  Ignore places not in the allowed list (e.g., “Maker Space”) unless the text also names an allowed place.

CLEANUP
•  Trim whitespace. Keep proper casing for “Wi-Fi/WiFi”.
•  Remove timings, room numbers, or floor markers from the issue unless essential (e.g., “ลิฟต์ค้าง ชั้น 3” is okay as an issue).

OUTPUT
•  Return ONLY the JSON array. If nothing valid is found, return [].
`
    const fewshot_examples = [
    {
      role: "user",
      content:
        "At the Engineering lib the Wi-Fi is unstable all afternoon. Printers at Science Library jammed twice.",
    },
    {
      role: "assistant",
      content:
        '[{"place":"Engineering Library","issue":"Wi-Fi is unstable"},{"place":"Science Library","issue":"Printers jammed"}]',
    },
    {
      role: "user",
      content:
        "ที่หอสมุดวิศวฯ อินเทอร์เน็ตล่มบ่อยมาก ส่วนที่หอสมุดคณะนิติฯ แอร์ไม่เย็น",
    },
    {
      role: "assistant",
      content:
        '[{"place":"Engineering Library","issue":"อินเทอร์เน็ตล่มบ่อยมาก"},{"place":"Law Library","issue":"แอร์ไม่เย็น"}]',
    },
    {
      role: "user",
      content:
        "Central Library, Office of Academic Resources — no seating issues, but the elevators are stuck near 3F. At Science Library there’s still a long queue for printing; printers fine now.",
    },
    {
      role: "assistant",
      content:
        '[{"place":"Central Library, Office of Academic Resources","issue":"elevators stuck near 3F"},{"place":"Science Library","issue":"long queue for printing"}]',
    },
  ]

    // big prolbem to sub problem
    const chatCompletion = await groq.chat.completions.create({
        "messages": [
            {
            "role": "system", 
            "content": system_prompt.toString()},
            ...fewshot_examples,
            {
            "role": "user",
            "content": "คุณมีหน้าที่ในการดึงปัญหาย่อยจากข้อความนำเข้า โดย output อยู่ในรูปแบบ [ปัญหา 1, ปัญหา 2, ...] เท่านั้น\n" + "ข้อความนำเข้า : " + issue
            }
        ],
        "model": "openai/gpt-oss-120b",
        "temperature": 0,
        "max_completion_tokens": 8192,
        "top_p": 1,
        "stream": true,
        "reasoning_effort": "medium",
        "stop": null
    });
    let fullResponse = "";

    for await (const chunk of chatCompletion) {
    const content = chunk.choices[0]?.delta?.content || "";
    fullResponse += content;    
    }

    const arr = JSON.parse(fullResponse);
    console.log(arr);

    let reports = [];
    for (const r of arr) {
        let report = await Report.create({ place: r.place, issue: r.issue });

        reports.push(report);
    }
    console.log(reports);
    
    res.status(201).json({
      success: true,
      message: "Report created successfully",
      reports: reports
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
export const aiUpdateReport = async (req, res) => {
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
export const aiDeleteReport = async (req, res) => {
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