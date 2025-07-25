import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';

const achievements = [
  {
    title: "JEE Advanced 2023",
    description: "Ranked in the top 4% of 250,000 candidates in JEE Advanced 2023, the qualifying exam for admission to the prestigious IITs across India",
    icon: <GraduationCap className="h-6 w-6" />
  },
  {
    title: "JEE Main 2023",
    description: "Ranked in the top 1% of 1.18 million candidates in JEE Main 2023, a highly competitive national engineering entrance exam",
    icon: <Award className="h-6 w-6" />
  },
  {
    title: "NDA Written Exam 2023",
    description: "Cleared the NDA Written Exam 2023 conducted by UPSC, ranking among the top 1% of candidates all over India",
    icon: <Award className="h-6 w-6" />
  },
  {
    title: "COMEDK UGET 2022",
    description: "Secured an All India Rank (AIR) of 2969 in COMEDK UGET 2022, placing in the top 4% of candidates in this competitive national-level exam",
    icon: <Award className="h-6 w-6" />
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Awards & Achievements</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-gradient rounded-lg p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  {achievement.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
