# Portfolio Website - Full Stack Project

A comprehensive responsive portfolio website showcasing full-stack development skills with React frontend, Node.js backend, and MongoDB database integration.

## 📋 Project Overview

This project demonstrates a complete full-stack web development workflow with:
- **Frontend**: Modern React application with Vite bundler
- **Backend**: Express.js REST API server
- **Database**: MongoDB for data persistence
- **Features**: Responsive design, contact form, animations, and more

## 🎯 Project Deliverables

- ✅ Frontend source code (React + Vite)
- ✅ Backend source code (Node.js + Express)
- ✅ Database setup (MongoDB)
- ✅ Contact form with email notifications
- ✅ Responsive design for all devices
- ✅ Smooth animations and transitions
- ✅ Production-ready code structure

## 📁 Project Structure

```
Responsive Portfolio Website/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── backend/
│   ├── models/
│   │   └── ContactMessage.js
│   ├── routes/
│   │   ├── contact.js
│   │   └── health.js
│   ├── utils/
│   │   └── email.js
│   ├── server.js
│   ├── package.json
│   ├── .env.example
│   └── .gitignore
│
└── DATABASE.md
└── DEPLOYMENT.md
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or Atlas)
- Git

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Frontend will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your configuration:
   - MongoDB URI
   - Email service credentials
   - Admin settings

4. **Start development server**
   ```bash
   npm run dev
   ```
   Backend will be available at `http://localhost:5000`

5. **Production start**
   ```bash
   npm start
   ```

## 🗄️ Database Setup

### MongoDB Local Setup
```bash
# Install MongoDB Community Edition
# Start MongoDB service
mongod

# Connect using MongoDB Compass or CLI
mongo
```

### MongoDB Atlas Setup
1. Create account at [mongodb.com/atlas](https://mongodb.com/atlas)
2. Create a new cluster
3. Get connection string
4. Add to `.env`: `MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio`

## 📧 Email Configuration

### Gmail Setup
1. Enable 2-factor authentication
2. Create App Password at [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Add to `.env`:
   ```
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   ```

### Custom SMTP Setup
Add to `.env`:
```
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@example.com
SMTP_PASSWORD=your-password
```

## 🎨 Features

### Frontend Features
- **Responsive Navigation**: Mobile-friendly navbar with smooth scrolling
- **Hero Section**: Impressive introduction with CTAs
- **About Section**: Education timeline and personal info
- **Skills Section**: Categorized skills with certifications
- **Projects Section**: Portfolio projects with descriptions
- **Contact Form**: Fully functional contact form with validation
- **Animations**: Smooth fade-in, slide-in, and scroll effects
- **Dark Theme**: Modern dark UI with gradient accents

### Backend Features
- **Contact API**: RESTful endpoint for form submissions
- **Data Validation**: Comprehensive input validation
- **Email Notifications**: Automated emails to user and admin
- **Error Handling**: Proper error messages and logging
- **Database Integration**: MongoDB for persistent storage
- **Health Check**: API health status endpoint
- **Security**: CORS configured, input sanitization

## 📝 API Endpoints

### Contact Routes
```
POST   /contact              - Submit contact form
GET    /contact              - Get all messages (admin)
GET    /contact/:id          - Get single message (admin)
PUT    /contact/:id          - Update message status (admin)
DELETE /contact/:id          - Delete message (admin)
```

### Health Check
```
GET    /health               - Server health status
```

## 🔐 Environment Variables

### Backend `.env` File
```
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
MONGODB_URI=mongodb://localhost:27017/portfolio
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
ADMIN_EMAIL=pvsushanthpv@gmail.com
ADMIN_KEY=your-secure-key
```

## 🧪 Testing

### Test Contact Form
1. Fill out form on Contact section
2. Submit and receive confirmation email
3. Check MongoDB for stored message

### Test API
```bash
# Health check
curl http://localhost:5000/health

# Submit contact
curl -X POST http://localhost:5000/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Hello",
    "message": "This is a test message"
  }'
```

## 🌐 Deployment

### Frontend Deployment (Vercel)
1. Push code to GitHub
2. Connect repository to Vercel
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Deploy!

### Backend Deployment (Render/Railway)
1. Push code to GitHub
2. Connect to deployment platform
3. Set start command: `npm start`
4. Add environment variables
5. Deploy!

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment guide.

## 🔧 Technologies Used

### Frontend
- React 18.2
- Vite 5.0
- Tailwind CSS 3.4
- Axios for API calls
- Lucide React for icons

### Backend
- Node.js
- Express 4.18
- MongoDB + Mongoose
- Nodemailer for emails
- CORS for security

### DevTools
- Nodemon for auto-reload
- npm/yarn for package management

## 📚 Project Sections

### Hero Section
Impressive introduction with:
- Avatar/profile image
- Full name and tagline
- Social media links
- Call-to-action buttons
- Scroll indicator

### About Section
Displays:
- Personal summary
- Current CGPA
- Technical expertise
- Cloud platforms
- Education timeline

### Skills Section
Showcases:
- Programming languages
- Frameworks
- Databases
- Soft skills
- Cloud platforms
- Certifications
- Tech stack overview

### Projects Section
Highlights:
- Project title and description
- Key features
- Technology stack
- Live demo links
- GitHub repository

### Contact Section
Includes:
- Contact information cards
- Functional contact form
- Email validation
- Success/error messages
- Alternative contact method

### Footer
Contains:
- Quick links
- Social connections
- Copyright information
- Source code link

## 🎓 Learning Outcomes

This project covers:
- Full-stack development workflow
- Frontend: React component structure and state management
- Backend: RESTful API design and Express.js
- Database: MongoDB schema design and queries
- Responsive design principles
- Email integration
- Error handling and validation
- Deployment strategies
- Security best practices

## 🤝 Contributing

Feel free to fork and submit pull requests for any improvements!

## 📄 License

MIT License - feel free to use this project for learning and development.

## 📞 Contact

- Email: [pvsushanthpv@gmail.com](mailto:pvsushanthpv@gmail.com)
- GitHub: [github.com/SUSHANTHPVS](https://github.com/SUSHANTHPVS)
- LinkedIn: [linkedin.com/in/sushanth-p-v-67290a31b](https://linkedin.com/in/sushanth-p-v-67290a31b)

## 🎯 Next Steps

1. ✅ Clone/Fork the repository
2. ✅ Install dependencies
3. ✅ Configure environment variables
4. ✅ Start development servers
5. ✅ Test all features
6. ✅ Deploy to production
7. ✅ Monitor and maintain

---

Made with ❤️ by P.V. Sushanth
