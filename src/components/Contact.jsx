import { motion } from 'framer-motion';
import { CONTACT } from "../constants";
import { IoMailOutline, IoCallOutline, IoLocationOutline } from 'react-icons/io5';

const ContactCard = ({ icon, text, link, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative overflow-hidden rounded-2xl bg-neutral-900/20 p-6 backdrop-blur-sm"
  >
    <div className="flex items-center gap-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10">
        <span className="text-xl text-emerald-400">{icon}</span>
      </div>
      {link ? (
        <a href={link} className="text-neutral-300/90 hover:text-emerald-400 transition-colors duration-300">
          {text}
        </a>
      ) : (
        <span className="text-neutral-300/90">{text}</span>
      )}
    </div>
    
    {/* Decorative Elements */}
    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
    <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-emerald-500/0" />
  </motion.div>
);

const Contact = () => {
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
            GET IN TOUCH
          </span>
          <h2 className="text-4xl font-extralight tracking-wider">
            <span className="text-neutral-300">Let's</span>
            <span className="ml-3 text-emerald-400">Connect</span>
          </h2>
        </motion.div>

        {/* Contact Content */}
        <div className="relative mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Cards */}
            <div className="space-y-6">
              <ContactCard
                icon={<IoLocationOutline />}
                text={CONTACT.address}
                index={0}
              />
              <ContactCard
                icon={<IoCallOutline />}
                text={CONTACT.phoneNo}
                index={1}
              />
              <ContactCard
                icon={<IoMailOutline />}
                text={CONTACT.email}
                link={`mailto:${CONTACT.email}`}
                index={2}
              />
            </div>

            {/* Contact Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative overflow-hidden rounded-2xl bg-neutral-900/20 p-8 backdrop-blur-sm"
            >
              <p className="mb-8 text-neutral-300/90 leading-relaxed">
                Let's collaborate on bringing your ideas to life. Available for freelance work and interesting projects.
              </p>
              <motion.a
                href={`mailto:${CONTACT.email}`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-6 py-3 text-sm font-medium text-emerald-400 hover:bg-emerald-500/20 transition-colors duration-300"
              >
                Get in touch
                <IoMailOutline className="text-lg" />
              </motion.a>

              {/* Decorative Elements */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
              <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-emerald-500/0" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
