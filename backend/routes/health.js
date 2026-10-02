import express from 'express'
import mongoose from 'mongoose'

const router = express.Router()

router.get('/', (req, res) => {
  const mongoConnection = mongoose.connection.readyState === 1
  
  res.json({
    success: true,
    status: 'healthy',
    timestamp: new Date().toISOString(),
    database: mongoConnection ? 'connected' : 'disconnected',
    uptime: process.uptime()
  })
})

export default router
