interface TechTagProps {
  name: string;
}

export const TechTag = ({ name }: TechTagProps) => (
  <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded border border-gray-200">
    {name}
  </span>
);
