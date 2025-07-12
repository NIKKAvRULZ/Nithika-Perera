import React from 'react'
import { motion } from 'framer-motion';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Designs from './components/Designs';

const App = () => {
  return (
    <div className="relative overflow-x-hidden text-neutral-300 antialiased selection:bg-emerald-300/10 selection:text-emerald-400">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          <motion.div 
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 50% -20%, rgba(16, 185, 129, 0.15), transparent 70%)',
                'radial-gradient(circle at 50% -20%, rgba(16, 185, 129, 0.25), transparent 70%)',
                'radial-gradient(circle at 50% -20%, rgba(16, 185, 129, 0.15), transparent 70%)',
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
      
      <div className="container mx-auto px-8">
        <Navbar/>
        <Hero/>
        <About/>
        <Technologies/>
        <Experience/>
        <Projects/>
        <Designs />
        <Contact/>
      </div>
    </div>
  )
}

export default App
