// Configuration file for the application
export const CONFIG = {
  // API endpoints
  API_BASE_URL: 'http://localhost:3222/api',
  REPORTS_ENDPOINT: '/reports',
  AI_REPORT_ENDPOINT: '/ai-report',
  
  // DOM element IDs
  ELEMENTS: {
    SPACES_CONTAINER: 'spaces',
    REPORT_LIST: 'report-list',
    SEARCH_INPUT: 'search',
    AI_REPORT_INPUT: 'ai-report-input',
    AI_SUBMIT_BTN: 'ai-submit-btn'
  }
};

// Learning spaces data
export const SPACES = [
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
