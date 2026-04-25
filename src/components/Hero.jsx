import React from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'

const Hero = () => {
  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-600 to-navy-800" />
      
      {/* Mesh gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -60, 40, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-mars-blue/10 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -60, 80, 0],
            y: [0, 80, -40, 0],
            scale: [1, 0.8, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-teal/10 blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, 40, -80, 0],
            y: [0, -80, 60, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 left-1/2 w-[400px] h-[400px] rounded-full bg-mars-pink/8 blur-[100px]"
        />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Logo floating */}
        <motion.img
          src="/logo-icon.png"
          alt="MARS Logo"
          className="w-20 h-20 md:w-28 md:h-28 mx-auto mb-8"
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        />

        {/* Tagline badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
          <span className="text-sm font-heading font-medium text-teal tracking-wide">
            Empowering Leaders Since 2002
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6"
        >
          Redefining Mindsets.
          <br />
          <span className="gradient-text">Rebuilding Potential.</span>
        </motion.h1>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-lg md:text-xl text-slate-300 font-body max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          Professional behavioural training & leadership development
          that transforms individuals and organisations for sustainable excellence.
        </motion.p>

        {/* Keyword pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {['Leadership', 'Mindset', 'Communication', 'Performance'].map((word, i) => (
            <span
              key={word}
              className="px-4 py-1.5 text-sm font-heading font-medium text-white/60 border border-white/10 rounded-full"
            >
              {word}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => handleScroll('#services')}
            className="group px-8 py-4 bg-gradient-to-r from-teal to-mars-blue text-white font-heading font-semibold rounded-full hover:shadow-xl hover:shadow-teal/20 transition-all duration-300 hover:-translate-y-1"
          >
            Explore Services
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <button
            onClick={() => handleScroll('#contact')}
            className="px-8 py-4 border border-white/20 text-white font-heading font-medium rounded-full hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
          >
            Contact Us
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/40 font-heading tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <HiArrowDown className="text-white/40" size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
