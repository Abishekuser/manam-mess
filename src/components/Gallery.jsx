import { motion } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1631292784640-2b24be784d5d?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1567337710282-00832b415979?q=80&w=800&auto=format&fit=crop',
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-espresso py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <span className="uppercase text-gold text-xs tracking-[0.3em]">Inside the mess</span>
          <h2 className="font-display text-3xl sm:text-4xl mt-4 text-ivory">Restaurant Gallery</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className={`overflow-hidden rounded-2xl ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
            >
              <img
                src={src}
                alt="A dish served at Manam Mess"
                loading="lazy"
                className="w-full h-full object-cover min-h-[140px] hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
