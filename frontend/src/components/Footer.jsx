import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const logoFull = `${process.env.PUBLIC_URL}/asset/Arka-labs-logo-white.svg`;
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="h-10 mb-6">
              <img
                src={logoFull}
                alt="Arka Labs logo"
                className="h-full w-auto object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Transformer des LLMs en équipes coordonnées, auditables et pilotables
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[#cb0f44] transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#cb0f44] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#cb0f44] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#cb0f44] transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Produit</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/features" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link to="/experts" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Experts
                </Link>
              </li>
              <li>
                <Link to="/beta" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Programme Bêta
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/histoire" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Notre Histoire
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Carrières
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Légal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  CGU
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Licence MIT
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm text-center">
            © 2025 ARKA. Tous droits réservés. Propulsé par OpenAI, Anthropic, Google Gemini.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
