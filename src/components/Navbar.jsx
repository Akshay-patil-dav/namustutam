import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  // ── Dark is the DEFAULT theme ──
  // If no preference is stored yet, write 'dark' immediately.
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('nmt-theme');
    if (!saved) {
      localStorage.setItem('nmt-theme', 'dark');   // initialise as dark
      return true;
    }
    return saved === 'dark';
  });

  // Keep <html> attribute + localStorage in sync on every toggle
  useEffect(() => {
    const theme = isDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-nmt-theme', theme);
    localStorage.setItem('nmt-theme', theme);
  }, [isDark]);

  return (
    <header id="nmt-site-header" className="nmt-header-wrapper">
      <nav
        id="nmt-main-navbar"
        className="navbar navbar-expand-lg nmt-navbar"
        aria-label="Main Navigation"
      >
        <div className="container nmt-nav-inner">

          {/* ══════════ LEFT: LOGO ══════════ */}
          <a
            id="nmt-brand-logo"
            className="navbar-brand nmt-brand"
            href="/"
            aria-label="Namustutam Home"
          >
            <div className="nmt-logo-wrap">
              <div className="nmt-logo-badge">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M3 21V7L12 3L21 7V21H15V15H9V21H3Z" fill="white" />
                </svg>
              </div>
              <div className="nmt-logo-texts">
                <span className="nmt-logo-name">
                  Namus<span className="nmt-logo-accent">tutam</span>
                </span>
                <span className="nmt-logo-tagline">Digital Excellence</span>
              </div>
            </div>
          </a>

          {/* ══════════ RIGHT-TOP CONTROLS (always visible) ══════════ */}
          <div className="nmt-topbar-controls d-flex align-items-center gap-2">

            {/* ── Day / Night Toggle ── */}
            <button
              id="nmt-theme-toggle"
              className={`nmt-theme-btn ${isDark ? 'nmt-is-dark' : 'nmt-is-light'}`}
              onClick={() => setIsDark(!isDark)}
              aria-label={isDark ? 'Switch to Day mode' : 'Switch to Night mode'}
              title={isDark ? 'Switch to Day' : 'Switch to Night'}
              type="button"
            >
              <span className="nmt-theme-track">
                <span className="nmt-theme-thumb">
                  {/* Sun icon */}
                  <i className={`bi bi-sun-fill nmt-sun-icon ${!isDark ? 'nmt-icon-show' : 'nmt-icon-hide'}`}></i>
                  {/* Moon icon */}
                  <i className={`bi bi-moon-stars-fill nmt-moon-icon ${isDark ? 'nmt-icon-show' : 'nmt-icon-hide'}`}></i>
                </span>
              </span>
              <span className="nmt-theme-label">
                {isDark ? 'Night' : 'Day'}
              </span>
            </button>

            {/* ── Hamburger (mobile) ── */}
            <button
              id="nmt-nav-toggler"
              className="navbar-toggler nmt-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#nmt-nav-collapse"
              aria-controls="nmt-nav-collapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="nmt-toggler-bars">
                <span className="nmt-bar nmt-bar-1"></span>
                <span className="nmt-bar nmt-bar-2"></span>
                <span className="nmt-bar nmt-bar-3"></span>
              </span>
            </button>
          </div>

          {/* ══════════ COLLAPSIBLE CONTENT ══════════ */}
          <div id="nmt-nav-collapse" className="collapse navbar-collapse nmt-collapse-area">

            {/* ──── CENTER MENUS ──── */}
            <ul id="nmt-center-menu" className="navbar-nav mx-auto mb-2 mb-lg-0 nmt-nav-list">

              {/* Home */}
              <li className="nav-item nmt-item">
                <a id="nmt-link-home" className="nav-link nmt-link nmt-link-active" href="/">
                  Home
                </a>
              </li>

              {/* About */}
              <li className="nav-item dropdown nmt-item nmt-has-dropdown">
                <a
                  id="nmt-link-about"
                  className="nav-link nmt-link nmt-has-caret dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="true"
                  aria-expanded="false"
                >
                  About
                  <i className="bi bi-chevron-down nmt-caret-icon"></i>
                </a>
                <ul id="nmt-drop-about" className="dropdown-menu nmt-dropmenu" aria-labelledby="nmt-link-about">
                  <li><a id="nmt-dsub-story" className="dropdown-item nmt-droplink" href="/our-story">
                    <span className="nmt-drop-icon"><i className="bi bi-book"></i></span>Our Story
                  </a></li>
                  <li><a id="nmt-dsub-team" className="dropdown-item nmt-droplink" href="/team">
                    <span className="nmt-drop-icon"><i className="bi bi-people"></i></span>Our Team
                  </a></li>
                  <li><a id="nmt-dsub-mission" className="dropdown-item nmt-droplink" href="/mission">
                    <span className="nmt-drop-icon"><i className="bi bi-bullseye"></i></span>Mission &amp; Vision
                  </a></li>
                  <li><hr className="dropdown-divider nmt-drop-divider" /></li>
                  <li><a id="nmt-dsub-careers" className="dropdown-item nmt-droplink" href="/careers">
                    <span className="nmt-drop-icon"><i className="bi bi-briefcase"></i></span>Careers
                  </a></li>
                </ul>
              </li>

              {/* Services */}
              <li className="nav-item dropdown nmt-item nmt-has-dropdown">
                <a
                  id="nmt-link-services"
                  className="nav-link nmt-link nmt-has-caret dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="true"
                  aria-expanded="false"
                >
                  Services
                  <i className="bi bi-chevron-down nmt-caret-icon"></i>
                </a>
                <ul id="nmt-drop-services" className="dropdown-menu nmt-dropmenu" aria-labelledby="nmt-link-services">
                  <li><a id="nmt-dsub-web" className="dropdown-item nmt-droplink" href="/web-development">
                    <span className="nmt-drop-icon"><i className="bi bi-code-slash"></i></span>Web Development
                  </a></li>
                  <li><a id="nmt-dsub-mobile" className="dropdown-item nmt-droplink" href="/mobile-development">
                    <span className="nmt-drop-icon"><i className="bi bi-phone"></i></span>Mobile Development
                  </a></li>
                  <li><a id="nmt-dsub-uiux" className="dropdown-item nmt-droplink" href="/ui-ux-design">
                    <span className="nmt-drop-icon"><i className="bi bi-pencil-square"></i></span>UI / UX Design
                  </a></li>
                  <li><a id="nmt-dsub-cloud" className="dropdown-item nmt-droplink" href="/cloud-solutions">
                    <span className="nmt-drop-icon"><i className="bi bi-cloud"></i></span>Cloud Solutions
                  </a></li>
                  <li><hr className="dropdown-divider nmt-drop-divider" /></li>
                  <li><a id="nmt-dsub-consult" className="dropdown-item nmt-droplink" href="/consulting">
                    <span className="nmt-drop-icon"><i className="bi bi-lightbulb"></i></span>Consulting
                  </a></li>
                </ul>
              </li>

              {/* Portfolio */}
              <li className="nav-item dropdown nmt-item nmt-has-dropdown">
                <a
                  id="nmt-link-portfolio"
                  className="nav-link nmt-link nmt-has-caret dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="true"
                  aria-expanded="false"
                >
                  Portfolio
                  <i className="bi bi-chevron-down nmt-caret-icon"></i>
                </a>
                <ul id="nmt-drop-portfolio" className="dropdown-menu nmt-dropmenu" aria-labelledby="nmt-link-portfolio">
                  <li><a id="nmt-dsub-cases" className="dropdown-item nmt-droplink" href="/case-studies">
                    <span className="nmt-drop-icon"><i className="bi bi-journal-text"></i></span>Case Studies
                  </a></li>
                  <li><a id="nmt-dsub-projects" className="dropdown-item nmt-droplink" href="/projects">
                    <span className="nmt-drop-icon"><i className="bi bi-folder2-open"></i></span>Projects
                  </a></li>
                  <li><a id="nmt-dsub-testi" className="dropdown-item nmt-droplink" href="/testimonials">
                    <span className="nmt-drop-icon"><i className="bi bi-chat-quote"></i></span>Testimonials
                  </a></li>
                </ul>
              </li>

              {/* Blog */}
              <li className="nav-item nmt-item">
                <a id="nmt-link-blog" className="nav-link nmt-link" href="/blog">Blog</a>
              </li>

              {/* Contact */}
              <li className="nav-item nmt-item">
                <a id="nmt-link-contact" className="nav-link nmt-link" href="/contact">Contact</a>
              </li>
            </ul>

            {/* ──── RIGHT: SOCIAL + CTA ──── */}
            <div id="nmt-right-group" className="nmt-right-panel d-flex align-items-center gap-2">
              <span className="nmt-panel-divider d-none d-lg-block"></span>

              {/* Social Icons */}
              <div id="nmt-socials" className="nmt-social-row d-flex align-items-center gap-2">
                <a id="nmt-ig" href="https://www.instagram.com" target="_blank"
                  rel="noopener noreferrer" className="nmt-social-btn nmt-ig-btn"
                  aria-label="Instagram" title="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a id="nmt-fb" href="https://www.facebook.com" target="_blank"
                  rel="noopener noreferrer" className="nmt-social-btn nmt-fb-btn"
                  aria-label="Facebook" title="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a id="nmt-li" href="https://www.linkedin.com" target="_blank"
                  rel="noopener noreferrer" className="nmt-social-btn nmt-li-btn"
                  aria-label="LinkedIn" title="LinkedIn">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>

              {/* CTA */}
              <a id="nmt-cta" href="/get-started" className="nmt-cta-btn">
                Get Started <i className="bi bi-arrow-right ms-1"></i>
              </a>
            </div>

          </div>{/* end collapse */}
        </div>{/* end container */}
      </nav>
    </header>
  );
};

export default Navbar;
