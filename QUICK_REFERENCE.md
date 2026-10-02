# 📌 Quick Reference Guide

Essential commands and information for the Responsive Portfolio Website project.

## 🚀 Get Started in 5 Minutes

```bash
# Terminal 1 - Backend
cd backend
npm install
cp .env.example .env
# Edit .env with your settings
npm run dev
# Backend at http://localhost:5000

# Terminal 2 - Frontend
cd frontend
npm install
npm run dev
# Frontend at http://localhost:5173
```

## 📁 Important Directories

```
frontend/
├── src/components/        ← Edit portfolio content here
└── src/index.css         ← Edit styles here

backend/
├── models/               ← Database schemas
├── routes/               ← API endpoints
└── server.js             ← Main server
```

## ⌨️ Common Commands

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run linter
```

### Backend
```bash
npm run dev      # Start with auto-reload (nodemon)
npm start        # Start production server
```

## 📝 File Customization

### Update Your Name (Hero Section)
**File**: `frontend/src/components/Hero.jsx`
```javascript
<h1>YOUR NAME HERE</h1>
```

### Update Social Links
**File**: `frontend/src/components/Hero.jsx`
```javascript
href="https://github.com/YOUR_USERNAME"
href="https://linkedin.com/in/your-profile"
href="mailto:your-email@example.com"
```

### Update Education
**File**: `frontend/src/components/About.jsx`
```javascript
const education = [
  {
    school: "Your School",
    degree: "Your Degree",
    period: "Year - Year",
    cgpa: "X.X / 10.0"
  }
]
```

### Update Skills
**File**: `frontend/src/components/Skills.jsx`
```javascript
const skillCategories = [
  {
    title: "Category Name",
    skills: ["Skill 1", "Skill 2", "Skill 3"]
  }
]
```

### Update Projects
**File**: `frontend/src/components/Projects.jsx`
```javascript
const projects = [
  {
    title: "Project Name",
    description: "Description",
    tech: ["Tech1", "Tech2"],
    features: ["Feature 1", "Feature 2"],
    liveLink: "https://...",
  }
]
```

## 🔐 Environment Variables

### Backend `.env`
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
ADMIN_EMAIL=your-email@gmail.com
ADMIN_KEY=secure-key
```

