import { Link } from 'react-router-dom'
import './WildeWesten.css'
import { events } from './wwEvents'

// ── Shared Nav ───────────────────────────────────
export function WwNav() {
  return (
    <nav className="ww-nav">
      <Link to="/wilde-westen" className="ww-nav-logo">
        <span>ww</span>
      </Link>
      <ul className="ww-nav-links">
        <li><Link to="/wilde-westen">Agenda</Link></li>
        <li><a href="#festivals">Festivals</a></li>
        <li><a href="#ontrack">On Track</a></li>
        <li><a href="#praktisch">Praktisch</a></li>
      </ul>
      <div className="ww-nav-actions">
        <button className="ww-nav-lang">NL ▾</button>
        <button className="ww-nav-icon" aria-label="Zoeken">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </button>
        <button className="ww-nav-icon" aria-label="Menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>
    </nav>
  )
}

// ── Card component ────────────────────────────────
function EventCard({ event }: { event: typeof events[number] }) {
  return (
    <Link to={`/wilde-westen/event/${event.id}`} className="ww-card">
      <div className={`ww-card-img-placeholder${event.poster ? ' poster' : ''}`}>
        {event.poster ? (
          <span className="ww-card-poster-text">{event.posterText}</span>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/>
          </svg>
        )}
      </div>
      <div className={`ww-card-body ${event.color}`}>
        <span className="ww-card-date">{event.date}</span>
        <span className="ww-card-name">{event.name}</span>
        <span className="ww-card-tickets">koop tickets →</span>
      </div>
    </Link>
  )
}

// ── Main page ─────────────────────────────────────
export default function WildeWesten() {
  const hero = events[0]
  const announced = events.slice(1, 5)
  const nextUp = events.slice(0)

  return (
    <div className="ww">
      <WwNav />

      {/* Hero */}
      <div className="ww-hero">
        <img
          className="ww-hero-bg"
          src="https://www.wildewesten.be/media/cache/resolve/optimized/upload/media/default/ccdf/ac/d10fbfbc773a183664cbcc1448efbcf811ec5a17.jpg"
          alt=""
          width="1440"
          height="960"
        />
        <div className="ww-hero-overlay">
          <span className="ww-hero-meta">{hero.date} — {hero.venue}</span>
          <h1 className="ww-hero-title">{hero.name}</h1>
          <Link to={`/wilde-westen/event/${hero.id}`} className="ww-hero-cta">
            info &amp; tickets →
          </Link>
        </div>
      </div>

      {/* Just Announced */}
      <section className="ww-section">
        <h2 className="ww-section-title">Just Announced</h2>
        <div className="ww-card-grid">
          {announced.map(e => <EventCard key={e.id} event={e} />)}
        </div>
      </section>

      {/* Next Up */}
      <section className="ww-section">
        <h2 className="ww-section-title">Next Up</h2>
        <div className="ww-card-grid">
          {nextUp.map(e => <EventCard key={e.id} event={e} />)}
        </div>
      </section>
    </div>
  )
}
