import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles.css'

gsap.registerPlugin(ScrollTrigger)

/* =========================================
   DATA
   ========================================= */

const projects = [
  {
    id: '01',
    name: 'Tech India',
    type: 'Business & Engineering Platform',
    description: 'A comprehensive business platform with admin workflows, dynamic forms, API integrations and multi-page responsive interface built for real-world operations.',
    stack: ['REACT', 'DJANGO', 'MYSQL', 'ADMIN PANEL', 'APIs', 'FORMS', 'DEPLOYMENT'],
    url: 'https://tech-india-website.vercel.app',
    github: 'https://github.com/harshadawaykar05-spec/tech-india-website'
  },
  {
    id: '02',
    name: 'FlavorAI',
    type: 'AI-Powered Recipe Platform',
    description: 'An intelligent recipe platform powered by Groq AI with user authentication, MongoDB persistence and modern Next.js architecture for seamless AI-driven experiences.',
    stack: ['NEXT.JS', 'TYPESCRIPT', 'MONGODB', 'GROQ AI', 'AUTHENTICATION', 'DEPLOYMENT'],
    url: 'https://flavor-ai-nine.vercel.app',
    github: ''
  }
]

const skillsData = [
  { name: 'PYTHON', value: 92 },
  { name: 'DJANGO / DRF', value: 88 },
  { name: 'REACT / NEXT.JS', value: 86 },
  { name: 'TYPESCRIPT', value: 82 },
  { name: 'SQL / DATABASES', value: 87 },
  { name: 'REST APIs', value: 90 },
  { name: 'AI / LLM INTEGRATION', value: 85 },
  { name: 'DEPLOYMENT', value: 80 }
]

const capabilities = [
  { num: '01', title: 'Web Design & Development', desc: 'High-performance marketing websites, product interfaces and responsive experiences.' },
  { num: '02', title: 'Full-Stack Applications', desc: 'Frontend systems, backend APIs, authentication, databases and admin workflows.' },
  { num: '03', title: 'AI-Powered Products', desc: 'LLM integrations, AI workflows, intelligent product features and automation.' },
  { num: '04', title: 'Deployment & Production', desc: 'Cloud deployment, databases, environment configuration, integrations and production handoff.' }
]

const processStages = [
  { num: '01', title: 'DISCOVER', desc: 'Understand the product, users and business objective.' },
  { num: '02', title: 'DESIGN', desc: 'Structure the experience, interface and interaction.' },
  { num: '03', title: 'ENGINEER', desc: 'Build frontend, backend, APIs and integrations.' },
  { num: '04', title: 'LAUNCH', desc: 'Deploy, test, optimize and hand over.' }
]

/* =========================================
   HERO MEDIA — Cinematic parallax background
   ========================================= */

function HeroMedia() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const move = e => {
      const x = (e.clientX / innerWidth - 0.5) * 18
      const y = (e.clientY / innerHeight - 0.5) * 10
      el.style.setProperty('--px', `${x}px`)
      el.style.setProperty('--py', `${y}px`)
    }
    addEventListener('pointermove', move)
    return () => removeEventListener('pointermove', move)
  }, [])
  return (
    <div className="hero-media" ref={ref} aria-hidden="true">
      <div className="hero-scene" />
      <div className="hero-particles" />
      <div className="hero-overlay" />
      <div className="hero-vignette" />
    </div>
  )
}

/* =========================================
   HEADER — Glassmorphic fixed navigation
   ========================================= */

function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="header">
      <a className="brand" href="#top">
        HW <span>Harshada Waykar</span>
      </a>
      <nav className="header-nav">
        {['WORK', 'SERVICES', 'SKILLS', 'PROCESS', 'ABOUT', 'CONTACT'].map(x => (
          <a key={x} href={'#' + x.toLowerCase()}>{x}</a>
        ))}
      </nav>
      <div className="head-actions">
        <a className="nav-link-btn" href="/resume.pdf" target="_blank" rel="noreferrer">RESUME ↗</a>
        <a className="nav-cta-btn" href="#contact">START A PROJECT ↗</a>
      </div>
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span className={menuOpen ? 'active' : ''} />
      </button>
    </header>
  )
}

/* =========================================
   MOBILE MENU — Full-screen overlay
   ========================================= */

function MobileMenu({ open, onClose }) {
  return (
    <div className={`mobile-menu ${open ? 'open' : ''}`}>
      <nav>
        {['WORK', 'SERVICES', 'SKILLS', 'PROCESS', 'ABOUT', 'CONTACT'].map(x => (
          <a key={x} href={'#' + x.toLowerCase()} onClick={onClose}>{x}</a>
        ))}
      </nav>
      <div className="mobile-menu-actions">
        <a href="/resume.pdf" target="_blank" rel="noreferrer">RESUME ↗</a>
        <a href="#contact" onClick={onClose}>START A PROJECT ↗</a>
      </div>
    </div>
  )
}

