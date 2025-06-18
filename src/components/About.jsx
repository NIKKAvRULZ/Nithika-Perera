import { motion } from 'framer-motion';
import { ABOUT_TEXT } from '../constants';
import { HiOutlineLightBulb, HiOutlineCode, HiOutlineChip } from 'react-icons/hi';
import profileImg from '../assets/NithikaPereaProfile.png';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="group relative rounded-2xl bg-neutral-900/20 p-6 backdrop-blur-sm ring-1 ring-white/10"
  >
    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/10 to-emerald-500/20">
      <Icon className="h-7 w-7 text-emerald-400" />
    </div>
    <h3 className="mb-2 text-lg font-medium text-emerald-400">{title}</h3>
    <p className="text-sm leading-relaxed text-neutral-400/90">{description}</p>
    
    {/* Hover Effect Line */}
    <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-emerald-500/0 via-emerald-500/30 to-emerald-500/0 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
  </motion.div>
);
  
const TechBadge = ({ tech }) => (
  <motion.span 
    whileHover={{ scale: 1.05 }}
    className="rounded-full border border-emerald-500/10 bg-neutral-900/60 px-4 py-1.5 text-sm text-emerald-400/80"
  >
    {tech}
  </motion.span>
);

const About = () => {
  const features = [
    {
      icon: HiOutlineLightBulb,
      title: "Problem Solver",
      description: "Passionate about finding innovative solutions to complex technical challenges."
    },
    {
      icon: HiOutlineCode,
      title: "Full Stack Developer",
      description: "Experience with both frontend and backend development using modern technologies."
    },
    {
      icon: HiOutlineChip,
      title: "Tech Enthusiast",
      description: "Always learning and staying updated with the latest technology trends."
    }
  ];

  const technologies = [
    "React", "Node.js", "MongoDB", "Express",
    "Java", "Kotlin", "TypeScript", "Next.js",
    "TailwindCSS", "Git", "Figma"
  ];

  return (
    <section className="relative min-h-screen py-32">
      {/* Background Gradient Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute right-1/3 bottom-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <motion.span 
            className="mb-4 inline-block text-sm font-light tracking-widest text-emerald-400/80 
                     rounded-full bg-emerald-500/5 px-4 py-1.5"
          >
            ABOUT ME
          </motion.span>
          <h2 className="text-4xl font-extralight tracking-wider">
            <span className="text-neutral-300">Crafting Digital</span>
            <span className="ml-3 text-emerald-400">Experiences</span>
          </h2>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Column - Profile & Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative mx-auto max-w-md lg:mx-0">
              <div className="absolute -inset-4 rounded-2xl bg-emerald-500/20 blur-2xl" />
              <motion.img 
                src={profileImg} 
                alt="Nithika Perera"
                className="relative rounded-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Bio */}
            <div className="prose prose-invert prose-emerald max-w-none">
              {ABOUT_TEXT.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed text-neutral-400/90">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Features & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Feature Cards */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>

            {/* Technologies */}
            <motion.div
              className="relative rounded-2xl bg-neutral-900/20 p-8 backdrop-blur-sm ring-1 ring-white/10"
            >
              <h3 className="mb-6 text-lg font-medium text-emerald-400">Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <TechBadge key={index} tech={tech} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
