import React from 'react'
import { motion } from 'framer-motion'

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-navy">
      {/* Animated logo */}
      <motion.img
        src="/logo-icon.png"
        alt="MARS"
        className="w-24 h-24 mb-6"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
      
      {/* Brand name reveal */}
      <motion.div className="flex gap-1">
        {['M', 'A', 'R', 'S', '.'].map((letter, i) => (
          <motion.span
            key={i}
            className="text-4xl font-display font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>

      {/* Loading bar */}
      <motion.div
        className="mt-8 h-0.5 bg-gradient-to-r from-mars-blue via-teal to-mars-green rounded-full"
        initial={{ width: 0 }}
        animate={{ width: 180 }}
        transition={{ delay: 0.4, duration: 1.5, ease: 'easeInOut' }}
      />
      
      <motion.p
        className="mt-4 text-sm text-slate-400 font-body tracking-widest uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        Mindshift Training Hub
      </motion.p>
    </div>
  )
}

export default Preloader
