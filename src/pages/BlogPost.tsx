import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import { CustomCursor } from '@/components/CustomCursor';
import { Navigation } from '@/components/Navigation';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Footer } from '@/components/Footer';

const blogPosts = [
  {
    id: 1,
    title: 'Building Performant Animations with GSAP and ScrollTrigger',
    excerpt: 'Learn how to create smooth, performant scroll-triggered animations that work seamlessly across all devices and browsers.',
    content: `
## Introduction

When it comes to web animations, performance is everything. Users expect smooth, 60fps animations that enhance rather than hinder their experience. GSAP (GreenSock Animation Platform) combined with ScrollTrigger provides the perfect toolkit for creating these experiences.

## Why GSAP?

GSAP has been the industry standard for web animations for over a decade, and for good reason:

- **Performance**: GSAP is optimized for speed, often outperforming CSS animations
- **Cross-browser compatibility**: Works consistently across all modern browsers
- **Ease of use**: Intuitive API that makes complex animations simple
- **ScrollTrigger**: Powerful plugin for scroll-based animations

## Getting Started

First, install GSAP and ScrollTrigger in your project:

\`\`\`bash
npm install gsap
\`\`\`

Then import them in your JavaScript file:

\`\`\`javascript
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
\`\`\`

## Basic ScrollTrigger Animation

Here's a simple example of a fade-in animation triggered by scrolling:

\`\`\`javascript
gsap.from(".animate-element", {
  scrollTrigger: {
    trigger: ".animate-element",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out"
});
\`\`\`

## Performance Tips

1. **Use will-change sparingly**: Only apply to elements that will actually animate
2. **Avoid animating layout properties**: Stick to transform and opacity
3. **Use GSAP's built-in optimization**: Enable \`force3D: true\` for hardware acceleration
4. **Batch your animations**: Use GSAP's timeline feature to sequence animations

## Conclusion

GSAP and ScrollTrigger provide a powerful combination for creating performant, engaging web animations. Start with simple animations and gradually increase complexity as you become more comfortable with the API.
    `,
    category: 'Web Dev',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80',
    date: 'Dec 5, 2024',
    readTime: '8 min read',
    tags: ['GSAP', 'Animation', 'JavaScript'],
    author: {
      name: 'Mohamed Abdelhak',
      avatar: '/dadssi-mohamed-abdelhak.png',
      role: 'Creative Developer'
    }
  },
  {
    id: 2,
    title: 'The Art of Color Grading: A Complete Guide',
    excerpt: 'Discover the secrets of professional color grading that will transform your video projects from amateur to cinematic.',
    content: `
## Introduction

Color grading is the secret sauce that separates amateur videos from professional productions. It's the art of manipulating colors to evoke emotions, establish mood, and create visual consistency.

## Understanding Color Theory

Before diving into color grading, it's essential to understand basic color theory:

- **Complementary colors**: Colors opposite each other on the color wheel
- **Analogous colors**: Colors adjacent to each other
- **Color temperature**: Warm (orange/yellow) vs cool (blue) tones

## The Color Grading Workflow

1. **Color Correction**: Fix exposure, white balance, and contrast
2. **Primary Grading**: Adjust overall look and feel
3. **Secondary Grading**: Target specific areas or colors
4. **Final Polish**: Fine-tune and add finishing touches

## Popular Color Grading Looks

- **Teal and Orange**: The Hollywood blockbuster look
- **Desaturated**: Gritty, documentary-style
- **High Contrast**: Bold, modern aesthetic
- **Film Emulation**: Vintage, nostalgic feel

## Conclusion

Color grading is both a technical skill and an art form. Practice consistently, study films you admire, and develop your own signature style.
    `,
    category: 'Video',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=80',
    date: 'Nov 28, 2024',
    readTime: '12 min read',
    tags: ['Color Grading', 'DaVinci', 'Video Editing'],
    author: {
      name: 'Mohamed Abdelhak',
      avatar: '/dadssi-mohamed-abdelhak.png',
      role: 'Creative Developer'
    }
  },
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="relative min-h-screen overflow-x-hidden">
        <CustomCursor />
        <AnimatedBackground />
        <Navigation />
        <main className="relative z-10 pt-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
            <Link to="/blog" className="text-primary hover:underline">
              ← Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CustomCursor />
      <AnimatedBackground />
      <Navigation />

      <main className="relative z-10 pt-32">
        <article className="px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </motion.div>

            {/* Header */}
            <motion.header
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-card/30 border border-border/50">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{post.author.name}</p>
                  <p className="text-sm text-muted-foreground">{post.author.role}</p>
                </div>
              </div>
            </motion.header>

            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <div className="relative aspect-video overflow-hidden rounded-3xl border border-border/50">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-12"
            >
              <div className="prose prose-lg prose-invert max-w-none">
                <div className="bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 p-8 md:p-12">
                  <div 
                    className="text-muted-foreground leading-relaxed space-y-6"
                    dangerouslySetInnerHTML={{ 
                      __html: post.content
                        .replace(/## (.*)/g, '<h2 class="text-2xl font-bold text-foreground mt-8 mb-4">$1</h2>')
                        .replace(/### (.*)/g, '<h3 class="text-xl font-semibold text-foreground mt-6 mb-3">$1</h3>')
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
                        .replace(/`([^`]+)`/g, '<code class="bg-muted px-2 py-1 rounded text-primary text-sm">$1</code>')
                        .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-muted rounded-lg p-4 overflow-x-auto my-4"><code class="text-sm text-foreground">$2</code></pre>')
                        .replace(/- (.*)/g, '<li class="ml-4">$1</li>')
                        .replace(/\n\n/g, '</p><p class="mb-4">')
                    }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag) => (
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

            {/* Share */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-16 p-6 rounded-2xl border border-border/50 bg-card/30"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Share2 className="w-5 h-5" />
                  <span>Share this article</span>
                </div>
                <div className="flex gap-3">
                  <a
                    href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${post.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
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
                Enjoyed this article?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Subscribe to get more articles, tutorials, and creative insights delivered to your inbox.
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
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
