import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Clients from './components/Clients'
import Gallery from './components/Gallery'
import GalleryPage from './components/GalleryPage'
import WhyChooseUs from './components/WhyChooseUs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollProgress from './components/ScrollProgress'
import Preloader from './components/Preloader'

function App() {
  const [loading, setLoading] = useState(true)
  const [galleryOpen, setGalleryOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Preloader />

  return (
    <div className="relative">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Clients />
      <Gallery onOpenExpanded={() => setGalleryOpen(true)} />
      <Contact />
      <Footer />
      <WhatsAppButton />

      <AnimatePresence>
        {galleryOpen && <GalleryPage onClose={() => setGalleryOpen(false)} />}
      </AnimatePresence>
    </div>
  )
}

export default App
