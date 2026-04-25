import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, EffectCoverflow } from 'swiper/modules'
import { HiArrowsExpand, HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
import { galleryImages } from '../data/galleryImages'

const Gallery = ({ onOpenExpanded }) => {
  const hasImages = galleryImages.length > 0
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <section id="gallery" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-heading font-semibold text-mars-pink bg-mars-pink/10 rounded-full tracking-wide">
            OUR WORK
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy leading-tight mb-4">
            Training <span className="gradient-text">Highlights</span>
          </h2>
          <p className="text-lg text-slate-500 font-body max-w-2xl mx-auto">
            Moments from the transformative programs we've delivered across India's leading organisations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {hasImages ? (
            <div className="relative">
              <Swiper
                modules={[Autoplay, Navigation, EffectCoverflow]}
                effect="coverflow"
                grabCursor
                centeredSlides
                loop={galleryImages.length > 2}
                slidesPerView="auto"
                speed={700}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 180,
                  modifier: 2,
                  slideShadows: false,
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current
                  swiper.params.navigation.nextEl = nextRef.current
                }}
                className="!py-6"
              >
                {galleryImages.map((img, i) => (
                  <SwiperSlide
                    key={i}
                    className="!w-[78vw] sm:!w-[360px] md:!w-[420px] lg:!w-[460px]"
                  >
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-navy via-navy-600 to-navy-800 shadow-xl shadow-navy/20 ring-1 ring-white/5">
                      <img
                        src={img.src}
                        alt={`Training highlight ${img.n || i + 1}`}
                        className="absolute inset-0 w-full h-full object-contain"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Manual navigation */}
              <button
                ref={prevRef}
                type="button"
                aria-label="Previous image"
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/95 backdrop-blur text-navy shadow-lg hover:bg-white hover:text-teal hover:shadow-xl transition-all"
              >
                <HiChevronLeft size={24} />
              </button>
              <button
                ref={nextRef}
                type="button"
                aria-label="Next image"
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/95 backdrop-blur text-navy shadow-lg hover:bg-white hover:text-teal hover:shadow-xl transition-all"
              >
                <HiChevronRight size={24} />
              </button>
            </div>
          ) : (
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-gradient-to-br from-navy via-navy-600 to-navy-800 flex flex-col items-center justify-center text-center px-8 shadow-2xl shadow-navy/10">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-5 ring-1 ring-white/15">
                <HiArrowsExpand className="text-teal" size={28} />
              </div>
              <p className="text-white/80 font-heading max-w-md">
                Drop images in <span className="text-teal font-semibold">src/assets/gallery/</span> named{' '}
                <span className="text-teal font-semibold">photo1.jpg</span>,{' '}
                <span className="text-teal font-semibold">photo2.jpg</span>… and they'll appear here automatically.
              </p>
            </div>
          )}

          {/* Expand — bottom-right */}
          <div className="flex justify-end mt-8">
            <button
              type="button"
              onClick={onOpenExpanded}
              aria-label="Expand gallery"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-navy font-heading font-semibold text-sm shadow-lg border border-slate-200 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <span>Expand</span>
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-teal to-mars-blue text-white group-hover:rotate-45 transition-transform duration-300">
                <HiArrowsExpand size={12} />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery
