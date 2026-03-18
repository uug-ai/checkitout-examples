import './Saas.css'

const features = [
  {
    icon: '⚡',
    title: 'Blazing Fast',
    description: 'Edge-deployed globally so your users get sub-50ms response times no matter where they are.',
  },
  {
    icon: '🔒',
    title: 'Secure by Default',
    description: 'End-to-end encryption, SSO, and SOC 2 Type II compliance come built in — no extra config needed.',
  },
  {
    icon: '📊',
    title: 'Real-time Analytics',
    description: 'Live dashboards, custom event tracking, and exportable reports to keep your team informed.',
  },
  {
    icon: '🔌',
    title: '100+ Integrations',
    description: 'Connect your existing stack in minutes: Slack, GitHub, Salesforce, Stripe, and many more.',
  },
  {
    icon: '🤖',
    title: 'AI Copilot',
    description: 'Let our embedded AI surface anomalies, suggest automations, and write your next runbook.',
  },
  {
    icon: '♾️',
    title: 'Unlimited Scale',
    description: 'Auto-scaling infrastructure handles your growth without any capacity planning on your end.',
  },
]

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: '/month',
    features: ['Up to 3 users', '5 projects', 'Community support', '1 GB storage'],
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/month',
    features: ['Unlimited users', 'Unlimited projects', 'Priority support', '100 GB storage', 'AI Copilot'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: ['Everything in Pro', 'SSO / SAML', 'Dedicated SLA', 'Custom integrations'],
  },
]

export default function Saas() {
  return (
    <div className="saas">
      <nav className="saas-nav">
        <span className="logo">FlowSync</span>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#docs">Docs</a></li>
          <li><a href="#signup" className="nav-cta">Get started</a></li>
        </ul>
      </nav>

      <section className="saas-hero">
        <span className="saas-badge">Now in public beta</span>
        <h1>
          The platform that makes<br />
          your team <em>unstoppable</em>
        </h1>
        <p>
          FlowSync brings your workflows, analytics, and team collaboration into a
          single powerful platform — so you can ship faster and sleep better.
        </p>
        <div className="saas-hero-actions">
          <a href="#signup" className="btn-primary">Start for free</a>
          <a href="#demo" className="btn-secondary">Watch demo</a>
        </div>
      </section>

      <section className="saas-features" id="features">
        <h2>Everything you need</h2>
        <p className="subtitle">Built for modern teams that move fast and care about quality.</p>
        <div className="feature-grid">
          {features.map((f) => (
            <div className="feature-card" key={f.title}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="saas-pricing" id="pricing">
        <h2>Simple, transparent pricing</h2>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <div className={`pricing-card${plan.popular ? ' popular' : ''}`} key={plan.name}>
              <div className="plan-name">{plan.name}</div>
              <div className="price">{plan.price}<span>{plan.period}</span></div>
              <ul>
                {plan.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <a href="#signup" className={plan.popular ? 'btn-primary' : 'btn-secondary'}>
                {plan.name === 'Enterprise' ? 'Contact sales' : 'Get started'}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
