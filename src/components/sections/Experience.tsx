import { motion } from "framer-motion";

interface ExperienceItem {
  company: string;
  role: string;
  date: string;
  desc: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "Cognizant Technical Solutions",
    role: "Senior Associate",
    date: "March 2025 - Present",
    desc: "Leading frontend modernization initiatives transforming legacy applications into modern, maintainable codebases. Converted 200+ legacy React components to Storybook-driven development, reducing onboarding time by 40% and improving developer productivity. Established component documentation standards and conducted team training sessions.",
  },
  {
    company: "Virtusa Consultancy Services",
    role: "Senior Software Engineer",
    date: "July 2022 - March 2025",
    desc: "Architected scalable Micro Frontend infrastructure using Module Federation, enabling independent team deployments and reducing integration issues by 60%. Mentored 8+ junior developers in React best practices, performance optimization, and architectural patterns. Implemented centralized design tokens system reducing CSS duplication by 45%.",
  },
  {
    company: "Deqode",
    role: "Senior Solutions Engineer",
    date: "Sept 2019 - July 2022",
    desc: "Optimized application performance achieving 50% bundle size reduction through advanced webpack configuration, tree-shaking, and lazy loading strategies. Architected and launched comprehensive design system serving 25+ product teams, improving UI consistency and development velocity by 30%. Pioneered performance monitoring practices using Lighthouse CI.",
  },
];

export const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Work Experience
          </motion.h2>
          <motion.div
            className="relative border-l-4 border-blue-600 ml-4 md:ml-0 space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ExperienceCard experience={exp} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface ExperienceCardProps {
  experience: ExperienceItem;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => (
  <motion.div
    className="relative pl-8 group cursor-pointer"
    whileHover={{ x: 5 }}
    transition={{ duration: 0.2 }}
  >
    <div className="absolute -left-3 top-0 bg-blue-600 h-6 w-6 rounded-full border-4 border-white group-hover:scale-125 transition-transform duration-200"></div>
    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
      {experience.role}
    </h3>
    <h4 className="text-lg text-blue-600 font-semibold mb-1">
      {experience.company}
    </h4>
    <p className="text-sm text-gray-400 mb-3">{experience.date}</p>
    <p className="text-gray-600 leading-relaxed">{experience.desc}</p>
  </motion.div>
);
