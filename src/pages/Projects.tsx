import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Code, Palette, Video, Sparkles } from 'lucide-react';
import { CustomCursor } from '@/components/CustomCursor';
import { Navigation } from '@/components/Navigation';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Footer } from '@/components/Footer';

const categories = [
  { id: 'all', label: 'All Projects', icon: null },
  { id: 'web', label: 'Web Dev', icon: Code },
  { id: 'design', label: 'Design', icon: Palette },
  { id: 'video', label: 'Video', icon: Video },
  { id: 'motion', label: 'Motion', icon: Sparkles },
];

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'web',
    description: 'A full-featured online store with custom WordPress theme, WooCommerce integration, and optimized checkout flow.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80',
    tags: ['WordPress', 'WooCommerce', 'PHP', 'GSAP'],
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Brand Identity - TechFlow',
    category: 'design',
    description: 'Complete brand identity design including logo, color palette, typography, and brand guidelines.',
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80',
    tags: ['Branding', 'Logo Design', 'Illustrator', 'Figma'],
    link: '#',
  },
  {
    id: 3,
    title: 'Product Launch Video',
    category: 'video',
    description: 'Cinematic product launch video with professional color grading and sound design.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80',
    tags: ['Premiere Pro', 'DaVinci', 'After Effects'],
    link: '#',
  },
  {
    id: 4,
    title: 'Animated Logo Pack',
    category: 'motion',
    description: 'Collection of animated logo reveals with various styles from minimal to explosive.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
    tags: ['After Effects', 'Cinema 4D', 'Motion Design'],
    link: '#',
  },
  {
    id: 5,
    title: 'SaaS Dashboard',
    category: 'web',
    description: 'Modern admin dashboard with real-time analytics, dark mode, and responsive design.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['React', 'TypeScript', 'Tailwind', 'Chart.js'],
    link: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'Magazine Layout',
    category: 'design',
    description: 'Editorial design for digital magazine with custom typography and illustration.',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80',
    tags: ['InDesign', 'Photoshop', 'Typography'],
    link: '#',
  },
  {
    id: 7,
    title: 'Documentary Edit',
    category: 'video',
    description: 'Full documentary editing including interview cuts, b-roll assembly, and narrative pacing.',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80',
    tags: ['Premiere Pro', 'Color Grading', 'Sound Design'],
    link: '#',
  },
  {
    id: 8,
    title: 'Explainer Animation',
    category: 'motion',
    description: '2D animated explainer video for fintech startup explaining complex concepts simply.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    tags: ['After Effects', 'Illustration', 'Animation'],
    link: '#',
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CustomCursor />
      <AnimatedBackground />
      <Navigation />

      <main className="relative z-10 pt-32">
        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
                Portfolio
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-foreground">Featured </span>
                <span className="text-gradient">Projects</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A selection of my best work across web development, design, video editing, and motion graphics.
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3 mb-16"
            >
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeCategory === cat.id
                      ? 'bg-primary text-primary-foreground glow-cyan'
                      : 'bg-card/50 text-muted-foreground hover:text-foreground border border-border/50 hover:border-primary/30'
                  }`}
                >
                  {cat.icon && <cat.icon className="w-4 h-4" />}
                  {cat.label}
                </button>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.article
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group relative"
                  >
                    <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500">
                      {/* Image */}
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                        
                        {/* Overlay Links */}
                        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/50 backdrop-blur-sm">
                          <a
                            href={project.link}
                            className="p-3 rounded-full bg-primary text-primary-foreground hover:glow-cyan transition-shadow"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                          {project.github && (
                            <a
                              href={project.github}
                              className="p-3 rounded-full bg-card text-foreground border border-border hover:border-primary/50 transition-colors"
                            >
                              <Github className="w-5 h-5" />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-20"
            >
              <p className="text-muted-foreground mb-6">
                Interested in working together?
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:glow-cyan transition-shadow"
              >
                Start a Project
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
