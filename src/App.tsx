import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Courses from './components/Courses'
import Environment from './components/Environment'
import Teachers from './components/Teachers'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Courses />
        <Environment />
        <Teachers />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
