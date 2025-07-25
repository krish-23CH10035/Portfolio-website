import React, { useEffect, useState } from 'react';
import { fetchAPI } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Achievements = ({ isAdmin }) => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({ title: '', description: '', icon: '' });
  const [creating, setCreating] = useState(false);
  const [formError, setFormError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchAPI('/achievements')
      .then(res => setAchievements(res.data))
      .catch(() => setError('Failed to load achievements'))
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
      const res = await fetchAPI('/achievements', {
        method: 'POST',
        body: JSON.stringify(form),
      });
      setAchievements([res.data, ...achievements]);
      setForm({ title: '', description: '', icon: '' });
      setShowModal(false);
    } catch (err) {
      setFormError('Failed to create achievement.');
    } finally {
      setCreating(false);
    }
  };

  if (loading) return <div className="text-center">Loading achievements...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <section id="achievements" className="py-20 relative">
      <div className="neon-grey-bg mx-auto my-8 p-8 max-w-5xl">
        <div className="container mx-auto px-4">
          {/* Admin Add Achievement Button (top of section) */}
          {isAdmin && (
            <div className="flex justify-end mb-8">
              <Button
                className="shadow-2xl rounded-full px-8 py-4 text-2xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white hover:bg-white hover:text-black border-2 border-white/90 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-90 drop-shadow-[0_0_24px_#bcbcbc] tracking-wide flex items-center gap-3"
                style={{ boxShadow: '0 0 24px 6px #bcbcbc, 0 0 48px 12px #bcbcbc99' }}
                onClick={() => setShowModal(true)}
              >
                <span style={{fontSize: '1.2em', fontWeight: 'bold'}}>+ Add Achievement</span>
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
                  <h3 className="font-bold text-xl mb-2">Add New Achievement</h3>
                  <input name="title" value={form.title} onChange={handleFormChange} placeholder="Title" className="border p-2 w-full rounded" required />
                  <input name="description" value={form.description} onChange={handleFormChange} placeholder="Description" className="border p-2 w-full rounded" required />
                  <input name="icon" value={form.icon} onChange={handleFormChange} placeholder="Icon (e.g. Award, GraduationCap, or emoji)" className="border p-2 w-full rounded" />
                  {formError && <div className="text-red-500">{formError}</div>}
                  <Button type="submit" disabled={creating} className="w-full">{creating ? 'Creating...' : 'Create Achievement'}</Button>
                </form>
              </div>
            </div>
          )}
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
                  <div className="p-4 bg-primary/10 rounded-full text-primary flex items-center justify-center" style={{ minWidth: 64, minHeight: 64, fontSize: '2.5rem' }}>
                    {achievement.icon ? achievement.icon : <span>🏆</span>}
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
      </div>
    </section>
  );
};

export default Achievements;
