import mongoose from 'mongoose'

const contactMessageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide your name'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters']
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please provide a valid email'
      ]
    },
    subject: {
      type: String,
      required: [true, 'Please provide a subject'],
      trim: true,
      minlength: [3, 'Subject must be at least 3 characters']
    },
    message: {
      type: String,
      required: [true, 'Please provide a message'],
      minlength: [10, 'Message must be at least 10 characters']
    },
    status: {
      type: String,
      enum: ['new', 'read', 'replied'],
      default: 'new'
    },
    isSpam: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
)

// Index for better query performance
contactMessageSchema.index({ email: 1 })
contactMessageSchema.index({ createdAt: -1 })
contactMessageSchema.index({ status: 1 })

export default mongoose.model('ContactMessage', contactMessageSchema)
