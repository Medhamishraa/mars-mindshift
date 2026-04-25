import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiAcademicCap, HiBriefcase, HiLightBulb, HiUserGroup } from 'react-icons/hi'

const stats = [
  { icon: HiBriefcase, number: 22, suffix: '+', label: 'Years Experience' },
  { icon: HiUserGroup, number: 50, suffix: '+', label: 'Organizations Served' },
  { icon: HiLightBulb, number: 500, suffix: '+', label: 'Trainings Delivered' },
  { icon: HiAcademicCap, number: 10000, suffix: '+', label: 'Professionals Trained' },
]

const Counter = ({ target, suffix, inView }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-mars-blue/5 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-heading font-semibold text-teal bg-teal/10 rounded-full tracking-wide">
            WHO WE ARE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy leading-tight">
            Meet the <span className="gradient-text">Visionary</span> Behind MARS
          </h2>
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left — Photo + decorative frame */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Decorative frame behind */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-teal/30 rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-mars-blue/10 to-teal/10 rounded-2xl" />
              
              {/* Main photo container */}
              <div className="relative bg-gradient-to-br from-navy/5 to-teal/10 rounded-2xl overflow-hidden aspect-[4/5]">
                <img
                  src="/founder.jpg"
                  alt="Dr. Shikha Mishra — Founder & Lead Facilitator"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent">
                  <h3 className="text-2xl font-display font-bold text-white">Dr. Shikha Mishra</h3>
                  <p className="text-teal font-heading font-medium mt-1">Founder & Lead Facilitator</p>
                  <p className="text-sm text-white/80 mt-1 font-body">PhD in Human Resource Management</p>
                </div>
              </div>

              {/* Floating credential badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-4 top-8 bg-white shadow-xl shadow-navy/10 rounded-xl px-4 py-3 border border-slate-100"
              >
                <div className="flex items-center gap-2">
                  <HiAcademicCap className="text-teal" size={20} />
                  <span className="text-sm font-heading font-semibold text-navy">PhD — HR</span>
                </div>
              </motion.div>

              {/* Years badge */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-4 bottom-12 bg-gradient-to-r from-teal to-mars-blue text-white rounded-xl px-4 py-3 shadow-lg"
              >
                <span className="text-2xl font-display font-bold">22+</span>
                <span className="text-xs ml-1 opacity-90">years</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-navy mb-6 leading-snug">
              Transforming Organizations Through
              <span className="gradient-text-warm"> Human-Centric </span>
              Development
            </h3>

            <div className="space-y-4 text-slate-600 font-body text-lg leading-relaxed">
              <p>
                <strong className="text-navy">MARS Mindshift Training Hub</strong> is a professional behavioural
                and leadership development organisation led by <strong className="text-navy">Dr. Shikha Mishra</strong>,
                an accomplished behavioural trainer, HR faculty and OD specialist with over
                <strong className="text-teal"> 22 years</strong> of blended corporate and academic experience.
              </p>
              <p>
                We partner with corporates, PSUs, government bodies and institutions to deliver
                research-driven, experiential and customised training solutions that strengthen
                mindset, leadership, communication and professional capabilities — enabling
                individuals and organisations to achieve sustainable performance excellence.
              </p>
            </div>

            {/* Key highlights */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: 'Proven Expertise', desc: 'Research-backed methods' },
                { title: 'Custom Solutions', desc: 'Tailored to your needs' },
                { title: 'Quality Focus', desc: 'Measurable outcomes' },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="w-2 h-2 rounded-full bg-teal mb-2" />
                  <h4 className="font-heading font-semibold text-navy text-sm">{item.title}</h4>
                  <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div ref={ref}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative group text-center p-6 rounded-2xl bg-gradient-to-br from-navy to-navy-600 overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal/10 to-mars-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <stat.icon className="mx-auto text-teal mb-3 relative z-10" size={28} />
                <div className="text-3xl lg:text-4xl font-display font-bold text-white relative z-10">
                  <Counter target={stat.number} suffix={stat.suffix} inView={inView} />
                </div>
                <p className="text-sm text-slate-300 font-heading mt-2 relative z-10">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
