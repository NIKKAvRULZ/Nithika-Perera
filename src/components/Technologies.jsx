import { motion } from 'framer-motion';
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { AiOutlineDotNet } from "react-icons/ai";
import { TbBrandCSharp } from "react-icons/tb";
import { SiCplusplus } from "react-icons/si";

const Technologies = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="border-b border-neutral-800/40 pb-32">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl font-light tracking-tight"
      >
        Technologies
      </motion.h2>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        {[
          { Icon: RiReactjsLine, color: "text-cyan-400", border: "border-cyan-400/20" },
          { Icon: SiMongodb, color: "text-green-500", border: "border-green-500/20" },
          { Icon: FaJava, color: "text-red-500", border: "border-red-500/20" },
          { Icon: DiJavascript1, color: "text-yellow-400", border: "border-yellow-400/20" },
          { Icon: SiCplusplus, color: "text-blue-800", border: "border-blue-800/20" },
          { Icon: TbBrandCSharp, color: "text-purple-400", border: "border-purple-400/20" },
          { Icon: DiPython, color: "text-blue-500", border: "border-blue-500/20" },
          { Icon: FaHtml5, color: "text-amber-600", border: "border-amber-600/20" },
          { Icon: DiNodejs, color: "text-green-400", border: "border-green-400/20" },
          { Icon: AiOutlineDotNet, color: "text-purple-600", border: "border-purple-600/20" },
        ].map(({ Icon, color, border }, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            className={`relative group rounded-2xl border-2 ${border} p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-emerald-500/10`}
          >
            <Icon className={`text-6xl ${color} transition-transform duration-300 group-hover:scale-110`}/>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/0 to-green-400/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"/>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
