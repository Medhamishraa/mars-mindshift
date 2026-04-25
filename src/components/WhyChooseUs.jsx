import React from 'react'
import { motion } from 'framer-motion'
import { HiOutlineShieldCheck, HiOutlineSparkles, HiOutlineChartBar, HiOutlineUsers } from 'react-icons/hi2'

const reasons = [
  {
    icon: HiOutlineShieldCheck,
    title: 'Research-Driven Approach',
    desc: 'Every program is grounded in academic rigour and real-world insights from 22+ years of experience.',
  },
  {
    icon: HiOutlineSparkles,
    title: 'Customised Solutions',
    desc: 'No cookie-cutter modules. Each intervention is tailored to your organisation\'s context and goals.',
  },
  {
    icon: HiOutlineChartBar,
    title: 'Measurable Impact',
    desc: 'We focus on tangible behavioural outcomes and sustainable performance improvement, not just sessions.',
  },
  {
    icon: HiOutlineUsers,
    title: 'Pan-Industry Expertise',
    desc: 'From Fortune 500 corporates to government bodies, our versatility ensures relevance across sectors.',
  },
]

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-navy overflow-hidden noise-overlay">
      {/* Background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-teal/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-heading font-semibold text-teal bg-teal/10 rounded-full tracking-wide">
            WHY MARS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
            What Sets Us <span className="gradient-text">Apart</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-teal/30 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <r.icon size={24} className="text-teal" />
              </div>
              <h4 className="text-lg font-heading font-bold text-white mb-2">{r.title}</h4>
              <p className="text-sm text-slate-400 font-body leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
