import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="bg-charcoal py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="uppercase text-gold text-xs tracking-[0.3em]">Get in touch</span>
          <h2 className="font-display text-3xl sm:text-4xl mt-4 text-ivory">Reserve a table or order ahead</h2>
          <p className="mt-4 text-ivory/65 max-w-xl mx-auto">
            Walk-ins are welcome, but a quick call ahead during lunch rush
            means less waiting for a table.
          </p>

          <div className="mt-12 grid sm:grid-cols-3 gap-6 text-left">
            <a
              href="tel:+918667737874"
              className="rounded-2xl bg-ivory/[0.04] border border-ivory/10 p-6 hover:border-gold/50 hover:bg-ivory/[0.07] transition-colors"
            >
              <Phone className="text-gold" size={22} aria-hidden="true" />
              <p className="text-ivory/60 text-xs mt-4 uppercase tracking-wide">Phone</p>
              <p className="text-ivory font-body font-semibold mt-1">+91 86677 37874</p>
            </a>
            <a
              href="mailto:manammesspdy@gmail.com"
              className="rounded-2xl bg-ivory/[0.04] border border-ivory/10 p-6 hover:border-gold/50 hover:bg-ivory/[0.07] transition-colors"
            >
              <Mail className="text-gold" size={22} aria-hidden="true" />
              <p className="text-ivory/60 text-xs mt-4 uppercase tracking-wide">Email</p>
              <p className="text-ivory font-body font-semibold mt-1 break-words">manammesspdy@gmail.com</p>
            </a>
            <a
              href="https://wa.me/918667737874"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-ivory/[0.04] border border-ivory/10 p-6 hover:border-gold/50 hover:bg-ivory/[0.07] transition-colors"
            >
              <MessageCircle className="text-gold" size={22} aria-hidden="true" />
              <p className="text-ivory/60 text-xs mt-4 uppercase tracking-wide">WhatsApp</p>
              <p className="text-ivory font-body font-semibold mt-1">Message to order</p>
            </a>
          </div>

          <div className="mt-8 flex items-start justify-center gap-2 text-ivory/60 text-sm">
            <MapPin size={18} className="text-gold shrink-0 mt-0.5" aria-hidden="true" />
            <span>102, Kamatchi Amman Kovil Street, near Iyengar Bakery, Heritage Town, Puducherry</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
