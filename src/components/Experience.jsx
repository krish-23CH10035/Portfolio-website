import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchAPI } from '@/lib/api';
import { Button } from '@/components/ui/button';

const Experience = ({ isAdmin }) => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({ title: '', organization: '', period: '', emoji: '', points: '' });
  const [creating, setCreating] = useState(false);
  const [formError, setFormError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchAPI('/experience')
      .then(res => setExperiences(res.data))
      .catch(err => setError('Failed to load experiences'))
      .finally(() => setLoading(false));
  }, []);

  const handleFormChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCreate = async e => {
    e.preventDefault();
    setCreating(true);
    setFormError(null);
    try {
      const pointsArr = form.points.split('\n').map(p => p.trim()).filter(Boolean);
      const res = await fetchAPI('/experience', {
        method: 'POST',
        body: JSON.stringify({ ...form, points: pointsArr }),
      });
      setExperiences([res.data, ...experiences]);
      setForm({ title: '', organization: '', period: '', emoji: '', points: '' });
      setShowModal(false);
    } catch (err) {
      setFormError('Failed to create experience.');
    } finally {
      setCreating(false);
    }
  };

  if (loading) return <div className="text-center">Loading experiences...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <section id="experience" className="py-20 relative">
      <div className="neon-grey-bg mx-auto my-8 p-8 max-w-5xl">
        <div className="container mx-auto px-4">
          {/* Admin Add Buttons (admin only) */}
          {isAdmin && (
            <div className="flex flex-col gap-6 items-end fixed bottom-8 right-8 z-50">
              <Button
                className="shadow-2xl rounded-full px-8 py-4 text-xl font-bold bg-gradient-to-r from-[#232526] via-[#414345] to-[#232526] text-white hover:bg-white hover:text-black border-2 border-white/80 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-black focus:ring-opacity-80 drop-shadow-[0_0_16px_#000]"
                style={{ boxShadow: '0 0 24px 4px #000, 0 0 48px 8px #000a' }}
                onClick={() => window.location.hash = '#achievements'}
              >
                + Add Achievement
              </Button>
              <Button
                className="shadow-2xl rounded-full px-8 py-4 text-xl font-bold bg-gradient-to-r from-[#232526] via-[#414345] to-[#232526] text-white hover:bg-white hover:text-black border-2 border-white/80 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-black focus:ring-opacity-80 drop-shadow-[0_0_16px_#000]"
                style={{ boxShadow: '0 0 24px 4px #000, 0 0 48px 8px #000a' }}
                onClick={() => setShowModal(true)}
              >
                + Add Experience
              </Button>
              <Button
                className="shadow-2xl rounded-full px-8 py-4 text-xl font-bold bg-gradient-to-r from-[#232526] via-[#414345] to-[#232526] text-white hover:bg-white hover:text-black border-2 border-white/80 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-black focus:ring-opacity-80 drop-shadow-[0_0_16px_#000]"
                style={{ boxShadow: '0 0 24px 4px #000, 0 0 48px 8px #000a' }}
                onClick={() => window.location.hash = '#projects'}
              >
                + Add Project
              </Button>
            </div>
          )}
          {/* Modal Popup (admin only) */}
          {isAdmin && showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
              <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
                <button
                  className="absolute top-2 right-3 text-2xl text-gray-400 hover:text-gray-700"
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                >
                  &times;
                </button>
                <form className="space-y-4" onSubmit={handleCreate}>
                  <h3 className="font-bold text-xl mb-2">Add New Experience</h3>
                  <input name="title" value={form.title} onChange={handleFormChange} placeholder="Title" className="border p-2 w-full rounded" required />
                  <input name="organization" value={form.organization} onChange={handleFormChange} placeholder="Organization" className="border p-2 w-full rounded" required />
                  <input name="period" value={form.period} onChange={handleFormChange} placeholder="Period" className="border p-2 w-full rounded" required />
                  <input name="emoji" value={form.emoji} onChange={handleFormChange} placeholder="Emoji (optional)" className="border p-2 w-full rounded" />
                  <textarea name="points" value={form.points} onChange={handleFormChange} placeholder="Bullet Points (one per line)" className="border p-2 w-full rounded" required />
                  {formError && <div className="text-red-500">{formError}</div>}
                  <Button type="submit" disabled={creating} className="w-full">{creating ? 'Creating...' : 'Create Experience'}</Button>
                </form>
              </div>
            </div>
          )}

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
      </div>
    </section>
  );
};

export default Experience;
