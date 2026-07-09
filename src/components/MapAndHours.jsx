import { motion } from 'framer-motion'
import { Clock3, MapPin } from 'lucide-react'

const hours = [
  { day: 'Monday', time: '7:30 AM – 3:30 PM' },
  { day: 'Tuesday', time: '7:30 AM – 3:30 PM' },
  { day: 'Wednesday', time: '7:30 AM – 3:30 PM' },
  { day: 'Thursday', time: '7:30 AM – 3:30 PM' },
  { day: 'Friday', time: '7:30 AM – 3:30 PM' },
  { day: 'Saturday', time: '7:30 AM – 3:30 PM' },
  { day: 'Sunday', time: '7:30 AM – 3:30 PM' },
]

export default function MapAndHours() {
  return (
    <section className="bg-ivory py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="uppercase text-vermillion text-xs tracking-[0.3em]">Find us</span>
          <h2 className="font-display text-3xl sm:text-4xl mt-4 text-espresso flex items-center gap-2">
            <MapPin className="text-gold" size={26} aria-hidden="true" />
            Heritage Town, Puducherry
          </h2>
          <div className="mt-6 rounded-2xl overflow-hidden border border-espresso/10 shadow-xl shadow-espresso/10">
            <iframe
              title="Manam Mess location on Google Maps"
              src="https://www.google.com/maps?q=Manam+Mess+Kamatchi+Amman+Kovil+Street+Heritage+Town+Puducherry&output=embed"
              width="100%"
              height="360"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl bg-espresso text-ivory p-8 sm:p-10"
        >
          <h3 className="font-display text-2xl flex items-center gap-2">
            <Clock3 className="text-gold" size={22} aria-hidden="true" />
            Opening Hours
          </h3>
          <ul className="mt-6 divide-y divide-ivory/10">
            {hours.map((h) => (
              <li key={h.day} className="flex items-center justify-between py-3 text-sm">
                <span className="text-ivory/80">{h.day}</span>
                <span className="font-body font-semibold text-gold-light">{h.time}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-ivory/60 text-xs leading-relaxed">
            Manam Mess serves breakfast and lunch — kitchen closes promptly at 3:30 pm,
            so arriving by 3:00 pm is recommended on busy weekends.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
