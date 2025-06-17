import { motion } from 'framer-motion';
import { HERO_CONTENT } from '../constants';
import profilePic from '../assets/NithikaPereaProfile.png';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
            <span className="block text-neutral-400">Hello, I'm</span>
            <span className="block mt-2 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              Nithika Perera
            </span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-emerald-400/80 font-light"
          >
            Undergraduate
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-md text-neutral-400 leading-relaxed"
          >
            {HERO_CONTENT}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative group">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-emerald-500/20 to-emerald-400/20 blur-lg opacity-0 group-hover:opacity-100 transition duration-500" />
            <img 
              src={profilePic} 
              alt="Nithika Perera"
              className="relative rounded-lg w-full transform transition duration-500 group-hover:scale-[1.01]"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
