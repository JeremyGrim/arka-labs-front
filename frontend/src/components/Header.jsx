import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const logoSimple = `${process.env.PUBLIC_URL}/asset/arka-logo-blanc-simple.svg`;

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/experts', label: 'Experts' },
    { path: '/features', label: 'Fonctionnalités' },
    { path: '/histoire', label: 'Histoire' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-32 h-10">
              <img
                src={logoSimple}
                alt="Arka Labs logo"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/beta"
              className="px-6 py-3 bg-[#cb0f44] text-white font-medium rounded transition-all hover:bg-[#a00c37] hover:scale-105 hover:shadow-lg hover:shadow-[#cb0f44]/30"
            >
              Rejoindre la Bêta
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/beta"
              className="block mt-4 px-6 py-3 bg-[#cb0f44] text-white text-center font-medium rounded transition-all hover:bg-[#a00c37]"
              onClick={() => setIsMenuOpen(false)}
            >
              Rejoindre la Bêta
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
