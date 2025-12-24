import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { CustomCursor } from '@/components/CustomCursor';
import { Navigation } from '@/components/Navigation';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Footer } from '@/components/Footer';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'web',
    description: 'A full-featured online store with custom WordPress theme, WooCommerce integration, and optimized checkout flow.',
    fullDescription: `This e-commerce platform was built from the ground up to provide a seamless shopping experience. The project involved creating a custom WordPress theme with WooCommerce integration, implementing advanced product filtering, and optimizing the checkout flow for maximum conversions.

Key features include:
- Custom product pages with dynamic galleries
- Advanced search and filtering system
- Optimized checkout with multiple payment gateways
- Real-time inventory management
- Mobile-first responsive design
- GSAP-powered animations for smooth interactions`,
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    ],
    tags: ['WordPress', 'WooCommerce', 'PHP', 'GSAP'],
    link: 'https://example.com',
    github: 'https://github.com',
    date: 'October 2024',
    client: 'TechStore Inc.',
    duration: '3 months',
  },
  {
    id: 2,
    title: 'Brand Identity - TechFlow',
    category: 'design',
    description: 'Complete brand identity design including logo, color palette, typography, and brand guidelines.',
    fullDescription: `A comprehensive brand identity project for TechFlow, a cutting-edge technology startup. The design captures the innovative spirit of the company while maintaining professionalism and approachability.`,
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1200&q=80',
    gallery: [],
    tags: ['Branding', 'Logo Design', 'Illustrator', 'Figma'],
    link: '#',
    date: 'November 2024',
    client: 'TechFlow',
    duration: '6 weeks',
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="relative min-h-screen overflow-x-hidden">
        <CustomCursor />
        <AnimatedBackground />
        <Navigation />
        <main className="relative z-10 pt-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
            <Link to="/projects" className="text-primary hover:underline">
              ← Back to Projects
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CustomCursor />
      <AnimatedBackground />
      <Navigation />

      <main className="relative z-10 pt-32">
        <article className="px-6 pb-20">
          <div className="max-w-5xl mx-auto">
            {/* Back Link */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Link>
            </motion.div>

            {/* Header */}
            <motion.header
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6 capitalize">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                {project.description}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{project.date}</span>
                </div>
                <div>
                  <span className="text-foreground font-medium">Client:</span> {project.client}
                </div>
                <div>
                  <span className="text-foreground font-medium">Duration:</span> {project.duration}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-8">
                {project.link && project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:glow-cyan transition-shadow"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live
                  </a>
                )}
                {project.github && project.github !== '#' && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-card text-foreground border border-border rounded-full font-medium hover:border-primary/50 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                )}
              </div>
            </motion.header>

            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <div className="relative aspect-video overflow-hidden rounded-3xl border border-border/50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="prose prose-lg prose-invert max-w-none mb-12"
            >
              <div className="bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 p-8 md:p-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">Project Overview</h2>
                <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                  {project.fullDescription}
                </div>
              </div>
            </motion.div>

            {/* Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-foreground mb-6">Gallery</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.gallery.map((img, index) => (
                    <div
                      key={index}
                      className="relative aspect-video overflow-hidden rounded-xl border border-border/50"
                    >
                      <img
                        src={img}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-16"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center py-16 px-8 rounded-3xl border border-border/50 bg-card/30 backdrop-blur-sm"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Interested in a similar project?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Let's discuss how I can help bring your vision to life.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:glow-cyan transition-shadow"
              >
                Start a Conversation
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </Link>
            </motion.div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
