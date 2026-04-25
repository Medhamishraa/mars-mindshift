import React from 'react'
import { FaLinkedinIn, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ]

  const services = [
    'Leadership Development',
    'Business Communication',
    'Mindset & Well-Being',
    'Change Management',
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-navy pt-16 pb-8 overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-mars-blue via-teal via-mars-green via-mars-orange to-mars-pink" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo-icon.png" alt="MARS" className="w-10 h-10" />
              <div>
                <span className="text-xl font-display font-bold text-white">MARS.</span>
                <p className="text-xs text-slate-400 font-heading -mt-0.5">Mindshift Training Hub</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 font-body leading-relaxed mb-5">
              Redefining Mindsets. Rebuilding Potential. Empowering organizations through
              research-driven behavioural training and leadership development.
            </p>
            <div className="flex gap-3">
              {[
                { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/dr-shikha-mishra-41821616' },
                { icon: FaWhatsapp, href: 'https://wa.me/919811457457' },
                { icon: FaEnvelope, href: 'mailto:marsmindshift@gmail.com' },
                { icon: FaPhone, href: 'tel:+919811457457' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-teal/20 hover:border-teal/30 transition-all duration-300"
                >
                  <social.icon size={14} className="text-slate-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-slate-400 font-body hover:text-teal transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s, i) => (
                <li key={i}>
                  <span className="text-sm text-slate-400 font-body">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-slate-400 font-body">
              <p>+91 98114 57457</p>
              <p>marsmindshift@gmail.com</p>
              <p>Ghaziabad, Uttar Pradesh</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-body">
            © {currentYear} MARS Mindshift Training Hub. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 font-body">
            Designed with ❤️ for transforming potential
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
