import { motion } from "framer-motion";
import { TechTag } from "../common/TechTag";

interface Project {
  title: string;
  role: string;
  desc: string;
  tech: string[];
  highlight: boolean;
}

const projects: Project[] = [
  {
    title: "AI-Powered Design System",
    role: "Current Project",
    desc: "Revolutionary next-generation design system leveraging AI and MCP protocols for intelligent component generation. Integrated GitHub Copilot for context-aware code suggestions and Figma MCP Server for seamless design-to-code automation. Reduces design implementation time by 65% while maintaining design consistency.",
    tech: ["React", "MUI", "Storybook", "Figma MCP", "Copilot"],
    highlight: true,
  },
  {
    title: "Dynamic Questionnaire Platform",
    role: "Lead Developer",
    desc: "Engineered a powerful dynamic form engine using React and Redux that transforms complex questionnaire workflows into intuitive user experiences. Reduces manual form creation time by 60% through JSON Schema-driven components. Supports conditional logic, real-time validation, and multi-step workflows with 99.9% uptime.",
    tech: ["React.js", "Redux", "Formik", "JSON Schema"],
    highlight: false,
  },
  {
    title: "High-Performance Dashboard",
    role: "Senior Engineer",
    desc: "Architected enterprise-grade analytics dashboard processing 1M+ daily transactions with sub-100ms response times. Implemented advanced caching strategies, virtualized rendering, and WebSocket connections for real-time data updates. Achieved 95% reduction in initial load time through code splitting and lazy loading.",
    tech: ["React", "D3.js", "WebSockets", "Redux"],
    highlight: false,
  },
];

export const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => (
  <motion.div
    className={`bg-white rounded-xl overflow-hidden border group cursor-pointer h-full flex flex-col ${
      project.highlight
        ? "border-blue-500 ring-4 ring-blue-50 shadow-lg"
        : "border-gray-100 shadow-sm"
    }`}
    whileHover={{ y: -6 }}
    transition={{ duration: 0.3 }}
  >
    <div
      className={`h-48 flex items-center justify-center relative overflow-hidden ${
        project.highlight
          ? "bg-gradient-to-br from-blue-600 to-blue-700"
          : "bg-gradient-to-br from-gray-800 to-gray-900"
      }`}
    >
      <span
        className={`${
          project.highlight ? "text-white" : "text-gray-400"
        } text-3xl font-bold px-4 text-center`}
      >
        {project.title}
      </span>
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <div className="flex justify-between items-start mb-2">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">
          {project.role}
        </span>
      </div>
      <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-1">
        {project.desc}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tag) => (
          <TechTag key={tag} name={tag} />
        ))}
      </div>
    </div>
  </motion.div>
);
