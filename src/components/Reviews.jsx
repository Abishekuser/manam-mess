import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Diner from Puducherry',
    rating: 5,
    text: 'The prawn and crab thokku are worth the wait — thick, spicy, and nothing like the watered-down versions you get elsewhere. Staff kept checking if we needed more rice.',
  },
  {
    name: 'Weekend visitor',
    rating: 4,
    text: 'Went straight from the Bharathi Museum walk. The fried fish was the highlight of the whole trip — crisp outside, soft inside, gone in minutes.',
  },
  {
    name: 'Regular customer',
    rating: 5,
    text: 'I come for the mutton kuzhambu alone. Dark, peppery, and clearly simmered for hours. Reasonably priced for how generous the portions are.',
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className="bg-ivory py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <span className="uppercase text-vermillion text-xs tracking-[0.3em]">Guests say</span>
          <h2 className="font-display text-3xl sm:text-4xl mt-4 text-espresso">Customer Reviews</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative rounded-2xl bg-white/60 backdrop-blur-sm border border-espresso/10 shadow-xl shadow-espresso/5 p-8 hover:-translate-y-1 transition-transform duration-300"
            >
              <Quote className="text-gold/50" size={30} aria-hidden="true" />
              <div className="flex gap-1 mt-4" aria-label={`${r.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    size={16}
                    className={s < r.rating ? 'fill-gold text-gold' : 'text-espresso/20'}
                  />
                ))}
              </div>
              <blockquote className="mt-4 text-espresso/80 leading-relaxed text-sm">
                {r.text}
              </blockquote>
              <figcaption className="mt-6 font-body font-semibold text-espresso text-sm">
                {r.name}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