### Gmail Setup
1. Enable 2-Factor Authentication
2. Visit [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Generate app password
4. Paste into `EMAIL_PASSWORD`

## 🧪 Quick Tests

### Test Backend
```bash
# Health check
curl http://localhost:5000/health

# Submit form
curl -X POST http://localhost:5000/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","subject":"Test","message":"This is a test message"}'
```

### Test Frontend
1. Open http://localhost:5173
2. Test navigation (scroll, menu)
3. Fill and submit contact form
4. Check browser console for errors

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Find and kill process using port
npx kill-port 5173  # Frontend
npx kill-port 5000  # Backend
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### MongoDB Connection Error
```bash
# Start MongoDB
mongod

# Or use MongoDB Atlas connection string in .env
MONGODB_URI=mongodb+srv://username:password@cluster...
```

### CORS Error
```bash
# Update in backend/.env
FRONTEND_URL=http://localhost:5173
```

### Email Not Sending
1. Check EMAIL_USER and EMAIL_PASSWORD
2. Gmail: Use app password, not account password
3. Verify 2FA enabled
4. Check spam folder

## 📚 Documentation Links

| Document | Purpose |
|----------|---------|
| [README.md](./README.md) | Full project documentation |
| [QUICK_START.md](./QUICK_START.md) | Setup guide |
| [DATABASE.md](./DATABASE.md) | Database management |
| [DEPLOYMENT.md](./DEPLOYMENT.md) | Deploy to production |
| [TECHNICAL_SPECS.md](./TECHNICAL_SPECS.md) | Technical details |
| [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) | Project overview |
| [DELIVERABLES.md](./DELIVERABLES.md) | What's included |

## 🌐 Deployment URLs

After deployment, update these:

### Frontend (Vercel)
```
Production: https://your-domain.com
Preview: https://portfolio-frontend-git-main-yourname.vercel.app
```

### Backend (Render)
```
Production: https://portfolio-backend-xxxxx.onrender.com
API: https://portfolio-backend-xxxxx.onrender.com/health
```

## 🔗 API Endpoints Quick Reference

```
POST   /contact           - Submit contact form
GET    /contact           - Get all messages (admin)
GET    /contact/:id       - Get message (admin)
PUT    /contact/:id       - Update status (admin)
DELETE /contact/:id       - Delete (admin)
GET    /health            - Server status
```

## 💻 Tech Stack Summary

### Frontend
- React 18.2
- Vite 5.0
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express 4.18
- MongoDB
- Mongoose
- Nodemailer

## 📊 Performance Tips

### Frontend
- Lazy load images
- Code splitting
- Minify CSS/JS
- Use CDN for assets

### Backend
- Use database indexes
- Enable caching
- Connection pooling
- Rate limiting

### Database
- Create indexes
- Archive old data
- Monitor size
- Regular backups

## 🎨 Styling Reference

### Colors Used
```
Primary: #6366f1 (Indigo)
Secondary: #ec4899 (Pink)
Dark: #0f172a (Slate-950)
Light: #e2e8f0 (Gray-200)
```

### Tailwind Breakpoints
```
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
2xl: 1536px
```

## 🔄 Workflow

1. **Setup**: `npm install` & configure `.env`
2. **Develop**: Make changes, test locally
3. **Test**: Run through all features
4. **Build**: `npm run build`
5. **Deploy**: Push to GitHub, deploy to cloud
6. **Monitor**: Check logs, test endpoints

## 📱 Responsive Testing

### Tools
- Chrome DevTools
- Firefox Developer Edition
- Safari Web Inspector
- Mobile devices

### Test Sizes
- Mobile: 375px, 425px
- Tablet: 768px
- Desktop: 1024px, 1920px

## 🔐 Security Checklist

- [ ] .env not in git
- [ ] Admin key is strong
- [ ] Email password is secure
- [ ] Database has auth
- [ ] CORS configured
- [ ] Input validated
- [ ] No sensitive logs

## 📞 Support Resources

- [MongoDB Docs](https://docs.mongodb.com/)
- [Express Docs](https://expressjs.com/)
- [React Docs](https://react.dev/)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Render Docs](https://render.com/docs)

## 🚀 Deploy Checklist

- [ ] All code committed
- [ ] .env configured
- [ ] Build successful
- [ ] Tests pass
- [ ] No console errors
- [ ] Responsive design works
- [ ] Contact form tested
- [ ] Email configured
- [ ] Database ready
- [ ] Custom domain set

## ⏱️ Estimated Times

| Task | Time |
|------|------|
| Setup | 5 min |
| Customization | 10 min |
| Testing | 5 min |
| Build | 2 min |
| Deploy Frontend | 5 min |
| Deploy Backend | 5 min |
| **Total** | **~30 min** |

## 💡 Pro Tips

1. Use MongoDB Compass for visual database management
2. Use Postman to test API endpoints
3. Use VS Code Live Server for quick HTML testing
4. Commit frequently with clear messages
5. Test on actual mobile device (not just DevTools)
6. Enable GitHub Copilot for faster development
7. Use environment-specific configs
8. Set up GitHub Actions for CI/CD

## 🎯 Next Steps After Setup

1. ✅ Verify everything works locally
2. ✅ Customize with your information
3. ✅ Test contact form thoroughly
4. ✅ Set up GitHub repository
5. ✅ Deploy to Vercel (frontend)
6. ✅ Deploy to Render (backend)
7. ✅ Configure custom domain
8. ✅ Set up monitoring
9. ✅ Share your portfolio!

## 📞 Quick Help

**Problem**: Can't connect to MongoDB
**Solution**: 
- Ensure mongod is running: `mongod`
- Check connection string in .env
- Verify database exists

**Problem**: Contact form not submitting
**Solution**:
- Check frontend console for errors
- Verify backend is running
- Check CORS settings
- Verify API URL is correct

**Problem**: Emails not sending
**Solution**:
- Verify email credentials
- For Gmail, use app password
- Check spam folder
- Verify SMTP settings

**Problem**: Styles not loading
**Solution**:
- Clear browser cache
- Rebuild frontend: `npm run build`
- Check Tailwind config
- Verify CSS imports

## 📊 File Size Reference

| Component | Size |
|-----------|------|
| React bundle | ~50KB |
| Tailwind CSS | ~15KB |
| Icons (lucide) | ~10KB |
| Total Frontend (gzipped) | ~200KB |
| Backend (uncompressed) | ~100KB |

## 🏁 Ready?

You have everything you need! Start with:

```bash
cd frontend && npm run dev
# In another terminal
cd backend && npm run dev
```

Then visit http://localhost:5173 and enjoy! 🎉

---

**Last Updated**: 2026-10-02
**Quick Reference v1.0**
