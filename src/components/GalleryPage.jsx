import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiArrowLeft } from 'react-icons/hi'
import { galleryImages } from '../data/galleryImages'

const GalleryPage = ({ onClose }) => {
  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[1000] overflow-y-auto bg-gradient-to-b from-white via-slate-50 to-white"
    >
      {/* Sticky header */}
      <div className="sticky top-0 z-20 bg-white/85 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onClose}
            className="group inline-flex items-center gap-2 pl-3 pr-5 py-2.5 rounded-full text-sm font-heading font-semibold text-navy bg-white border border-slate-200 hover:border-teal hover:text-teal hover:shadow-md transition-all"
          >
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-teal to-mars-blue text-white group-hover:-translate-x-0.5 transition-transform">
              <HiArrowLeft size={14} />
            </span>
            Back to Home
          </button>

          <div className="flex items-center gap-3">
            <img src="/logo-icon.png" alt="MARS" className="w-8 h-8" />
            <span className="hidden sm:inline text-sm font-heading font-semibold text-navy tracking-tight">
              MARS Mindshift Training Hub
            </span>
          </div>
        </div>
      </div>

      {/* Page content */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12 text-center"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-heading font-semibold text-mars-pink bg-mars-pink/10 rounded-full tracking-wide">
            GALLERY
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-navy leading-tight mb-4">
            Training <span className="gradient-text">Highlights</span>
          </h1>
          <p className="text-base md:text-lg text-slate-500 font-body max-w-2xl mx-auto">
            A visual journey through our programs and the organisations we've had the privilege to partner with.
          </p>
        </motion.div>

        {galleryImages.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:balance]">
            {galleryImages.map((img, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.04, duration: 0.5 }}
                className="relative mb-5 break-inside-avoid rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-navy/10 transition-shadow group bg-slate-100"
              >
                <img
                  src={img.src}
                  alt={`Training highlight ${img.n || i + 1}`}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                {/* Hover label slot — renders only when metadata exists.
                    Add entries to photoMetadata in src/data/galleryImages.js
                    to enable organisation name + year on hover. */}
                {(img.org || img.year) && (
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.org && (
                      <span className="block text-sm font-heading font-semibold text-white">
                        {img.org}
                      </span>
                    )}
                    {img.year && (
                      <span className="block text-xs text-white/70 font-body mt-0.5">
                        {img.year}
                      </span>
                    )}
                  </figcaption>
                )}
              </motion.figure>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border-2 border-dashed border-slate-200 bg-white/60 py-20 px-6 text-center">
            <h3 className="text-xl font-heading font-semibold text-navy mb-3">No images yet</h3>
            <p className="text-slate-500 font-body max-w-md mx-auto">
              Add your images to{' '}
              <code className="px-2 py-0.5 rounded bg-slate-100 text-teal font-semibold">
                src/assets/gallery/
              </code>{' '}
              named{' '}
              <code className="px-2 py-0.5 rounded bg-slate-100 text-teal font-semibold">photo1.jpg</code>,{' '}
              <code className="px-2 py-0.5 rounded bg-slate-100 text-teal font-semibold">photo2.jpg</code>, and so on.
              They'll show up here automatically.
            </p>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default GalleryPage
