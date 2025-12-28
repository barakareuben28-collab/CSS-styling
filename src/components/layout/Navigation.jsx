import { useState } from 'react';
import Button from '../common/Button';
import logo from '../../assets/images/logo-noircraft.svg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-surface py-4" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-3">
              <img src={logo} alt="NoirCraft logo" className="h-8 w-auto" />
              <span className="text-neutralDark font-bold text-lg">NoirCraft</span>
            </div>
            <div className="hidden md:block ml-8">
              <div className="flex items-baseline space-x-6">
                <a href="#home" className="text-muted hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Work</a>
                <a href="#about" className="text-muted hover:text-primary px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#portfolio" className="text-muted hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Portfolio</a>
                <a href="#contact" className="text-muted hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#hire" className="px-4 py-2 rounded-md bg-primary text-white">Start a Project</a>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
              className="bg-surface inline-flex items-center justify-center p-2 rounded-md text-neutralDark hover:text-primary hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
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
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-surface">
            <a href="#home" className="text-neutralDark hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Work</a>
            <a href="#about" className="text-neutralDark hover:text-primary block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#portfolio" className="text-neutralDark hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Portfolio</a>
            <a href="#contact" className="text-neutralDark hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            <a href="#hire" className="block text-primary bg-opacity-10 px-3 py-2 rounded-md">Start a Project</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation; 