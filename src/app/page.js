"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Globe, 
  Send, 
  ArrowUpRight, 
  Palette, 
  Video, 
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
  Layers,
  MessageSquare,
  Loader2,
  Sparkles,
  Clapperboard,
  BookOpen,
  Users
} from "lucide-react";
import { getPortfolioData, getProjects } from "./lib/sanity";

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

// Fallback Data Definition
const initialPortfolio = {
  heroSubtitleBadge: "Digital Creator & Developer",
  heroTitleName: "Himasha Keshana Rathnayaka",
  heroDescription: "Founder of Virtmex and VarixWare. Combining software engineering, WordPress development, graphic design, and video editing with AI-driven workflows to craft powerful digital solutions.",
  profileImageUrl: "/projects/myimage.png",
  aboutParagraph1: "I am an Information Technology student, Digital Creator, and the Founder of Virtmex and VarixWare. My focus spans web engineering, custom software solutions, app development, and high-impact digital media.",
  aboutParagraph2: "By combining modern software architecture with intuitive UI design and AI-driven workflows, I craft scalable products tailored to solve real-world challenges with precision and speed.",
  brands: [
    { brandName: "Virtmex", role: "Founder & Managing Brand Lead" },
    { brandName: "VarixWare", role: "Founder & Development Lead" }
  ],
  education: [
    { badge: "Present • Currently Reading", institutionTag: "UCSC", degreeTitle: "Bachelor of Information Technology (BIT)", instituteFullName: "University of Colombo School of Computing (UCSC)", isCurrent: true },
    { badge: "2024 - 2025", institutionTag: "UCSC", degreeTitle: "Foundation in Information Technology (FIT)", instituteFullName: "University of Colombo School of Computing (UCSC)", isCurrent: false },
    { badge: "2024 - 2025", institutionTag: "IMBS Campus", degreeTitle: "Diploma in Information & Communication Technology", instituteFullName: "IMBS Green Campus (1 Year Program)", isCurrent: false },
    { badge: "2024", institutionTag: "CPS Campus", degreeTitle: "Certificate in Graphic Designing", instituteFullName: "College of Professional Studies Campus", isCurrent: false }
  ],
  whatsappNumber: "94750434734",
  emailAddress: "himashakeshana.official@gmail.com",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/himasha-rathnayaka-4328493a8",
    github: "https://github.com/HimashaOfficial",
    facebook: "https://www.facebook.com/share/1DnuG4k5U5/",
    instagram: "https://www.instagram.com/himasha_keshana",
    youtube: "https://youtube.com/@himashakeshana",
    tiktok: "https://www.tiktok.com/@himashakeshana"
  }
};

