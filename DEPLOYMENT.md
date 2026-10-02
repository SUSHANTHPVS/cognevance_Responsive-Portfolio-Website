# Deployment Guide

Complete guide to deploy your portfolio website to production.

## 🎯 Deployment Architecture

```
┌─────────────────────────────────────────┐
│       Frontend Deployment (Vercel)      │
│  ├─ React SPA (dist folder)             │
│  ├─ Global CDN                          │
│  └─ Auto-deploy from Git push           │
└──────────────────┬──────────────────────┘
                   │ API Calls
┌──────────────────▼──────────────────────┐
│      Backend Deployment (Render/Railway) │
│  ├─ Node.js + Express                   │
│  ├─ Environment Variables               │
│  └─ Auto-deploy from Git push           │
└──────────────────┬──────────────────────┘
                   │ Database Queries
┌──────────────────▼──────────────────────┐
│    Database (MongoDB Atlas)              │
│  ├─ Cloud MongoDB Instance              │
│  ├─ Automated Backups                   │
│  └─ Global Replication                  │
└─────────────────────────────────────────┘
```

## 📦 Frontend Deployment

### Option 1: Vercel (Recommended)

#### Prerequisites
- GitHub account with repository
- Vercel account

#### Deployment Steps

1. **Push to GitHub**
   ```bash
   cd frontend
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio-frontend.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure Build Settings**
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Environment Variables: None needed for frontend

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site is live!

5. **Continuous Deployment**
   - Every push to main branch triggers auto-deploy
   - Vercel provides free SSL certificate
   - Preview deployments for PRs

#### Post-Deployment
```bash
# Update backend URL in frontend
# Environment variable or config: VITE_API_URL
```

### Option 2: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect GitHub
4. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy

### Option 3: GitHub Pages

```bash
cd frontend

# Add deployment script to package.json
npm install --save-dev gh-pages

# Build and deploy
npm run build
npm run deploy
```

## 🖥️ Backend Deployment

### Option 1: Render (Recommended)

#### Prerequisites
- GitHub account with backend repository
- Render account

#### Deployment Steps

1. **Prepare Repository**
   ```bash
   cd backend
   
   # Ensure package.json has start script
   # "start": "node server.js"
   
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio-backend.git
   git push -u origin main
   ```

2. **Create New Web Service**
   - Go to [render.com](https://render.com)
   - Click "New" → "Web Service"
   - Connect GitHub repository
   - Click "Create Web Service"

3. **Configure Service**
   - **Name**: portfolio-backend
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free (or paid)

4. **Add Environment Variables**
   - Click "Environment"
   - Add all variables from `.env.example`:
   ```
   PORT=5000
   NODE_ENV=production
   MONGODB_URI=your-mongodb-uri
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   ADMIN_EMAIL=your-email@gmail.com
   ADMIN_KEY=secure-key
   FRONTEND_URL=https://your-domain.com
   ```

5. **Deploy**
   - Service starts automatically
   - Get your service URL
   - Monitor logs in dashboard

### Option 2: Railway

1. Go to [railway.app](https://railway.app)
2. Click "New Project"
3. Connect GitHub
4. Select backend repository
5. Configure environment variables
6. Deploy

### Option 3: Heroku (Legacy)

```bash
# Install Heroku CLI
npm install -g heroku

# Login
heroku login

# Create app
heroku create your-app-name

# Add buildpack
heroku buildpacks:set heroku/nodejs

# Set environment variables
heroku config:set MONGODB_URI=your-uri
heroku config:set EMAIL_USER=your-email

# Deploy
git push heroku main
```

## 📊 Environment Configuration

### Frontend Environment (`.env.production`)
```
VITE_API_URL=https://portfolio-backend.onrender.com
VITE_ENABLE_ANALYTICS=true
```

### Backend Environment (`.env.production`)
```
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
ADMIN_EMAIL=your-email@gmail.com
ADMIN_KEY=very-secure-key
FRONTEND_URL=https://your-domain.com
```

## 🌐 Domain Setup

### Connect Custom Domain to Frontend (Vercel)

1. Go to Vercel Dashboard
2. Select your project
3. Settings → Domains
4. Add your domain (example.com)
5. Update DNS records:
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com
6. Verify and activate

### Connect Custom Domain to Backend (Render)

1. Go to Render Dashboard
2. Select your service
3. Settings → Custom Domain
4. Add your API domain (api.example.com)
5. Update DNS:
   - Type: CNAME
   - Name: api
   - Value: your-render-domain.onrender.com
6. Verify

## 🔐 HTTPS & SSL

### Automatic (Recommended)
- Vercel: Automatic free SSL
- Render: Automatic free SSL
- Provides HTTPS for all traffic

### Manual
- Use Let's Encrypt (free)
- Certbot for certificate management
- Auto-renewal

## 🔗 Connect Frontend to Backend

### Update API URL in Contact Component

Edit `frontend/src/components/Contact.jsx`:
```javascript
// Change from:
const response = await axios.post('/api/contact', formData)

