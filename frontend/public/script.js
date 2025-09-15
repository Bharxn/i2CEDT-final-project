// Dummy Database
const spaces = [
  {
    name: "Engineering Library",
    tel: "0-2218-6364",
    email: " - ",
    link: "https://maps.app.goo.gl/krzDzUiLMeGGbHze6",
    img: "https://i.postimg.cc/fRxDMpwW/Screenshot-2025-09-12-160121.png"
  },
  {
    name: "Policy Science Library",
    tel: "0-2218-7185, 02-218-7188, 02-218-7189",
    email: "lib_polsci@chula.ac.th",
    link: "https://www.google.com/maps/place/%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B8%A3%E0%B8%B1%E0%B8%90%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C+%E0%B8%88%E0%B8%B8%E0%B8%AC%E0%B8%B2%E0%B8%A5%E0%B8%87%E0%B8%81%E0%B8%A3%E0%B8%93%E0%B9%8C%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2/@13.734699,100.533284,17z/data=!4m6!3m5!1s0x311d61e198fc6761:0x50b0f8a9b0fac230!8m2!3d13.7346985!4d100.5332842!16s%2Fm%2F047tz8x?hl=th&entry=ttu&g_ep=EgoyMDI1MDkwOS4wIKXMDSoASAFQAw%3D%3D",
    img: "https://i.postimg.cc/gjkH2C9C/473356264-10171006281785714-1127180634653978337-n.jpg"
  },
  {
    name: "Law Library",
    tel: "0-2218-2070",
    email: "pr@law.chula.ac.th",
    link: "https://maps.app.goo.gl/7A5QtLGRfVNPvTCE9",
    img: "https://i.postimg.cc/dtC9nPR9/img-legal-resources-center-1-1200x800.jpg"
  },
  {
    name: "Architecture Library",
    tel: "0-2218-4335",
    email: "saraban_arch@chula.ac.th",
    link: "https://maps.app.goo.gl/BX74x7r4cgkK1AJC8",
    img: "https://i.postimg.cc/ZqfTQQPf/Arch-CULib-19.jpg"
  },
  {
    name: "Arts Library",
    tel: "0-2218-4891,0-2218-4851",
    email: "saraban_arch@chula.ac.th",
    link: "https://maps.app.goo.gl/6vFtf5ktrbCDq6xW9",
    img: "https://i.postimg.cc/HLt21wjv/EMiabio-U4-AANADW.jpg"
  },
  {
    name: "Communication Arts Library",
    tel: "0-2218-2225",
    email: "commarts@chula.ac.th",
    link: "https://maps.app.goo.gl/aFYaPgr1VrSydmqC6",
    img: "https://i.postimg.cc/zvXNJFJd/oolgggd1k-TTH3-Zinl1-P-o.jpg"
  },
  {
    name: "Dentistry Library",
    tel: "0-2218-9017-9",
    email: " - ",
    link: "https://maps.app.goo.gl/u83xe5nMcNZyT4SW7",
    img: "https://i.postimg.cc/qMNfjRgC/dent.jpg"
  },
  {
    name: "Science Library",
    tel: "0-2218-5045-7",
    email: "sciencelib.chula@gmail.com",
    link: "https://maps.app.goo.gl/mV417AH6shuDRWQU8",
    img: "https://i.postimg.cc/T1X9mty9/science.jpg"
  },
  {
    name: "Chula Business School Library",
    tel: "0-2218-5725-30",
    email: " - ",
    link: "https://maps.app.goo.gl/NqH8h4gnY3K2CreT8",
    img: "https://i.postimg.cc/rwvtKKRG/business.jpg"
  },
  {
    name: "Education Library",
    tel: "0-2218-2429",
    email: "libedu@chula.ac.th",
    link: "https://maps.app.goo.gl/1HyzyqpCuN2LQUca7",
    img: "https://i.postimg.cc/kGz7ftmf/Education.jpg"
  },
  {
    name: "Fine & Applied Arts Library",
    tel: "0-2218-4574",
    email: " - ",
    link: "https://maps.app.goo.gl/H9o6zAX9JYyUY5mi9",
    img: "https://i.postimg.cc/pTtGhw6J/Applied-art.jpg"
  },
  {
    name: "Economics Library",
    tel: "0-2218-6221-2",
    email: "saraban_econ@chula.ac.th",
    link: "https://maps.app.goo.gl/wKqSPR5K86cRx3pt5",
    img: "https://i.postimg.cc/jSFB5kTM/122871608.jpg"
  },
  {
    name: "Medicine Library",
    tel: "0-2256-4266",
    email: " - ",
    link: "https://maps.app.goo.gl/U3GjWsBXXvWzQiUz8",
    img: "https://i.postimg.cc/MHqF4C0p/oolgnqjy0-AO0-MOVo4t-Z-o.jpg"
  },
  {
    name: "Pharmaceutical Science Library",
    tel: "0-2218-8300",
    email: "library@pharm.chula.ac.th",
    link: "https://maps.app.goo.gl/4fi4tKyDZZnCVVTw7",
    img: "https://i.postimg.cc/28jtxf8H/pharm.jpg"
  },
  {
    name: "Veterinary Science Library",
    tel: "0-2218-9554-7",
    email: " - ",
    link: "https://maps.app.goo.gl/azm4oKCekF78NCVp6",
    img: "https://i.postimg.cc/X7MJZQj7/vet.jpg"
  },
  {
    name: "Central Library, Office of Academic Resources",
    tel: "0-2218-2929, 0-2218-2918",
    email: "chulalibrary@car.chula.ac.th",
    link: "https://maps.app.goo.gl/KYPxxn9nZPBEhayGA",
    img: "https://i.postimg.cc/XvZSk6xM/122871455.jpg"
  }
];

