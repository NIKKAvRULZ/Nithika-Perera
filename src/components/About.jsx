import { motion } from 'framer-motion';
import aboutImg from "../assets/123.png";
import { ABOUT_TEXT } from "../constants";

const About = () => {
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
        About <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">Me</span>
      </motion.h2>

      <div className="flex flex-wrap items-center">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="group relative flex items-center justify-center w-100" >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-400 opacity-25 blur transition duration-500 group-hover:opacity-40" />
            <img 
              className="relative rounded-2xl transform transition duration-500 group-hover:scale-[1.02]" 
              src={aboutImg} 
              alt="about" 
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-lg font-light leading-relaxed text-neutral-400 hover:text-neutral-300 transition-colors duration-300">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
