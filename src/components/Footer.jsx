export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory/60 border-t border-ivory/10 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/60 text-gold font-display text-sm italic">
            MM
          </span>
          <span className="font-display text-ivory">Manam Mess</span>
        </div>
        <p>102, Kamatchi Amman Kovil Street, Heritage Town, Puducherry</p>
        <p>&copy; {new Date().getFullYear()} Manam Mess. All rights reserved.</p>
      </div>
    </footer>
  )
}
