import { motion } from 'framer-motion'
import { Leaf, Fish, Clock3 } from 'lucide-react'

const stats = [
  { icon: Fish, label: 'Seafood specialists', detail: 'Prawn, crab, fish & quail cooked to order' },
  { icon: Leaf, label: 'Banana-leaf meals', detail: 'The old Puducherry way of serving food' },
  { icon: Clock3, label: 'Breakfast & lunch', detail: 'Fresh batches, no reheated curries' },
]

export default function About() {
  return (
    <section id="about" className="bg-espresso text-ivory py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div
            className="overflow-hidden shadow-2xl shadow-black/40"
            style={{ borderRadius: '48% 52% 62% 38% / 42% 38% 62% 58%' }}
          >
            <img
              src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1200&auto=format&fit=crop"
              alt="Cook plating a spread of South Indian curries and rice"
              className="w-full h-[420px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-gold text-espresso rounded-2xl px-6 py-4 shadow-xl max-w-[220px]">
            <p className="font-display text-2xl leading-none">4.3★</p>
            <p className="text-xs mt-1 tracking-wide">from diners across Puducherry</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="uppercase text-gold text-xs tracking-[0.3em]">Our story</span>
          <h2 className="font-display text-3xl sm:text-4xl mt-4 leading-snug text-balance">
            A mess-hall table, kept the way Puducherry likes it
          </h2>
          <p className="mt-6 text-ivory/75 leading-relaxed">
            Tucked beside Iyengar Bakery in Heritage Town, Manam Mess keeps to
            a single, disciplined idea: a short lunch window, a short menu,
            and every curry made to order. Regulars come for the four house
            thokku — prawn, crab, chicken and quail — and stay for the
            fried fish, pepper prawns and slow-simmered mutton kuzhambu that
            follow.
          </p>
          <p className="mt-4 text-ivory/75 leading-relaxed">
            There's no dinner service and no shortcuts — just four hours a
            day of home-style non-vegetarian cooking, served the way
            Puducherry families have always eaten it.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {stats.map(({ icon: Icon, label, detail }) => (
              <div key={label} className="border-t border-gold/30 pt-4">
                <Icon className="text-gold mb-3" size={22} aria-hidden="true" />
                <p className="font-body font-semibold text-sm">{label}</p>
                <p className="text-ivory/60 text-xs mt-1 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
