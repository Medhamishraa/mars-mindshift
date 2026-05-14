import React from 'react'
import { motion } from 'framer-motion'

const Clients = () => {
  return (
    <section id="clients" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-heading font-semibold text-mars-orange bg-mars-orange/10 rounded-full tracking-wide">
            PROFESSIONAL FOOTPRINTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy leading-tight mb-4">
            Trusted <span className="gradient-text">Learning Partner</span> Across Multiple Industries
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <p className="text-lg text-slate-600 font-body leading-relaxed text-center">
            MARS Mindshift Training Hub has successfully facilitated behavioral, communication,
            leadership, and change management interventions for professionals across varied
            industry domains including{' '}
            <span className="font-heading font-semibold text-navy">
              Manufacturing, FMCG, IT, Service Sector, Education, BFSI, Navratna Public Sector
              Enterprises
            </span>{' '}
            and various government bodies.
          </p>
          <p className="text-lg text-slate-600 font-body leading-relaxed text-center">
            Our experience across diverse business environments enables us to create practical,
            engaging, and business-aligned learning experiences for employees at all
            organizational levels.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Clients
