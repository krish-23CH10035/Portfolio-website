import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = ({ isDark, toggleTheme, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNameHovered, setIsNameHovered] = useState(false);

  const name = "Krish Sahu";
  const nameChars = name.split('');

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          onHoverStart={() => setIsNameHovered(true)}
          onHoverEnd={() => setIsNameHovered(false)}
          className="text-xl font-bold gradient-text cursor-pointer"
          onClick={() => scrollToSection('hero')}
        >
          {nameChars.map((char, index) => (
            <motion.span
              key={index}
              initial={{ y: 0 }}
              animate={{ y: isNameHovered ? -5 : 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10, delay: index * 0.05 }}
              style={{ display: 'inline-block' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.div>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <button key={link.id} onClick={() => scrollToSection(link.id)} className="hover:text-primary transition-colors">
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/krish-23CH10035" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/krish-sahu-iitkgp" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </nav>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-md border-b border-border"
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map(link => (
              <button key={link.id} onClick={() => { scrollToSection(link.id); setIsMenuOpen(false); }} className="block w-full text-left hover:text-primary transition-colors">
                {link.label}
              </button>
            ))}
            <div className="flex space-x-2 pt-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/krish-23CH10035" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/krish-sahu-iitkgp" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
