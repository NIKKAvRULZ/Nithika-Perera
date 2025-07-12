import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { RiReactjsLine } from "react-icons/ri"
import { SiAdobe, SiAdobeindesign, SiAdobepremierepro, SiMongodb } from "react-icons/si"
import { DiNodejs } from "react-icons/di"
import { FaJava } from "react-icons/fa"
import { DiJavascript1 } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { AiOutlineDotNet } from "react-icons/ai";
import { TbBrandCSharp } from "react-icons/tb";
import { SiCplusplus } from "react-icons/si";
import { SiUipath } from "react-icons/si";
import { SiAdobephotoshop, SiAdobeaftereffects, SiCanva, SiFigma } from "react-icons/si";

const TechCard = ({ Icon, color, name, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: index * 0.1,
            ease: [0.4, 0, 0.2, 1]
          }
        }
      }}
      whileHover={{ 
        y: -8,
        transition: { 
          type: "spring",
          stiffness: 150,
          damping: 15
        }
      }}
      className="group relative flex flex-col items-center gap-4 p-6"
    >
      {/* Card Background */}
      <div className="absolute inset-0 rounded-2xl bg-neutral-900/20 backdrop-blur-sm 
                    ring-1 ring-white/10 transition-all duration-500
                    group-hover:ring-2 group-hover:ring-emerald-500/30
                    group-hover:shadow-lg group-hover:shadow-emerald-500/10" />
      
      {/* Icon Container */}
      <motion.div
        whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
        transition={{ duration: 0.5 }}
        className={`relative z-10 p-4 rounded-xl ${color} opacity-80 
                   group-hover:opacity-100 transition-opacity duration-300`}
      >
        <Icon className="text-5xl" />
      </motion.div>

      {/* Technology Name */}
      <span className="relative z-10 text-sm font-light tracking-wide text-neutral-400
                     group-hover:text-emerald-400 transition-colors duration-300">
        {name}
      </span>

      {/* Hover Effect */}
      <div className={`absolute inset-0 -z-10 opacity-0 rounded-2xl
                    group-hover:opacity-10 transition-opacity duration-500
                    bg-gradient-to-b from-emerald-500/20 via-transparent to-transparent`} />
    </motion.div>
  );
};

const Technologies = () => {
  const technicalTools = [
    { Icon: RiReactjsLine, color: "text-cyan-400", name: "React" },
    { Icon: SiMongodb, color: "text-green-500", name: "MongoDB" },
    { Icon: FaJava, color: "text-red-500", name: "Java" },
    { Icon: DiJavascript1, color: "text-yellow-400", name: "JavaScript" },
    { Icon: SiCplusplus, color: "text-blue-800", name: "C++" },
    { Icon: TbBrandCSharp, color: "text-purple-400", name: "C#" },
    { Icon: DiPython, color: "text-blue-500", name: "Python" },
    { Icon: FaHtml5, color: "text-amber-600", name: "HTML5" },
    { Icon: DiNodejs, color: "text-green-400", name: "Node.js" },
    { Icon: AiOutlineDotNet, color: "text-purple-600", name: ".NET" },
    { Icon: SiUipath, color: "text-orange-500", name: "UiPath RPA" }
  ];

  const creativeTools = [
    { Icon: SiAdobephotoshop, color: "text-blue-600", name: "Photoshop" },
    { Icon: SiAdobeaftereffects, color: "text-purple-500", name: "After Effects" },
    { Icon: SiAdobepremierepro, color: "text-pink-500", name: "Premiere Pro" },
    { Icon: SiAdobeindesign, color: "text-red-500", name: "Indesign" },
    { Icon: SiCanva, color: "text-cyan-500", name: "Canva" },
    { Icon: SiFigma, color: "text-pink-500", name: "Figma" }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_500px_at_50%_50%,rgba(16,185,129,0.05),transparent)]" />
        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full 
                   bg-emerald-500/5 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 space-y-32">
        {/* Technical Tools Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-24 text-center"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-4 block text-sm font-light tracking-[0.2em] text-emerald-400/80"
            >
              TECH STACK
            </motion.span>
            <h2 className="text-4xl font-extralight tracking-wider text-neutral-300">
              Development Tools
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {technicalTools.map((tech, index) => (
              <TechCard key={tech.name} {...tech} index={index} />
            ))}
          </div>
        </div>

        {/* Creative Tools Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-24 text-center"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-4 block text-sm font-light tracking-[0.2em] text-emerald-400/80"
            >
              CREATIVE TOOLS
            </motion.span>
            <h2 className="text-4xl font-extralight tracking-wider text-neutral-300">
              Design & Media
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {creativeTools.map((tool, index) => (
              <TechCard 
                key={tool.name} 
                {...tool} 
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;