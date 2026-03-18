import './Portfolio.css'

const projects = [
  {
    title: 'Raytracer Engine',
    description: 'A physically-based renderer built from scratch in Rust, supporting global illumination and BVH acceleration.',
    tags: ['Rust', '3D', 'Graphics'],
  },
  {
    title: 'Neural Style Transfer',
    description: 'Real-time artistic style transfer running in the browser using TensorFlow.js and WebGL.',
    tags: ['Python', 'ML', 'WebGL'],
  },
  {
    title: 'Distributed Key-Value Store',
    description: 'A Raft-consensus based KV store with leader election, log replication, and snapshotting.',
    tags: ['Go', 'Distributed', 'Raft'],
  },
]

export default function Portfolio() {
  return (
    <div className="portfolio">
      <nav className="portfolio-nav">
        <span className="logo">{'<AK />'}</span>
        <ul>
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="portfolio-hero">
        <p className="eyebrow">Software Engineer</p>
        <h1>
          Building things<br />
          for the <span>web</span> &amp;<br />
          beyond.
        </h1>
        <p>
          I design and build high-performance systems, tools, and experiences.
          Focused on correctness, simplicity, and craft.
        </p>
        <a className="portfolio-cta" href="#work">See my work</a>
      </section>

      <section className="portfolio-projects" id="work">
        <h2>Selected Projects</h2>
        <div className="project-grid">
          {projects.map((p) => (
            <div className="project-card" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div>
                {p.tags.map((t) => (
                  <span className="project-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
