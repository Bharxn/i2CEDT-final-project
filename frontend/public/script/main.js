// Main application file - UI and event handling
// This file contains all the user interface logic and event handlers


// Dummy Database for learning spaces
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
    img: "https://www.law.chula.ac.th/wp-content/uploads/2019/03/img-legal-resources-center-1-1200x800.jpg"
  },
  {
    name: "Architecture Library",
    tel: "0-2218-4335",
    email: "saraban_arch@chula.ac.th",
    link: "https://maps.app.goo.gl/BX74x7r4cgkK1AJC8",
    img: "https://www.chula.ac.th/wp-content/uploads/2020/02/cu_310163_0011-720x481-1.jpg"
  },
  {
    name: "Arts Library",
    tel: "0-2218-4891,0-2218-4851",
    email: "saraban_arch@chula.ac.th",
    link: "https://maps.app.goo.gl/6vFtf5ktrbCDq6xW9",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Faculty_of_Arts_Library%2C_Chulalongkorn_University.jpg"
  },
  {
    name: "Communication Arts Library",
    tel: "0-2218-2225",
    email: "commarts@chula.ac.th",
    link: "https://maps.app.goo.gl/aFYaPgr1VrSydmqC6",
    img: "https://www.chula.ac.th/wp-content/uploads/2018/01/chula-faculty-communication-arts-hero-desktop.jpg"
  },
  {
    name: "Dentistry Library",
    tel: "0-2218-9017-9",
    email: " - ",
    link: "https://maps.app.goo.gl/u83xe5nMcNZyT4SW7",
    img: "https://www.dent.chula.ac.th/wp-content/uploads/2024/01/Picture1.png"
  },
  {
    name: "Science Library",
    tel: "0-2218-5045-7",
    email: "sciencelib.chula@gmail.com",
    link: "https://maps.app.goo.gl/mV417AH6shuDRWQU8",
    img: "https://www.arts.chula.ac.th/dlives/images/lib/S_6820693929471.jpg"
  },
  {
    name: "Chula Business School Library",
    tel: "0-2218-5725-30",
    email: " - ",
    link: "https://maps.app.goo.gl/NqH8h4gnY3K2CreT8",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEY3jTlhpsoSiB9K3kk7-XiKb8stsUqsOVYQ&s"
  },
  {
    name: "Education Library",
    tel: "0-2218-2429",
    email: "libedu@chula.ac.th",
    link: "https://maps.app.goo.gl/1HyzyqpCuN2LQUca7",
    img: "https://www.edu.chula.ac.th/sites/default/files/users/user17/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%8A%E0%B8%B1%E0%B9%89%E0%B8%991/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AB%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%A1%E0%B8%B8%E0%B8%94_2.jpg"
  },
  {
    name: "Fine & Applied Arts Library",
    tel: "0-2218-4574",
    email: " - ",
    link: "https://maps.app.goo.gl/H9o6zAX9JYyUY5mi9",
    img: "https://fa.rmutt.ac.th/wp-content/uploads/2021/06/20210615_093042-scaled.jpg"
  },
  {
    name: "Economics Library",
    tel: "0-2218-6221-2",
    email: "saraban_econ@chula.ac.th",
    link: "https://maps.app.goo.gl/wKqSPR5K86cRx3pt5",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgaqPZ0-aa5_LvAdOvstsT5B7QEJbIyFcukg&s"
  },
  {
    name: "Medicine Library",
    tel: "0-2256-4266",
    email: " - ",
    link: "https://maps.app.goo.gl/U3GjWsBXXvWzQiUz8",
    img: "https://www.md.chula.ac.th/wp-content/uploads/2016/02/R2A1053-R-1024x683.jpg"
  },
  {
    name: "Pharmaceutical Science Library",
    tel: "0-2218-8300",
    email: "library@pharm.chula.ac.th",
    link: "https://maps.app.goo.gl/4fi4tKyDZZnCVVTw7",
    img: "https://scontent.fbkk12-3.fna.fbcdn.net/v/t1.6435-9/50519854_2413627918666904_1149785628724953088_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGa6rM_a9Ky4Mbq-N3Rf2Ic7XNDb3uxOZntc0Nve7E5mV06pj4WUKYg4NL4jcI8wsbGVIk-CVr5gOwHxWN_Eqwq&_nc_ohc=e4I9E2hxLEYQ7kNvwH4Eyaq&_nc_oc=AdkvO0R9OmSK2XObgN8wrgz69oh5eUOEuqHIfIOrKG0ewVxcolM8_j-BtfChf-WyqCm1NCPEOzGUDALv9L0oWiVF&_nc_zt=23&_nc_ht=scontent.fbkk12-3.fna&_nc_gid=URiCH_MrlKwvGkf2JT47oA&oh=00_AfYQoKxPddY007eGcgSrS3l_03l8QjiNhUOkNjg-cH7j7A&oe=68F0E182"
  },
  {
    name: "Veterinary Science Library",
    tel: "0-2218-9554-7",
    email: " - ",
    link: "https://maps.app.goo.gl/azm4oKCekF78NCVp6",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTZWo_1Uk_tR12C_jLQ-7kQc3SapGrrMtoyg&s"
  },
  {
    name: "Central Library, Office of Academic Resources",
    tel: "0-2218-2929, 0-2218-2918",
    email: "chulalibrary@car.chula.ac.th",
    link: "https://maps.app.goo.gl/KYPxxn9nZPBEhayGA",
    img: "https://www.chula.ac.th/wp-content/uploads/2018/02/library-building-hero-02-1440x900.jpg"
  }
];

