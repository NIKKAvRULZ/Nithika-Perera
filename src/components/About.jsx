import { motion } from 'framer-motion';
import { ABOUT_TEXT } from '../constants';
import { HiOutlineLightBulb, HiOutlineCode, HiOutlineChip, HiChevronRight } from 'react-icons/hi';
import { FiArrowUpRight } from 'react-icons/fi';
import profileImg from '../assets/NithikaPereaProfile.png';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ y: -8 }}
    transition={{ type: "spring", stiffness: 100, damping: 15 }}
    className="group relative overflow-hidden rounded-3xl bg-neutral-900/40 p-8 backdrop-blur-md
               border border-emerald-500/10 hover:border-emerald-500/30"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-transparent opacity-0 
                  group-hover:opacity-100 transition-all duration-700" />
    <div className="relative flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 
                      group-hover:bg-emerald-500/20 transition-colors duration-500">
          <Icon className="h-7 w-7 text-emerald-400" />
        </div>
        <FiArrowUpRight className="h-6 w-6 text-emerald-400/40 group-hover:text-emerald-400/80 
                                transition-colors duration-500" />
      </div>
      <div>
        <h3 className="text-xl font-medium text-emerald-400 mb-3">{title}</h3>
        <p className="text-base leading-relaxed text-neutral-400/90 group-hover:text-neutral-300/90 
                   transition-colors duration-500">{description}</p>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r 
                  from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-700" />
  </motion.div>
);

const TechBadge = ({ tech }) => (
  <motion.span 
    whileHover={{ y: -5, x: 5 }}
    transition={{ type: "spring", stiffness: 300, damping: 15 }}
    className="relative px-5 py-2.5 rounded-2xl bg-neutral-900/60 border border-emerald-500/20 
              hover:border-emerald-500/40 transition-all duration-300 hover:shadow-lg 
              hover:shadow-emerald-500/10"
  >
    <span className="relative z-10 text-sm font-light tracking-wide text-emerald-400/90">{tech}</span>
    <div className="absolute inset-0 bg-emerald-500/5 rounded-2xl blur-md" />
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
    <section className="relative py-40 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100%,rgba(16,185,129,0.1),transparent)]" />
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute left-1/4 -top-1/4 h-[800px] w-[800px] rounded-full 
                   bg-emerald-500/10 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32 text-center relative"
        >
          <motion.div 
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-5 py-2
                     border border-emerald-500/20 mb-6 backdrop-blur-sm"
          >
            <span className="text-sm font-light tracking-[0.2em] text-emerald-400/90">ABOUT ME</span>
            <HiChevronRight className="h-4 w-4 text-emerald-400/60" />
          </motion.div>
          <h2 className="text-6xl font-extralight tracking-wider">
            <span className="text-neutral-200/90">Crafting Digital</span>
            <span className="relative ml-4 text-emerald-400 inline-block">
              Experiences
              <motion.div 
                className="absolute -bottom-3 left-0 h-px w-full bg-gradient-to-r 
                        from-emerald-500/0 via-emerald-500/70 to-emerald-500/0"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-20 lg:grid-cols-2">
          {/* Left Column - Profile & Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-16"
          >
            {/* Profile Image */}
            <div className="relative mx-auto max-w-md lg:mx-0">
              <motion.div
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute -inset-4 rounded-3xl bg-emerald-500/20 blur-2xl"
              />
              <motion.img 
                src={profileImg} 
                alt="Nithika Perera"
                className="relative rounded-3xl ring-1 ring-white/10 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* Bio */}
            <div className="space-y-8">
              {ABOUT_TEXT.split('\n\n').map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative text-lg leading-relaxed pl-8 backdrop-blur-sm"
                >
                  <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-emerald-500/50 
                                to-transparent rounded-full" />
                  <span className="text-neutral-300/90 hover:text-neutral-200 transition-colors 
                                duration-300 block py-4">{paragraph}</span>
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Features & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Features */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>

            {/* Technologies */}
            <motion.div
              className="relative rounded-3xl bg-neutral-900/40 p-10 backdrop-blur-md
                       border border-emerald-500/20"
            >
              <h3 className="text-xl font-medium text-emerald-400 mb-8">Technologies</h3>
              <div className="flex flex-wrap gap-4">
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
