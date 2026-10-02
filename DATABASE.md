# Database Setup Guide

## 📊 Database Architecture

This portfolio uses MongoDB for storing contact form submissions and future data needs.

```
Portfolio Database
├── ContactMessages Collection
│   ├── name (String, required)
│   ├── email (String, required, indexed)
│   ├── subject (String, required)
│   ├── message (String, required)
│   ├── status (Enum: new, read, replied)
│   ├── isSpam (Boolean)
│   ├── createdAt (Date, indexed)
│   └── updatedAt (Date)
└── Indexes
    ├── email_1 (for quick email lookup)
    ├── createdAt_-1 (for sorting by date)
    └── status_1 (for filtering by status)
```

## 🚀 Database Setup Options

### Option 1: Local MongoDB Installation

#### Windows
1. Download installer from [mongodb.com/try/download/community](https://mongodb.com/try/download/community)
2. Run the installer and follow prompts
3. Choose "Install MongoDB as a Service"
4. Start MongoDB:
   ```bash
   net start MongoDB
   ```

#### macOS
```bash
# Using Homebrew
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

#### Linux (Ubuntu)
```bash
curl -fsSL https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo systemctl start mongod
```

### Option 2: MongoDB Atlas (Cloud)

#### Setup Steps
1. Go to [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new organization and project
4. Deploy a cluster:
   - Choose "Shared" (free tier)
   - Select cloud provider and region
   - Click "Create Cluster"
5. Set up security:
   - Add username and password
   - Add IP whitelist (or use 0.0.0.0/0 for development)
6. Get connection string:
   - Click "Connect"
   - Choose "Connect your application"
   - Copy MongoDB URI
7. Update `.env`:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
   ```

## 📝 Collection Schema

### ContactMessage Schema

```javascript
{
  _id: ObjectId,
  name: {
    type: String,
    required: true,
    minlength: 2,
    trim: true
  },
  email: {
    type: String,
    required: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    lowercase: true,
    trim: true
  },
  subject: {
    type: String,
    required: true,
    minlength: 3,
    trim: true
  },
  message: {
    type: String,
    required: true,
    minlength: 10
  },
  status: {
    type: String,
    enum: ['new', 'read', 'replied'],
    default: 'new'
  },
  isSpam: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now,
    index: -1
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}
```

## 🔍 Database Queries

### Using MongoDB CLI

```bash
# Connect to local MongoDB
mongo

# or with URI
mongo "mongodb://localhost:27017/portfolio"
```

### Common Queries

```javascript
// Show all databases
show dbs

// Use portfolio database
use portfolio

// Show collections
show collections

// Find all messages
db.contactmessages.find()

// Find unread messages
db.contactmessages.find({ status: 'new' })

// Find messages from specific user
db.contactmessages.find({ email: 'user@example.com' })

// Count total messages
db.contactmessages.countDocuments()

// Update message status
db.contactmessages.updateOne(
  { _id: ObjectId("...") },
  { $set: { status: 'read' } }
)

// Delete old messages (older than 30 days)
db.contactmessages.deleteMany({
  createdAt: {
    $lt: new Date(new Date().setDate(new Date().getDate() - 30))
  }
})
```

## 🛠️ Database Management Tools

### MongoDB Compass (GUI)
1. Download from [mongodb.com/products/tools/compass](https://mongodb.com/products/tools/compass)
2. Install and open
3. Connect to your MongoDB URI
4. Browse and manage collections visually

### MongoDB Atlas UI
- Access through dashboard
- View collections
- Run queries
- Monitor performance
- Set up alerts

### Command Line (mongosh)
```bash
# Install MongoDB Shell
npm install -g mongosh

# Connect
mongosh "mongodb://localhost:27017/portfolio"
```

## 📊 Indexing Strategy

### Created Indexes
```javascript
// Email index for quick lookups
db.contactmessages.createIndex({ email: 1 })

// Date index for sorting
db.contactmessages.createIndex({ createdAt: -1 })

// Status index for filtering
db.contactmessages.createIndex({ status: 1 })
```

### Performance Optimization
- Indexes significantly speed up queries
- Use for frequently filtered/sorted fields
- Monitor index performance in Atlas dashboard

## 🔒 Security Best Practices

### Connection Security
- ✅ Use strong passwords (12+ characters)
- ✅ Enable IP whitelist (specific IPs in production)
- ✅ Use HTTPS for all connections
- ✅ Rotate credentials regularly
- ✅ Never commit `.env` file

### Data Security
- ✅ Validate all input on backend
- ✅ Use parameterized queries
- ✅ Implement rate limiting
- ✅ Encrypt sensitive data in transit
- ✅ Regular backups

### Atlas Configuration
```
Security > Network Access
  ├── IP Whitelist
  └── Add specific IPs for production

Security > Database Access
  ├── Create user with limited privileges
  └── Use strong passwords

Backup & Restore
  ├── Enable automated backups
  └── Test restore procedures
```

## 📈 Monitoring & Maintenance

### Atlas Monitoring
- CPU usage
- Memory consumption
- Network throughput
- Operations per second
- Disk space

### Regular Tasks
1. Monitor database size
2. Check error logs
3. Review slow queries
4. Clean up old data
5. Update indexes as needed

## 🔄 Data Migration

### Export Data
```bash
# Export collection to JSON
mongoexport --uri "mongodb://localhost:27017/portfolio" \
  --collection contactmessages \
  --out contactmessages.json
```

### Import Data
```bash
# Import data from JSON
mongoimport --uri "mongodb://localhost:27017/portfolio" \
  --collection contactmessages \
  --file contactmessages.json
```

## 🆘 Troubleshooting

### Connection Issues
```
Error: connect ECONNREFUSED 127.0.0.1:27017

Solution:
1. Check if MongoDB is running
2. Verify connection URI
3. Check firewall settings
4. Ensure correct port (27017 default)
```

### Authentication Errors
```
Error: authentication failed

Solution:
1. Verify username and password
2. Check database exists
3. Confirm user has database access
4. Check IP whitelist (Atlas)
```

### Storage Issues
```
Error: database size exceeds limit

Solution:
1. Delete old data
2. Compress collections
3. Archive data to backup
4. Upgrade plan (Atlas)
```

## 📚 Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB Atlas Guide](https://docs.atlas.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [MongoDB University](https://university.mongodb.com/)

## ✅ Verification Checklist

- [ ] MongoDB installed and running
- [ ] Database created: "portfolio"
- [ ] Collection created: "contactmessages"
- [ ] Indexes created
- [ ] Connection test successful
- [ ] `.env` file configured
- [ ] Backend can connect to database
- [ ] Contact form saves messages
- [ ] Email notifications working

---

For more help, refer to the main [README.md](./README.md) or contact support.
