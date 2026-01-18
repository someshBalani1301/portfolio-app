import { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavItems = ["About", "Experience", "Projects", "Skills", "Contact"];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between h-16 items-center">
            <Logo />
            <DesktopMenu />
            <MobileMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>

      {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
    </nav>
  );
};

const Logo = memo(() => (
  <div className="flex-shrink-0 flex items-center">
    <span className="text-2xl font-bold text-blue-600">Somesh.dev</span>
  </div>
));
Logo.displayName = "Logo";

const DesktopMenu = memo(() => (
  <div className="hidden md:flex space-x-8">
    {NavItems.map((item, idx) => (
      <motion.a
        key={item}
        href={`#${item.toLowerCase()}`}
        className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors relative"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.05 }}
        whileHover={{ y: -2 }}
      >
        {item}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-blue-600"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />
      </motion.a>
    ))}
  </div>
));
DesktopMenu.displayName = "DesktopMenu";

interface MobileMenuButtonProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const MobileMenuButton = ({ isOpen, setIsOpen }: MobileMenuButtonProps) => (
  <div className="md:hidden">
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="text-gray-700 hover:text-blue-600 p-2"
    >
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {isOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        )}
      </svg>
    </button>
  </div>
);

interface MobileMenuProps {
  setIsOpen: (value: boolean) => void;
}

const MobileMenu = ({ setIsOpen }: MobileMenuProps) => (
  <AnimatePresence>
    <motion.div
      className="md:hidden bg-white border-b border-gray-100"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {NavItems.map((item, idx) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ x: 5 }}
          >
            {item}
          </motion.a>
        ))}
      </div>
    </motion.div>
  </AnimatePresence>
);
