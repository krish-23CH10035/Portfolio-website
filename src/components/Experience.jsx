import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Publicity And Marketing Subhead",
    organization: "Shaurya Sports Fest, IIT Kharagpur",
    period: "May'24 - Apr'25",
    emoji: "📣",
    points: [
      "Reached out to 500+ colleges with my team and successfully coordinated with participation of 20 colleges in Fest across India",
      "Led a 7-member team to manage accommodation logistics for visiting contingents, ensuring a smooth stay during the 3 days event",
      "Organized and led meetings with fellow Campus Ambassadors to strategize outreach and enhance event publicity and participation",
      "Managed On-ground coordination for Badminton matches, ensuring timely fixture execution and smooth flow of the event during Fest"
    ]
  },
  {
    title: "Secretary Alumni Affairs'",
    organization: "Patel Hall Of Residence",
    period: "Aug'24-Apr'25",
    emoji: "🤝",
    points: [
      "Contributed to the Media and Sponsorship team; secured a barter deal for energy food packs to support blood donors during donation",
      "Helped organize a hall-led Orphanage Drive; coordinated logistics and actively engaged with children during the outreach visit",
      "Initiated and maintained a structured alumni database to streamline future communication, networking, and event coordination",
      "Collaborated with hall administration and students to facilitate alumni interactions and support mentorship opportunities for residents"
    ]
  },
  {
    title: "General Captain",
    organization: "Santhome Higher Secondary School",
    period: "Apr'19-Feb'20",
    emoji: "🧑‍✈️",
    points: [
      "Led a team of 10 volunteers to uphold school discipline and ensure smooth execution of daily operations and school-wide events",
      "Coordinated and managed intra-school sports competitions, managing event logistics and communication between participants, staff",
      "Played a key role in student leadership by organizing meetings, resolving student concerns, and promoting active participation"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Experience</h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card-gradient rounded-lg p-6"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg flex items-center">
                    <span className="text-2xl mr-2">{experience.emoji}</span>
                    {experience.title}
                  </h3>
                  <p className="text-muted-foreground ml-9">{experience.organization}</p>
                </div>
                <span className="text-sm text-muted-foreground mt-2 md:mt-0">{experience.period}</span>
              </div>
              <ul className="space-y-2 ml-9">
                {experience.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="text-muted-foreground text-sm leading-relaxed">
                    • {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
