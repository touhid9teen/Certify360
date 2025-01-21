import { ActionButtonIcon } from '../elements/Icon';
import React, { useState } from 'react';

interface DropdownOption {
  icon: JSX.Element;
  text: string;
  onClick: () => void;
}

interface ActionButtonProps {
  options: DropdownOption[];
}

const ActionButton: React.FC<ActionButtonProps> = ({ options }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = (): void => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className={`relative z-10 ${isDropdownOpen ? 'focus:outline-none' : ''}`}
        aria-haspopup="true"
        aria-expanded={isDropdownOpen}
      >
        <ActionButtonIcon />
      </button>

      {isDropdownOpen && (
        <div className="absolute w-32 bg-white p-2 rounded-md drop-shadow-action-menu">
          {options.map((option, index) => (
            <div
              key={index}
              className="flex items-center gap-4 mb-1 text-indigo-900 cursor-pointer hover:bg-red-300"
              onClick={option.onClick}
            >
              <div>{option.icon}</div>

              <div className="text-[12px]">{option.text}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ActionButton;