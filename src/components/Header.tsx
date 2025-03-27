import React, { useState, useEffect } from 'react';
import { Menu, X, Car } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (isMenuOpen) {
      setScrollPosition(window.scrollY);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      window.scrollTo(0, scrollPosition);
    }
  }, [isMenuOpen, scrollPosition]);

  const handleClickOutside = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('button') === null) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#1B263B] shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Car className="h-8 w-8 text-[#FFB703]" />
            <span className="ml-2 text-[#FFFFFF] font-bold text-xl">Taxi Primjer</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Početna', 'Usluge', 'O Nama', 'Kontakt'].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase().replace('č', 'c').replace(' ', '')}`}
                className="text-[#415A77] hover:text-[#FFB703] border-b-2 border-transparent hover:border-[#FFB703] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <div className="space-y-1">
              {[...Array(3)].map((_, i) => (
                <span
                  key={i}
                  className="block h-1 w-6 rounded bg-[#FFB703]"
                ></span>
              ))}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#1B263B] bg-opacity-95"
          onClick={handleClickOutside}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-8 w-8 text-[#FFB703]" />
            </button>
            {['Početna', 'Usluge', 'O Nama', 'Kontakt'].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase().replace('č', 'c').replace(' ', '')}`}
                className="bg-[#415A77] text-[#FFFFFF] py-4 w-4/5 rounded-lg text-center text-xl hover:bg-[#FFB703] hover:text-[#1B263B] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;