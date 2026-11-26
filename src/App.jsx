import { useState } from 'react'
import { ApplyProvider } from './ApplyContext'
import useReveal from './hooks/useReveal'
import Header from './components/Header'
import Hero from './components/Hero'
import Story from './components/Story'
import Services from './components/Services'
import Process from './components/Process'
import Reviews from './components/Reviews'
import PromoBranches from './components/PromoBranches'
import EndCta from './components/EndCta'
import Footer from './components/Footer'
import ApplyModal from './components/ApplyModal'
import MobileBar from './components/MobileBar'

function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  useReveal()
  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <Story />
        <Services />
        <Process />
        <Reviews />
        <PromoBranches />
        <EndCta />
      </main>
      <Footer />
      <MobileBar />
      <ApplyModal />
    </>
  )
}

export default function App() {
  return (
    <ApplyProvider>
      <Page />
    </ApplyProvider>
  )
}
