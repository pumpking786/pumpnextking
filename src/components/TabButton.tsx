import React from "react";

// Define types for the props
interface TabButtonProps {
  active: boolean;
  selectTab: () => void; // Assuming selectTab is a function that doesn't take parameters and returns nothing
  children: React.ReactNode; // This will allow the button to accept any children (text, JSX, etc.)
}

const TabButton: React.FC<TabButtonProps> = ({
  active,
  selectTab,
  children,
}) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
