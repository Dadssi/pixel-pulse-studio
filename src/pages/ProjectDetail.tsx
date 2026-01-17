import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { 
  ArrowLeft, 
  ArrowRight,
  Play,
  Calendar,
  Building2,
  Briefcase,
  User,
  Package,
  Clock,
  CheckCircle2,
  Lightbulb,
  Compass,
  Wrench,
  Sparkles,
  Target,
  ArrowUpRight,
  ChevronRight
} from 'lucide-react';

// Types for project data
interface ProjectSnapshot {
  client: string;
  industry: string;
  projectType: string;
  role: string;
  deliverables: string[];
  duration?: string;
}

interface ProcessStep {
  title: string;
  icon: React.ReactNode;
  description: string;
  details: string[];
}

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'motion' | 'web' | 'graphic' | 'video';
  tags: string[];
  tools: string[];
  heroMedia: {
    type: 'video' | 'image' | 'slider';
    src: string;
    poster?: string;
    images?: string[];
  };
  snapshot: ProjectSnapshot;
  context: {
    clientDescription: string;
    situation: string;
    objective: string;
  };
  challenge: {
    overview: string;
    points: string[];
  };
  responsibilities: string[];
  process: ProcessStep[];
  behindTheScenes?: {
    type: 'images' | 'beforeAfter' | 'timeline';
    items: {
      src: string;
      label?: string;
    }[];
  };
  skills: string[];
  toolsUsed: { name: string; category: string }[];
  result: {
    overview: string;
    valuePoints: string[];
  };
  nextProject?: {
    id: string;
    title: string;
    category: string;
  };
}

// Sample project data - this would typically come from a CMS or API
const projectsData: Record<string, Project> = {
  'all-keys-branding': {
    id: 'all-keys-branding',
    title: 'All Keys Branding',
    subtitle: 'Transforming complex digital concepts into a clear, engaging promotional video that drives business understanding.',
    category: 'motion',
    tags: ['Motion Design', 'Promotional Video', 'Brand Communication'],
    tools: ['After Effects', 'Illustrator', 'Premiere Pro', 'Audition'],
    heroMedia: {
      type: 'video',
      src: 'https://player.vimeo.com/video/123456789',
      poster: '/placeholder.svg'
    },
    snapshot: {
      client: 'All Keys Digital Agency',
      industry: 'Digital Marketing / Technology',
      projectType: 'Promotional Motion Graphics Video',
      role: 'Motion Designer & Video Producer',
      deliverables: ['60-second promotional video', 'Animated typography package', 'Sound design', 'Final delivery in multiple formats'],
      duration: '3 weeks'
    },
    context: {
      clientDescription: 'All Keys is a digital agency specializing in SEO, web performance, and digital strategy for small to medium businesses.',
      situation: 'The agency needed a compelling way to explain complex digital concepts—SEO, bounce rate, GDPR compliance, site performance, and internal linking—to clients who often find these topics overwhelming and technical.',
      objective: 'Create a promotional video that demystifies digital marketing concepts, positions All Keys as experts, and serves as both an educational tool and a persuasive sales asset.'
    },
    challenge: {
      overview: 'The script was intentionally designed to start chaotic and dense, mirroring how clients often feel overwhelmed by digital jargon. The creative challenge was multi-layered:',
      points: [
        'Transform technical concepts into visually intuitive metaphors without oversimplifying',
        'Maintain a strong rhythm that guides viewers from confusion to clarity',
        'Balance information density with viewer engagement',
        'Create a cohesive visual language that reinforces the brand identity',
        'Synchronize motion, typography, and sound into a unified narrative experience'
      ]
    },
    responsibilities: [
      'Script analysis and visual storytelling strategy',
      'Storyboarding and styleframe development',
      'Full motion graphics production and animation',
      'Animated typography design and implementation',
      'Rhythm, pacing, and timing direction',
      'Music selection and licensing',
      'Sound design and audio mixing',
      'Final video rendering and format optimization'
    ],
    process: [
      {
        title: 'Research & Understanding',
        icon: <Compass className="w-6 h-6" />,
        description: 'Deep dive into the script and brand identity to establish the creative foundation.',
        details: [
          'Analyzed the script structure to identify emotional beats',
          'Researched competitor communications in the digital agency space',
          'Studied the client\'s existing brand guidelines and visual assets',
          'Identified key concepts that required visual metaphors'
        ]
      },
      {
        title: 'Concept & Direction',
        icon: <Lightbulb className="w-6 h-6" />,
        description: 'Developed the visual strategy and narrative approach.',
        details: [
          'Created mood boards exploring visual directions',
          'Designed styleframes establishing the visual language',
          'Developed storyboards mapping the narrative flow',
          'Presented concepts to client for feedback and refinement'
        ]
      },
      {
        title: 'Production',
        icon: <Wrench className="w-6 h-6" />,
        description: 'Full animation and motion graphics production.',
        details: [
          'Built modular animation systems for consistent motion',
          'Animated key scenes with focus on rhythm and pacing',
          'Created custom typography animations for emphasis',
          'Integrated visual effects and transitions'
        ]
      },
      {
        title: 'Refinement & Delivery',
        icon: <Sparkles className="w-6 h-6" />,
        description: 'Polish, sound design, and final optimization.',
        details: [
          'Conducted multiple review rounds with client feedback',
          'Selected and licensed appropriate music',
          'Designed and mixed sound effects',
          'Rendered in multiple formats for various platforms'
        ]
      }
    ],
    behindTheScenes: {
      type: 'images',
      items: [
        { src: '/placeholder.svg', label: 'Initial styleframe exploration' },
        { src: '/placeholder.svg', label: 'Typography animation tests' },
        { src: '/placeholder.svg', label: 'Color palette development' },
        { src: '/placeholder.svg', label: 'Final storyboard sequence' }
      ]
    },
    skills: ['Visual Storytelling', 'Motion Design', 'Typography', 'Sound Design', 'Pacing & Rhythm', 'Brand Communication'],
    toolsUsed: [
      { name: 'After Effects', category: 'Animation' },
      { name: 'Illustrator', category: 'Design' },
      { name: 'Premiere Pro', category: 'Video' },
      { name: 'Audition', category: 'Audio' },
      { name: 'Media Encoder', category: 'Delivery' }
    ],
    result: {
      overview: 'The final video successfully transforms what could have been a dry explanation of technical services into an engaging, memorable brand story.',
      valuePoints: [
        'Complex concepts now accessible to non-technical audiences',
        'Professional asset for sales presentations and website',
        'Consistent brand messaging across all client touchpoints',
        'Increased client confidence in All Keys\' expertise',
        'Reusable visual components for future marketing materials'
      ]
    },
    nextProject: {
      id: 'techflow-website',
      title: 'TechFlow Website Redesign',
      category: 'Web Development'
    }
  }
};

