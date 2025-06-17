import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const Experience = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-b border-neutral-800/40 pb-24"
    >
      <motion.h2 
        initial={{ y: -20 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl font-light tracking-tight"
      >
        Experience
      </motion.h2>

      <div className="space-y-12">
        {EXPERIENCES.map((experience, index) => (
          <motion.div 
            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            key={index} 
            className="group flex flex-wrap lg:justify-center hover:bg-neutral-900/20 rounded-xl p-6 transition-colors duration-300"
          >
            <div className="w-full lg:w-1/4">
              <p className='mb-2 text-sm text-emerald-400 font-medium'>{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className='mb-2 text-xl font-medium tracking-tight'>
                {experience.role} - 
                <span className='text-emerald-400 ml-2'>
                  {experience.company}
                </span>
              </h6>
              <p className='mb-6 text-neutral-400 font-light leading-relaxed'>
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <motion.span 
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className='inline-block rounded-full bg-neutral-800/50 px-3 py-1 text-sm font-medium text-emerald-400 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors duration-300'
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
