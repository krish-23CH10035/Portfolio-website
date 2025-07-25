import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
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


const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Krish Sahu - Portfolio | Chemical Engineering Student & Aspiring Software Developer</title>
        <meta name="description" content="Portfolio of Krish Sahu, a Chemical Engineering student at IIT Kharagpur and aspiring software developer passionate about web development, DSA, and AI integration." />
      </Helmet>

      <div className="cursor-glow" style={{ left: cursorPosition.x - 10, top: cursorPosition.y - 10 }} />
      <motion.div className="scroll-progress" style={{ scaleX }} />

      <Header isDark={isDark} toggleTheme={toggleTheme} scrollToSection={scrollToSection} />
      
      <main>
        <Hero scrollToSection={scrollToSection} />
        <Marquee />
        <About />
        <Projects handleNotImplemented={handleNotImplemented} />
        <Experience />
        <Achievements />
        <Contact handleNotImplemented={handleNotImplemented} />
      </main>

      <Footer />
      <Toaster />
    </div>
  );
};

export default App;
