import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/919811457457?text=Hello%20MARS%20Mindshift!%20I%27d%20like%20to%20enquire%20about%20your%20training%20programs."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      className="fixed bottom-6 right-6 z-[900] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      style={{ animation: 'whatsapp-pulse 2s infinite' }}
      title="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} className="text-white" />
    </motion.a>
  )
}

export default WhatsAppButton
