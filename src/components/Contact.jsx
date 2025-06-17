import { motion } from 'framer-motion';
import { CONTACT } from "../constants";
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const Contact = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-24"
    >
      <motion.h2 
        initial={{ y: -20 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center text-3xl font-light text-neutral-200"
      >
        Let's Connect
      </motion.h2>

      <div className="mx-auto max-w-2xl">
        <motion.div 
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid gap-8 md:grid-cols-2"
        >
          {/* Contact Info */}
          <div className="space-y-6 md:pr-8">
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-center space-x-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10">
                <HiLocationMarker className="h-5 w-5 text-emerald-400" />
              </div>
              <p className="text-neutral-400">{CONTACT.address}</p>
            </motion.div>

            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-center space-x-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10">
                <HiPhone className="h-5 w-5 text-emerald-400" />
              </div>
              <p className="text-neutral-400">{CONTACT.phoneNo}</p>
            </motion.div>

            <motion.a 
              href={`mailto:${CONTACT.email}`}
              whileHover={{ x: 5 }}
              className="flex items-center space-x-4 group"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10">
                <HiMail className="h-5 w-5 text-emerald-400" />
              </div>
              <span className="text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300">
                {CONTACT.email}
              </span>
            </motion.a>
          </div>

          {/* Contact Form or Additional Info */}
          <div className="rounded-2xl bg-neutral-900/50 p-6 backdrop-blur-sm">
            <p className="text-neutral-400 leading-relaxed">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
            <motion.a
              href={`mailto:${CONTACT.email}`}
              whileHover={{ scale: 1.02 }}
              className="mt-6 inline-block rounded-lg bg-emerald-500/10 px-4 py-2 text-emerald-400 hover:bg-emerald-500/20 transition-colors duration-300"
            >
              Send Message
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
