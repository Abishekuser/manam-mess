import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import SignatureDishes from './components/SignatureDishes.jsx'
import WhyLoveUs from './components/WhyLoveUs.jsx'
import Reviews from './components/Reviews.jsx'
import Gallery from './components/Gallery.jsx'
import MapAndHours from './components/MapAndHours.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import FloatingButtons from './components/FloatingButtons.jsx'
import LeafDivider from './components/LeafDivider.jsx'
import Menu from './Menu.jsx'

export default function App() {
  return (
    <div className="pb-16 sm:pb-0">
      <Navbar />
      <main>
        <Hero />
        <LeafDivider from="#1C120B" to="#1C120B" />
        <About />
        <LeafDivider from="#1C120B" to="#F6EFE2" />
        <SignatureDishes />
        <LeafDivider from="#F6EFE2" to="#100B08" />
        <Menu/>
        <WhyLoveUs />
        <LeafDivider from="#100B08" to="#F6EFE2" />
        <Reviews />
        <LeafDivider from="#F6EFE2" to="#1C120B" />
        <Gallery />
        <LeafDivider from="#1C120B" to="#F6EFE2" />
        <MapAndHours />
        <LeafDivider from="#F6EFE2" to="#100B08" />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
