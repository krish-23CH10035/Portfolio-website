import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: "Real-Time Chat Application",
    description: "Developed a real-time web chat platform with one-to-one messaging, group chats, file sharing, for seamless cross-device communication",
    tech: ["ReactJS", "NodeJS", "Socket.IO", "MongoDB"],
    period: "May'25-Jun'25"
  },
  {
    title: "Hotel Booking System",
    description: "Employed a hotel booking web app using the MERN stack with real-time availability, secure login, responsive UI, and dynamic filtering",
    tech: ["MERN Stack", "ReactJS", "Express", "MongoDB"],
    period: "Apr'25-May'25"
  },
  {
    title: "Radar Navigation System",
    description: "Built a radar-based system using ultrasonic sensor and servomotor to find object distance and angle for navigation and height detection",
    tech: ["Arduino", "Ultrasonic Sensor", "Servo Motor"],
    period: "Oct'23-Nov'23"
  },
  {
    title: "Movie Recommender System",
    description: "Designed a content-based movie recommendation app with an interactive UI, deployed using Heroku for seamless public access",
    tech: ["Python", "Streamlit", "Scikit-learn", "Heroku"],
    period: "Feb'25-Mar'25"
  }
];

const Projects = ({ handleNotImplemented }) => {
  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-gradient rounded-lg p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <Button variant="ghost" size="icon" onClick={handleNotImplemented}>
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">{project.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
