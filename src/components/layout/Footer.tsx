import { Linkedin, Github, Code2 } from "lucide-react";

export const Footer = () => (
  <footer className="bg-gray-950 text-gray-500 py-8 border-t border-gray-900">
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/somesh-balani/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/someshBalani1301"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://leetcode.com/u/someshb_leet/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors"
              aria-label="LeetCode Profile"
            >
              <Code2 className="w-5 h-5" />
            </a>
          </div>
          <p className="text-center">
            &copy; 2026 Somesh Balani. Built with React & Tailwind v4.
          </p>
        </div>
      </div>
    </div>
  </footer>
);
