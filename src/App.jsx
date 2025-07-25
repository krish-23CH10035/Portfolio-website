import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';

import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isAdmin, setIsAdmin] = useState(!!localStorage.getItem('admin_token'));
  const [adminInput, setAdminInput] = useState('');
  const [adminError, setAdminError] = useState(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const { toast } = useToast();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    document.documentElement.className = isDark ? '' : 'light';
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleNotImplemented = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleAdminLogin = e => {
    e.preventDefault();
    // Use the same token as in backend .env
    if (adminInput === 'your_secret_admin_token_here') {
      localStorage.setItem('admin_token', adminInput);
      setIsAdmin(true);
      setAdminInput('');
      setAdminError(null);
    } else {
      setAdminError('Invalid admin password.');
    }
  };
  const handleAdminLogout = () => {
    localStorage.removeItem('admin_token');
    setIsAdmin(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header isDark={isDark} toggleTheme={toggleTheme} scrollToSection={scrollToSection} />
      <Helmet>
        <title>Krish Sahu - Portfolio | Chemical Engineering Student & Aspiring Software Developer</title>
        <meta name="description" content="Portfolio of Krish Sahu, a Chemical Engineering student at IIT Kharagpur and aspiring software developer passionate about web development, DSA, and AI integration." />
      </Helmet>

      <div className="cursor-glow" style={{ left: cursorPosition.x - 10, top: cursorPosition.y - 10 }} />
      <motion.div className="scroll-progress" style={{ scaleX }} />

      <main>
        <Hero scrollToSection={scrollToSection} />
        <Marquee />
        <About />
        <Projects handleNotImplemented={handleNotImplemented} isAdmin={isAdmin} />
        <Experience isAdmin={isAdmin} />
        <Achievements isAdmin={isAdmin} />
        <Contact handleNotImplemented={handleNotImplemented} />
      </main>
      <Footer isAdmin={isAdmin} adminInput={adminInput} setAdminInput={setAdminInput} adminError={adminError} handleAdminLogin={handleAdminLogin} handleAdminLogout={handleAdminLogout} />
      <Toaster />
    </div>
  );
};

export default App;
