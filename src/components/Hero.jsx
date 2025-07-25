import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(25)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-white/10 rounded-full"
        initial={{
          x: `${Math.random() * 100}vw`,
          y: `${Math.random() * 100}vh`,
          scale: Math.random() * 0.5 + 0.5,
          opacity: 0
        }}
        animate={{
          x: `${Math.random() * 100}vw`,
          y: -100,
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
          delay: Math.random() * 5
        }}
        style={{
          width: `${Math.random() * 5 + 2}px`,
          height: `${Math.random() * 5 + 2}px`,
        }}
      />
    ))}
  </div>
);


const Hero = ({ scrollToSection }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      <FloatingParticles />
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold gradient-text">
            Krish Sahu
          </motion.h1>
          <motion.h2 variants={itemVariants} className="text-xl md:text-2xl text-muted-foreground">
            Pre-Final Year Chemical Engineering Student
          </motion.h2>
          <motion.h3 variants={itemVariants} className="text-lg md:text-xl font-medium">
            Aspiring Software Developer | Web Dev & DSA Enthusiast
          </motion.h3>
          <motion.p variants={itemVariants} className="text-muted-foreground max-w-lg">
            Aspiring software developer with a keen interest in Data Structures, Algorithms, and web development. Passionate about crafting efficient code and building user-friendly web applications.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Button onClick={() => scrollToSection('projects')} size="lg">View Projects</Button>
            <Button variant="outline" onClick={() => scrollToSection('contact')} size="lg">Get In Touch</Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur-3xl"></div>
            <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/213360d8-fe06-4a75-98f3-847f56f4bc92/3c8fc6b7e2078045a46d80399341975b.jpg" alt="Krish Sahu - Portrait" className="relative z-10 w-80 h-80 object-cover rounded-full border-4 border-white/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
