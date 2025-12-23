import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, Award, Clock, Users } from 'lucide-react';

const stats = [
  { icon: Clock, value: '3+', label: 'Years Experience', color: 'neon-cyan' },
  { icon: Users, value: '30+', label: 'Happy Clients', color: 'neon-purple' },
  { icon: Award, value: '45+', label: 'Projects Completed', color: 'neon-pink' },
];

const tools = [
  'React', 'WordPress', 'PHP', 'JavaScript', 'TypeScript', 'GSAP',
  'Photoshop', 'Illustrator', 'Figma', 'After Effects', 'Premiere Pro',
  'DaVinci Resolve', 'CapCut', 'Blender',
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 px-6" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Main image container */}
              <div className="absolute inset-8 rounded-3xl overflow-hidden border-gradient">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 via-card to-secondary/20 flex items-center justify-center">
                  <motion.div
                    className="text-8xl font-bold text-gradient"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    D.D
                  </motion.div>
                </div>
                {/* Glitch overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute top-0 right-0 w-24 h-24 rounded-2xl border border-primary/30"
                animate={{ rotate: [0, 90, 0] }}
                transition={{ duration: 20, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-32 h-32 rounded-full border border-secondary/30"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              {/* Floating stats cards */}
              <motion.div
                className="absolute -right-4 top-1/4 p-4 rounded-2xl bg-card border border-border/50 backdrop-blur-sm"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-xs text-muted-foreground">Years Exp.</div>
              </motion.div>

              <motion.div
                className="absolute -left-4 bottom-1/4 p-4 rounded-2xl bg-card border border-border/50 backdrop-blur-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <div className="text-2xl font-bold text-secondary">45+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-neon-green/10 text-neon-green mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              About Me
            </motion.span>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Creative <span className="text-gradient">Developer</span> & Designer
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate digital creator with over 5 years of experience in web development, 
              graphic design, video editing, and motion graphics. I believe in the power of 
              combining technology with creativity to build impactful digital experiences.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              My approach focuses on clean code, stunning visuals, and seamless animations. 
              Whether it's building a complex web application or crafting a cinematic video, 
              I bring the same level of dedication and attention to detail to every project.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 rounded-2xl bg-card border border-border/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <stat.icon 
                    size={24} 
                    className="mx-auto mb-2"
                    style={{ color: `hsl(var(--${stat.color}))` }}
                  />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Tools */}
            <div className="mb-8">
              <h4 className="text-sm font-medium mb-4 text-muted-foreground">Tools & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <motion.span
                    key={tool}
                    className="px-3 py-1.5 text-xs rounded-full bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.02 }}
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              Download CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
