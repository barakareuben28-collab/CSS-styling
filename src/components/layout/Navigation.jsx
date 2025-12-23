import { useState } from 'react';
import Button from '../common/Button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">EcoTech Solutions</h1>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-neutralDark hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#features" className="text-neutralDark hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Features</a>
              <a href="#about" className="text-neutralDark hover:text-primary px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#contact" className="text-neutralDark hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-neutralLight inline-flex items-center justify-center p-2 rounded-md text-neutralDark hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-neutralLight">
            <a href="#home" className="text-neutralDark hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#features" className="text-neutralDark hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Features</a>
            <a href="#about" className="text-neutralDark hover:text-primary block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#contact" className="text-neutralDark hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;