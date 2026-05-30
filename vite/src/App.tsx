import { useState } from 'react';
import pageKeyLogo from './assets/logo_dark.svg';

// --- Sub-components for better clean structure ---

const Header = () => {
  return (
    <header className="pagekey-header">
      <a href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span className="logo-icon light" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={pageKeyLogo} alt="PageKey Logo" style={{ width: '2rem', height: '2rem' }} />
        </span>
        <span id="logo-text" style={{ margin: 0, marginBottom: "0.35rem" }}>PageKey</span>
      </a>
      <nav style={{ display: 'flex', alignItems: 'center' }}>
        <ul style={{ display: 'flex', listStyleType: 'none', margin: 0, padding: 0, gap: '1.5rem' }}>
          <li><a href="/">Home</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="https://tryhexbox.com/">HexBox</a></li>
        </ul>
      </nav>
    </header>
  );
};

const Hero = () => {
  const [isActivated, setIsActivated] = useState(false);

  return (
    <section className="hero">
      <div className="subtitle">A Decade of Building Open Systems</div>
      <h1>Technology You Can <span className="emphasis-1">Actually Understand</span></h1>
      <p>For ten years, PageKey has demystified code, circuits, and infrastructure. We build understandable, resilient, local-first systems that give people <span className="emphasis">true ownership over the technology that runs their lives.</span></p>

      <div className="cta">
        <a href="https://tryhexbox.com/" className="btn primary">Explore HexBox ➔</a>
        <a href="#content" className="btn secondary">Browse 10 Years of Guides</a>
      </div>

      {/* Interactive Custom YouTube Player Embed mapping the original lite-youtube style specs */}
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <div
          className={`lite-youtube-player ${isActivated ? 'lyt-activated' : ''}`}
          onClick={() => setIsActivated(true)}
          style={{ backgroundImage: `url('https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg')` }} // Replace placeholder id as needed
        >
          <button type="button" className="lty-playbtn">
            <span className="lyt-visually-hidden">Play Video</span>
          </button>
          {isActivated && (
            <iframe
              width="560"
              height="315"
              title="YouTube Embed Video"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" // Replace template code
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </section>
  );
};

const HexBoxSpotlight = () => {
  return (
    <section className="feature lightblue" style={{ textAlign: 'center' }}>
      <div style={{ maxWidth: '45rem', margin: '0 auto' }}>
        <div className="subtitle" style={{ color: 'rgb(251, 146, 60)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>Current Flagship Project</div>
        <h2>Meet HexBox</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          HexBox is our physical, tangible answer to fragile cloud systems. It is the culmination of everything we've built and taught for the last decade packed into a resilient, local-first device engineered for homes, makerspaces, workshops, and off-grid setups.
        </p>
        <p style={{ fontSize: '1rem', opacity: 0.8, marginBottom: '2rem' }}>
          If you met us in person or hold a PageKey business card, HexBox is the engine driving our core mission forward today.
        </p>
        <div>
          <a href="https://tryhexbox.com/" target="_blank" rel="noreferrer" className="btn primary">Visit tryhexbox.com</a>
        </div>
      </div>
    </section>
  );
};

const ContentFeatures = () => {
  return (
    <section id="content" className="feature">
      <h2>The Resilient Stack</h2>
      <p>Whether for a local workspace, an off-grid farm, or a small community, we believe critical infrastructure must remain operational, inspectable, and completely under your watch.</p>

      <div className="cards">
        <div className="card">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3.5v1a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-1a3.5 3.5 0 0 0 -1 -3.5"></path><path d="M9.7 17l4.6 0"></path></svg>
          </div>
          <h3>Local-First Infrastructure</h3>
          <p>Built to operate entirely offline without central dependencies. Regain control and protect against fragile platforms.</p>
        </div>

        <div className="card">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path><path d="M12 12l8 -4.5"></path><path d="M12 12l0 9"></path><path d="M12 12l-8 -4.5"></path></svg>
          </div>
          <h3>Inspectable Systems</h3>
          <p>Ditch the corporate bloat and obfuscation. Every layer, from hardware circuits to code, remains transparent, repairable, and modifiable.</p>
        </div>

        <div className="card">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l4 4"></path><path d="M14 4l-4 16"></path></svg>
          </div>
          <h3>A Decade of Open Dev</h3>
          <p>Ten years of tutorials, data structures, and deep dives. Everything we design belongs in public documentation trees for a resilient future.</p>
        </div>
      </div>
    </section>
  );
};

const ContactsSection = () => {
  return (
    <section className="feature">
      <h2>Connect & Sync</h2>
      <p>Subscribe to our distribution layers, inspect our repositories, and stay updated locally.</p>

      <div className="contacts">
        <a href="https://github.com" target="_blank" rel="noreferrer" className="contact">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
          </div>
          <div className="right">
            <h3>GitHub Ecosystem</h3>
            <span>Explore open source source trees</span>
          </div>
        </a>

        <a href="/feed/feed.xml" target="_blank" rel="noreferrer" className="contact">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M4 4a16 16 0 0 1 16 16"></path><path d="M4 11a9 9 0 0 1 9 9"></path></svg>
          </div>
          <div className="right">
            <h3>RSS News Feed</h3>
            <span>Stay synced automatically</span>
          </div>
        </a>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        <ul>
          <li>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
            </a>
          </li>
          <li>
            <a href="/feed/feed.xml" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M4 4a16 16 0 0 1 16 16"></path><path d="M4 11a9 9 0 0 1 9 9"></path></svg>
            </a>
          </li>
        </ul>
      </div>
      <p>Copyright © PageKey Solutions, LLC • All rights reserved</p>
    </footer>
  );
};

// --- Injected Component Stylesheet Wrapper ---
const LocalStylesheet = () => (
  <style>{`
    :root {
      --font-family: -apple-system, system-ui, sans-serif;
      --font-family-monospace: Consolas, Menlo, Monaco, monospace;
      --color-gray-20: #e0e0e0;
      --color-gray-50: #C0C0C0;
      --color-gray-90: #333;
      --background-color: #fff;
      --text-color: var(--color-gray-90);
      --text-color-link: #082840;
      --text-color-link-active: #5f2b48;
      --text-color-link-visited: #17050F;
    }

    @media (prefers-color-scheme: dark) {
      :root {
        --color-gray-20: #ff0000;
        --color-gray-50: rgb(203, 213, 225);
        --color-gray-90: white;
        --text-color-link: white;
        --text-color-link-active: #6969f7;
        --text-color-link-visited: #a6a6f8;
        --background-color: rgb(3, 6, 32);
      }
    }

    .pagekey-container {
      width: 100%;
      min-height: 100vh;
      margin: 0 auto;
      font-family: var(--font-family);
      color: var(--text-color);
      background-color: var(--background-color);
    }

    .pagekey-container a {
      color: var(--text-color-link);
      text-decoration: none;
    }

    .pagekey-container a:visited { 
      color: var(--text-color-link); 
    }

    .pagekey-container a:hover, 
    .pagekey-container a:active { 
      color: var(--text-color-link-active); 
    }

    .pagekey-header {
      display: flex;
      font-size: 1.5rem;
      font-weight: 700;
      justify-content: space-between;
      margin: auto;
      max-width: 80rem;
      padding: 1.5rem;
      border-bottom: 1px solid rgb(107 114 128 / 0.2);
    }
    .pagekey-header .logo { display: flex; align-items: center; font-size: 1.25rem; color: inherit; }
    .pagekey-header .logo-icon svg { width: 2rem; height: 2rem; display: block; }
    .pagekey-header #logo-text { color: #f0f0f0; margin-left: 0.5rem; }

    @media (prefers-color-scheme: light) {
      .pagekey-header #logo-text { color: black; }
      .pagekey-header { border-bottom: 1px solid transparent; }
      .pagekey-header nav a { color: rgb(16, 16, 16) !important; }
    }

    .pagekey-header nav ul { list-style-type: none; margin: 0; padding: 0; }
    .pagekey-header nav a { transition: color 0.2s; color: #d6d6d6; font-size: 0.9375rem; }
    .pagekey-header nav a:hover { color: rgb(171, 171, 171); }

    .hero { margin: auto; max-width: 64rem; padding: 3rem 1.5rem; text-align: center; }
    .hero .subtitle { color: rgb(191, 219, 254); font-weight: 700; letter-spacing: 0.025em; text-transform: uppercase; }
    .hero h1 { font-size: 3rem; font-weight: 700; letter-spacing: -0.05em; line-height: 1.1; margin: 1rem 0; }
    @media (min-width: 768px) { .hero h1 { font-size: 3.75rem; } }
    .hero h1 .emphasis-1 { color: rgb(251, 146, 60); }
    .hero p { color: var(--color-gray-50); font-size: 1.25rem; margin-bottom: 3rem; }
    .hero p .emphasis { color: white; font-weight: 700; }
    .hero .cta { display: flex; justify-content: center; gap: 1rem; margin-bottom: 3rem; }

    @media (prefers-color-scheme: light) {
      .hero .subtitle { color: rgb(1, 84, 207); }
      .hero h1 .emphasis-1 { color: rgb(251, 146, 60); }
      .hero p { color: rgba(16, 16, 16, 0.66); }
      .hero p .emphasis { color: black; }
    }

    .feature { text-align: center; padding: 3rem 1rem; margin: auto; max-width: 64rem; }
    .feature h2 { font-size: 1.875rem; font-weight: 700; margin-bottom: 1rem; }
    .feature p { color: rgba(229, 236, 246, 0.66); font-size: 1.25rem; margin-bottom: 3rem; }
    
    .feature .cards, .feature .contacts { display: grid; gap: 1rem; text-align: left; }
    @media (min-width: 768px) {
      .feature .cards { grid-template-columns: 1fr 1fr; }
      .feature .contacts { grid-template-columns: 1fr 1fr; }
    }
    @media (min-width: 1024px) {
      .feature .cards { grid-template-columns: 1fr 1fr 1fr; }
    }

    .feature .card { background-color: rgb(15, 23, 42); border: 1px solid rgba(255, 255, 255, 0.16); border-radius: 0.5rem; padding: 1.5rem; color: #fff; }
    .feature .card h3 { margin-top: 0.5rem; margin-bottom: 0.5rem; font-size: 1.25rem; }
    .feature .card .icon { width: 3rem; color: rgb(1, 97, 239); }
    .feature .card p { font-size: 1rem; margin: 0; color: rgba(255, 255, 255, 0.7); }

    .feature .contact { background-color: rgb(15, 23, 42); border: 1px solid rgba(255, 255, 255, 0.16); border-radius: 0.5rem; color: white !important; display: flex; padding: 1rem; transition: background 0.2s; }
    .feature .contact:hover { background-color: rgb(30, 41, 59); }
    .feature .contact .icon { color: rgb(1, 97, 239); margin-right: 1rem; margin-top: 0.25rem; }
    .feature .contact .right h3 { margin: 0; font-size: 1.1rem; }
    .feature .contact .right span { display: block; margin-top: 0.4rem; font-size: 0.9rem; opacity: 0.8; }

    @media (prefers-color-scheme: light) {
      .feature.lightblue { background-color: rgb(239, 249, 255); }
      .feature p { color: rgba(16, 16, 16, 0.66); }
      .feature .card { background-color: rgb(255, 255, 255); border: 1px solid rgba(0, 0, 0, 0.1); color: #333; }
      .feature .card p { color: #555; }
      .feature .contact { background-color: rgba(239, 249, 255, 0.8); color: rgb(16, 16, 16) !important; border: 1px solid rgba(0,0,0,0.05); }
      .feature .contact:hover { background-color: rgb(211, 223, 230); }
    }

    .btn { border-radius: 9999px; font-weight: 600; padding: 0.875rem 1.5rem; transition: background 0.2s; display: inline-block; }
    .btn.primary { background-color: rgb(1, 97, 239); color: white !important; }
    .btn.primary:hover { background-color: rgb(1, 84, 207); }
    .btn.secondary { border: 0.8px solid rgb(100, 116 139); color: rgb(203, 213, 225) !important; }
    .btn.secondary:hover { background-color: rgb(30, 41, 59); }

    @media (prefers-color-scheme: light) {
      .btn.secondary { color: rgb(16, 16, 16) !important; border-color: rgb(156, 163, 175); }
      .btn.secondary:hover { background-color: rgb(243, 244, 246); }
    }

    /* custom responsive iframe styling */
    .lite-youtube-player {
      background-color: #000;
      position: relative;
      display: block;
      cursor: pointer;
      background-position: center;
      background-size: cover;
      border-radius: 1rem;
      overflow: hidden;
      aspect-ratio: 16 / 9;
    }
    .lite-youtube-player iframe { width: 100%; height: 100%; border: 0; position: absolute; top:0; left:0; }
    .lite-youtube-player .lty-playbtn {
      width: 68px; height: 48px; position: absolute; transform: translate(-50%, -50%); top: 50%; left: 50%; z-index: 1; background-color: transparent;
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 48"><path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="red"/><path d="M45 24 27 14v20" fill="white"/></svg>');
      filter: grayscale(100%); transition: filter 0.1s; border: none;
    }
    .lite-youtube-player:hover .lty-playbtn { filter: none; }
    .lite-youtube-player.lyt-activated::before, .lite-youtube-player.lyt-activated .lty-playbtn { opacity: 0; pointer-events: none; }
    .lyt-visually-hidden { clip: rect(0 0 0 0); clip-path: inset(50%); height: 1px; overflow: hidden; position: absolute; white-space: nowrap; width: 1px; }

    footer { color: rgba(229, 236, 246, 0.66); font-size: 0.875rem; padding: 3rem 1.5rem; text-align: center; }
    .social-links ul { display: flex; justify-content: center; list-style-type: none; padding: 0; margin-bottom: 1rem; }
    .social-links ul li a { padding: 0.625rem; color: rgb(156, 163, 175) !important; display: inline-block; }
    @media (prefers-color-scheme: light) {
      footer { color: rgb(16, 16, 16); }
      .social-links ul li a { color: rgb(156, 163, 175) !important; }
    }
  `}</style>
);

// --- One Single Default Export Screen Component ---
export default function PageKeyLandingScreen() {
  return (
    <div className="pagekey-container">
      <LocalStylesheet />
      <Header />
      <main>
        <Hero />
        <HexBoxSpotlight />
        <ContentFeatures />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
}