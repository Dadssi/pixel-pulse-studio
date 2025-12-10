import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop',
    color: 'neon-cyan',
    tools: ['React', 'Node.js', 'Stripe'],
  },
  {
    id: 2,
    title: 'Brand Identity System',
    category: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop',
    color: 'neon-purple',
    tools: ['Illustrator', 'Photoshop'],
  },
  {
    id: 3,
    title: 'Documentary Film',
    category: 'Video Editing',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop',
    color: 'neon-pink',
    tools: ['Premiere Pro', 'DaVinci'],
  },
  {
    id: 4,
    title: 'Product Animation',
    category: 'Motion Graphics',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop',
    color: 'neon-green',
    tools: ['After Effects', 'Cinema 4D'],
  },
  {
    id: 5,
    title: 'SaaS Dashboard',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    color: 'neon-cyan',
    tools: ['Next.js', 'Tailwind', 'Supabase'],
  },
  {
    id: 6,
    title: 'Music Video',
    category: 'Video Editing',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
    color: 'neon-pink',
    tools: ['Premiere Pro', 'After Effects'],
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
        {/* Image */}
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Overlay */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: `linear-gradient(to top, hsl(var(--background) / 0.95), hsl(var(--${project.color}) / 0.2))`,
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Category */}
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
              style={{ 
                background: `hsl(var(--${project.color}) / 0.2)`,
                color: `hsl(var(--${project.color}))`,
              }}
            >
              {project.category}
            </span>

            {/* Title */}
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {project.title}
            </h3>

            {/* Tools */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tools.map((tool) => (
                <span key={tool} className="text-xs text-muted-foreground">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Arrow */}
          <motion.div
            className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center"
            style={{ 
              background: `hsl(var(--${project.color}))`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: isHovered ? 1 : 0, 
              scale: isHovered ? 1 : 0,
              rotate: isHovered ? 0 : -90,
            }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUpRight size={20} className="text-background" />
          </motion.div>
        </div>

        {/* Border glow on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            border: `2px solid hsl(var(--${project.color}) / 0.5)`,
            boxShadow: `inset 0 0 30px hsl(var(--${project.color}) / 0.1)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 px-6" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <motion.span 
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-secondary/10 text-secondary mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              Portfolio
            </motion.span>
            
            <h2 className="text-4xl md:text-5xl font-bold">
              Selected <span className="text-gradient-secondary">Projects</span>
            </h2>
          </div>
          
          <motion.a
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-secondary hover:text-secondary transition-colors group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
