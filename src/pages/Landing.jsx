import React from 'react'
import Navbar from '../components/common/Navbar'
import Hero from '../components/landing/Hero'
import About from '../components/landing/About'
import Skills from '../components/landing/Skills'
import Services from '../components/landing/Services'
import Projects from '../components/landing/Projects'
import Certifications from '../components/landing/Certifications'
import Journey from '../components/landing/Journey'
import Testimonial from '../components/landing/Testimonial'
import Contact from '../components/landing/Contact'
import Footer from '../components/common/Footer'

const Landing = () => {
  return (
     <div className="bg-gradient-to-b from-black via-zinc-950 to-black dark:from-black dark:via-black dark:to-black text-white">
           {/* Neon Grid */}
      <div className="fixed inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(0,255,120,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,120,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Glow Orbs */}
      <div className="fixed -top-30 -right-30 w-100 h-100 bg-green-500 blur-[140px] opacity-20 rounded-full" />
      <div className="fixed -bottom-20 -left-20 w-87.5 h-87.5 bg-green-500 blur-[140px] opacity-20 rounded-full" />
     
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Certifications/>
        <Journey />
        <Testimonial />
        <Contact/>
        <Footer />
    </div>
  )
}

export default Landing