import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between backdrop-blur-xl bg-background/70 border border-border/50 rounded-2xl px-6 py-3">
        {/* Logo */}
        <Link to="/" className="relative group">
          <span className="text-2xl font-bold text-gradient">DADSSI</span>
          <span className="text-2xl font-bold text-foreground">.DIGITAL</span>
          <motion.div
            className="absolute -bottom-1 left-0 h-0.5 bg-primary"
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.3 }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative group"
            >
              <span className={`text-sm font-medium transition-colors ${
                location.pathname === link.path 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}>
                {link.name}
              </span>
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                initial={{ width: 0 }}
                animate={{ width: location.pathname === link.path ? '100%' : 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="hidden md:block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/contact"
            className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:glow-cyan transition-shadow"
          >
            Let's Talk
          </Link>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-6 right-6 mt-2 backdrop-blur-xl bg-background/95 border border-border/50 rounded-2xl p-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block text-lg font-medium py-2 ${
                      location.pathname === link.path
                        ? 'text-primary'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-block mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium"
                >
                  Let's Talk
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