const initialProjects = [
  {
    _id: "1",
    title: "Drivers Help Mobile Application",
    type: "App Development",
    description: "A dedicated mobile application solution designed to assist drivers with real-time support tools and operational assistance features.",
    tags: ["#AppDevelopment", "#MobileUI", "#DriverSolutions"],
    image: "/projects/Drivers Help App Logo.png",
    iconType: "app"
  },
  {
    _id: "2",
    title: "Lopez Tours Travel Platform",
    type: "WordPress Development",
    description: "A customized WordPress platform developed for Lopez Tours, featuring tailored layouts, travel packages, and brand content management.",
    tags: ["#WordPress", "#TravelWeb", "#CMS"],
    image: "/projects/lopez tours.png",
    iconType: "web"
  }
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [portfolio, setPortfolio] = useState(initialPortfolio);
  const [projects, setProjects] = useState(initialProjects);

  // Dynamic Sanity Data Fetching
  useEffect(() => {
    const fetchData = async () => {
      try {
        const portfolioData = await getPortfolioData();
        if (portfolioData) {
          setPortfolio((prev) => ({ ...prev, ...portfolioData }));
        }

        const sanityProjects = await getProjects();
        if (sanityProjects && sanityProjects.length > 0) {
          setProjects(sanityProjects);
        }
      } catch (error) {
        console.error("Sanity fetching error:", error);
      }
    };

    fetchData();
  }, []);

  // Form States
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", mobile: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setErrorMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleMobileNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    setMobileMenuOpen(false);

    if (targetElement) {
      setTimeout(() => {
        const navHeight = 80;
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementPosition - navHeight, behavior: "smooth" });
      }, 150);
    }
  };

  return (
    <main className="w-full min-h-screen bg-black text-neutral-100 overflow-x-hidden selection:bg-neutral-800 selection:text-white m-0 p-0">
      
      {/* Floating Navbar */}
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

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-neutral-300 hover:text-white p-2 rounded-lg border border-neutral-800 bg-neutral-900"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

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
                          isActive ? "bg-white text-black font-semibold" : "text-neutral-400 hover:text-white hover:bg-neutral-900"
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
      <section id="hero" className="w-full min-h-screen flex flex-col justify-center items-center pt-24 md:pt-32 lg:pt-28 pb-12 px-6 md:px-12 lg:px-16">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="w-full max-w-6xl mx-auto flex flex-col-reverse lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          <div className="w-full lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-neutral-900/90 text-neutral-300 border border-neutral-800 rounded-full text-xs font-medium tracking-wider uppercase mb-5">
              <Sparkles size={14} className="text-neutral-400" /> {portfolio.heroSubtitleBadge}
            </span>

            <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-white tracking-tight leading-tight w-full">
              Hi, I'm <br className="hidden sm:inline" />
              <span>{portfolio.heroTitleName}</span>👋
            </h1>

            <p className="text-neutral-400 text-sm sm:text-base md:text-lg mb-8 leading-relaxed w-full max-w-xl md:max-w-2xl lg:max-w-2xl mx-auto lg:mx-0">
              {portfolio.heroDescription}
            </p>

            <div className="grid grid-cols-2 sm:flex sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
              <a href="#projects" className="h-12 px-6 bg-white hover:bg-neutral-200 text-black font-semibold rounded-lg transition flex items-center justify-center gap-2 text-xs sm:text-sm w-full sm:w-auto">
                View Work <ArrowUpRight size={16} />
              </a>
              <a href="#contact" className="h-12 px-6 border border-neutral-800 hover:bg-neutral-900 text-neutral-300 font-semibold rounded-lg transition text-xs sm:text-sm w-full sm:w-auto flex items-center justify-center">
                Get In Touch
              </a>
            </div>
          </div>

          <div className="w-full lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-[320px] md:h-[320px] lg:w-[420px] lg:h-[420px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neutral-800 via-neutral-600 to-white/20 blur-2xl opacity-40 animate-pulse" />
              <div className="relative w-full h-full rounded-full p-1.5 bg-gradient-to-b from-neutral-700 via-neutral-900 to-black border border-neutral-800 shadow-2xl overflow-hidden flex items-center justify-center">
                <img 
                  src={portfolio.profileImageUrl || "/projects/myimage.png"} 
                  alt={portfolio.heroTitleName} 
                  className="w-full h-full object-cover rounded-full hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-16 md:py-20 lg:py-24 px-6 md:px-16 border-t border-neutral-900">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="w-full max-w-4xl mx-auto"
        >
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 inline-flex items-center gap-2.5">
              <UserCheck className="text-neutral-400" size={28} /> About Me
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base max-w-lg mx-auto">
              Background, leadership, and digital expertise.
            </p>
          </div>

          <div className="bg-neutral-950 border border-neutral-800/80 rounded-2xl p-6 sm:p-8 md:p-10 space-y-5 text-neutral-300 text-sm sm:text-base leading-relaxed text-left sm:text-center max-w-3xl mx-auto shadow-xl">
            <p>{portfolio.aboutParagraph1}</p>
            <p className="text-neutral-400">{portfolio.aboutParagraph2}</p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {portfolio.brands && portfolio.brands.map((brand, idx) => (
              <div key={idx} className="p-5 bg-neutral-950 border border-neutral-800 rounded-xl flex items-center gap-4 hover:border-neutral-700 transition">
                <div className="w-10 h-10 bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center shrink-0">
                  <Briefcase className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base">{brand.brandName}</h3>
                  <p className="text-xs text-neutral-400">{brand.role}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Dynamic Education Section */}
      <section id="education" className="w-full py-16 md:py-20 lg:py-24 px-6 md:px-16 border-t border-neutral-900">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="w-full max-w-6xl mx-auto"
        >
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 inline-flex items-center gap-2.5">
              <GraduationCap className="text-neutral-400" size={30} /> Education & Academic Qualifications
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base">Academic journey and technical certifications.</p>
          </div>

          <div className="relative border-l border-neutral-800 ml-4 sm:ml-auto pl-6 sm:pl-8 space-y-8 max-w-3xl mx-auto">
            {portfolio.education && portfolio.education.map((edu, idx) => (
              <div key={idx} className="relative group">
                <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-4 border-black ${edu.isCurrent ? 'bg-white' : 'bg-neutral-600'}`} />
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-0.5 rounded-full ${edu.isCurrent ? 'text-green-400 bg-green-950/60 border border-green-800/60' : 'text-neutral-400'}`}>
                    {edu.badge}
                  </span>
                  <span className="text-xs text-neutral-500 font-mono">{edu.institutionTag}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{edu.degreeTitle}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{edu.instituteFullName}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full py-16 md:py-20 lg:py-24 px-6 md:px-16 border-t border-neutral-900">
        <div className="w-full max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 inline-flex items-center gap-2.5">
              <Cpu className="text-neutral-400" size={28} /> Skills & Expertise
            </h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-7 bg-neutral-950 border border-neutral-800 rounded-xl">
              <Code2 className="text-white mb-4" size={28} />
              <h3 className="text-lg font-bold text-white mb-2">Software Development</h3>
              <p className="text-neutral-400 text-sm">Developing structured software logic, backend foundations, and custom application solutions.</p>
            </div>
            <div className="p-7 bg-neutral-950 border border-neutral-800 rounded-xl">
              <Smartphone className="text-white mb-4" size={28} />
              <h3 className="text-lg font-bold text-white mb-2">App Development</h3>
              <p className="text-neutral-400 text-sm">Building intuitive cross-platform mobile interfaces and functional application systems.</p>
            </div>
            <div className="p-7 bg-neutral-950 border border-neutral-800 rounded-xl">
              <Globe className="text-white mb-4" size={28} />
              <h3 className="text-lg font-bold text-white mb-2">WordPress Development</h3>
              <p className="text-neutral-400 text-sm">Customizing and managing WordPress architectures for business sites and content platforms.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-16 md:py-20 lg:py-24 px-6 md:px-16 border-t border-neutral-900">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 inline-flex items-center gap-2.5">
              <Briefcase className="text-neutral-400" size={28} /> Featured Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {projects.map((project) => (
              <div key={project._id} className="bg-neutral-950 border border-neutral-800/80 rounded-2xl overflow-hidden p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-neutral-400 text-sm mb-4">{project.description}</p>
                <span className="text-xs bg-neutral-900 text-neutral-300 border border-neutral-800 px-3 py-1 rounded-full uppercase">{project.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-16 md:py-20 lg:py-24 px-6 md:px-16 border-t border-neutral-900">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 inline-flex items-center gap-2.5">
              <MessageSquare className="text-neutral-400" size={28} /> Get In Touch
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <form onSubmit={handleSubmit} className="lg:col-span-7 bg-neutral-950 border border-neutral-800 p-6 rounded-2xl space-y-4">
              <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-white text-sm" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Your Email" className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-white text-sm" />
              <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Your Message" className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-white text-sm" rows="3"></textarea>
              <button type="submit" className="w-full py-3 bg-white text-black font-semibold rounded-lg text-sm">{loading ? "Sending..." : "Send Message"}</button>
            </form>

            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="p-5 bg-neutral-950 border border-neutral-800 rounded-2xl">
                <h3 className="text-sm font-bold text-white mb-1">WhatsApp</h3>
                <a href={`https://wa.me/${portfolio.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-300 underline">Chat on WhatsApp</a>
              </div>
              <div className="p-5 bg-neutral-950 border border-neutral-800 rounded-2xl">
                <h3 className="text-sm font-bold text-white mb-1">Email</h3>
                <a href={`mailto:${portfolio.emailAddress}`} className="text-xs text-neutral-300">{portfolio.emailAddress}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}