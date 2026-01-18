interface SkillTagProps {
  text: string;
}

export const SkillTag = ({ text }: SkillTagProps) => (
  <span className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm border border-gray-200">
    {text}
  </span>
);