// Global variables
let reports = []; // Always fetch from database, don't store locally

// DOM elements
let spaceContainer, reportList, searchInput, aiReportInput, aiSubmitBtn, placeFilter;

// Initialize the application when page loads
document.addEventListener('DOMContentLoaded', async () => {
  // Get DOM elements
  spaceContainer = document.getElementById("spaces");
  reportList = document.getElementById("report-list");
  searchInput = document.getElementById("search");
  aiReportInput = document.getElementById("ai-report-input");
  aiSubmitBtn = document.getElementById("ai-submit-btn");
  placeFilter = document.getElementById("place-filter");

  // Setup event listeners
  setupSearch();
  setupAIReporting();
  setupPlaceFilter();

  // Load initial data
  await refreshReports();
  renderSpaces();
  
  console.log('Application loaded successfully!');
});

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
  
  // Get the selected filter value
  const selectedPlace = placeFilter.value;
  
  // Filter reports based on selected place
  const filteredReports = selectedPlace 
    ? reports.filter(r => r.place === selectedPlace)
    : reports;
  
  // Show message if no reports match the filter
  if (filteredReports.length === 0 && reports.length > 0) {
    const noResultsDiv = document.createElement("div");
    noResultsDiv.className = "no-results";
    noResultsDiv.innerHTML = `
      <p style="text-align: center; color: #6c757d; padding: 20px; font-style: italic;">
        No reports found for "${selectedPlace}". 
        <a href="#" onclick="placeFilter.value=''; renderReports(); return false;" style="color: #6c63ff; text-decoration: none;">
          Show all reports
        </a>
      </p>
    `;
    reportList.appendChild(noResultsDiv);
    return;
  }
  
  filteredReports.forEach((r, index) => {
    // Find the original index in the full reports array
    const originalIndex = reports.findIndex(report => report._id === r._id);
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
          await updateReport(originalIndex, updatedReport);
          await refreshReports(); // Refresh from database
        } catch (error) {
          alert('Failed to update report. Please try again.');
        }
      }
    };

    // Remove button click handler
    div.querySelector(".btn-remove").onclick = async () => {
      console.log('Frontend: Remove button clicked for index:', originalIndex);
      if (confirm('Are you sure you want to delete this report?')) {
        console.log('Frontend: User confirmed deletion');
        try {
          await deleteReport(originalIndex);
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
// Global refs for modal
const reportModal = document.getElementById("reportModal");
const closeModal = document.getElementById("closeModal");
const reportInput = document.getElementById("reportInput");
const submitReport = document.getElementById("submitReport");

let currentSpace = null; // เก็บว่า user กดจาก library ไหน

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
      // Report button action
      card.querySelector(".report-btn").onclick = () => {
        currentSpace = s;           // เก็บว่ามาจากที่ไหน
        reportInput.value = "";     // เคลียร์ input เดิม
        reportModal.style.display = "block"; // เปิด modal
      };
      spaceContainer.appendChild(card);
    });
}

// Close modal
closeModal.onclick = () => {
  reportModal.style.display = "none";
};

// Submit report
submitReport.onclick = async () => {
  const issue = reportInput.value.trim();
  if (issue && currentSpace) {
    const newReport = { place: currentSpace.name, issue };
    const success = await addReport(newReport);
    await refreshReports();
    if (!success) {
      alert('Failed to add report. Please try again.');
    }
    reportModal.style.display = "none";
  }
};

// ปิด modal ถ้าคลิกนอกกล่อง
window.onclick = (e) => {
  if (e.target === reportModal) {
    reportModal.style.display = "none";
  }
};

// ===== EVENT HANDLERS =====

// Setup search functionality
function setupSearch() {
  searchInput.addEventListener("input", e => {
    renderSpaces(e.target.value);
  });
}

// Setup place filter functionality
function setupPlaceFilter() {
  placeFilter.addEventListener("change", () => {
    renderReports();
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
      
      // Reports are already saved by the backend, just refresh the display
      if (data.reports && Array.isArray(data.reports) && data.reports.length > 0) {
        alert(`Successfully processed ${data.reports.length} report(s) from your text!`);
        aiReportInput.value = ''; // Clear the input only when successful
        await refreshReports();
      } else {
        alert('No reports could be extracted from your text. Please try again with different text.');
        // Keep the input text so user can modify and try again
      }
    } catch (error) {
      console.error('Error sending AI report:', error);
      alert('Error sending report. Please try again.');
      // Keep the input text so user can modify and try again
    } finally {
      // Reset button state
      aiSubmitBtn.textContent = "Submit";
      aiSubmitBtn.disabled = false;
    }
  });
}