// To (in production):
const API_URL = process.env.VITE_API_URL || 'http://localhost:5000'
const response = await axios.post(`${API_URL}/contact`, formData)
```

### Configure CORS in Backend

Update `backend/server.js`:
```javascript
const allowedOrigins = [
  'http://localhost:5173',
  'https://your-domain.com',
  'https://www.your-domain.com'
]

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}))
```

## 📈 Monitoring & Maintenance

### Vercel Monitoring
- Analytics dashboard
- Real-time metrics
- Error tracking
- Performance insights

### Render Monitoring
- Logs and debugging
- Metrics and graphs
- Deployment history
- Auto-scaling

### Health Checks
```bash
# Test backend health
curl https://api.example.com/health

# Test contact endpoint
curl -X POST https://api.example.com/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","subject":"Test","message":"Test message"}'
```

## 🚨 Troubleshooting

### Frontend Issues

**Blank page**
- Check browser console for errors
- Verify API URL is correct
- Check network tab for CORS errors

**API calls failing**
- Verify CORS settings on backend
- Check frontend environment variables
- Ensure backend is running

### Backend Issues

**500 errors**
- Check server logs
- Verify environment variables
- Test database connection

**Connection timeout**
- Check service is running
- Verify resource limits
- Review scaling settings

**Email not sending**
- Check email credentials
- Verify SMTP configuration
- Check admin email settings

## 📝 Pre-Deployment Checklist

**Frontend**
- [ ] Build successful (`npm run build`)
- [ ] No console errors
- [ ] API endpoints correctly configured
- [ ] Environment variables set
- [ ] Git repository ready
- [ ] .gitignore configured

**Backend**
- [ ] All dependencies installed
- [ ] .env file configured
- [ ] Database connection tested
- [ ] Email service configured
- [ ] Health check working
- [ ] CORS configured correctly
- [ ] Git repository ready

**Database**
- [ ] MongoDB cluster created
- [ ] User credentials set
- [ ] IP whitelist configured
- [ ] Backup enabled
- [ ] Collections created

**General**
- [ ] Custom domain configured
- [ ] SSL certificates valid
- [ ] Error logging enabled
- [ ] Analytics configured
- [ ] Monitoring alerts set

## 🚀 Production Launch

### Day Before
- [ ] Run full test suite
- [ ] Test contact form end-to-end
- [ ] Verify all links work
- [ ] Check mobile responsiveness
- [ ] Test on multiple browsers

### Deployment Day
- [ ] Deploy backend first
- [ ] Run health checks
- [ ] Deploy frontend
- [ ] Run smoke tests
- [ ] Monitor logs
- [ ] Have rollback plan

### Post-Deployment
- [ ] Monitor error logs
- [ ] Test all features
- [ ] Verify email notifications
- [ ] Check performance metrics
- [ ] Gather feedback

## 📊 Performance Optimization

### Frontend
- Minify CSS/JS
- Optimize images
- Enable gzip compression
- Use CDN
- Lazy load components

### Backend
- Enable caching
- Use database indexes
- Implement rate limiting
- Monitor response times
- Optimize queries

### Database
- Create appropriate indexes
- Archive old data
- Monitor query performance
- Set connection pooling

## 🔄 CI/CD Pipeline

### GitHub Actions Example

`.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run test
      - name: Deploy to Vercel
        run: npx vercel --prod
```

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Render Documentation](https://render.com/docs)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [Express.js Deployment](https://expressjs.com/en/advanced/best-practice-performance.html)
- [React Deployment](https://react.dev/learn/start-a-new-react-project#production-grade-react-frameworks)

## ✅ Deployment Verification

After deployment, verify:
1. ✅ Frontend loads correctly
2. ✅ Navigation works
3. ✅ Contact form submits
4. ✅ Confirmation email received
5. ✅ Database stores messages
6. ✅ Mobile responsive
7. ✅ No console errors
8. ✅ API endpoints respond
9. ✅ HTTPS working
10. ✅ Performance acceptable

---

Congratulations! Your portfolio is live! 🎉

For more help, see [README.md](./README.md) or [DATABASE.md](./DATABASE.md)
