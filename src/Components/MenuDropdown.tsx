import React, { useState } from 'react';

interface DropdownProps {
  label: string;
  children: React.ReactNode;
}

const MenuDropdown: React.FC<DropdownProps> = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full mb-2">
      <button
        className="flex justify-between items-center w-full px-4 py-3 bg-white rounded-lg hover:bg-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{label}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-lg shadow-md z-10">
          {children}
        </div>
      )}
    </div>
  );
};

export default MenuDropdown