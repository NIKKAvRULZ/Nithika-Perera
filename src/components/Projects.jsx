import { motion } from 'framer-motion';
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <motion.section 
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-24"
    >
      <motion.h2 
        initial={{ y: -20 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center text-3xl font-light tracking-tight text-neutral-200"
      >
        Featured Projects
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <motion.article 
            key={index}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl bg-neutral-900/50 backdrop-blur-sm"
          >
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-neutral-900/60 opacity-0 transition duration-300 group-hover:opacity-100" />
            </div>

            <div className="p-6">
              <h3 className="mb-2 text-xl font-medium text-emerald-400">
                {project.title}
              </h3>
              
              <p className="mb-4 text-sm text-neutral-400 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="inline-block rounded-full bg-neutral-800/50 px-2.5 py-0.5 text-xs text-emerald-400 border border-emerald-500/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