/* =========================================
   HERO — Cinematic intro
   ========================================= */

function Hero() {
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.4 })
    tl.from('.hero-kicker', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' })
      .from('.hero h1', { y: 40, opacity: 0, duration: 1.1, ease: 'power3.out' }, '-=0.4')
      .from('.hero-content > p', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .from('.hero-buttons', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .from('.stat', { y: 15, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out' }, '-=0.4')
  }, [])

  return (
    <section className="hero" id="top">
      <HeroMedia />
      <div className="hero-content">
        <div className="hero-kicker">FULL-STACK WEB DEVELOPER</div>
        <h1>
          DIGITAL<br /><em>PRODUCTS.</em>
        </h1>
        <p>
          I design and develop high-performance websites and full-stack web
          applications that help businesses grow, scale and stand out.
        </p>
        <div className="hero-buttons">
          <a className="btn-solid" href="#work">VIEW SELECTED WORK ↗</a>
          <a className="btn-outline" href="#contact">START A PROJECT ↗</a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <strong>02</strong>
            <span>PRODUCTS BUILT</span>
          </div>
          <div className="stat">
            <strong>10+</strong>
            <span>CORE TECHNOLOGIES</span>
          </div>
          <div className="stat">
            <strong>100%</strong>
            <span>FOCUS ON QUALITY</span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================
   PROJECT SHOWCASE — Immersive project preview
   ========================================= */

function ProjectShowcase({ project }) {
  return (
    <article className="project-showcase reveal">
      <div className="project-details">
        <span className="project-number">{project.id}</span>
        <h3 className="project-name">{project.name}</h3>
        <p className="project-type">{project.type}</p>
      </div>
      <a
        className="project-preview"
        href={project.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${project.name} live website`}
      >
        <div className="browser-chrome">
          <div className="browser-dots">
            <i /><i /><i />
          </div>
          <span className="browser-url">{project.name} · LIVE PRODUCT</span>
          <span className="browser-action">OPEN LIVE ↗</span>
        </div>
        <div className="project-live-wrap">
          <iframe
            className="project-live-frame"
            src={project.url}
            title={`${project.name} live website`}
            loading="lazy"
            allow="fullscreen"
          />
          <div className="project-live-shade" aria-hidden="true" />
          <div className="project-live-badge">
            <span className="live-dot" />
            LIVE WEBSITE
          </div>
          <a
            className="project-frame-open"
            href={project.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.name} live website in a new tab`}
          >
            OPEN LIVE ↗
          </a>
        </div>
      </a>
      <div className="project-meta">
        <div className="project-stack">
          {project.stack.map(tech => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
        <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
          VIEW LIVE PRODUCT ↗
        </a>
      </div>
    </article>
  )
}

/* =========================================
   WORK — Selected products section
   ========================================= */

function Work() {
  return (
    <section className="work" id="work">
      <div className="section-label reveal">SELECTED WORK</div>
      <h2 className="section-heading reveal">
        Digital products built to be<br />
        <em>used, trusted and remembered.</em>
      </h2>
      <div className="projects-container">
        {projects.map(p => (
          <ProjectShowcase key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}

/* =========================================
   CAPABILITIES — Services section
   ========================================= */

function Capabilities() {
  return (
    <section className="capabilities" id="services">
      <div className="section-label reveal">CAPABILITIES</div>
      <h2 className="section-heading reveal">
        From interface<br /><em>to infrastructure.</em>
      </h2>
      <div className="capability-list">
        {capabilities.map(cap => (
          <div className="capability-row reveal" key={cap.num}>
            <span className="cap-num">{cap.num}</span>
            <h3 className="cap-title">{cap.title}</h3>
            <p className="cap-desc">{cap.desc}</p>
            <span className="cap-arrow">↗</span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* =========================================
   SKILLS — Editorial tech stack
   ========================================= */

function Skills() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="skills-section" id="skills" ref={sectionRef}>
      <div className="section-label reveal">THE STACK</div>
      <h2 className="section-heading reveal">
        Tools I use to turn<br /><em>ideas into systems.</em>
      </h2>
      <div className="skill-bars">
        {skillsData.map((skill, i) => (
          <div className="skill-row reveal" key={skill.name}>
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar-track">
              <div
                className="skill-bar-fill"
                style={{
                  width: visible ? `${skill.value}%` : '0%',
                  transitionDelay: `${i * 0.12}s`
                }}
              />
            </div>
            <span className="skill-value">{skill.value}%</span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* =========================================
   PROCESS — From idea to launch timeline
   ========================================= */

function Process() {
  return (
    <section className="process-section" id="process">
      <div className="section-label reveal">PROCESS</div>
      <h2 className="section-heading reveal">
        FROM IDEA<br /><em>TO LAUNCH.</em>
      </h2>
      <div className="process-timeline">
        {processStages.map(stage => (
          <div className="process-stage reveal" key={stage.num}>
            <span className="stage-num">{stage.num}</span>
            <h3 className="stage-title">{stage.title}</h3>
            <p className="stage-desc">{stage.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* =========================================
   ABOUT — Personal profile
   ========================================= */

function About() {
  const [photoFailed, setPhotoFailed] = useState(false)

  return (
    <section className="about-section" id="about">
      <div className="about-grid">
        <div className="about-portrait reveal">
          {!photoFailed ? (
            <img
              src="/profile.jpg"
              alt="Harshada Waykar"
              onError={() => setPhotoFailed(true)}
            />
          ) : (
            <div className="portrait-placeholder">
              <strong>HW</strong>
              <span>Add your portrait as <b>public/profile.jpg</b></span>
            </div>
          )}
          <div className="portrait-label">FULL-STACK WEB DEVELOPER</div>
        </div>
        <div className="about-content">
          <div className="section-label reveal">ABOUT</div>
          <h2 className="section-heading reveal">
            I DESIGN THE INTERFACE.<br /><em>I ENGINEER THE SYSTEM.</em>
          </h2>
          <p className="reveal">
            I build polished digital products across frontend, backend and AI
            integration — combining strong visual direction with reliable
            engineering, APIs, databases and production deployment.
          </p>
          <div className="about-meta reveal">
            <div>
              <small>FOCUS</small>
              <strong>WEB · SYSTEMS · AI</strong>
            </div>
            <div>
              <small>CORE</small>
              <strong>REACT · NEXT.JS · PYTHON</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================
   CONTACT — Final CTA
   ========================================= */

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-bg" aria-hidden="true" />
      <div className="contact-content">
        <div className="section-label reveal">START A PROJECT</div>
        <h2 className="contact-heading reveal">
          HAVE A PRODUCT<br /><em>WORTH BUILDING?</em>
        </h2>
        <p className="reveal">
          Let's turn the idea into a polished,<br />
          production-ready digital experience.
        </p>
        <div className="contact-buttons reveal">
          <a className="btn-solid" href="mailto:harshadawaykar05@gmail.com?subject=Project%20Inquiry">
            START A PROJECT ↗
          </a>
          <a className="btn-outline" href="/resume.pdf" target="_blank" rel="noreferrer">
            VIEW RESUME ↗
          </a>
        </div>
        <div className="contact-links reveal">
          <a href="tel:+918097370817">+91 8097370817</a>
          <a href="https://github.com/harshadawaykar05-spec" target="_blank" rel="noreferrer">GITHUB ↗</a>
          <a href="https://www.linkedin.com/in/harshada-waykar-319042301" target="_blank" rel="noreferrer">LINKEDIN ↗</a>
          <a href="mailto:harshadawaykar05@gmail.com">EMAIL ↗</a>
        </div>
      </div>
    </section>
  )
}

/* =========================================
   FOOTER — Premium minimal
   ========================================= */

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <span className="footer-logo">HW</span>
          <span className="footer-name">Harshada Waykar</span>
          <span className="footer-title">FULL-STACK WEB DEVELOPER</span>
        </div>
        <nav className="footer-nav">
          {['WORK', 'SERVICES', 'SKILLS', 'ABOUT', 'CONTACT'].map(x => (
            <a key={x} href={'#' + x.toLowerCase()}>{x}</a>
          ))}
        </nav>
        <div className="footer-social">
          <a href="https://github.com/harshadawaykar05-spec" target="_blank" rel="noreferrer">GITHUB</a>
          <a href="https://www.linkedin.com/in/harshada-waykar-319042301" target="_blank" rel="noreferrer">LINKEDIN</a>
          <a href="mailto:harshadawaykar05@gmail.com">EMAIL</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Harshada Waykar</span>
        <span>FULL-STACK WEB DEVELOPMENT · AI · DIGITAL PRODUCTS</span>
      </div>
    </footer>
  )
}

/* =========================================
   APP — Main application with GSAP init
   ========================================= */

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    /* — Header scroll state — */
    const handleScroll = () => {
      const header = document.querySelector('.header')
      if (!header) return
      if (window.scrollY > 80) {
        header.classList.add('scrolled')
      } else {
        header.classList.remove('scrolled')
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    /* — GSAP scroll-triggered reveals — */
    const timer = setTimeout(() => {
      const reveals = document.querySelectorAll('.reveal')
      reveals.forEach(el => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none'
            }
          }
        )
      })
    }, 100)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  /* Close mobile menu on escape key */
  useEffect(() => {
    const handleEsc = e => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  /* Prevent body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <Hero />
      <Work />
      <Capabilities />
      <Skills />
      <Process />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
