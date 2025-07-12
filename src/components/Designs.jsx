import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiMaximize2, FiX } from 'react-icons/fi';

const DesignCard = ({ design, index, onClick }) => {
  const springTransition = {
    type: "spring",
    stiffness: 100,
    damping: 15
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl bg-neutral-900/20 backdrop-blur-sm"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={springTransition}
        className="relative aspect-[4/3] cursor-pointer"
        onClick={onClick}
      >
        <img 
          src={design.image} 
          alt={design.title}
          className="w-full h-full object-cover rounded-2xl transition-transform duration-500 
                   group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-neutral-900/60 opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 rounded-2xl flex items-center justify-center">
          <FiMaximize2 className="text-2xl text-emerald-400" />
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-neutral-900/90 
                    to-transparent">
        <h3 className="text-lg font-medium text-emerald-400">{design.title}</h3>
        <p className="text-sm text-neutral-300/90 mt-1">{design.category}</p>
      </div>
    </motion.div>
  );
};

const DesignModal = ({ design, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/80 backdrop-blur-sm"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.9 }}
      className="relative max-w-1xl w-150 bg-neutral-900/90 rounded-2xl p-5 overflow-hidden"
      onClick={e => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-neutral-400 hover:text-emerald-400 
                 transition-colors duration-300 z-10"
      >
        <FiX className="text-2xl" />
      </button>
      
      <div className="relative w-full rounded-lg">
        <img 
          src={design.image} 
          alt={design.title}
          className="w-full h-auto object-contain rounded-lg"
        />
      </div>
      
      <div className="mt-6 space-y-4">
        <h3 className="text-xl font-medium text-emerald-400">{design.title}</h3>
        <p className="text-neutral-300/90">{design.description}</p>
        <div className="flex flex-wrap gap-2">
          {design.tools.map((tool, idx) => (
            <span 
              key={idx}
              className="px-3 py-1 text-xs rounded-full bg-neutral-800/50 text-emerald-400/80 
                       border border-emerald-500/10"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const Designs = () => {
  const [selectedDesign, setSelectedDesign] = useState(null);

  const designs = [
    {
      title: "Valorant ScoreCard",
      category: "UI Design",
      image: "/designs/valorant ScoreCard.png",
      description: "A modern scorecard design for Valorant game statistics tracking, featuring a clean and intuitive interface that matches the game's aesthetic.",
      tools: ["Adobe Photoshop", "Figma"]    
    },
    // {
    //   title: "E-Commerce Dashboard",
    //   category: "UI/UX Design",
    //   image: "/designs/dashboard.png",
    //   description: "A comprehensive dashboard for e-commerce analytics, featuring dark mode and intuitive data visualization.",
    //   tools: ["Adobe XD", "Adobe Photoshop"]
    // },
    // {
    //   title: "Social Media Kit",
    //   category: "Social Media Design",
    //   image: "/designs/social-media.png",
    //   description: "A collection of social media templates and assets designed for consistent brand presence across platforms.",
    //   tools: ["Adobe Illustrator", "Canva Pro"]
    // },
    // {
    //   title: "Mobile App Interface",
    //   category: "Mobile UI Design",
    //   image: "/designs/mobile-app.png",
    //   description: "Clean and modern mobile application interface design with focus on user experience and accessibility.",
    //   tools: ["Figma", "Adobe Photoshop"]
    // },
    // {
    //   title: "Brand Identity",
    //   category: "Branding",
    //   image: "/designs/brand-identity.png",
    //   description: "Complete brand identity design including logo, color palette, typography, and brand guidelines.",
    //   tools: ["Adobe Illustrator", "Adobe InDesign"]
    // },
    // {
    //   title: "Website Mockup",
    //   category: "Web Design",
    //   image: "/designs/website.png",
    //   description: "Modern and responsive website design mockup with focus on user experience and visual hierarchy.",
    //   tools: ["Figma", "Adobe Photoshop"]
    // }
  ];

  return (
    <section className="relative py-32" id="designs">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <span className="mb-4 block text-sm font-light tracking-widest text-emerald-400/80">
            MY DESIGNS
          </span>
          <h2 className="text-4xl font-extralight tracking-wider">
            <span className="text-neutral-300">Design</span>
            <span className="ml-3 text-emerald-400">Portfolio</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design, index) => (
            <DesignCard
              key={index}
              design={design}
              index={index}
              onClick={() => setSelectedDesign(design)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedDesign && (
          <DesignModal
            design={selectedDesign}
            onClose={() => setSelectedDesign(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Designs;