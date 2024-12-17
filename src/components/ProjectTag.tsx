import React from "react";

interface ProjectTagProps {
  name: string;
  onClick: (name: string) => void; // Function that accepts a string
  isSelected: boolean;
}
const ProjectTag: React.FC<ProjectTagProps> = ({
  name,
  onClick,
  isSelected,
}) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <div>
      <button
        className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-lg sm:text-xl cursor-pointer`}
        onClick={() => onClick(name)}
      >
        {name}
      </button>
    </div>
  );
};

export default ProjectTag;