let reports = [
  //{ place: "Engineering Library", issue: "Wifi error" },
  // { place: "Policy Science Library", issue: "Air conditioner broke" }
];

const spaceContainer = document.getElementById("spaces");
const reportList = document.getElementById("report-list");
const searchInput = document.getElementById("search");
const aiReportInput = document.getElementById("ai-report-input");
const aiSubmitBtn = document.getElementById("ai-submit-btn");

// API functions for database operations
async function fetchReports() {
  try {
    const response = await fetch('http://localhost:3222/api/reports');
    if (response.ok) {
      const data = await response.json();
      reports = data.reports || [];
      renderReports();
    }
  } catch (error) {
    console.error('Error fetching reports:', error);
  }
}

async function addReport(report) {
  try {
    const response = await fetch('http://localhost:3222/api/reports', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(report)
    });
    
    if (response.ok) {
      // Instead of updating local array, fetch fresh data from database
      await fetchReports();
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error adding report:', error);
    return false;
  }
}

async function updateReport(index, updatedReport) {
  try {
    const reportId = reports[index]._id || index; // Use _id from MongoDB
    const response = await fetch(`http://localhost:3222/api/reports/${reportId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedReport)
    });
    
    if (response.ok) {
      // Instead of updating local array, fetch fresh data from database
      await fetchReports();
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error updating report:', error);
    return false;
  }
}

async function deleteReport(index) {
  try {
    const reportId = reports[index]._id || index; // Use _id from MongoDB
    console.log(`Frontend: Attempting to delete report with ID: ${reportId}`);
    console.log(`Frontend: Report data:`, reports[index]);
    
    const response = await fetch(`http://localhost:3222/api/reports/${reportId}`, {
      method: 'DELETE'
    });
    
    console.log(`Frontend: Delete response status: ${response.status}`);
    
    if (response.ok) {
      console.log('Frontend: Delete successful, fetching fresh data from database');
      // Instead of updating local array, fetch fresh data from database
      await fetchReports();
      return true;
    } else {
      console.log('Frontend: Delete failed, response not ok');
      return false;
    }
  } catch (error) {
    console.error('Frontend: Error deleting report:', error);
    return false;
  }
}

// Render reports
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

    // Edit button
    div.querySelector(".btn-edit").onclick = async () => {
      const newIssue = prompt("Edit issue:", r.issue);
      if (newIssue) {
        const updatedReport = { ...r, issue: newIssue };
        const success = await updateReport(index, updatedReport);
        if (!success) {
          alert('Failed to update report. Please try again.');
        }
      }
    };

    // Remove button
    div.querySelector(".btn-remove").onclick = async () => {
      console.log('Frontend: Remove button clicked for index:', index);
      if (confirm('Are you sure you want to delete this report?')) {
        console.log('Frontend: User confirmed deletion');
        const success = await deleteReport(index);
        if (!success) {
          alert('Failed to delete report. Please try again.');
        }
      } else {
        console.log('Frontend: User cancelled deletion');
      }
    };

    reportList.appendChild(div);
  });
}

// Render spaces
function renderSpaces(filter = "") {
  spaceContainer.innerHTML = "";
  spaces
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
      // Add report button action
      card.querySelector(".report-btn").onclick = async () => {
        const issue = prompt("Enter your report issue:");
        if (issue) {
          const newReport = { place: s.name, issue };
          const success = await addReport(newReport);
          if (!success) {
            alert('Failed to add report. Please try again.');
          }
        }
      };
      spaceContainer.appendChild(card);
    });
}

// Search functionality
searchInput.addEventListener("input", e => {
  renderSpaces(e.target.value);
});

// AI Reporting functionality
async function submitAIReport() {
  const reportText = aiReportInput.value.trim();
  console.log(reportText);
  
  if (!reportText) {
    alert("Please enter some text before submitting.");
    return;
  }

  // Show loading state
  aiSubmitBtn.textContent = "Sending...";
  aiSubmitBtn.disabled = true;

  // Send API request to backend
  fetch('http://localhost:3222/api/ai-report', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ place: reportText, issue: reportText })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(async (data) => {
    console.log('AI Report response:', data);
    
    // Add the extracted reports to the database
    if (data.reports) {
      // let successCount = 0;

      // for (const report of data.reports) {
      //   const success = await addReport(report);
      //   if (success) {
      //     successCount++;
      //   }
      // }
      
      // if (successCount > 0) {
      //   alert(`Successfully processed ${successCount} report(s) from your text!`);
      // } else {
      //   alert('Failed to save reports to database.');
      // }
    } else {
      alert('No reports could be extracted from your text.');
    }
    await fetchReports();
    aiReportInput.value = ''; // Clear the input
  })
  .catch(error => {
    console.error('Error sending AI report:', error);
    alert('Error sending report. Please try again.');
  })
  .finally(() => {
    // Reset button state
    aiSubmitBtn.textContent = "Submit";
    aiSubmitBtn.disabled = false;
  });
}

// Add event listener for AI submit button
aiSubmitBtn.addEventListener('click', submitAIReport);

// Initial render
fetchReports(); // Load reports from database
renderSpaces();
