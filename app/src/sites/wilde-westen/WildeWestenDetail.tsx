import { useParams, Link } from 'react-router-dom'
import { WwNav } from './WildeWesten'
import { events } from './wwEvents'
import './WildeWesten.css'
import './WildeWestenDetail.css'

export default function WildeWestenDetail() {
  const { id } = useParams<{ id: string }>()
  const event = events.find(e => e.id === id)

  if (!event) {
    return (
      <div className="ww-detail">
        <WwNav />
        <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
          <h1>Evenement niet gevonden</h1>
          <Link to="/wilde-westen" style={{ color: '#111', fontWeight: 700 }}>← Terug naar agenda</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="ww-detail">
      <WwNav />

      {/* Hero / Poster */}
      <div className="ww-detail-hero">
        {event.poster ? (
          <div className="ww-detail-hero-poster">
            <span className="ww-detail-poster-title">{event.posterText}</span>
          </div>
        ) : (
          <div style={{
            width: '100%', height: '100%',
            background: 'linear-gradient(135deg, #2a2a2a 0%, #666 50%, #2a2a2a 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg style={{ width: '80px', height: '80px', opacity: 0.15, color: '#fff' }} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/>
            </svg>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="ww-detail-body">
        {/* Left: info */}
        <div className="ww-detail-main">
          <h1>{event.name}</h1>
          <span className="ww-detail-date-badge">{event.date}</span>
          <h2 className="ww-detail-subtitle">{event.name.split(':')[0]}</h2>
          <p className="ww-detail-desc">{event.description}</p>

          <div className="ww-detail-info-row">
            <strong>Locatie</strong>
            <a href="#locatie">{event.venue}</a>
          </div>
          <div className="ww-detail-info-row">
            <strong>Datum</strong>
            <span>{event.date}</span>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/wilde-westen" style={{ color: '#111', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'underline' }}>
              ← Terug naar agenda
            </Link>
          </div>
        </div>

        {/* Right: ticket sidebar */}
        <div className="ww-detail-sidebar">
          <button
            type="button"
            className="ww-detail-ticket-btn checkout-plugin"
            data-event-id={event.id}
            data-event-name={event.name}
          >
            koop tickets
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
          <div className="ww-detail-pricing">
            {event.prices.map(p => (
              <div className="ww-detail-price-row" key={p.label}>
                <span className="ww-detail-price-label">{p.label}</span>
                <span className="ww-detail-price-amount">{p.amount}</span>
              </div>
            ))}
            <p className="ww-detail-price-note">prijzen inclusief reservatiekost</p>
          </div>
        </div>
      </div>
    </div>
  )
}
