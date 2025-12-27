import { useState, useEffect } from 'react';
import { config } from './config';
import './App.css';

// Navigation Component
function Navigation({ activeSection }) {
  const navItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'bio', label: 'Biographie' },
    { id: 'galerie', label: 'Galerie' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navigation">
      <div className="nav-content">
        <div className="logo">{config.artist.name}</div>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={activeSection === item.id ? 'active' : ''}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section id="accueil" className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">{config.artist.title}</p>
        <h1 className="hero-title">{config.artist.name}</h1>
        <div className="hero-line"></div>
        <p className="hero-tagline">{config.artist.tagline}</p>
      </div>
      <div className="scroll-indicator">
        <span>Découvrir</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}

// Bio Section (now includes SoundCloud player)
function Bio() {
  const soundcloudUrl = encodeURIComponent(config.artist.soundcloud);

  return (
    <section id="bio" className="bio">
      <div className="container">
        <h2 className="section-title">Biographie</h2>
        <div className="bio-content">
          <div className="bio-left">
            <div className="bio-image">
              <div className="image-placeholder">
                <span>Photo</span>
              </div>
            </div>
          </div>
          <div className="bio-text">
            {config.bio.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* SoundCloud Player */}
        <div className="bio-player">
          <h3 className="player-title">Écouter</h3>
          <div className="soundcloud-embed">
            <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src={`https://w.soundcloud.com/player/?url=${soundcloudUrl}&color=%23c9a962&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`}
              title="SoundCloud Player"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

// Dates Section
function Dates() {
  if (config.concerts.length === 0) {
    return null;
  }

  return (
    <section id="dates" className="dates">
      <div className="container">
        <h2 className="section-title">Concerts</h2>
        <div className="concerts-list">
          {config.concerts.map((concert, index) => (
            <article key={index} className="concert-item">
              <div className="concert-date">
                <span className="day">{concert.date}</span>
                <span className="month">{concert.month}</span>
                <span className="year">{concert.year}</span>
              </div>
              <div className="concert-info">
                <h3>{concert.title}</h3>
                <p>{concert.venue}</p>
              </div>
              <div className="concert-action">
                {concert.status === 'available' ? (
                  <a
                    href={concert.ticketUrl || '#'}
                    className="btn-tickets"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Réserver
                  </a>
                ) : (
                  <span className="soldout">Complet</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// Gallery Section
function Gallery() {
  return (
    <section id="galerie" className="gallery">
      <div className="container">
        <h2 className="section-title">Galerie</h2>
        <div className="gallery-grid">
          {config.gallery.map((image, index) => (
            <div key={index} className="gallery-item">
              {image.src ? (
                <img src={image.src} alt={image.alt} />
              ) : (
                <div className="gallery-placeholder">
                  <span>{image.alt}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <p className="contact-text">
            Pour toute demande de concert, collaboration ou renseignement,
            n'hésitez pas à me contacter.
          </p>
          <a href={`mailto:${config.artist.email}`} className="btn-contact">
            <span>Envoyer un email</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-name">{config.artist.name}</p>
          <p className="footer-copyright">
            © {new Date().getFullYear()} Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main App
function App() {
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['accueil', 'bio', 'galerie', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Navigation activeSection={activeSection} />
      <main>
        <Hero />
        <Bio />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
