import { motion } from "framer-motion";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

const buttonVariants = {
  primary: "bg-blue-600 text-white shadow-lg",
  secondary: "bg-white text-blue-600 border-2 border-blue-200",
};

export const Button = ({
  href,
  children,
  variant = "primary",
}: ButtonProps) => {
  const baseClasses =
    "px-6 py-3 rounded-lg inline-block font-medium cursor-pointer pointer-events-auto";

  return (
    <motion.a
      href={href}
      className={`${baseClasses} ${buttonVariants[variant]}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.a>
  );
};
