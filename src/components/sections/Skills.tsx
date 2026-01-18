import { motion } from "framer-motion";
import { SkillTag } from "../common/SkillTag";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Core",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript ES6+",
      "Redux",
      "HTML5/CSS3",
    ],
  },
  {
    title: "Architecture & Performance",
    skills: [
      "Micro Frontends",
      "Monorepo",
      "Webpack",
      "Lazy Loading",
      "Lighthouse",
    ],
  },
  {
    title: "Testing & DevOps",
    skills: [
      "Jest",
      "Cypress",
      "React Testing Library",
      "Docker",
      "AWS (S3/Lambda)",
      "CI/CD",
    ],
  },
  {
    title: "Tools & AI",
    skills: [
      "Storybook",
      "Figma",
      "GitHub Copilot",
      "Git",
      "SonarQube",
      "Jira",
    ],
  },
];

export const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Technical Skills
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skillCategories.map((category, index) => (
              <motion.div key={index} variants={itemVariants}>
                <SkillCategory category={category} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface SkillCategoryProps {
  category: SkillCategory;
}

const SkillCategory = ({ category }: SkillCategoryProps) => (
  <motion.div
    className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors group cursor-pointer"
    whileHover={{ y: -3 }}
    transition={{ duration: 0.2 }}
  >
    <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
      {category.title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {category.skills.map((skill) => (
        <SkillTag key={skill} text={skill} />
      ))}
    </div>
  </motion.div>
);
