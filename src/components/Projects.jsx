import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { PROJECTS } from '../constants';

const ProjectCard = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const springTransition = {
    type: "spring",
    stiffness: 100,
    damping: 15
  };

  const handleToggle = () => {
    if (window.matchMedia('(max-width: 768px)').matches) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group relative overflow-visible rounded-2xl bg-neutral-900/20 backdrop-blur-sm cursor-pointer"
      onClick={handleToggle}
      onHoverStart={() => !window.matchMedia('(max-width: 768px)').matches && setIsExpanded(true)}
      onHoverEnd={() => !window.matchMedia('(max-width: 768px)').matches && setIsExpanded(false)}
    >
      {/* Content Container */}
      <motion.div
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
        }}
        className="relative z-10"
      >
        {/* Project Image */}
        <div className="aspect-video w-full overflow-hidden rounded-t-2xl">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover object-center transform 
                     transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        {/* Project Content */}
        <div className="relative p-6">
          {/* Description Section */}
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
                {project.description}
              </p>
              
              <motion.div 
                className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t 
                        from-neutral-900/20 to-transparent pointer-events-none"
                animate={{ opacity: isExpanded ? 0 : 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Mobile Expand/Collapse Indicator */}
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

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.map((tech, idx) => (
              <motion.span 
                key={idx}
                className="rounded-full bg-neutral-800/50 px-3 py-1 text-xs 
                         text-emerald-400/80 border border-emerald-500/10"
                whileHover={{ y: -2 }}
                transition={springTransition}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Links Section */}
          <div className="mt-6 flex gap-6">
            {project.github && (
              <motion.a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-emerald-400 
                         hover:text-emerald-300 cursor-pointer"
                whileHover={{ x: 4 }}
                transition={springTransition}
                onClick={(e) => {
                  e.preventDefault();
                  window.open(project.github, '_blank', 'noopener,noreferrer');
                }}
              >
                <FiGithub className="text-lg" />
                <span>Source Code</span>
              </motion.a>
            )}
            {project.demo && (
              <motion.a 
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-emerald-400 
                         hover:text-emerald-300 cursor-pointer"
                whileHover={{ x: 4 }}
                transition={springTransition}
                onClick={(e) => {
                  e.preventDefault();
                  window.open(project.demo, '_blank', 'noopener,noreferrer');
                }}
              >
                <FiExternalLink className="text-lg" />
                <span>Live Demo</span>
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>

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
  );
};

const Projects = () => {
  return (
    <section className="relative py-32" id="projects">
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
            MY WORK
          </span>
          <h2 className="text-4xl font-extralight tracking-wider">
            <span className="text-neutral-300">Featured</span>
            <span className="ml-3 text-emerald-400">Projects</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;