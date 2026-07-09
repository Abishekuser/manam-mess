import { motion } from 'framer-motion'
import { MessageCircle, Phone } from 'lucide-react'

export default function FloatingButtons() {
  return (
    <>
      <motion.a
        href="https://wa.me/918667737874?text=Hii%20%21%20How%20can%20we%20help%20you%20%3F%0A"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.4 }}
        whileHover={{ scale: 1.08 }}
        className="fixed bottom-24 sm:bottom-8 right-5 sm:right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-leaf text-ivory shadow-xl shadow-black/30"
      >
        <MessageCircle size={26} aria-hidden="true" />
      </motion.a>

      <div className="fixed bottom-0 inset-x-0 z-50 sm:hidden bg-espresso border-t border-gold/30 flex">
        <a
          href="tel:+918667737874"
          className="flex-1 flex items-center justify-center gap-2 py-4 text-ivory font-body font-semibold text-sm"
        >
          <Phone size={18} aria-hidden="true" />
          Call Now
        </a>
        <a
          href="#dishes"
          className="flex-1 flex items-center justify-center gap-2 py-4 text-gold font-body font-semibold text-sm border-l border-gold/30"
        >
          View Menu
        </a>
      </div>
    </>
  )
}
