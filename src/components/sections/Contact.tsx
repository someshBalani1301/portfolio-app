import { motion } from "framer-motion";
import resume from "../../assets/Somesh_Balani_Senior_FullStack.pdf";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            className="text-gray-400 mb-8 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            I am currently open for opportunities in Frontend Architecture and
            Senior Engineering roles.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ContactInfo />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = () => (
  <motion.div
    className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 inline-block w-full max-w-md shadow-2xl"
    whileHover={{ y: -3 }}
    transition={{ duration: 0.2 }}
  >
    <div className="space-y-4 text-left">
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <ContactItem icon="📧">
          <motion.a
            href="mailto:someshbalani09@gmail.com"
            className="hover:text-blue-400 transition cursor-pointer pointer-events-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            someshbalani09@gmail.com
          </motion.a>
        </ContactItem>
      </motion.div>

      <motion.div
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <ContactItem icon="📍">
          <span>Indore, India</span>
        </ContactItem>
      </motion.div>

      <motion.div
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <ContactItem icon="📄">
          <motion.a
            href={resume}
            download="Somesh-Balani-Resume.pdf"
            className="underline hover:text-blue-400 cursor-pointer pointer-events-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Download Resume
          </motion.a>
        </ContactItem>
      </motion.div>
    </div>
  </motion.div>
);

interface ContactItemProps {
  icon: string;
  children: React.ReactNode;
}

const ContactItem = ({ icon, children }: ContactItemProps) => (
  <div className="flex items-center">
    <span className="text-blue-400 w-8">{icon}</span>
    {children}
  </div>
);
