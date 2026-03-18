import { Link } from 'react-router-dom'
import './Home.css'

const sites = [
  {
    path: '/portfolio',
    title: 'Portfolio',
    description: 'A minimal dark-themed developer portfolio with project showcase.',
    palette: ['#0d0d0d', '#a8ff78', '#2a2a2a'],
  },
  {
    path: '/saas',
    title: 'SaaS Landing',
    description: 'A bright, colourful SaaS product page with features and pricing.',
    palette: ['#6c63ff', '#e040fb', '#f5f3ff'],
  },
  {
    path: '/wilde-westen',
    title: 'Wilde Westen',
    description: 'A music venue site with event listings and detail pages — inspired by wildewesten.be.',
    palette: ['#111111', '#d4f000', '#e83ec6'],
  },
]

export default function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Site Examples</h1>
        <p>Each route below is a fully isolated site with its own styles and UI.</p>
      </header>
      <div className="site-grid">
        {sites.map((site) => (
          <Link to={site.path} className="site-card" key={site.path}>
            <div className="site-preview">
              {site.palette.map((color) => (
                <span key={color} className="swatch" style={{ background: color }} />
              ))}
            </div>
            <div className="site-info">
              <h2>{site.title}</h2>
              <p>{site.description}</p>
              <span className="site-link">{site.path} →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
