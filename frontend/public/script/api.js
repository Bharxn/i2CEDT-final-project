// API functions for communicating with the backend
import { CONFIG } from './config.js';

// Fetch all reports from database
export async function fetchReports() {
  try {
    const response = await fetch(`${CONFIG.API_BASE_URL}${CONFIG.REPORTS_ENDPOINT}`);
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
export async function addReport(report) {
  try {
    const response = await fetch(`${CONFIG.API_BASE_URL}${CONFIG.REPORTS_ENDPOINT}`, {
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
export async function updateReport(reportId, updatedReport) {
  try {
    const response = await fetch(`${CONFIG.API_BASE_URL}${CONFIG.REPORTS_ENDPOINT}/${reportId}`, {
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
export async function deleteReport(reportId) {
  try {
    console.log(`Frontend: Attempting to delete report with ID: ${reportId}`);
    
    const response = await fetch(`${CONFIG.API_BASE_URL}${CONFIG.REPORTS_ENDPOINT}/${reportId}`, {
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
export async function processAIReport(text) {
  try {
    const response = await fetch(`${CONFIG.API_BASE_URL}${CONFIG.AI_REPORT_ENDPOINT}`, {
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
