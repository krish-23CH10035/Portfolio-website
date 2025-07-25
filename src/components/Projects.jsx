import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fetchAPI } from '@/lib/api';

const Projects = ({ handleNotImplemented, isAdmin }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({ title: '', description: '', tech: '', period: '', link: '' });
  const [creating, setCreating] = useState(false);
  const [formError, setFormError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchAPI('/projects')
      .then(res => setProjects(res.data))
      .catch(err => setError('Failed to load projects'))
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
      const techArr = form.tech.split(',').map(t => t.trim()).filter(Boolean);
      const res = await fetchAPI('/projects', {
        method: 'POST',
        body: JSON.stringify({ ...form, tech: techArr }),
      });
      setProjects([res.data, ...projects]);
      setForm({ title: '', description: '', tech: '', period: '', link: '' });
      setShowModal(false);
    } catch (err) {
      setFormError('Failed to create project.');
    } finally {
      setCreating(false);
    }
  };

  if (loading) return <div className="text-center">Loading projects...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <section id="projects" className="py-20 relative">
      <div className="neon-grey-bg mx-auto my-8 p-8 max-w-5xl">
        <div className="container mx-auto px-4">
          {/* Admin Add Project Button (top of section) */}
          {isAdmin && (
            <div className="flex justify-end mb-8">
              <Button
                className="shadow-2xl rounded-full px-8 py-4 text-2xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white hover:bg-white hover:text-black border-2 border-white/90 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-90 drop-shadow-[0_0_24px_#bcbcbc] tracking-wide flex items-center gap-3"
                style={{ boxShadow: '0 0 24px 6px #bcbcbc, 0 0 48px 12px #bcbcbc99' }}
                onClick={() => setShowModal(true)}
              >
                <span style={{fontSize: '1.2em', fontWeight: 'bold'}}>+ Add Project</span>
              </Button>
            </div>
          )}
          {/* Modal Popup (admin only) */}
          {isAdmin && showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
              <div className="modal-dark p-8 w-full max-w-md relative">
                <button
                  className="absolute top-2 right-3 text-2xl text-gray-400 hover:text-gray-200"
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                >
                  &times;
                </button>
                <form className="space-y-4" onSubmit={handleCreate}>
                  <h3 className="font-bold text-xl mb-2">Add New Project</h3>
                  <input name="title" value={form.title} onChange={handleFormChange} placeholder="Title" required />
                  <input name="description" value={form.description} onChange={handleFormChange} placeholder="Description" required />
                  <input name="tech" value={form.tech} onChange={handleFormChange} placeholder="Technologies (comma separated)" required />
                  <input name="period" value={form.period} onChange={handleFormChange} placeholder="Period" required />
                  <input name="link" value={form.link} onChange={handleFormChange} placeholder="Project Link (optional)" className="border p-2 w-full rounded" />
                  {formError && <div className="text-red-500">{formError}</div>}
                  <button type="submit" disabled={creating} style={{ width: '100%', padding: '0.75rem', fontSize: '1.1rem' }}>{creating ? 'Creating...' : 'Create Project'}</button>
                </form>
              </div>
            </div>
          )}

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
                  {project.link ? (
                    <Button variant="ghost" size="icon" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  ) : (
                    <Button variant="ghost" size="icon" disabled>
                      <ExternalLink className="h-4 w-4 opacity-40" />
                    </Button>
                  )}
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
      </div>
    </section>
  );
};

export default Projects;
