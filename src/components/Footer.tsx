import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Heart } from 'lucide-react';

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: 'Projects', path: '/projects' },
      { name: 'About', path: '/about' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Web Development', path: '/services#web' },
      { name: 'Graphic Design', path: '/services#design' },
      { name: 'Video Editing', path: '/services#video' },
      { name: 'Motion Graphics', path: '/services#motion' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { name: 'LinkedIn', path: '#' },
      { name: 'GitHub', path: '#' },
      { name: 'Dribbble', path: '#' },
      { name: 'Twitter', path: '#' },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="relative py-20 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-3xl font-bold text-gradient">DADSSI</span>
              <span className="text-3xl font-bold text-foreground">.DIGITAL</span>
            </Link>
            
            <p className="text-muted-foreground max-w-sm mb-6">
              Crafting digital experiences that inspire, engage, and convert. 
              Let's build something extraordinary together.
            </p>

            {/* Newsletter */}
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none text-sm"
              />
              <motion.button
                className="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold mb-4">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DadssiDigital. All rights reserved.
          </p>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </footer>
  );
};
