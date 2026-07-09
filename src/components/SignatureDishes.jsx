import { motion } from 'framer-motion'

const dishes = [
  {
    name: 'Prawn Thokku',
    note: 'Slow-roasted prawn masala, thick and tangy',
    img: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=900&auto=format&fit=crop',
  },
  {
    name: 'Crab Thokku',
    note: 'Whole crab simmered in a deep red masala',
    img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=900&auto=format&fit=crop',
  },
  {
    name: 'Fried Fish',
    note: 'Crisp-fried catch of the day, ground masala crust',
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=900&auto=format&fit=crop',
  },
  {
    name: 'Pepper Prawns',
    note: 'Fried prawns tossed in coarse black pepper',
    img: 'https://images.unsplash.com/photo-1684253188376-16c7875d04bc?q=80&w=900&auto=format&fit=crop',
  },
  {
    name: 'Mutton Kuzhambu',
    note: 'Slow-cooked mutton curry, dark and peppery',
    img: 'https://images.unsplash.com/photo-1631292784640-2b24be784d5d?q=80&w=900&auto=format&fit=crop',
  },
  {
    name: 'Dry Fish Poriyal',
    note: 'A sharp, smoky side that regulars order by name',
    img: 'https://images.unsplash.com/photo-1567337710282-00832b415979?q=80&w=900&auto=format&fit=crop',
  },
]

const blobs = [
  '58% 42% 45% 55% / 40% 55% 45% 60%',
  '42% 58% 55% 45% / 55% 40% 60% 45%',
  '50% 50% 62% 38% / 45% 55% 45% 55%',
  '60% 40% 40% 60% / 50% 45% 55% 50%',
  '45% 55% 55% 45% / 60% 40% 60% 40%',
  '55% 45% 48% 52% / 42% 58% 42% 58%',
]

export default function SignatureDishes() {
  return (
    <section id="dishes" className="bg-ivory py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="uppercase text-vermillion text-xs tracking-[0.3em]">What's on the leaf</span>
          <h2 className="font-display text-3xl sm:text-4xl mt-4 text-espresso">Signature Dishes</h2>
          <p className="mt-4 text-espresso/70">
            Four house thokku, a rotating catch of the day, and a mutton
            kuzhambu that keeps people ordering an extra portion of rice.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group"
            >
              <div
                className="overflow-hidden border-2 border-gold/40 shadow-lg shadow-espresso/10 transition-transform duration-500 group-hover:scale-[1.03] group-hover:border-gold"
                style={{ borderRadius: blobs[i % blobs.length] }}
              >
                <img
                  src={dish.img}
                  alt={dish.name}
                  loading="lazy"
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="font-display text-xl mt-5 text-espresso">{dish.name}</h3>
              <p className="text-espresso/60 text-sm mt-1">{dish.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
