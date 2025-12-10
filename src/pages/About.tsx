import { motion } from 'framer-motion';
import { Download, MapPin, Mail, Calendar, Award, Code, Palette, Video, Sparkles } from 'lucide-react';
import { CustomCursor } from '@/components/CustomCursor';
import { Navigation } from '@/components/Navigation';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Footer } from '@/components/Footer';

const skills = [
  { category: 'Development', items: ['WordPress', 'PHP', 'JavaScript', 'React', 'TypeScript', 'GSAP', 'HTML/CSS', 'MySQL'] },
  { category: 'Design', items: ['Figma', 'Photoshop', 'Illustrator', 'InDesign', 'UI/UX', 'Branding'] },
  { category: 'Video', items: ['Premiere Pro', 'DaVinci Resolve', 'Final Cut Pro', 'Color Grading', 'Sound Design'] },
  { category: 'Motion', items: ['After Effects', 'Cinema 4D', 'Blender', 'Lottie', 'Animation'] },
];

const timeline = [
  { year: '2024', title: 'Senior Creative Developer', company: 'Freelance', description: 'Leading complex digital projects for international clients.' },
  { year: '2022', title: 'Creative Lead', company: 'Digital Agency XYZ', description: 'Managed team of designers and developers on enterprise projects.' },
  { year: '2020', title: 'Motion Designer', company: 'Studio Motion', description: 'Created animations and visual effects for commercials and films.' },
  { year: '2018', title: 'Junior Developer', company: 'WebCraft Inc', description: 'Started career building WordPress sites and learning the craft.' },
];

const stats = [
  { value: '100+', label: 'Projects Completed' },
  { value: '50+', label: 'Happy Clients' },
  { value: '6+', label: 'Years Experience' },
  { value: '15+', label: 'Awards Won' },
];

const About = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CustomCursor />
      <AnimatedBackground />
      <Navigation />

      <main className="relative z-10 pt-32">
        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
                  <div className="relative overflow-hidden rounded-3xl border border-border/50">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  </div>
                  
                  {/* Floating badges */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -right-4 top-1/4 px-4 py-2 rounded-xl bg-card border border-border/50 backdrop-blur-sm"
                  >
                    <Code className="w-6 h-6 text-primary" />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -left-4 top-1/2 px-4 py-2 rounded-xl bg-card border border-border/50 backdrop-blur-sm"
                  >
                    <Palette className="w-6 h-6 text-secondary" />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity }}
                    className="absolute -right-4 bottom-1/4 px-4 py-2 rounded-xl bg-card border border-border/50 backdrop-blur-sm"
                  >
                    <Video className="w-6 h-6 text-accent" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
                  About Me
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-foreground">Creative </span>
                  <span className="text-gradient">Developer</span>
                  <span className="text-foreground"> & Designer</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  I'm a passionate creative professional with over 6 years of experience in web development, 
                  graphic design, video editing, and motion graphics. I believe in the power of combining 
                  technical expertise with creative vision to deliver exceptional digital experiences.
                </p>
                <p className="text-muted-foreground mb-8">
                  Based in the digital realm, I work with clients worldwide to transform their ideas into 
                  stunning visual realities. Whether it's building a custom website, crafting a brand identity, 
                  or creating captivating motion content, I bring the same level of dedication and innovation to every project.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Remote Worldwide</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="w-4 h-4 text-primary" />
                    <span>hello@portfolio.dev</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>Available for Projects</span>
                  </div>
                </div>

                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:glow-cyan transition-shadow"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </motion.a>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm"
                >
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-32"
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="text-foreground">Skills & </span>
                  <span className="text-gradient">Expertise</span>
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Tools and technologies I use to bring ideas to life
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skills.map((skillGroup, index) => (
                  <motion.div
                    key={skillGroup.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm"
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-4">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 text-sm rounded-full bg-muted text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="text-foreground">My </span>
                  <span className="text-gradient">Journey</span>
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Key milestones in my professional career
                </p>
              </div>

              <div className="relative max-w-3xl mx-auto">
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />

                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative flex items-center gap-8 mb-12 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-20 md:pl-0`}>
                      <div className="p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm">
                        <span className="text-primary font-bold">{item.year}</span>
                        <h3 className="text-lg font-semibold text-foreground mt-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.company}</p>
                        <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                      </div>
                    </div>

                    <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-cyan" />

                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
