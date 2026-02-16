import { motion } from "framer-motion";
import { Badge } from "../common/Badge";
import { Button } from "../common/Button";
import { ProfileImage } from "../common/ProfileImage";
import { Linkedin, Github, Code2 } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="about"
      className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 to-blue-50"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-0">
            <HeroContent />
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
};

const HeroContent = () => (
  <div className="w-full md:w-1/2 text-center md:text-left">
    <motion.div
      className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Available for Hire
    </motion.div>
    <motion.h1
      className="text-4xl md:text-6xl font-bold text-gray-900 mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      Hi, I'm <span className="text-blue-600">Somesh Balani</span>
    </motion.h1>
    <motion.h2
      className="text-xl md:text-2xl text-gray-600 mb-6 font-medium"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      Senior Software Engineer (7.5+ Years Exp)
    </motion.h2>
    <motion.p
      className="text-gray-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      Specializing in <strong>Micro Frontends</strong>,{" "}
      <strong>Scalable UI Architecture</strong>, and{" "}
      <strong>Performance Optimization</strong>. Proven track record in building
      Enterprise Design Systems and reducing bundle sizes by over 50%.
    </motion.p>
    <motion.div
      className="flex justify-center md:justify-start space-x-4 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Button href="#contact" variant="primary">
        Contact Me
      </Button>
      <Button href="#projects" variant="secondary">
        View Work
      </Button>
    </motion.div>

    <motion.div
      className="flex gap-4 justify-center md:justify-start mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.45 }}
    >
      <motion.a
        href="https://www.linkedin.com/in/somesh-balani/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
        whileHover={{ y: -2 }}
        aria-label="LinkedIn Profile"
      >
        <Linkedin className="w-5 h-5 text-blue-600" />
      </motion.a>
      <motion.a
        href="https://github.com/someshBalani1301"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
        whileHover={{ y: -2 }}
        aria-label="GitHub Profile"
      >
        <Github className="w-5 h-5 text-gray-900" />
      </motion.a>
      <motion.a
        href="https://leetcode.com/u/someshb_leet/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
        whileHover={{ y: -2 }}
        aria-label="LeetCode Profile"
      >
        <Code2 className="w-5 h-5 text-orange-600" />
      </motion.a>
    </motion.div>

    <motion.div
      className="flex flex-wrap gap-4 justify-center md:justify-start"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <Badge icon="🏆" text="Best Performer 2023" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
      >
        <Badge icon="🎖️" text="Project Ninja Award" />
      </motion.div>
    </motion.div>
  </div>
);

const HeroImage = () => (
  <div className="w-full md:w-1/2 flex justify-center md:justify-end">
    <ProfileImage alt="Somesh Balani" />
  </div>
);
