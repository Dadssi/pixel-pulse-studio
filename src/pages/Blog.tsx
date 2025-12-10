import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CustomCursor } from '@/components/CustomCursor';
import { Navigation } from '@/components/Navigation';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Footer } from '@/components/Footer';

const categories = ['All', 'Web Dev', 'Design', 'Video', 'Motion', 'Creativity'];

const blogPosts = [
  {
    id: 1,
    title: 'Building Performant Animations with GSAP and ScrollTrigger',
    excerpt: 'Learn how to create smooth, performant scroll-triggered animations that work seamlessly across all devices and browsers.',
    category: 'Web Dev',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    date: 'Dec 5, 2024',
    readTime: '8 min read',
    tags: ['GSAP', 'Animation', 'JavaScript'],
  },
  {
    id: 2,
    title: 'The Art of Color Grading: A Complete Guide',
    excerpt: 'Discover the secrets of professional color grading that will transform your video projects from amateur to cinematic.',
    category: 'Video',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80',
    date: 'Nov 28, 2024',
    readTime: '12 min read',
    tags: ['Color Grading', 'DaVinci', 'Video Editing'],
  },
  {
    id: 3,
    title: 'Modern Logo Design Principles for 2025',
    excerpt: 'Explore the emerging trends and timeless principles that define successful logo design in the modern era.',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
    date: 'Nov 20, 2024',
    readTime: '6 min read',
    tags: ['Logo Design', 'Branding', 'Trends'],
  },
  {
    id: 4,
    title: 'Creating Seamless Loop Animations in After Effects',
    excerpt: 'Master the techniques for creating perfectly looping animations that captivate viewers endlessly.',
    category: 'Motion',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
    date: 'Nov 15, 2024',
    readTime: '10 min read',
    tags: ['After Effects', 'Animation', 'Loops'],
  },
  {
    id: 5,
    title: 'WordPress Performance Optimization Deep Dive',
    excerpt: 'A comprehensive guide to making your WordPress site lightning fast with proven optimization techniques.',
    category: 'Web Dev',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    date: 'Nov 8, 2024',
    readTime: '15 min read',
    tags: ['WordPress', 'Performance', 'SEO'],
  },
  {
    id: 6,
    title: 'Finding Your Creative Voice in a Noisy Digital World',
    excerpt: 'Tips and insights on developing a unique creative style that stands out in the crowded digital landscape.',
    category: 'Creativity',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80',
    date: 'Nov 1, 2024',
    readTime: '7 min read',
    tags: ['Creativity', 'Personal Brand', 'Growth'],
  },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts[0];

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
                Articles & Insights
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-foreground">The </span>
                <span className="text-gradient">Blog</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Thoughts, tutorials, and insights on web development, design, video editing, and the creative industry.
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
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-primary text-primary-foreground glow-cyan'
                      : 'bg-card/50 text-muted-foreground hover:text-foreground border border-border/50 hover:border-primary/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>

            {/* Featured Post */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-16"
            >
              <Link to={`/blog/${featuredPost.id}`} className="group block">
                <div className="grid lg:grid-cols-2 gap-8 p-4 rounded-3xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-500">
                  <div className="relative aspect-video lg:aspect-auto overflow-hidden rounded-2xl">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                      Featured
                    </div>
                  </div>
                  <div className="flex flex-col justify-center p-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">{featuredPost.category}</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-2 text-primary font-medium">
                      Read Article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                  className="group"
                >
                  <Link to={`/blog/${post.id}`}>
                    <div className="rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 overflow-hidden">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                          <span className="px-2 py-1 rounded-full bg-primary/10 text-primary">{post.category}</span>
                          <span>{post.date}</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{post.excerpt}</p>
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <span key={tag} className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Tag className="w-3 h-3" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            {/* Newsletter CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 text-center py-16 px-8 rounded-3xl border border-border/50 bg-card/30 backdrop-blur-sm"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stay Updated
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Subscribe to get the latest articles, tutorials, and creative insights delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-full bg-muted border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:glow-cyan transition-shadow"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
