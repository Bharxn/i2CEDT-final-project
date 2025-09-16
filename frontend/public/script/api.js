// API functions for communicating with the backend
// This file contains all the functions that talk to the server

// Fetch all reports from database
async function fetchReports() {
  try {
    const response = await fetch(`${window.API_CONFIG.API_BASE_URL}${window.API_CONFIG.REPORTS_ENDPOINT}`);
    if (response.ok) {
      const data = await response.json();
      return data.reports || [];
    }
    throw new Error(`HTTP error! status: ${response.status}`);
  } catch (error) {
    console.error('Error fetching reports:', error);
    throw error;
  }
}

// Add a new report to database
async function addReport(report) {
  try {
    const response = await fetch(`${window.API_CONFIG.API_BASE_URL}${window.API_CONFIG.REPORTS_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(report)
    });
    
    if (response.ok) {
      return true;
    }
    throw new Error(`HTTP error! status: ${response.status}`);
  } catch (error) {
    console.error('Error adding report:', error);
    throw error;
  }
}

// Update an existing report
async function updateReport(index, updatedReport) {
  try {
    const reportId = reports[index]._id || index; // Use _id from MongoDB
    const response = await fetch(`${window.API_CONFIG.API_BASE_URL}${window.API_CONFIG.REPORTS_ENDPOINT}/${reportId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedReport)
    });
    
    if (response.ok) {
      return true;
    }
    throw new Error(`HTTP error! status: ${response.status}`);
  } catch (error) {
    console.error('Error updating report:', error);
    throw error;
  }
}

// Delete a report
async function deleteReport(index) {
  try {
    const reportId = reports[index]._id || index; // Use _id from MongoDB
    console.log(`Frontend: Attempting to delete report with ID: ${reportId}`);
    console.log(`Frontend: Report data:`, reports[index]);
    
    const response = await fetch(`${window.API_CONFIG.API_BASE_URL}${window.API_CONFIG.REPORTS_ENDPOINT}/${reportId}`, {
      method: 'DELETE'
    });
    
    console.log(`Frontend: Delete response status: ${response.status}`);
    
    if (response.ok) {
      console.log('Frontend: Delete successful');
      return true;
    }
    throw new Error(`HTTP error! status: ${response.status}`);
  } catch (error) {
    console.error('Frontend: Error deleting report:', error);
    throw error;
  }
}

// Process AI report
async function processAIReport(text) {
  try {
    const response = await fetch(`${window.API_CONFIG.API_BASE_URL}${window.API_CONFIG.AI_REPORT_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text })
    });
    
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error(`HTTP error! status: ${response.status}`);
  } catch (error) {
    console.error('Error processing AI report:', error);
    throw error;
  }
}
