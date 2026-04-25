import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX } from 'react-icons/hi'
import {
  HiOutlineLightBulb,
  HiOutlineChatBubbleLeftRight,
  HiOutlineHeart,
  HiOutlineCog6Tooth,
} from 'react-icons/hi2'

const services = [
  {
    icon: HiOutlineLightBulb,
    title: 'Behavioural & Leadership Development',
    short: 'High-impact programs strengthening leadership presence, emotional intelligence, and people management.',
    full: 'We design and deliver high-impact programs that strengthen leadership presence, emotional intelligence, decision-making, and people management capabilities across all leadership levels. Our approach blends experiential learning with research-driven frameworks to create lasting behavioural transformation.',
    color: 'from-mars-blue to-teal',
    accent: '#00B4D8',
  },
  {
    icon: HiOutlineChatBubbleLeftRight,
    title: 'Business Communication & Professional Excellence',
    short: 'Enhancing business communication, confidence, corporate etiquette, and presentation skills.',
    full: 'Our interventions enhance business communication, interpersonal effectiveness, confidence, corporate etiquette, and presentation skills for impactful workplace interactions. From boardroom presentations to cross-cultural communication, we equip professionals with tools for excellence.',
    color: 'from-mars-green to-teal',
    accent: '#8BC34A',
  },
  {
    icon: HiOutlineHeart,
    title: 'Mindset, Attitude & Well-Being Programs',
    short: 'Cultivating positive attitude, resilience, happiness, and adaptability for high-performance environments.',
    full: 'We help professionals cultivate positive attitude, resilience, happiness, and adaptability to thrive in high-pressure, fast-changing environments. Our well-being programs address the whole person — mind, motivation, and mindset — for sustainable performance.',
    color: 'from-coral to-mars-orange',
    accent: '#FF6B6B',
  },
  {
    icon: HiOutlineCog6Tooth,
    title: 'Change Management & Capability Interventions',
    short: 'Supporting organisations with competency mapping, performance management, coaching & OD initiatives.',
    full: 'We support organisations with competency mapping, performance management, goal setting, change management, TNA, coaching, mentoring, and organisation development initiatives. Our strategic interventions drive capability building at scale.',
    color: 'from-mars-pink to-coral',
    accent: '#E91E8C',
  },
]

const Services = () => {
  const [activeService, setActiveService] = useState(null)

  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/80 to-white" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-mars-blue/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-mars-pink/5 rounded-full blur-[80px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-heading font-semibold text-coral bg-coral/10 rounded-full tracking-wide">
            OUR SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy leading-tight mb-4">
            What We <span className="gradient-text-warm">Deliver</span>
          </h2>
          <p className="text-lg text-slate-500 font-body max-w-2xl mx-auto">
            Comprehensive training solutions designed to unlock human potential
            and drive organizational transformation.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onClick={() => setActiveService(service)}
              className="group relative cursor-pointer"
            >
              <div className="relative p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-navy/5 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Gradient top accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${service.accent}15` }}
                >
                  <service.icon size={28} style={{ color: service.accent }} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-bold text-navy mb-3 group-hover:text-teal transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-500 font-body leading-relaxed mb-4">
                  {service.short}
                </p>

                {/* Learn more */}
                <div className="flex items-center gap-2 text-sm font-heading font-semibold text-teal opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  Learn more
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>

                {/* Corner decoration */}
                <div
                  className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-5 group-hover:opacity-10 transition-opacity"
                  style={{ background: service.accent }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-6 bg-navy/60 backdrop-blur-sm"
            onClick={() => setActiveService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveService(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors"
              >
                <HiX size={20} className="text-slate-400" />
              </button>

              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${activeService.accent}15` }}
              >
                <activeService.icon size={28} style={{ color: activeService.accent }} />
              </div>

              <h3 className="text-2xl font-display font-bold text-navy mb-4">
                {activeService.title}
              </h3>
              <p className="text-slate-600 font-body leading-relaxed text-lg">
                {activeService.full}
              </p>

              <button
                onClick={() => {
                  setActiveService(null)
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className={`mt-6 px-6 py-3 bg-gradient-to-r ${activeService.color} text-white font-heading font-semibold rounded-full hover:shadow-lg transition-all duration-300`}
              >
                Enquire About This Service
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Services
