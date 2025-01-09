import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#1A1F2C] text-white py-4 px-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <p className="text-2xl font-bold">VTU SGPA Calculator</p>

        {/* Hamburger Menu for Small Screens */}
        <button
          className="lg:hidden flex items-center text-white hover:text-gray-300 transition-colors"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links (Visible on Large Screens) */}
        <nav className="hidden lg:flex space-x-6">
          <a href="#calculator" className="hover:text-gray-300 transition-colors">Calculator</a>
          <a href="#content" className="hover:text-gray-300 transition-colors">About</a>
          <a href="#faq" className="hover:text-gray-300 transition-colors">FAQ</a>
        </nav>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 bg-[#1A1F2C] shadow-md rounded-lg">
          <nav className="flex flex-col space-y-2 p-4">
            <a href="#calculator" className="hover:text-gray-300 transition-colors" onClick={toggleMenu}>Calculator</a>
            <a href="#content" className="hover:text-gray-300 transition-colors" onClick={toggleMenu}>About</a>
            <a href="#faq" className="hover:text-gray-300 transition-colors" onClick={toggleMenu}>FAQ</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;