import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { alt: 'IIT Kharagpur logo', text: 'IIT Kharagpur' },
  { alt: 'UPSC logo', text: 'UPSC' },
  { alt: 'NTA logo', text: 'NTA' },
  { alt: 'COMEDK logo', text: 'COMEDK' },
  { alt: 'Shaurya Sports Fest logo', text: 'Shaurya' },
];

const Marquee = () => {
  const marqueeLogos = [...logos, ...logos];

  return (
    <section className="py-12 bg-background border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-sm font-semibold uppercase text-muted-foreground tracking-widest mb-8">
          Places I have worked with in the past
        </h2>
        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: ['0%', '-100%'],
            }}
            transition={{
              ease: 'linear',
              duration: 20,
              repeat: Infinity,
            }}
          >
            {marqueeLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-48 h-16 flex items-center justify-center mx-8">
                <span className="text-2xl font-semibold text-muted-foreground/80 grayscale hover:grayscale-0 transition-all duration-300">{logo.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
