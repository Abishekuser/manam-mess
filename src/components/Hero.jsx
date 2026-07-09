import { motion } from 'framer-motion'
import { UtensilsCrossed, Phone, MessageCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1920&auto=format&fit=crop"
          alt="Traditional South Indian non-vegetarian meal with curries served on a banana leaf"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal" />
        <div className="absolute inset-0 bg-grain" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="h-px w-10 bg-gold/70" />
          <span className="uppercase text-gold text-xs sm:text-sm tracking-[0.3em] font-body">
            Heritage Town &middot; Puducherry
          </span>
          <span className="h-px w-10 bg-gold/70" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl text-ivory leading-[1.08] text-balance"
        >
          Authentic South Indian Flavours,
          <span className="italic text-gold-light"> Served Fresh Every Day</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-ivory/80 text-base sm:text-lg max-w-2xl mx-auto"
        >
          A neighbourhood meal hall near Iyengar Bakery, plating thokku, fried
          seafood and slow-cooked kuzhambu the way Puducherry families have
          eaten it for generations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#dishes"
            className="inline-flex items-center gap-2 rounded-full bg-gold text-espresso px-7 py-3.5 font-body font-semibold tracking-wide hover:bg-gold-light transition-colors hover:-translate-y-0.5 duration-300"
          >
            <UtensilsCrossed size={18} aria-hidden="true" />
            View Menu
          </a>
          <a
            href="tel:+918667737874"
            className="inline-flex items-center gap-2 rounded-full border border-ivory/40 text-ivory px-7 py-3.5 font-body tracking-wide hover:bg-ivory/10 transition-colors hover:-translate-y-0.5 duration-300"
          >
            <Phone size={18} aria-hidden="true" />
            Call Now
          </a>
          <a
            href="https://wa.me/918667737874?text=Hii%20%21%20How%20can%20we%20help%20you%20%3F%0A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-leaf/60 text-leaf bg-ivory px-7 py-3.5 font-body tracking-wide hover:bg-leaf hover:text-ivory transition-colors hover:-translate-y-0.5 duration-300"
          >
            <MessageCircle size={18} aria-hidden="true" />
            WhatsApp Order
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-14 text-ivory/60 text-xs tracking-[0.2em] uppercase"
        >
          Open daily &middot; 7:30 am – 3:30 pm
        </motion.div>
      </div>
    </section>
  )
}
