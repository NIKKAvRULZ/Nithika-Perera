import logo2 from '../assets/2.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { motion } from 'framer-motion';

const Navbar = () => {
  const socialLinks = [
    { Icon: FaLinkedin, href: "https://www.linkedin.com/in/nithika-perera-519197254", hoverColor: "hover:text-blue-500" },
    { Icon: FaGithub, href: "https://github.com/NIKKAvRULZ", hoverColor: "hover:text-neutral-400" },
    { Icon: FaInstagram, href: "https://www.instagram.com/nikka_rulz/", hoverColor: "hover:text-pink-500" },
    { Icon: FaFacebook, href: "https://www.facebook.com/nithika.perera.9/", hoverColor: "hover:text-blue-600" }
  ];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between py-6 border-b border-neutral-800/40"
    >
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="flex flex-shrink-0 items-center"
      >
        <img className="mx-2 h-16 w-auto" src={logo2} alt="logo" />
      </motion.div>

      <div className="flex items-center justify-center gap-6">
        {socialLinks.map(({ Icon, href, hoverColor }, index) => (
          <motion.a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`text-2xl text-neutral-400 transition-colors duration-300 ${hoverColor}`}
          >
            <Icon />
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
