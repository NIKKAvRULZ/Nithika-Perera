import { motion } from 'framer-motion';
import { HiArrowDown, HiCode, HiDownload } from 'react-icons/hi';
import { HERO_CONTENT } from '../constants';
import profilePic from '../assets/Nithika.png';

import resumePDF from '../assets/resume/NithikaPereraResume.pdf';

const ScrollButton = ({ href, children, variant = "primary" }) => (
  <motion.a
    href={href}
    onClick={(e) => {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`group inline-flex items-center gap-2 rounded-xl px-6 py-3 transition-all duration-300 
              ${variant === "primary" 
                ? "bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20" 
                : "bg-neutral-900/50 text-neutral-400 ring-1 ring-neutral-700/50 hover:text-emerald-400 hover:ring-emerald-500/50"}`}
  >
    {children}
  </motion.a>
);

const DownloadButton = () => (
  <motion.a
    href={resumePDF}
    download="NithikaPereraResume.pdf"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="group inline-flex items-center gap-2 rounded-xl bg-neutral-900/50 px-6 py-3 
              text-neutral-400 ring-1 ring-neutral-700/50 transition-all duration-300 
              hover:bg-emerald-500/10 hover:text-emerald-400 hover:ring-emerald-500/50"
  >
    <span>Download CV</span>
    <HiDownload className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
  </motion.a>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-2">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Title */}
            <div className="space-y-4">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400"
              >
                <HiCode className="h-4 w-4" />
                University Student
              </motion.span>
              
              <h1 className="text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-neutral-400">Hello, I'm</span>
                <span className="mt-2 block bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                  Nithika Perera
                </span>
              </h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="max-w-xl text-lg leading-relaxed text-neutral-400"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <ScrollButton href="#connect">
                Get in touch
                <HiArrowDown className="transition-transform duration-300 group-hover:translate-y-1" />
              </ScrollButton>

              <DownloadButton />

              <ScrollButton href="#projects" variant="primary">
                View Projects
                <HiArrowDown className="transition-transform duration-300 group-hover:translate-y-1" />
              </ScrollButton>

              
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto max-w-md lg:ml-auto"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-emerald-500/20 blur-2xl" />
              <img 
                src={profilePic} 
                alt="Nithika Perera"
                className="relative rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
