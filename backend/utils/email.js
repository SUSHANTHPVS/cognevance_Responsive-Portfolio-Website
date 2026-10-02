import nodemailer from 'nodemailer'

let transporter

// Initialize email transporter
const initializeTransporter = () => {
  if (process.env.EMAIL_SERVICE === 'gmail') {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    })
  } else if (process.env.SMTP_HOST) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    })
  }
}

// Email templates
const emailTemplates = {
  confirmation: (name) => ({
    subject: 'We Received Your Message!',
    html: `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2>Hello ${name},</h2>
        <p>Thank you for reaching out! I've received your message and will get back to you as soon as possible.</p>
        <p>In the meantime, feel free to:</p>
        <ul>
          <li><a href="https://github.com/SUSHANTHPVS">Check out my GitHub</a></li>
          <li><a href="https://linkedin.com/in/sushanth-p-v-67290a31b">Connect on LinkedIn</a></li>
        </ul>
        <hr />
        <p style="color: #666; font-size: 12px;">
          This is an automated response. Please don't reply to this email.
        </p>
      </div>
    `
  }),
  
  admin: (data) => ({
    subject: `📬 New Portfolio Message from ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2>New Contact Form Submission</h2>
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, '<br>')}</p>
        </div>
        <hr />
        <p style="color: #666; font-size: 12px;">
          Received at: ${new Date().toLocaleString()}
        </p>
      </div>
    `
  })
}

export const sendEmail = async ({ to, subject, template, data }) => {
  try {
    // Initialize transporter if not already done
    if (!transporter) {
      initializeTransporter()
    }

    // If no transporter configured, log message and return
    if (!transporter) {
      console.warn('Email service not configured. Skipping email.')
      return { success: false, message: 'Email service not configured' }
    }

    // Get email template
    const emailTemplate = emailTemplates[template]?.(data) || { html: '' }
    
    const mailOptions = {
      from: process.env.EMAIL_FROM || `"P.V. Sushanth" <${process.env.EMAIL_USER}>`,
      to,
      subject: emailTemplate.subject || subject,
      html: emailTemplate.html
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)
    console.log('✓ Email sent:', info.response)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('✗ Email sending failed:', error.message)
    throw error
  }
}

export const testEmailConnection = async () => {
  try {
    initializeTransporter()
    if (transporter) {
      await transporter.verify()
      console.log('✓ Email service verified successfully')
      return true
    }
    return false
  } catch (error) {
    console.error('✗ Email service verification failed:', error.message)
    return false
  }
}
