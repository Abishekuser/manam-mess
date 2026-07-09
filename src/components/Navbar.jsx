import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Visit', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
        scrolled ? 'bg-espresso/90 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 py-4" aria-label="Primary">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/70 text-gold font-display text-lg italic group-hover:bg-gold/10 transition-colors">
            MM
          </span>
          <span className="font-display text-xl sm:text-2xl text-ivory tracking-wide">
            Manam Mess
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-body text-sm tracking-wide text-ivory/85">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-gold transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="tel:+918667737874"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-gold text-gold px-5 py-2 text-sm tracking-wide hover:bg-gold hover:text-espresso transition-colors"
        >
          <Phone size={16} aria-hidden="true" />
          Call to reserve
        </a>

        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-ivory p-2"
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/98 flex flex-col"
          >
            <div className="flex justify-end p-5">
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-ivory p-2">
                <X size={28} />
              </button>
            </div>
            <ul className="flex flex-col items-center gap-8 mt-10 font-display text-3xl text-ivory">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)} className="hover:text-gold transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
