import { motion } from 'framer-motion';
import { Code, Palette, Video, Sparkles, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CustomCursor } from '@/components/CustomCursor';
import { Navigation } from '@/components/Navigation';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Footer } from '@/components/Footer';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Building modern, responsive, and performant web applications using cutting-edge technologies.',
    features: [
      'Custom WordPress Development',
      'React & Next.js Applications',
      'E-commerce Solutions',
      'API Development & Integration',
      'Performance Optimization',
      'SEO Implementation',
    ],
    color: 'cyan',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Creating stunning visual identities and designs that communicate your brand message effectively.',
    features: [
      'Brand Identity Design',
      'Logo Creation',
      'Marketing Materials',
      'Social Media Graphics',
      'Print Design',
      'UI/UX Design',
    ],
    color: 'purple',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Video,
    title: 'Video Editing',
    description: 'Professional video editing services that bring your stories to life with cinematic quality.',
    features: [
      'Commercial Video Editing',
      'YouTube Content',
      'Color Grading',
      'Sound Design',
      'Motion Tracking',
      'Multi-cam Editing',
    ],
    color: 'pink',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: Sparkles,
    title: 'Motion Graphics',
    description: 'Dynamic animations and motion design that captivate audiences and elevate your content.',
    features: [
      'Animated Logos',
      'Explainer Videos',
      'Title Sequences',
      '3D Animation',
      'Visual Effects',
      'Kinetic Typography',
    ],
    color: 'green',
    gradient: 'from-green-500 to-emerald-500',
  },
];

const process = [
  { step: '01', title: 'Discovery', description: 'Understanding your goals, audience, and requirements' },
  { step: '02', title: 'Strategy', description: 'Creating a roadmap and defining the project scope' },
  { step: '03', title: 'Design', description: 'Crafting visual concepts and prototypes' },
  { step: '04', title: 'Development', description: 'Building and refining the final product' },
  { step: '05', title: 'Launch', description: 'Deploying and ensuring everything works perfectly' },
];

const Services = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CustomCursor />
      <AnimatedBackground />
      <Navigation />

      <main className="relative z-10 pt-32">
        {/* Hero Section */}
        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
                What I Offer
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-foreground">My </span>
                <span className="text-gradient">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive digital solutions tailored to bring your vision to life with creativity and technical excellence.
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-32">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
                    style={{
                      backgroundImage: `linear-gradient(135deg, hsl(var(--neon-${service.color})), transparent)`,
                    }}
                  />
                  <div className="relative p-8 rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-primary font-medium group/link"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Process Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="text-foreground">My </span>
                  <span className="text-gradient">Process</span>
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  A structured approach to deliver exceptional results
                </p>
              </div>

              <div className="relative">
                <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent hidden md:block" />
                
                <div className="grid md:grid-cols-5 gap-8">
                  {process.map((item, index) => (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative text-center"
                    >
                      <div className="relative z-10 w-16 h-16 mx-auto mb-4 rounded-full bg-card border border-primary/30 flex items-center justify-center">
                        <span className="text-primary font-bold">{item.step}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center py-20 px-8 rounded-3xl border border-border/50 bg-card/30 backdrop-blur-sm"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Let's discuss how I can help bring your ideas to life with my expertise.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:glow-cyan transition-shadow"
              >
                Get In Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
