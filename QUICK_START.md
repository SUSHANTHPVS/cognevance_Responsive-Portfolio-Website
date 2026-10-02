# 🚀 Quick Start Guide

Get your portfolio website up and running in 10 minutes!

## ⚡ Prerequisites

- Node.js v16+ ([download](https://nodejs.org/))
- MongoDB ([local](https://mongodb.com/try/download/community) or [Atlas](https://mongodb.com/cloud/atlas))
- Git

## 🎯 5-Minute Setup

### Step 1: Clone or Extract Project
```bash
cd "FULL STACK WEB DEVELOPER INTERNSHIP\Responsive Portfolio Website"
```

### Step 2: Setup Backend (Terminal 1)
```bash
cd backend
npm install
cp .env.example .env
```

Edit `.env`:
```
MONGODB_URI=mongodb://localhost:27017/portfolio
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

Start backend:
```bash
npm run dev
# Server running on http://localhost:5000
```

### Step 3: Setup Frontend (Terminal 2)
```bash
cd frontend
npm install
npm run dev
# Frontend running on http://localhost:5173
```

### Step 4: Test
1. Open http://localhost:5173
2. Fill out contact form
3. Submit and check console/email

## 📋 Complete Setup Checklist

### Backend
- [ ] `cd backend`
- [ ] `npm install`
- [ ] Create `.env` file from `.env.example`
- [ ] Configure MongoDB URI
- [ ] Configure email credentials
- [ ] `npm run dev`
- [ ] Verify: http://localhost:5000/health ✅

### Frontend
- [ ] `cd frontend`
- [ ] `npm install`
- [ ] `npm run dev`
- [ ] Verify: http://localhost:5173 loads ✅

### Database
- [ ] MongoDB running locally OR
- [ ] MongoDB Atlas connection string in `.env`

### Email
- [ ] Gmail: App password created OR
- [ ] Custom SMTP configured

## 🧪 Quick Tests

### Test Backend API
```bash
# Health check
curl http://localhost:5000/health

# Contact form
curl -X POST http://localhost:5000/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test",
    "message": "This is a test message from API"
  }'
```

### Test Frontend
1. Navigate to http://localhost:5173
2. Scroll through all sections
3. Fill and submit contact form
4. Should see success message
5. Check MongoDB for stored message

## 🎨 Customize Portfolio

### Update Personal Info
Edit `frontend/src/components/Hero.jsx`:
```javascript
<h1 className="text-5xl sm:text-7xl font-bold mb-6 gradient-text">
  YOUR NAME HERE
</h1>
```

### Update Contact Links
Edit `frontend/src/components/Hero.jsx`:
```javascript
<a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">
```

### Update Projects
Edit `frontend/src/components/Projects.jsx`:
```javascript
const projects = [
  {
    title: "Your Project",
    description: "Your description",
    // ... more fields
  }
]
```

### Update Skills
Edit `frontend/src/components/Skills.jsx`:
```javascript
const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: ["Your", "Skills", "Here"]
  }
]
```

## 📱 Development Features

### Auto-Reload
- Frontend: Changes auto-reload (Vite)
- Backend: Changes auto-reload (Nodemon)

### Responsive Testing
1. Open DevTools (F12)
2. Toggle device toolbar
3. Test on Mobile, Tablet, Desktop

### Network Debugging
- Open DevTools
- Network tab
- Watch API calls in real-time
- Check response data

## 🔐 Environment Variables Guide

### Backend `.env`
```
# Server
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/portfolio

# Email (Gmail)
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password

# Admin
ADMIN_EMAIL=your-email@gmail.com
ADMIN_KEY=your-secure-key
```

### Gmail Setup
1. Enable 2-Factor Authentication
2. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Select "Mail" and "Windows Computer"
4. Copy the generated password
5. Paste into `EMAIL_PASSWORD`

## 🐛 Common Issues & Solutions

### "Cannot find module" Error
```bash
# Solution: Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### "MongoDB connection error"
```bash
# Solution 1: Ensure MongoDB is running
mongod

# Solution 2: Check connection string in .env
MONGODB_URI=mongodb://localhost:27017/portfolio
```

### "CORS error" when submitting form
```bash
# Solution: Update FRONTEND_URL in backend .env
FRONTEND_URL=http://localhost:5173
```

### "Email not sending"
```bash
# Solution: Verify credentials
# 1. Check EMAIL_USER and EMAIL_PASSWORD
# 2. Gmail: Use app password, not account password
# 3. Test: Send test email
```

### Port already in use
```bash
# Frontend port 5173
npx kill-port 5173

# Backend port 5000
npx kill-port 5000
```

## 📚 Project Structure Quick Reference

```
project/
├── frontend/
│   ├── src/components/      ← Update portfolio content
│   ├── src/index.css        ← Styling
│   ├── package.json         ← Dependencies
│   └── vite.config.js       ← Vite config
├── backend/
│   ├── models/              ← Database schemas
│   ├── routes/              ← API endpoints
│   ├── server.js            ← Main server file
│   ├── .env                 ← Configuration
│   └── package.json         ← Dependencies
├── README.md                ← Full documentation
├── DATABASE.md              ← Database guide
└── DEPLOYMENT.md            ← Deployment guide
```

## 🚀 Next Steps

1. ✅ Get it running locally
2. ✅ Customize with your info
3. ✅ Test all features
4. 📦 Build for production: `npm run build`
5. 🌐 Deploy to Vercel (frontend) + Render (backend)
6. 🎉 Share your portfolio!

## 📖 Need More Help?

- Full setup: See [README.md](./README.md)
- Database: See [DATABASE.md](./DATABASE.md)
- Deployment: See [DEPLOYMENT.md](./DEPLOYMENT.md)

## 💡 Pro Tips

1. **Use MongoDB Compass** for visual database management
2. **Use Postman** to test API endpoints
3. **Use VS Code Extensions**: ES7+ snippets, Prettier, Thunder Client
4. **Version Control**: Commit frequently with clear messages
5. **Test Emails**: Use [Mailtrap](https://mailtrap.io) for email testing

---

## ⏱️ Estimated Time

- Setup: 5 minutes
- Customization: 10 minutes
- Testing: 5 minutes
- **Total: ~20 minutes** ⚡

Ready? Let's go! 🎯

For issues, check [README.md](./README.md) troubleshooting section.
