import { motion } from "framer-motion";

interface BadgeProps {
  icon: string;
  text: string;
}

export const Badge = ({ icon, text }: BadgeProps) => (
  <motion.div
    className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100 cursor-pointer pointer-events-auto"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.2 }}
  >
    <span className="text-lg">{icon}</span>
    <span className="text-sm font-medium text-gray-600">{text}</span>
  </motion.div>
);
