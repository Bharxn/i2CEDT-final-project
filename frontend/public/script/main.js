// Main application file - UI and event handling
import { CONFIG, SPACES } from './config.js';
import { fetchReports, addReport, updateReport, deleteReport, processAIReport } from './api.js';

// Global variables
let reports = []; // Always fetch from database, don't store locally

// DOM elements
let spaceContainer, reportList, searchInput, aiReportInput, aiSubmitBtn;

// Initialize the application when page loads
document.addEventListener('DOMContentLoaded', async () => {
  // Get DOM elements
  spaceContainer = document.getElementById(CONFIG.ELEMENTS.SPACES_CONTAINER);
  reportList = document.getElementById(CONFIG.ELEMENTS.REPORT_LIST);
  searchInput = document.getElementById(CONFIG.ELEMENTS.SEARCH_INPUT);
  aiReportInput = document.getElementById(CONFIG.ELEMENTS.AI_REPORT_INPUT);
  aiSubmitBtn = document.getElementById(CONFIG.ELEMENTS.AI_SUBMIT_BTN);

  // Setup event listeners
  setupSearch();
  setupAIReporting();

  // Load initial data
  await refreshReports();
  renderSpaces();
  
  console.log('Application loaded successfully!');
});

// ===== API FUNCTIONS =====
// (All API functions are now in api.js)

// ===== UI FUNCTIONS =====

// Refresh reports from database and update display
async function refreshReports() {
  try {
    reports = await fetchReports();
    renderReports();
  } catch (error) {
    console.error('Error refreshing reports:', error);
  }
}

// Render the reports list
function renderReports() {
  reportList.innerHTML = "";
  reports.forEach((r, index) => {
    const div = document.createElement("div");
    div.className = "report-item";
    div.innerHTML = `
      <span class="report-text"><b>${r.place}</b>: ${r.issue}</span>
      <div>
        <button class="btn btn-edit">Edit</button>
        <button class="btn btn-remove">Remove</button>
      </div>
    `;

    // Edit button click handler
    div.querySelector(".btn-edit").onclick = async () => {
      const newIssue = prompt("Edit issue:", r.issue);
      if (newIssue) {
        const updatedReport = { ...r, issue: newIssue };
        try {
          await updateReport(r._id, updatedReport);
          await refreshReports(); // Refresh from database
        } catch (error) {
          alert('Failed to update report. Please try again.');
        }
      }
    };

    // Remove button click handler
    div.querySelector(".btn-remove").onclick = async () => {
      console.log('Frontend: Remove button clicked for index:', index);
      if (confirm('Are you sure you want to delete this report?')) {
        console.log('Frontend: User confirmed deletion');
        try {
          await deleteReport(r._id);
          await refreshReports(); // Refresh from database
        } catch (error) {
          alert('Failed to delete report. Please try again.');
        }
      } else {
        console.log('Frontend: User cancelled deletion');
      }
    };

    reportList.appendChild(div);
  });
}

// Render the learning spaces
function renderSpaces(filter = "") {
  spaceContainer.innerHTML = "";
  SPACES
    .filter(s => s.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach(s => {
      const card = document.createElement("div");
      card.className = "space-card";
      card.innerHTML = `
        <img src="${s.img}" alt="${s.name}" class="space-img">
        <div class="space-details">
          <div class="space-header">${s.name}</div>
          <div class="contact">
            <span>📞 Tel: ${s.tel}</span>
            <span>✉️ Email: ${s.email}</span>
            <span>🔗 <a href="${s.link}" target="_blank">Location Link</a></span>
          </div>
        </div>
        <div class="report-zone">
          <button class="report-btn">Report</button>
        </div>
      `;
      
      // Report button click handler
      card.querySelector(".report-btn").onclick = async () => {
        const issue = prompt("Enter your report issue:");
        if (issue) {
          const newReport = { place: s.name, issue };
          try {
            await addReport(newReport);
            await refreshReports(); // Refresh from database
          } catch (error) {
            alert('Failed to add report. Please try again.');
          }
        }
      };
      
      spaceContainer.appendChild(card);
    });
}

// ===== EVENT HANDLERS =====

// Setup search functionality
function setupSearch() {
  searchInput.addEventListener("input", e => {
    renderSpaces(e.target.value);
  });
}

// Setup AI reporting functionality
function setupAIReporting() {
  aiSubmitBtn.addEventListener('click', async () => {
    const reportText = aiReportInput.value.trim();
    
    if (!reportText) {
      alert("Please enter some text before submitting.");
      return;
    }

    // Show loading state
    aiSubmitBtn.textContent = "Sending...";
    aiSubmitBtn.disabled = true;

    try {
      const data = await processAIReport(reportText);
      console.log('AI Report response:', data);
      
      // Add the extracted reports to the database
      if (data.reports && Array.isArray(data.reports)) {
        let successCount = 0;
        
        for (const report of data.reports) {
          try {
            await addReport(report);
            successCount++;
          } catch (error) {
            console.error('Error adding AI report:', error);
          }
        }
        
        if (successCount > 0) {
          alert(`Successfully processed ${successCount} report(s) from your text!`);
          await refreshReports(); // Refresh from database
        } else {
          alert('Failed to save reports to database.');
        }
      } else {
        alert('No reports could be extracted from your text.');
      }
      
      aiReportInput.value = ''; // Clear the input
    } catch (error) {
      console.error('Error sending AI report:', error);
      alert('Error sending report. Please try again.');
    } finally {
      // Reset button state
      aiSubmitBtn.textContent = "Submit";
      aiSubmitBtn.disabled = false;
    }
  });
}