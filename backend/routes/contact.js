import express from 'express'
import ContactMessage from '../models/ContactMessage.js'
import { sendEmail } from '../utils/email.js'

const router = express.Router()

// POST - Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields'
      })
    }

    // Basic email validation
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      })
    }

    // Message length validation
    if (message.length < 10) {
      return res.status(400).json({
        success: false,
        message: 'Message must be at least 10 characters long'
      })
    }

    // Create new contact message
    const contactMessage = new ContactMessage({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      subject: subject.trim(),
      message: message.trim()
    })

    // Save to database
    await contactMessage.save()

    // Send confirmation email to user
    try {
      await sendEmail({
        to: email,
        subject: `Message Received: ${subject}`,
        template: 'confirmation',
        data: { name: name.split(' ')[0] }
      })
    } catch (emailError) {
      console.error('Confirmation email failed:', emailError.message)
      // Don't fail the request if email fails
    }

    // Send notification email to admin
    try {
      await sendEmail({
        to: process.env.ADMIN_EMAIL || 'pvsushanthpv@gmail.com',
        subject: `New Contact Form Submission: ${subject}`,
        template: 'admin',
        data: { name, email, subject, message }
      })
    } catch (emailError) {
      console.error('Admin notification email failed:', emailError.message)
    }

    res.status(201).json({
      success: true,
      message: 'Message received! I\'ll get back to you soon.',
      data: {
        id: contactMessage._id,
        timestamp: contactMessage.createdAt
      }
    })
  } catch (error) {
    console.error('Contact form error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to submit message. Please try again later.'
    })
  }
})

// GET - Get all contact messages (admin only)
router.get('/', async (req, res) => {
  try {
    // In production, add authentication middleware here
    const adminKey = req.headers['x-admin-key']
    if (adminKey !== process.env.ADMIN_KEY) {
      return res.status(403).json({
        success: false,
        message: 'Unauthorized'
      })
    }

    const messages = await ContactMessage.find()
      .sort({ createdAt: -1 })
      .lean()

    res.json({
      success: true,
      data: messages,
      count: messages.length
    })
  } catch (error) {
    console.error('Get messages error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch messages'
    })
  }
})

// GET - Get single message (admin only)
router.get('/:id', async (req, res) => {
  try {
    const adminKey = req.headers['x-admin-key']
    if (adminKey !== process.env.ADMIN_KEY) {
      return res.status(403).json({
        success: false,
        message: 'Unauthorized'
      })
    }

    const message = await ContactMessage.findById(req.params.id)
    if (!message) {
      return res.status(404).json({
        success: false,
        message: 'Message not found'
      })
    }

    // Mark as read
    message.status = 'read'
    await message.save()

    res.json({
      success: true,
      data: message
    })
  } catch (error) {
    console.error('Get message error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch message'
    })
  }
})

// PUT - Update message status (admin only)
router.put('/:id', async (req, res) => {
  try {
    const adminKey = req.headers['x-admin-key']
    if (adminKey !== process.env.ADMIN_KEY) {
      return res.status(403).json({
        success: false,
        message: 'Unauthorized'
      })
    }

    const { status } = req.body
    if (!['new', 'read', 'replied'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status'
      })
    }

    const message = await ContactMessage.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    )

    if (!message) {
      return res.status(404).json({
        success: false,
        message: 'Message not found'
      })
    }

    res.json({
      success: true,
      data: message
    })
  } catch (error) {
    console.error('Update message error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to update message'
    })
  }
})

// DELETE - Delete message (admin only)
router.delete('/:id', async (req, res) => {
  try {
    const adminKey = req.headers['x-admin-key']
    if (adminKey !== process.env.ADMIN_KEY) {
      return res.status(403).json({
        success: false,
        message: 'Unauthorized'
      })
    }

    const message = await ContactMessage.findByIdAndDelete(req.params.id)
    if (!message) {
      return res.status(404).json({
        success: false,
        message: 'Message not found'
      })
    }

    res.json({
      success: true,
      message: 'Message deleted successfully'
    })
  } catch (error) {
    console.error('Delete message error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to delete message'
    })
  }
})

export default router
