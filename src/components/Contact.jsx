import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineMapPin,
} from 'react-icons/hi2'
import { FaLinkedinIn } from 'react-icons/fa'

const trainingTypes = [
  'Behavioural & Leadership Development',
  'Business Communication & Professional Excellence',
  'Mindset, Attitude & Well-Being Programs',
  'Change Management & Capability Interventions',
  'Customised / Other',
]

const contactInfo = [
  {
    icon: HiOutlinePhone,
    label: 'Phone',
    value: '+91 98114 57457',
    href: 'tel:+919811457457',
  },
  {
    icon: HiOutlineEnvelope,
    label: 'Email',
    value: 'marsmindshift@gmail.com',
    href: 'mailto:marsmindshift@gmail.com',
  },
  {
    icon: HiOutlineMapPin,
    label: 'Location',
    value: 'Ghaziabad, Uttar Pradesh',
    href: 'https://maps.google.com/?q=Ghaziabad,Uttar+Pradesh',
  },
  {
    icon: FaLinkedinIn,
    label: 'LinkedIn',
    value: 'Dr. Shikha Mishra',
    href: 'https://www.linkedin.com/in/dr-shikha-mishra-41821616',
  },
]

const Contact = () => {
  const formRef = useRef()
  const [sending, setSending] = useState(false)
  const [toast, setToast] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    training_type: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)

    try {
      // ⚠️ REPLACE these with your actual EmailJS credentials:
      // 1. Go to https://www.emailjs.com/ and create a free account
      // 2. Create an Email Service (e.g., Gmail)
      // 3. Create an Email Template
      // 4. Get your Public Key from Account > API Keys
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',     // Replace with your EmailJS Service ID
        'YOUR_TEMPLATE_ID',    // Replace with your EmailJS Template ID
        formRef.current,
        'YOUR_PUBLIC_KEY'      // Replace with your EmailJS Public Key
      )

      setToast({ type: 'success', message: 'Message sent successfully! We\'ll get back to you soon.' })
      setFormData({ name: '', email: '', organization: '', training_type: '', message: '' })
    } catch (error) {
      setToast({ type: 'error', message: 'Something went wrong. Please try again or call us directly.' })
    }

    setSending(false)
    setTimeout(() => setToast(null), 5000)
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-0 w-96 h-96 bg-teal/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-mars-blue/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-heading font-semibold text-teal bg-teal/10 rounded-full tracking-wide">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy leading-tight mb-4">
            Let's <span className="gradient-text">Co-Create</span> Solutions
          </h2>
          <p className="text-lg text-slate-500 font-body max-w-2xl mx-auto">
            Ready to transform your people and performance? Reach out and let's discuss
            how we can partner for your organization's growth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-6 bg-gradient-to-br from-navy to-navy-600 rounded-2xl text-white">
              <img src="/logo-full.png" alt="MARS" className="h-12 mb-4 brightness-0 invert" />
              <p className="text-slate-300 font-body text-sm leading-relaxed mb-6">
                Empowering leaders, transforming mindsets, and building organizational excellence
                through research-driven, experiential training solutions.
              </p>
              <div className="space-y-4">
                {contactInfo.map((info, i) => (
                  <a
                    key={i}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-teal/20 transition-colors">
                      <info.icon size={18} className="text-teal" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-heading">{info.label}</p>
                      <p className="text-sm text-white font-heading font-medium group-hover:text-teal transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-heading font-semibold text-navy mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 font-body text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-semibold text-navy mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 font-body text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-heading font-semibold text-navy mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 font-body text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-semibold text-navy mb-2">
                      Type of Training
                    </label>
                    <select
                      name="training_type"
                      value={formData.training_type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 font-body text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all appearance-none"
                    >
                      <option value="">Select a training type</option>
                      {trainingTypes.map((t, i) => (
                        <option key={i} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-heading font-semibold text-navy mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your training needs..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 font-body text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-4 bg-gradient-to-r from-teal to-mars-blue text-white font-heading font-semibold rounded-xl hover:shadow-lg hover:shadow-teal/20 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>

              {/* Toast */}
              {toast && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`mt-4 p-4 rounded-xl text-sm font-heading font-medium ${
                    toast.type === 'success'
                      ? 'bg-teal/10 text-teal border border-teal/20'
                      : 'bg-coral/10 text-coral border border-coral/20'
                  }`}
                >
                  {toast.message}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
