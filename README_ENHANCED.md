# 🚀 Responsive Portfolio Website

A production-ready full-stack portfolio application built with React, Node.js, Express, and MongoDB. This project demonstrates complete web development skills including responsive UI design, backend API development, database integration, and deployment.

**Live Demo:** [https://cognevance-responsive-portfolio-web-kappa.vercel.app](https://cognevance-responsive-portfolio-web-kappa.vercel.app)

**Backend API:** [https://cognevance-responsive-portfolio-website-gz6y.onrender.com](https://cognevance-responsive-portfolio-website-gz6y.onrender.com)

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Deployment](#deployment)
- [Performance Optimizations](#performance-optimizations)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

### Frontend Features
- **Responsive Design** - Mobile-first approach, optimized for all screen sizes
- **Modern UI Components** - Built with React and styled with Tailwind CSS
- **Smooth Animations** - Fade-in effects, hover animations, and transitions
- **Navigation** - Hamburger menu for mobile, smooth scroll navigation
- **Contact Form** - Fully functional with validation and error handling
- **Social Integration** - Links to GitHub, LinkedIn, and email
- **Performance** - Optimized bundle size with Vite, lazy loading

### Backend Features
- **REST API** - Express.js server with clean route structure
- **Database Integration** - MongoDB with Mongoose schemas
- **Email Service** - Automated email notifications (user & admin)
- **Validation** - Client and server-side form validation
- **Error Handling** - Comprehensive error responses
- **Security** - CORS configuration, input sanitization, admin authentication
- **Async Processing** - Non-blocking email sends for fast response times

### Application Sections
1. **Hero** - Introduction with social links and CTAs
2. **About** - Personal summary and education timeline
3. **Skills** - Technical skills categorized by expertise
4. **Projects** - Portfolio projects with descriptions and links
5. **Contact** - Contact form with direct message sending
6. **Footer** - Quick links and additional information

---

## 🛠️ Tech Stack

### Frontend
```
React 18           - UI Library
Vite 5             - Build tool and dev server
Tailwind CSS 3     - Utility-first CSS framework
PostCSS            - CSS transformation tool
Axios              - HTTP client
Lucide Icons       - Icon library
```

### Backend
```
Node.js            - JavaScript runtime
Express.js 4       - Web framework
MongoDB            - NoSQL database
Mongoose 8         - ODM (Object Document Mapper)
Nodemailer 6.9     - Email service
```

### Deployment
```
Frontend:  Vercel  - React/Vite hosting
Backend:   Render  - Node.js hosting
Database:  MongoDB Atlas - Cloud database
```

---

## 📁 Project Structure

```
responsive-portfolio-website/
│
├── frontend/                      # React application
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx        # Navigation component
│   │   │   ├── Hero.jsx          # Hero section
│   │   │   ├── About.jsx         # About section
│   │   │   ├── Skills.jsx        # Skills section
│   │   │   ├── Projects.jsx      # Projects showcase
│   │   │   ├── Contact.jsx       # Contact form
│   │   │   └── Footer.jsx        # Footer section
│   │   ├── App.jsx               # Root component
│   │   ├── main.jsx              # Entry point
│   │   └── index.css             # Global styles & animations
│   ├── index.html                # HTML entry point
│   ├── package.json              # Dependencies
│   ├── vite.config.js            # Vite configuration
│   ├── tailwind.config.js        # Tailwind CSS config
│   └── postcss.config.js         # PostCSS config
│
├── backend/                       # Node.js/Express server
│   ├── models/
│   │   └── ContactMessage.js     # Mongoose schema
│   ├── routes/
│   │   ├── contact.js            # Contact API routes
│   │   └── health.js             # Health check endpoint
│   ├── utils/
│   │   └── email.js              # Email service
│   ├── server.js                 # Express server setup
│   ├── package.json              # Dependencies
│   ├── .env                      # Environment variables
│   └── .env.example              # Environment template
│
├── documentation/                 # Project documentation
│   ├── ARCHITECTURE.md           # Technical architecture
│   ├── FEATURES.md               # Detailed features
│   └── SCREENSHOTS_GUIDE.md      # How to take screenshots
│
└── README.md                     # Project overview (this file)
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git
- MongoDB (local or Atlas account)
- Code editor (VS Code recommended)

### Quick Start (5 minutes)

1. **Clone the repository**
   ```bash
   git clone https://github.com/SUSHANTHPVS/cognevance_Responsive-Portfolio-Website.git
   cd responsive-portfolio-website
   ```

2. **Install dependencies**
   ```bash
   # Frontend
   cd frontend
   npm install
   
   # Backend (in new terminal)
   cd backend
   npm install
   ```

3. **Setup environment variables**
   ```bash
   # Copy .env.example to .env in backend folder
   cp backend/.env.example backend/.env
   
   # Update with your values:
   # - MongoDB URI
   # - Email credentials
   # - Admin email
   ```

4. **Run the application**
   ```bash
   # Terminal 1: Frontend (http://localhost:5173)
   cd frontend
   npm run dev
   
   # Terminal 2: Backend (http://localhost:5000)
   cd backend
   npm run dev
   ```

---

## 📦 Installation

### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Install specific packages if needed
npm install axios lucide-react

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

### Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Install specific packages if needed
npm install express mongoose cors dotenv nodemailer

# Development server (with auto-reload)
npm run dev

# Production server
npm start
```

---

## ⚙️ Configuration

### Frontend Environment Variables

Create `.env.local` in the `frontend/` directory:

```env
VITE_API_URL=http://localhost:5000
```

For production (Vercel):
```env
VITE_API_URL=https://cognevance-responsive-portfolio-website-gz6y.onrender.com
```

### Backend Environment Variables

Create `.env` in the `backend/` directory:

```env
# Server
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173

# Database
MONGODB_URI=mongodb://localhost:27017/portfolio
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/dbname

# Email Configuration (Gmail)
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM="Your Name" <your-email@gmail.com>

# Admin
ADMIN_EMAIL=admin@example.com
ADMIN_KEY=your-secure-key
```

**Gmail Setup for Email Service:**
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password: [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Use the generated 16-character password in `EMAIL_PASSWORD`

---

## ▶️ Running the Application

### Development Mode

**Terminal 1 - Frontend:**
```bash
cd frontend
npm run dev
```
Runs on: http://localhost:5173

**Terminal 2 - Backend:**
```bash
cd backend
npm run dev
```
Runs on: http://localhost:5000

Access the app at `http://localhost:5173` and open backend at `http://localhost:5000/health` to verify it's running.

### Production Mode

**Frontend (Vercel):**
```bash
cd frontend
npm run build
# Deploy the dist/ folder to Vercel
```

**Backend (Render):**
```bash
cd backend
npm start
```

---

## 🔌 API Endpoints

### Health Check
```
GET /health
Response: { "status": "ok", "timestamp": "..." }
```

### Contact Form
```
POST /contact
Content-Type: application/json

Request Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I'm interested in your services..."
}

Response (Success):
{
  "success": true,
  "message": "Message received! I'll get back to you soon.",
  "data": {
    "id": "...",
    "timestamp": "..."
  }
}

Response (Error):
{
  "success": false,
  "message": "Please provide all required fields"
}
```

---

## 🗄️ Database Schema

### ContactMessage Collection

```javascript
{
  _id: ObjectId,
  name: String (required),
  email: String (required, validated),
  subject: String (required),
  message: String (required, min: 10 characters),
  status: String (default: "new", enum: ["new", "read", "replied"]),
  createdAt: Date (auto-generated),
  updatedAt: Date (auto-generated)
}
```

**Indexes:**
- `email` - For quick lookup by sender
- `createdAt` - For sorting by date
- `status` - For filtering by status

---

## 🚀 Deployment

### Frontend Deployment (Vercel)

1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables:
   ```
   VITE_API_URL=https://your-backend-url.onrender.com
   ```
4. Deploy automatically on push

### Backend Deployment (Render)

1. Push code to GitHub
2. Create new Web Service on Render
3. Connect GitHub repository
4. Set environment variables in Render dashboard
5. Deploy

### Database (MongoDB Atlas)

1. Create account at [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
2. Create a cluster
3. Add database user
4. Get connection string
5. Add to backend `.env` as `MONGODB_URI`

---

## ⚡ Performance Optimizations

### Frontend
- **Vite** - Lightning-fast build tool with instant HMR
- **Code Splitting** - Components loaded on-demand
- **CSS Purging** - Tailwind removes unused CSS
- **Image Optimization** - Responsive images and SVG icons
- **Lazy Loading** - Intersection Observer for animations

### Backend
- **Async Email Processing** - Non-blocking email sends
- **Database Indexing** - Fast queries on indexed fields
- **Connection Pooling** - MongoDB connection pool management
- **CORS Optimization** - Efficient cross-origin handling
- **Error Handling** - Graceful error responses

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit (`git commit -m 'Add AmazingFeature'`)
5. Push to branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

---

## 📄 License

This project is licensed under the MIT License - see [LICENSE](./LICENSE) file for details.

---

## 📞 Support & Contact

- **Portfolio Website:** [https://cognevance-responsive-portfolio-web-kappa.vercel.app](https://cognevance-responsive-portfolio-web-kappa.vercel.app)
- **Email:** pvsushanthpv@gmail.com
- **GitHub:** [@SUSHANTHPVS](https://github.com/SUSHANTHPVS)
- **LinkedIn:** [P.V. Sushanth](https://linkedin.com/in/sushanth-p-v-67290a31b)

---

## 🎓 Learning Outcomes

This project demonstrates:
- ✅ Full-stack web development with React and Node.js
- ✅ Responsive design and modern CSS practices
- ✅ RESTful API design and implementation
- ✅ Database design and integration with MongoDB
- ✅ Email service integration and async processing
- ✅ Error handling and form validation
- ✅ Production deployment and DevOps basics
- ✅ Git workflow and GitHub collaboration
- ✅ Security best practices (input validation, sanitization, authentication)

---

**Created with ❤️ by P.V. Sushanth**
