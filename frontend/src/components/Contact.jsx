import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import axios from 'axios'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSubmitStatus(null)

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000'
      const response = await axios.post(`${apiUrl}/contact`, formData)
      setSubmitStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' })
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: error.response?.data?.message || 'Failed to send message. Please try again.' 
      })
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "pvsushanthpv@gmail.com",
      link: "mailto:pvsushanthpv@gmail.com"
    },
    {
      icon: Phone,
      label: "GitHub",
      value: "SUSHANTHPVS",
      link: "https://github.com/SUSHANTHPVS"
    },
    {
      icon: MapPin,
      label: "LinkedIn",
      value: "sushanth-p-v-67290a31b",
      link: "https://linkedin.com/in/sushanth-p-v-67290a31b"
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Get In Touch</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon
            return (
              <a 
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card text-center group hover:border-indigo-600 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <IconComponent className="mx-auto text-indigo-600 mb-4 group-hover:scale-110 transition" size={32} />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{info.label}</h3>
                <p className="text-slate-600 break-all group-hover:text-indigo-600 transition">{info.value}</p>
              </a>
            )
          })}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="card animate-fade-in-up">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:border-indigo-600 focus:outline-none transition text-slate-900 placeholder-gray-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:border-indigo-600 focus:outline-none transition text-slate-900 placeholder-gray-400"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-slate-900 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:border-indigo-600 focus:outline-none transition text-slate-900 placeholder-gray-400"
                placeholder="Message subject"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:border-indigo-600 focus:outline-none transition text-slate-900 placeholder-gray-400 resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>

            {submitStatus && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitStatus.type === 'success' 
                  ? 'bg-green-50 border border-green-300 text-green-700' 
                  : 'bg-red-50 border border-red-300 text-red-700'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : <>
                <Send size={20} />
                Send Message
              </>}
            </button>
          </form>

          {/* Alternative Contact Method */}
          <div className="mt-8 p-6 bg-gray-100 rounded-lg text-center border border-gray-300">
            <p className="text-slate-600 mb-3">Prefer direct contact?</p>
            <a 
              href="mailto:pvsushanthpv@gmail.com"
              className="inline-block btn-primary"
            >
              Email Me Directly
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
