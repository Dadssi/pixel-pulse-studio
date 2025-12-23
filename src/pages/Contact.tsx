import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import { CustomCursor } from '@/components/CustomCursor';
import { Navigation } from '@/components/Navigation';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Footer } from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'contact@dadssidigital.com', href: 'mailto:hello@portfolio.dev' },
  { icon: Phone, label: 'Phone', value: '+212 6 61 88 43 96', href: 'tel:+15551234567' },
  { icon: MapPin, label: 'Location', value: 'Remote Worldwide', href: '#' },
];

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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
                Get In Touch
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-foreground">Let's </span>
                <span className="text-gradient">Connect</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Have a project in mind or just want to chat? I'd love to hear from you.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full px-6 py-4 rounded-xl bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full px-6 py-4 rounded-xl bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="w-full px-6 py-4 rounded-xl bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="Project inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="w-full px-6 py-4 rounded-xl bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:glow-cyan transition-shadow"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-8"
              >
                {/* Info Cards */}
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-4 p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="text-foreground font-medium">{item.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Follow Me</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="p-8 rounded-2xl border border-primary/30 bg-primary/5 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-foreground font-medium">Currently Available</span>
                  </div>
                  <p className="text-muted-foreground">
                    I'm open to freelance projects and collaborations. Let's create something amazing together!
                  </p>
                </div>

                {/* Response Time */}
                <div className="p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm text-center">
                  <p className="text-muted-foreground">
                    Average response time: <span className="text-primary font-medium">within 24 hours</span>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
