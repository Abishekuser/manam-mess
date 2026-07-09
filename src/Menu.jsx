import { motion } from 'framer-motion'
import { Drumstick, Beef, Salad, Leaf } from 'lucide-react'

const mealCourses = [
  {
    name: 'Non Veg Meals',
    detail: '4 types of thokku, fish curry, mutton curry, karuvadu, sambar, kootu, poriyal, rasam, butter milk',
    price: 180,
  },
  {
    name: 'Non Veg Meals Parcel',
    detail: 'Same full non-veg meal, packed to go',
    price: 200,
  },
  {
    name: 'Veg Meals',
    detail: 'Paruppu podi, appalam, sambar, kootu, poriyal, rasam, butter milk',
    price: 120,
  },
]

const weekendSpecial = [{ name: 'Sura Puttu', price: 150 }]

const chicken = [
  { name: 'Chicken 65', price: 170 },
  { name: "Chicken Lollipop (4 pc's)", price: 180 },
  { name: 'Chicken Sukka', price: 180 },
  { name: 'Pepper Chicken', price: 180 },
  { name: 'Chicken Masala', price: 180 },
]

const mutton = [
  { name: 'Brain Fry', price: 220 },
  { name: 'Brain Fry with Egg', price: 230 },
  { name: 'Mutton Pepper Fry', price: 250 },
  { name: 'Mutton Sukka', price: 260 },
  { name: 'Mutton Masala', price: 250 },
  { name: 'Mutton Kola (1 pc)', price: 40 },
]

function PriceRow({ name, detail, price, delay }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, delay }}
      className="flex items-start justify-between gap-4 py-3 border-b border-gold/15 last:border-0"
    >
      <div>
        <p className="font-body font-semibold text-ivory">{name}</p>
        {detail && <p className="text-ivory/55 text-xs mt-1 leading-relaxed max-w-md">{detail}</p>}
      </div>
      <span className="font-display text-gold-light text-lg shrink-0">₹{price}</span>
    </motion.li>
  )
}

function MenuColumn({ icon: Icon, title, items }) {
  return (
    <div className="rounded-2xl bg-ivory/[0.04] border border-ivory/10 p-6 sm:p-8">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="text-gold" size={20} aria-hidden="true" />
        <h3 className="font-display text-xl text-ivory">{title}</h3>
      </div>
      <ul>
        {items.map((item, i) => (
          <PriceRow key={item.name} {...item} delay={i * 0.05} />
        ))}
      </ul>
    </div>
  )
}

export default function Menu() {
  return (
    <section id="menu" className="bg-espresso py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <span className="uppercase text-gold text-xs tracking-[0.3em]">Main course</span>
          <h2 className="font-display text-3xl sm:text-4xl mt-4 text-ivory">The Menu</h2>
          <p className="mt-4 text-ivory/65">
            Straight from the counter at Manam Mess — meals, chicken and mutton, priced as served.
          </p>
        </motion.div>

        <div className="grid gap-6 mb-6">
          <MenuColumn icon={Salad} title="Meals" items={mealCourses} />
        </div>

        <div className="grid gap-6 mb-6 sm:grid-cols-2">
          <MenuColumn icon={Drumstick} title="Chicken" items={chicken} />
          <MenuColumn icon={Beef} title="Mutton" items={mutton} />
        </div>

        <div className="grid gap-6">
          <MenuColumn icon={Leaf} title="Weekend Special" items={weekendSpecial} />
        </div>

        <p className="text-center text-ivory/40 text-xs mt-10 tracking-wide">
          Prices as listed on the in-store menu card &middot; subject to change
        </p>
      </div>
    </section>
  )
}