const categoryLabels: Record<string, { label: string; color: string }> = {
  motion: { label: 'Motion Graphics', color: 'bg-brand-orange' },
  web: { label: 'Web Development', color: 'bg-brand-blue' },
  graphic: { label: 'Graphic Design', color: 'bg-brand-coral' },
  video: { label: 'Video Editing', color: 'bg-brand-purple' }
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData[id || ''] || projectsData['all-keys-branding'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />
      
      <main className="relative z-10 pt-32">
        {/* Back Navigation */}
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span className="text-sm font-medium">Back to Projects</span>
            </Link>
          </motion.div>
        </div>

        {/* ============================================ */}
        {/* 1. HERO SECTION - RESULT FIRST */}
        {/* ============================================ */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Category Badge */}
            <motion.div variants={itemVariants}>
              <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium ${categoryLabels[project.category].color} text-primary-foreground`}>
                {categoryLabels[project.category].label}
              </span>
            </motion.div>

            {/* Title & Subtitle */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                {project.subtitle}
              </p>
            </motion.div>

            {/* Tags */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1.5 rounded-lg bg-muted text-muted-foreground text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
              <span className="w-px bg-border" />
              {project.tools.slice(0, 4).map((tool) => (
                <span 
                  key={tool}
                  className="px-3 py-1.5 rounded-lg border border-border text-foreground text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </motion.div>

            {/* Hero Media */}
            <motion.div 
              variants={itemVariants}
              className="relative aspect-video rounded-2xl overflow-hidden bg-card border border-border mt-12"
            >
              {project.heroMedia.type === 'video' ? (
                <div className="relative w-full h-full group">
                  <img 
                    src={project.heroMedia.poster} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-background/40 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center glow-orange"
                    >
                      <Play className="w-8 h-8 ml-1" />
                    </motion.button>
                  </div>
                </div>
              ) : (
                <img 
                  src={project.heroMedia.src} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              )}
            </motion.div>
          </motion.div>
        </section>

        {/* ============================================ */}
        {/* 2. PROJECT SNAPSHOT - AT A GLANCE */}
        {/* ============================================ */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="max-w-7xl mx-auto px-6 mb-24"
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-10">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-8">
              Project Snapshot
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Building2 className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider">Client</span>
                </div>
                <p className="font-medium">{project.snapshot.client}</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider">Industry</span>
                </div>
                <p className="font-medium">{project.snapshot.industry}</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Package className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider">Project Type</span>
                </div>
                <p className="font-medium">{project.snapshot.projectType}</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <User className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider">My Role</span>
                </div>
                <p className="font-medium">{project.snapshot.role}</p>
              </div>
              
              <div className="space-y-2 col-span-2 md:col-span-1">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider">Duration</span>
                </div>
                <p className="font-medium">{project.snapshot.duration || 'N/A'}</p>
              </div>
              
              <div className="space-y-2 col-span-2 lg:col-span-1">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider">Deliverables</span>
                </div>
                <p className="font-medium text-sm">{project.snapshot.deliverables.length} items</p>
              </div>
            </div>
            
            {/* Deliverables List */}
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Deliverables:</p>
              <div className="flex flex-wrap gap-2">
                {project.snapshot.deliverables.map((item) => (
                  <span 
                    key={item}
                    className="px-3 py-1.5 rounded-lg bg-muted/50 text-foreground text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* ============================================ */}
        {/* 3. CONTEXT & OBJECTIVE */}
        {/* ============================================ */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="max-w-7xl mx-auto px-6 mb-24"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Context & Background
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Understanding the Need
              </h3>
            </div>
            
            <div className="space-y-8">
              <div>
                <h4 className="font-semibold text-lg mb-3">The Client</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {project.context.clientDescription}
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-3">The Situation</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {project.context.situation}
                </p>
              </div>
              
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl">
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  The Objective
                </h4>
                <p className="text-foreground leading-relaxed">
                  {project.context.objective}
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ============================================ */}
        {/* 4. THE CHALLENGE */}
        {/* ============================================ */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="max-w-7xl mx-auto px-6 mb-24"
        >
          <div className="bg-gradient-to-br from-card to-muted/30 border border-border rounded-2xl p-8 md:p-12">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              The Challenge
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              Navigating Complexity
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              {project.challenge.overview}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {project.challenge.points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-border/50"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm">
                    {index + 1}
                  </span>
                  <p className="text-muted-foreground">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ============================================ */}
        {/* 5. MY ROLE & RESPONSIBILITIES */}
        {/* ============================================ */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="max-w-7xl mx-auto px-6 mb-24"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                My Role
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Responsibilities & Ownership
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Full creative and technical ownership of the project from concept to final delivery.
              </p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
              <ul className="space-y-4">
                {project.responsibilities.map((responsibility, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{responsibility}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* ============================================ */}
        {/* 6. PROCESS */}
        {/* ============================================ */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="max-w-7xl mx-auto px-6 mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              The Process
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold">
              From Concept to Completion
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                {/* Connector line */}
                {index < project.process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-border to-transparent z-0" />
                )}
                
                <div className="bg-card border border-border rounded-2xl p-6 h-full relative z-10">
                  {/* Step number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  
                  <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                  
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ============================================ */}
        {/* 7. BEHIND THE SCENES (OPTIONAL) */}
        {/* ============================================ */}
        {project.behindTheScenes && (
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="max-w-7xl mx-auto px-6 mb-24"
          >
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Behind the Scenes
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-10">
              Visual Exploration
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.behindTheScenes.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative aspect-square rounded-xl overflow-hidden bg-card border border-border"
                >
                  <img 
                    src={item.src} 
                    alt={item.label || `Behind the scenes ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {item.label && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-4">
                      <p className="text-sm font-medium">{item.label}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* ============================================ */}
        {/* 8. SKILLS & TOOLS */}
        {/* ============================================ */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="max-w-7xl mx-auto px-6 mb-24"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Skills */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">
                Key Skills Applied
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Tools */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">
                Tools & Technologies
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {project.toolsUsed.map((tool) => (
                  <div key={tool.name} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                      <Wrench className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{tool.name}</p>
                      <p className="text-xs text-muted-foreground">{tool.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* ============================================ */}
        {/* 9. RESULT & VALUE DELIVERED */}
        {/* ============================================ */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="max-w-7xl mx-auto px-6 mb-24"
        >
          <div className="bg-gradient-to-br from-primary/10 via-card to-accent/5 border border-primary/20 rounded-2xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  The Result
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Value Delivered
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.result.overview}
                </p>
              </div>
              
              <div className="space-y-4">
                {project.result.valuePoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-border/50"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <p className="text-foreground font-medium">{point}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* ============================================ */}
        {/* 10. SOFT CTA */}
        {/* ============================================ */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="max-w-7xl mx-auto px-6 mb-24"
        >
          <div className="text-center py-16 px-8 rounded-2xl border border-border bg-card/30">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Interested in working together?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Let's discuss how I can help bring your next project to life with the same level of care and expertise.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:glow-orange transition-shadow"
              >
                Start a Conversation
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* ============================================ */}
        {/* NEXT PROJECT */}
        {/* ============================================ */}
        {project.nextProject && (
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="max-w-7xl mx-auto px-6 mb-24"
          >
            <Link 
              to={`/projects/${project.nextProject.id}`}
              className="group block"
            >
              <div className="flex items-center justify-between p-8 rounded-2xl border border-border bg-card/30 hover:bg-card/50 transition-colors">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Next Project</p>
                  <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.nextProject.title}
                  </h4>
                  <p className="text-muted-foreground">{project.nextProject.category}</p>
                </div>
                <motion.div
                  className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center"
                  whileHover={{ x: 5 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </div>
            </Link>
          </motion.section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
