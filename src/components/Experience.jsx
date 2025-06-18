import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';
import { HiCalendar, HiBriefcase, HiCode } from 'react-icons/hi';

const TimelineCard = ({ experience, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`relative md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'}`}
  >
    {/* Timeline Dot */}
    <div className="absolute -left-3 top-8 z-10 h-6 w-6 rounded-full border-4 border-neutral-950 bg-emerald-400 md:left-0 md:-ml-3" />
    
    {/* Card Content */}
    <div className="group relative overflow-hidden rounded-2xl bg-neutral-900/20 p-6 backdrop-blur-sm md:p-8">
      {/* Year Badge */}
      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1">
        <HiCalendar className="h-4 w-4 text-emerald-400" />
        <span className="text-sm text-emerald-400">{experience.year}</span>
      </div>

      {/* Role & Company */}
      <div className="mb-4">
        <h3 className="text-xl font-medium text-emerald-400">{experience.role}</h3>
        <p className="mt-1 text-neutral-300/90">{experience.company}</p>
      </div>

      {/* Description */}
      <p className="mb-6 text-sm leading-relaxed text-neutral-400/90">
        {experience.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech, idx) => (
          <span 
            key={idx}
            className="rounded-full bg-neutral-800/50 px-3 py-1 text-xs text-emerald-400/80
                     border border-emerald-500/10 backdrop-blur-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-emerald-500/0" />
    </div>
  </motion.div>
);

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
