📋 Airtable Form Builder
A full-stack MERN application that allows users to create dynamic forms connected to Airtable with conditional logic and response management.

🚀 Features
Core Features
🔐 Airtable OAuth Integration - Secure authentication with Airtable

🏗️ Dynamic Form Builder - Drag-and-drop form creation interface

🎯 Conditional Logic - Show/hide fields based on user responses

📊 Response Management - Store form responses directly in Airtable

👤 User Dashboard - Manage forms and view analytics

Supported Field Types
✅ Short Text

✅ Long Text

✅ Single Select

✅ Multi Select

✅ File Attachments

Bonus Features
📱 Responsive Design

🎨 Modern UI with Bootstrap

🔄 Real-time Form Preview

📤 Export Responses (PDF)

📈 Basic Analytics Dashboard

🛠️ Tech Stack
Frontend
React 18.x

React Router DOM - Navigation

Bootstrap + React Bootstrap - UI Components

Axios - API Client

Vite - Build Tool

Backend
Node.js + Express.js - Server

MongoDB + Mongoose - Database

JWT - Authentication

Airtable API - Integration

📦 Installation & Setup
Prerequisites
Node.js 16+

MongoDB

Airtable Account

Git

1. Clone the Repository
bash
git clone https://github.com/Soojal2005/airtable_system.git
cd airtable_system
2. Backend Setup
bash
# Navigate to backend directory
cd backened

# Install dependencies
npm install

# Environment setup (create .env file)
# Add your environment variables (see below)
3. Frontend Setup
bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install

# Environment setup (create .env file)
# Add your environment variables (see below)
4. Environment Variables
Backend (.env)

env
MONGODB_URI=mongodb://localhost:27017/airtable-form-builder
JWT_SECRET=your_super_secret_jwt_key_here
PORT=5000
AIRTABLE_ACCESS_TOKEN=your_airtable_access_token
Frontend (.env)

env
VITE_API_URL=http://localhost:5000/api
5. Start Development
bash
# Terminal 1 - Start backend
cd backened
npm run dev

# Terminal 2 - Start frontend  
cd frontend
npm run dev
🎮 Usage
1. Authentication
Login with your Airtable access token

Session maintained with JWT tokens

2. Form Creation
Select Airtable base and table

Choose fields to include in your form

Set up conditional logic rules

Customize field labels and options

3. Form Management
View all created forms in dashboard

See response counts and analytics

Edit or delete existing forms

4. Response Collection
Share form URL with respondents

Responses saved directly to Airtable

File uploads supported

🔌 API Endpoints
Authentication
POST /api/auth - Authenticate with Airtable

Forms
GET /api/forms - Get all forms

POST /api/forms - Create new form

GET /api/forms/:id - Get specific form

PUT /api/forms/:id - Update form

DELETE /api/forms/:id - Delete form

Responses
POST /api/responses/:formId - Submit form response

GET /api/responses/:formId - Get form responses

📁 Project Structure
text
airtable_system/
├── backened/                 # Node.js Backend
│   ├── config/              # Database configuration
│   ├── controllers/         # Route controllers
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── services/           # Airtable service
│   └── server.js           # Express server
├── frontend/                # React Frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── services/       # API services
│   │   └── App.jsx         # Main app component
│   └── package.json
└── README.md
🚀 Deployment
Backend Deployment (Heroku/Railway)
bash
# Set environment variables in your hosting platform
# Deploy the backened folder
Frontend Deployment (Vercel/Netlify)
bash
# Build project
npm run build

# Deploy dist folder to hosting platform
Database Deployment
Use MongoDB Atlas for production

Update connection string in environment variables

🤝 Contributing
Fork the repository

Create feature branch (git checkout -b feature/amazing-feature)

Commit changes (git commit -m 'Add amazing feature')

Push to branch (git push origin feature/amazing-feature)

Open a Pull Request

📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

🆘 Support
For support or questions about this project, please open an issue in the GitHub repository.

🎯 Roadmap
Advanced conditional logic builder

Form analytics and reporting

Team collaboration features

Airtable webhook integration

Mobile app version

⭐ Star this repo if you found it useful!

🔗 Links
Airtable API Documentation

React Documentation

Express.js Guide

Built with ❤️ using the MERN Stack

