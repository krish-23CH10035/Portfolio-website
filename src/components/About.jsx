import React from 'react';
import { motion } from 'framer-motion';
import { Code, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url('https://storage.googleapis.com/hostinger-horizons-assets-prod/213360d8-fe06-4a75-98f3-847f56f4bc92/611c060422dffc04f83291a8b8d57b4a.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }} />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate developer and Chemical Engineering student at IIT Kharagpur
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm an aspiring software developer with a keen interest in Data Structures, Algorithms, and web development. I'm passionate about crafting efficient code and building user-friendly web applications. Along with this I envision a future where chemical engineering meets artificial intelligence, automation, and data science.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond technology, I immerse myself in creative pursuits like photography, videography, singing, dancing, and poetry writing. As a nature enthusiast, I draw inspiration from the world around me, which fuels both my technical and artistic endeavors.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="grid md:grid-cols-2 gap-6">
            <div className="card-gradient rounded-lg p-6">
              <h3 className="font-semibold mb-4 flex items-center">
                <Code className="h-5 w-5 mr-2" />
                Programming & Tech
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• C, C++, Python, JS</li>
                <li>• ReactJS, NodeJS</li>
                <li>• Jupyter, Heroku</li>
                <li>• HTML, CSS, SQL</li>
              </ul>
            </div>

            <div className="card-gradient rounded-lg p-6">
              <h3 className="font-semibold mb-4 flex items-center">
                <User className="h-5 w-5 mr-2" />
                Skills & Expertise
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Data Structures & Algo</li>
                <li>• Web Development</li>
                <li>• AI & Tech Integration</li>
                <li>• Git, GitHub</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
