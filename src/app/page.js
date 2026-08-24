"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Globe, 
  Send, 
  ArrowUpRight, 
  Palette, 
  Video, 
  Share2, 
  Cpu, 
  UserCheck,
  Mail,
  CheckCircle2,
  Code2,
  Smartphone,
  Menu,
  X,
  Briefcase,
  GraduationCap,
  ExternalLink,
  Layers,
  MessageSquare
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Auto detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  // Fixed mobile navigation handler
  const handleMobileNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    setMobileMenuOpen(false);

    if (targetElement) {
      setTimeout(() => {
        const navHeight = 80; // Fixed navbar height offset
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }, 150);
    }
  };

  return (
    <main className="w-full min-h-screen bg-black text-neutral-100 overflow-x-hidden selection:bg-neutral-800 selection:text-white m-0 p-0">
      
      {/* Full Width Creative Floating Navbar */}
      <nav className="fixed top-0 left-0 right-0 w-full bg-black/80 backdrop-blur-xl z-50 border-b border-neutral-800/80 py-4 px-6 md:px-16">
        <div className="w-full flex justify-between items-center">
          <motion.a 
            href="#hero"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-lg md:text-xl font-bold tracking-tight text-white flex items-center gap-1 group"
          >
            <span>HimashaKeshana</span>
            <span className="text-neutral-500 group-hover:text-white transition">.</span>
          </motion.a>

          {/* Desktop Nav Items with Active Indicator Pill */}
          <ul className="hidden md:flex items-center gap-2 text-xs md:text-sm font-medium bg-neutral-950/80 border border-neutral-800/80 p-1.5 rounded-full">
            {navItems.map((item) => {
              const id = item.href.substring(1);
              const isActive = activeSection === id;
              return (
                <li key={item.name} className="relative">
                  <a
                    href={item.href}
                    className={`px-4 py-1.5 rounded-full transition-colors duration-300 relative z-10 inline-block ${
                      isActive ? "text-black font-semibold" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </a>
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-white rounded-full z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Mobile Hamburger Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-neutral-300 hover:text-white p-2 rounded-lg border border-neutral-800 bg-neutral-900"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-neutral-950 border-b border-neutral-800 mt-4 rounded-xl overflow-hidden px-4 py-4"
            >
              <ul className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const id = item.href.substring(1);
                  const isActive = activeSection === id;
                  return (
                    <li key={item.name}>
                      <button
                        type="button"
                        onClick={(e) => handleMobileNavClick(e, item.href)}
                        className={`w-full text-left block px-4 py-2.5 rounded-lg text-sm transition ${
                          isActive 
                            ? "bg-white text-black font-semibold" 
                            : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                        }`}
                      >
                        {item.name}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="w-full min-h-screen flex flex-col justify-center items-center pt-28 pb-12 px-6 md:px-16">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Text Block */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 bg-neutral-900/90 text-neutral-300 border border-neutral-800 rounded-full text-xs font-medium tracking-wider uppercase mb-6">
              Digital Creator & Developer
            </span>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-white tracking-tight leading-tight">
              Hi, I'm <br className="sm:hidden" />
              <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                Himasha Keshana Rathnayaka
              </span> 👋
            </h1>
            
            <p className="text-neutral-400 text-base md:text-lg mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Founder of <strong className="text-white">Virtmex</strong> and <strong className="text-white">VarixWare</strong>. Combining software engineering, WordPress development, and graphic design with AI-driven workflows to craft powerful digital solutions.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a href="#projects" className="px-7 py-3 bg-white hover:bg-neutral-200 text-black font-semibold rounded-lg transition flex items-center gap-2 text-sm">
                View Work <ArrowUpRight size={16} />
              </a>
              <a href="#contact" className="px-7 py-3 border border-neutral-800 hover:bg-neutral-900 text-neutral-300 font-medium rounded-lg transition text-sm">
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Image Block (Ellipse Glow Frame) */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Outer Subtle Ambient Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neutral-800 via-neutral-600 to-white/20 blur-2xl opacity-40 animate-pulse" />
              
              {/* Ellipse Container */}
              <div className="relative w-full h-full rounded-full p-1.5 bg-gradient-to-b from-neutral-700 via-neutral-900 to-black border border-neutral-800 shadow-2xl overflow-hidden flex items-center justify-center">
                <img 
                  src="/projects/myimage.png" 
                  alt="Himasha Keshana Rathnayaka" 
                  className="w-full h-full object-cover rounded-full hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full min-h-screen flex flex-col justify-center py-24 px-6 md:px-16 border-t border-neutral-900">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="w-full max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <UserCheck className="text-neutral-400" size={26} /> About Me
          </h2>
          <div className="space-y-4 text-neutral-400 leading-relaxed text-base md:text-lg">
            <p>
              I am an Information Technology student, Digital Creator, and the Founder/Owner of <strong className="text-white">Virtmex</strong> and <strong className="text-white">VarixWare</strong>. My expertise covers web engineering, custom software solutions, app development, and creative digital media.
            </p>
            <p>
              Through my brands, I focus on delivering scalable digital products, tailored web design, and high-impact media solutions. By combining modern coding principles with graphic design and AI productivity tools, I bring a structured, end-to-end perspective to every venture.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-neutral-950 border border-neutral-800 rounded-xl flex items-center gap-4">
              <Briefcase className="text-white shrink-0" size={24} />
              <div>
                <h3 className="text-white font-bold text-base">Virtmex</h3>
                <p className="text-xs text-neutral-400">Founder & Managing Brand Lead</p>
              </div>
            </div>

            <div className="p-5 bg-neutral-950 border border-neutral-800 rounded-xl flex items-center gap-4">
              <Briefcase className="text-white shrink-0" size={24} />
              <div>
                <h3 className="text-white font-bold text-base">VarixWare</h3>
                <p className="text-xs text-neutral-400">Founder & Development Lead</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Professional Education Section */}
      <section id="education" className="w-full min-h-screen flex flex-col justify-center py-24 px-6 md:px-16 border-t border-neutral-900">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="w-full max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 flex items-center gap-3">
            <GraduationCap className="text-neutral-400" size={28} /> Education & Academic Qualifications
          </h2>

          <div className="relative border-l border-neutral-800 ml-4 pl-6 space-y-10">
            
            {/* Degree - Reading */}
            <div className="relative group">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-white rounded-full border-4 border-black" />
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-green-400 bg-green-950/60 border border-green-800/60 px-2.5 py-0.5 rounded-full">Present • Currently Reading</span>
                <span className="text-xs text-neutral-500 font-mono">UCSC</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Bachelor of Information Technology (BIT)</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                University of Colombo School of Computing (UCSC)
              </p>
            </div>

            {/* Foundation */}
            <div className="relative group">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-neutral-600 rounded-full border-4 border-black" />
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">2024 - 2025</span>
                <span className="text-xs text-neutral-500 font-mono">UCSC</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Foundation in Information Technology (FIT)</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                University of Colombo School of Computing (UCSC) — Eligible for Entry into Bachelor of Information Technology (BIT)
              </p>
            </div>

            {/* ICT Diploma */}
            <div className="relative group">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-neutral-600 rounded-full border-4 border-black" />
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">2024 - 2025</span>
                <span className="text-xs text-neutral-500 font-mono">IMBS Campus</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Diploma in Information & Communication Technology</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                IMBS Green Campus (1 Year Program)
              </p>
            </div>

            {/* Certificate */}
            <div className="relative group">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-neutral-600 rounded-full border-4 border-black" />
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">2024</span>
                <span className="text-xs text-neutral-500 font-mono">CPS Campus</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Certificate in Graphic Designing</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                College of Professional Studies Campus
              </p>
            </div>

          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full min-h-screen flex flex-col justify-center py-24 px-6 md:px-16 border-t border-neutral-900">
        <div className="w-full max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Skills & Expertise</h2>
            <p className="text-neutral-400 text-sm md:text-base">Technical development, creative design, and strategic media creation.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <motion.div variants={fadeInUp} className="p-7 bg-neutral-950 border border-neutral-800 rounded-xl hover:border-neutral-700 transition">
              <Code2 className="text-neutral-200 mb-4" size={28} />
              <h3 className="text-lg font-bold text-white mb-2">Software Development</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Developing structured software logic, backend foundations, and custom application solutions.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-7 bg-neutral-950 border border-neutral-800 rounded-xl hover:border-neutral-700 transition">
              <Smartphone className="text-neutral-200 mb-4" size={28} />
              <h3 className="text-lg font-bold text-white mb-2">App Development</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Building intuitive cross-platform mobile interfaces and functional application systems.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-7 bg-neutral-950 border border-neutral-800 rounded-xl hover:border-neutral-700 transition">
              <Globe className="text-neutral-200 mb-4" size={28} />
              <h3 className="text-lg font-bold text-white mb-2">WordPress Development</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Customizing and managing WordPress architectures for business sites and content platforms.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-7 bg-neutral-950 border border-neutral-800 rounded-xl hover:border-neutral-700 transition">
              <Palette className="text-neutral-200 mb-4" size={28} />
              <h3 className="text-lg font-bold text-white mb-2">Graphic Design</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Designing social media banners, marketing graphics, brand assets, and user interface elements.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-7 bg-neutral-950 border border-neutral-800 rounded-xl hover:border-neutral-700 transition">
              <Video className="text-neutral-200 mb-4" size={28} />
              <h3 className="text-lg font-bold text-white mb-2">Video Editing</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Editing promotional videos and social media content for targeted brand engagement.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-7 bg-neutral-950 border border-neutral-800 rounded-xl hover:border-neutral-700 transition">
              <Cpu className="text-neutral-200 mb-4" size={28} />
              <h3 className="text-lg font-bold text-white mb-2">AI-Assisted Workflows</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Leveraging generative AI productivity tools to streamline design, media, and coding processes.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full min-h-screen flex flex-col justify-center py-24 px-6 md:px-16 border-t border-neutral-900">
        <div className="w-full max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Services Offered</h2>
            <p className="text-neutral-400 text-sm md:text-base">Comprehensive technical and creative services.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="p-8 bg-neutral-950 border border-neutral-800 rounded-xl hover:border-neutral-600 transition">
              <Code2 className="text-neutral-200 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Software & App Solutions</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Custom software tools, functional web platforms, and user-friendly mobile application builds.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-8 bg-neutral-950 border border-neutral-800 rounded-xl hover:border-neutral-600 transition">
              <Globe className="text-neutral-200 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">WordPress Web Design</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Tailored WordPress installations, business portfolios, and content management sites.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-8 bg-neutral-950 border border-neutral-800 rounded-xl hover:border-neutral-600 transition">
              <Palette className="text-neutral-200 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Branding & Media Design</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Complete digital graphic design, social media assets, and promotional video editing.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="w-full min-h-screen flex flex-col justify-center py-24 px-6 md:px-16 border-t border-neutral-900">
        <div className="w-full max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Featured Software Builds</h2>
            <p className="text-neutral-400 text-sm md:text-base">Custom mobile applications and responsive Web platforms.</p>
          </motion.div>

          {/* Software Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            {/* Project 1: App Development (Drivers Help App) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-neutral-950 border border-neutral-800/80 rounded-2xl overflow-hidden hover:border-neutral-700 transition duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Clean App Canvas */}
                <div className="w-full h-56 bg-neutral-900/60 flex items-center justify-center relative border-b border-neutral-800/60">
                  <div className="w-20 h-20 bg-white rounded-2xl p-2.5 shadow-xl flex items-center justify-center group-hover:scale-105 transition duration-500">
                    <img 
                      src="/projects/Drivers Help App Logo.png" 
                      alt="Drivers Help App Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div className="p-7">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-semibold bg-neutral-900 text-neutral-300 border border-neutral-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      App Development
                    </span>
                    <Smartphone size={18} className="text-neutral-500 group-hover:text-white transition" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neutral-200 transition">
                    Drivers Help Mobile Application
                  </h3>
                  <p className="text-neutral-400 text-xs md:text-sm leading-relaxed mb-6">
                    A dedicated mobile application solution designed to assist drivers with real-time support tools and operational assistance features.
                  </p>
                </div>
              </div>

              <div className="px-7 pb-7">
                <div className="flex flex-wrap gap-1.5 border-t border-neutral-900 pt-4">
                  <span className="text-[10px] text-neutral-500 bg-neutral-900 px-2.5 py-1 rounded">#AppDevelopment</span>
                  <span className="text-[10px] text-neutral-500 bg-neutral-900 px-2.5 py-1 rounded">#MobileUI</span>
                  <span className="text-[10px] text-neutral-500 bg-neutral-900 px-2.5 py-1 rounded">#DriverSolutions</span>
                </div>
              </div>
            </motion.div>

            {/* Project 2: WordPress Site (Lopez Tours) - Full Edge Banner */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-neutral-950 border border-neutral-800/80 rounded-2xl overflow-hidden hover:border-neutral-700 transition duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Full Bleed Image Banner (No Margins, Fits Top Completely) */}
                <div className="w-full h-56 overflow-hidden relative border-b border-neutral-800/60">
                  <img 
                    src="/projects/lopez tours.png" 
                    alt="Lopez Tours Website Screenshot" 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-7">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-semibold bg-neutral-900 text-neutral-300 border border-neutral-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      WordPress Development
                    </span>
                    <Globe size={18} className="text-neutral-500 group-hover:text-white transition" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neutral-200 transition">
                    Lopez Tours Travel Platform
                  </h3>
                  <p className="text-neutral-400 text-xs md:text-sm leading-relaxed mb-6">
                    A customized WordPress platform developed for Lopez Tours, featuring tailored layouts, travel packages, and brand content management.
                  </p>
                </div>
              </div>

              <div className="px-7 pb-7">
                <div className="flex flex-wrap gap-1.5 border-t border-neutral-900 pt-4">
                  <span className="text-[10px] text-neutral-500 bg-neutral-900 px-2.5 py-1 rounded">#WordPress</span>
                  <span className="text-[10px] text-neutral-500 bg-neutral-900 px-2.5 py-1 rounded">#TravelWeb</span>
                  <span className="text-[10px] text-neutral-500 bg-neutral-900 px-2.5 py-1 rounded">#CMS</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* High-End Creative Media Requests Banner */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="p-8 bg-neutral-950 border border-neutral-800/80 rounded-2xl text-center flex flex-col items-center justify-center relative overflow-hidden"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-xs text-neutral-300 mb-3">
              <Palette size={14} className="text-neutral-400" />
              <span>Graphic Design & Video Editing Work</span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">Looking for Creative Media & Design Portfolios?</h3>
            
            <p className="text-neutral-400 text-xs md:text-sm max-w-2xl leading-relaxed mb-6">
              I have executed various custom brand graphic design packages, social media marketing assets, and video editing campaigns. Specific media work samples and project presentations are available upon direct request.
            </p>

            <a 
              href="#contact" 
              className="px-6 py-2.5 bg-white hover:bg-neutral-200 text-black font-semibold rounded-lg text-xs md:text-sm transition flex items-center gap-2"
            >
              <MessageSquare size={16} /> Request Media Samples
            </a>
          </motion.div>

        </div>
      </section>

      {/* Compact High-Density Contact Section (No-Scroll Viewport Friendly) */}
      <section id="contact" className="w-full min-h-screen flex flex-col justify-center py-16 px-6 md:px-16 border-t border-neutral-900">
        <div className="w-full max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Get In Touch</h2>
            <p className="text-neutral-400 text-xs md:text-sm">Let's connect for projects, collaborations, or inquiries.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left: Interactive Form (7 Columns) */}
            <motion.form 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              onSubmit={handleSubmit} 
              className="lg:col-span-7 bg-neutral-950 border border-neutral-800 p-6 md:p-7 rounded-2xl flex flex-col justify-between"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white mb-1">Send a Message</h3>
                
                <div>
                  <label className="block text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-1">Your Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Enter your name" 
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition text-xs md:text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-1">Your Email</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="name@example.com" 
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition text-xs md:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-1">Mobile Number</label>
                    <input 
                      type="tel" 
                      placeholder="+94 75 043 4734" 
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition text-xs md:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-1">Message</label>
                  <textarea 
                    rows="3" 
                    required 
                    placeholder="Write your message here..." 
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition text-xs md:text-sm resize-none"
                  ></textarea>
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full mt-4 py-3 bg-white hover:bg-neutral-200 text-black font-semibold rounded-lg transition flex items-center justify-center gap-2 text-xs md:text-sm"
              >
                {submitted ? (
                  <span className="flex items-center gap-2 text-green-700"><CheckCircle2 size={16} /> Message Sent!</span>
                ) : (
                  <span className="flex items-center gap-2"><Mail size={16} /> Send Message</span>
                )}
              </button>
            </motion.form>

            {/* Right: Height-Balanced Cards (5 Columns) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:col-span-5 flex flex-col justify-between gap-3"
            >
              {/* WhatsApp Box */}
              <div className="p-5 bg-neutral-950 border border-neutral-800 rounded-2xl flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                    <Send size={16} className="text-green-500" /> Direct WhatsApp
                  </h3>
                  <p className="text-neutral-400 text-xs leading-relaxed mb-3">Need a faster response? Reach out directly via WhatsApp.</p>
                </div>
                <div>
                  <a 
                    href="https://wa.me/94750434734" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white rounded-lg text-xs font-semibold transition"
                  >
                    Chat on WhatsApp <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>

              {/* Email Box */}
              <div className="p-5 bg-neutral-950 border border-neutral-800 rounded-2xl flex-1 flex flex-col justify-center">
                <h3 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                  <Mail size={16} className="text-neutral-300" /> Direct Email
                </h3>
                <p className="text-neutral-400 text-xs mb-0.5">Send your requirements or questions to:</p>
                <a href="mailto:himashakeshana.official@gmail.com" className="text-neutral-200 hover:text-white font-medium text-xs transition">
                  himashakeshana.official@gmail.com
                </a>
              </div>

              {/* Social Media Grid Box */}
              <div className="p-5 bg-neutral-950 border border-neutral-800 rounded-2xl flex-1 flex flex-col justify-center">
                <h3 className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-2">Connect On Social Media</h3>
                
                <div className="grid grid-cols-2 gap-2">
                  <a href="https://www.linkedin.com/in/himasha-rathnayaka-4328493a8" target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800/80 rounded-lg flex items-center gap-2 text-xs text-neutral-300 hover:text-white transition">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                    LinkedIn
                  </a>

                  <a href="https://github.com/HimashaOfficial" target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800/80 rounded-lg flex items-center gap-2 text-xs text-neutral-300 hover:text-white transition">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
                    GitHub
                  </a>

                  <a href="https://www.facebook.com/share/1DnuG4k5U5/" target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800/80 rounded-lg flex items-center gap-2 text-xs text-neutral-300 hover:text-white transition">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.69c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 3h-2.33v6.8c4.56-.93 8-4.96 8-9.8z"/></svg>
                    Facebook
                  </a>

                  <a href="https://www.instagram.com/himasha_keshana" target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800/80 rounded-lg flex items-center gap-2 text-xs text-neutral-300 hover:text-white transition">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    Instagram
                  </a>

                  <a href="https://youtube.com/@himashakeshana" target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800/80 rounded-lg flex items-center gap-2 text-xs text-neutral-300 hover:text-white transition">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    YouTube
                  </a>

                  <a href="https://www.tiktok.com/@himashakeshana" target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800/80 rounded-lg flex items-center gap-2 text-xs text-neutral-300 hover:text-white transition">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.56-1.33 1.52-1.33 2.52.01 1.01.55 1.96 1.39 2.51.87.58 2 .62 2.92.13.83-.43 1.41-1.28 1.52-2.22.03-2.31.02-4.63.02-6.95 0-3.37-.01-6.74.01-10.11z"/></svg>
                    TikTok
                  </a>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

    </main>
  );
}