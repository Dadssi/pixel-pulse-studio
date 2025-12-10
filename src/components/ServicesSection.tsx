import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Film, Sparkles, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Building responsive, performant websites and web applications with modern technologies and best practices.',
    color: 'neon-cyan',
    tags: ['React', 'WordPress', 'PHP', 'JavaScript'],
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Creating stunning visual identities, logos, and marketing materials that capture your brand essence.',
    color: 'neon-purple',
    tags: ['Branding', 'UI/UX', 'Print', 'Digital'],
  },
  {
    icon: Film,
    title: 'Video Editing',
    description: 'Professional video editing services for commercials, social media content, and cinematic productions.',
    color: 'neon-pink',
    tags: ['Premiere Pro', 'DaVinci', 'Color Grading', 'VFX'],
  },
  {
    icon: Sparkles,
    title: 'Motion Graphics',
    description: 'Bringing ideas to life with captivating animations, motion design, and visual effects.',
    color: 'neon-green',
    tags: ['After Effects', '3D Animation', 'Lottie', 'SVG'],
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative h-full p-8 rounded-2xl bg-card border border-border/50 overflow-hidden transition-all duration-500 hover:border-transparent">
        {/* Gradient border on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, hsl(var(--${service.color}) / 0.2), transparent)`,
          }}
        />
        
        {/* Glow effect */}
        <div 
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
          style={{ background: `hsl(var(--${service.color}))` }}
        />

        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
            style={{ 
              background: `hsl(var(--${service.color}) / 0.1)`,
              border: `1px solid hsl(var(--${service.color}) / 0.2)`,
            }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <service.icon 
              size={28} 
              style={{ color: `hsl(var(--${service.color}))` }}
            />
          </motion.div>

          {/* Content */}
          <h3 className="text-xl font-semibold mb-3 group-hover:text-gradient transition-all">
            {service.title}
          </h3>
          
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {service.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {service.tags.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Link */}
          <motion.a
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium group/link"
            style={{ color: `hsl(var(--${service.color}))` }}
            whileHover={{ x: 5 }}
          >
            Learn More
            <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 px-6" id="services">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            What I Do
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Services & <span className="text-gradient">Expertise</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to bring your vision to life.
            From concept to execution, I deliver excellence in every project.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
