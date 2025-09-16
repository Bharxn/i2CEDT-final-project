# Full Stack Report Management System

This is a full-stack web application that provides report management functionality with AI capabilities.

## Project Structure

```
.
├── backend/            # Backend server code
│   ├── src/
│   │   ├── app.js
│   │   ├── server.js
│   │   ├── config/    # Configuration files
│   │   ├── controllers/
│   │   ├── models/    # Database models
│   │   └── routes/    # API routes
│   └── package.json
│
└── frontend/          # Frontend application
    ├── public/        # Static files
    │   ├── index.html
    │   ├── style.css
    │   └── script/    # Frontend JavaScript
    ├── server.js      # Frontend server
    └── package.json
```

## Features

- Report management system
- AI-powered report analysis
- RESTful API backend
- Modern web frontend

## Prerequisites

- Node.js
- npm or yarn
- MongoDB (Make sure it's installed and running)

## Installation

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the backend server:
```bash
npm start
```

The backend server will start running on the configured port.

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the frontend server:
```bash
npm start
```

The frontend application will be available in your web browser.

## API Routes

- `/api/reports` - Report management endpoints
- `/api/ai-reports` - AI-powered report analysis endpoints

## Technologies Used

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose

- **Frontend:**
  - HTML5
  - CSS3
  - JavaScript

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
