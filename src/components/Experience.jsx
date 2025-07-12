import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { EXPERIENCES } from '../constants';
import { HiCalendar, HiBriefcase, HiCode } from 'react-icons/hi';

const TimelineCard = ({ experience, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const springTransition = {
    type: "spring",
    stiffness: 100,
    damping: 15
  };

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={`relative md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'}`}
    >
      {/* Timeline Dot with animation */}
      <motion.div 
        className="absolute -left-3 top-8 z-10 h-6 w-6 rounded-full border-4 border-neutral-950 bg-emerald-400 md:left-0 md:-ml-3"
        whileHover={{ scale: 1.2 }}
        transition={springTransition}
      />
    
      {/* Card Content */}
      <motion.div 
        className="group relative overflow-hidden rounded-2xl bg-neutral-900/20 p-6 backdrop-blur-sm md:p-8 cursor-pointer"
        onClick={handleToggle}
        onHoverStart={() => !window.matchMedia('(max-width: 768px)').matches && setIsExpanded(true)}
        onHoverEnd={() => !window.matchMedia('(max-width: 768px)').matches && setIsExpanded(false)}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
        }}
      >
        {/* Year Badge with hover animation */}
        <motion.div 
          className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1"
          whileHover={{ x: 4 }}
          transition={springTransition}
        >
          <HiCalendar className="h-4 w-4 text-emerald-400" />
          <span className="text-sm text-emerald-400">{experience.year}</span>
        </motion.div>

        {/* Role & Company with hover animation */}
        <motion.div className="mb-4">
          <motion.h3 
            className="text-xl font-medium text-emerald-400"
            whileHover={{ x: 4 }}
            transition={springTransition}
          >
            {experience.role}
          </motion.h3>
          <motion.p 
            className="mt-1 text-neutral-300/90"
            whileHover={{ x: 4 }}
            transition={springTransition}
          >
            {experience.company}
          </motion.p>
        </motion.div>

        {/* Description with AnimatePresence */}
        <AnimatePresence>
          <motion.div
            className="relative mb-6 overflow-hidden"
            initial={{ height: "4.5rem" }}
            animate={{ 
              height: isExpanded ? "auto" : "4.5rem",
              transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
            }}
          >
            <p className={`text-sm leading-relaxed text-neutral-400/90 
                        ${!isExpanded ? 'line-clamp-3' : ''}`}>
              {experience.description}
            </p>
            
            <motion.div 
              className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-neutral-900/20 to-transparent
                        pointer-events-none"
              animate={{ opacity: isExpanded ? 0 : 1 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Expand/Collapse Indicator for Mobile */}
        <motion.div
          className="md:hidden absolute bottom-4 right-4 text-emerald-400/60"
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </motion.div>

        {/* Technologies with hover animation */}
        <div className="flex flex-wrap gap-2 mt-6">
          {experience.technologies.map((tech, idx) => (
            <motion.span 
              key={idx}
              className="rounded-full bg-neutral-800/50 px-3 py-1 text-xs text-emerald-400/80
                       border border-emerald-500/10 backdrop-blur-sm"
              whileHover={{ y: -2 }}
              transition={springTransition}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
        <motion.div 
          className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r 
                   from-emerald-500/0 via-emerald-500/20 to-emerald-500/0"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section className="relative py-32">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <span className="mb-4 block text-sm font-light tracking-widest text-emerald-400/80">
            PROFESSIONAL JOURNEY
          </span>
          <h2 className="text-4xl font-extralight tracking-wider">
            <span className="text-neutral-300">Work</span>
            <span className="ml-3 text-emerald-400">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative mx-auto max-w-4xl">
          {/* Timeline Line */}
          <div className="absolute left-0 top-8 h-[calc(100%-4rem)] w-0.5 bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-transparent md:left-1/2" />
          
          {/* Timeline Cards */}
          <div className="space-y-12 pl-6 md:pl-0">
            {EXPERIENCES.map((experience, index) => (
              <TimelineCard key={index} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
