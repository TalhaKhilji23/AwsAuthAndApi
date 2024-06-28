import React, { useState } from 'react';

const StickyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-white font-bold text-xl">Logo</a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className="text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="/" className="text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="/" className="text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <a href="/" className="text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">Services</a>
          <a href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default StickyNavbar;
