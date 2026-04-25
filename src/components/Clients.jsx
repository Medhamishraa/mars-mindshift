import React from 'react'
import { motion } from 'framer-motion'

const clients = [
  'Indraprastha Apollo Hospitals',
  'Indian Oil Corporation (IOCL)',
  'AU Small Finance Bank',
  'Tata Motors',
  'Border Security Force (BSF)',
  'Armed Forces',
  'Ministry of External Affairs',
  'Election Commission of India',
  'Dept. of Science & Technology',
  'Commonwealth Games 2010',
  'Teesta Hydropower Project',
  'Bharat Petroleum (BPCL)',
]

const Clients = () => {
  return (
    <section id="clients" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-heading font-semibold text-mars-orange bg-mars-orange/10 rounded-full tracking-wide">
            PROFESSIONAL FOOTPRINTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy leading-tight mb-4">
            Trusted by <span className="gradient-text">Leading</span> Organizations
          </h2>
          <p className="text-lg text-slate-500 font-body max-w-2xl mx-auto">
            From Fortune 500 corporates to government institutions, our programs have
            created impact across India's most prestigious organizations.
          </p>
        </motion.div>
      </div>

      {/* Scrolling marquee */}
      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Row 1 */}
        <div className="flex animate-marquee mb-4">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={`r1-${i}`}
              className="flex-shrink-0 mx-3 px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl hover:border-teal/30 hover:shadow-md transition-all duration-300"
            >
              <span className="text-sm font-heading font-semibold text-navy whitespace-nowrap">{client}</span>
            </div>
          ))}
        </div>

        {/* Row 2 — reverse */}
        <div className="flex" style={{ animation: 'marquee 30s linear infinite reverse' }}>
          {[...clients.slice().reverse(), ...clients.slice().reverse()].map((client, i) => (
            <div
              key={`r2-${i}`}
              className="flex-shrink-0 mx-3 px-6 py-4 bg-navy/5 border border-navy/10 rounded-xl hover:border-mars-blue/30 hover:shadow-md transition-all duration-300"
            >
              <span className="text-sm font-heading font-semibold text-navy whitespace-nowrap">{client}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Trust statement */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-slate-400 font-body text-sm">
            — and many more government bodies, PSUs, and private enterprises across India
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Clients
