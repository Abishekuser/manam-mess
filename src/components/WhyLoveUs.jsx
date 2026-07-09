import { motion } from 'framer-motion'
import { Flame, HandPlatter, Wallet, Smile } from 'lucide-react'

const reasons = [
  {
    icon: Flame,
    title: 'Cooked to order',
    text: 'Every thokku and kuzhambu is made fresh in small batches through the four-hour lunch window, never held over.',
  },
  {
    icon: HandPlatter,
    title: 'Gracious service',
    text: 'Diners consistently note the warm, attentive staff — the kind of hospitality a neighbourhood mess is known for.',
  },
  {
    icon: Wallet,
    title: 'Honest pricing',
    text: 'A full non-veg meal runs about ₹200–400 a head, with generous portions that reviewers call fair value.',
  },
  {
    icon: Smile,
    title: 'A local favourite',
    text: 'Word of mouth alone has built a steady lunchtime crowd around a genuinely small, focused menu.',
  },
]

export default function WhyLoveUs() {
  return (
    <section className="bg-charcoal text-ivory py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <span className="uppercase text-gold text-xs tracking-[0.3em]">Why customers love us</span>
          <h2 className="font-display text-3xl sm:text-4xl mt-4">Small menu, kept honest</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-ivory/[0.04] border border-ivory/10 p-7 hover:border-gold/50 hover:bg-ivory/[0.07] transition-colors duration-300"
            >
              <Icon className="text-gold" size={26} aria-hidden="true" />
              <h3 className="font-display text-lg mt-5">{title}</h3>
              <p className="text-ivory/65 text-sm mt-2 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
