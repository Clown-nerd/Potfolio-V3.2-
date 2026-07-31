import Link from "next/link";
import { featuredProjects } from "./data/projects";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <p className="hero-tagline fade-up">// civic-tech systems builder</p>
          <h1 className="fade-up">
            I&apos;m <span className="accent">Nickson Nyagol</span>,<br />
            I build systems that serve people.
          </h1>
          <p className="hero-description fade-up">
            Full-stack developer shipping multi-tenant platforms, public-finance
            tooling, and civic infrastructure from Nairobi. I turn constraints
            into architecture — free-tier databases, efficient schemas, and a relentless
            bias toward shipping.
          </p>
          <div className="hero-actions fade-up">
            <Link href="/projects" className="btn btn-primary">
              View Projects
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Currently strip */}
      <div className="currently-strip">
        <div className="container">
          <div className="currently-inner">
            <div className="currently-item">
              <span className="currently-label">Status</span>
              <span className="currently-value">CS Diploma Student · Kasarani TVC</span>
            </div>
            <div className="currently-item">
              <span className="currently-label">Attachment</span>
              <span className="currently-value">Lab Technician · Technical University of Kenya</span>
            </div>
            <div className="currently-item">
              <span className="currently-label">Building</span>
              <span className="currently-value">Multi-Tenant MIS · Kenya Tender Eye</span>
            </div>
            <div className="currently-item">
              <span className="currently-label">Location</span>
              <span className="currently-value">Nairobi, Kenya 🇰🇪</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <section className="section">
        <div className="container">
          <p className="section-label fade-up">Featured Builds</p>
          <h2 className="fade-up" style={{ marginBottom: "var(--space-2xl)" }}>
            What I&apos;m shipping
          </h2>

          <div className="grid-3 stagger">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <article className="card fade-up">
                  <div className="card-header">
                    <h3 className="card-title">{project.title}</h3>
                    <span
                      className={`badge badge-${project.status}`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="card-description">{project.tagline}</p>
                  <div className="tags">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span key={tech} className="badge badge-tech">
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="badge badge-tech">
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div
            className="fade-up"
            style={{
              marginTop: "var(--space-2xl)",
              textAlign: "center",
            }}
          >
            <Link href="/projects" className="btn btn-ghost">
              All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* Approach teaser */}
      <section className="section" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <p className="section-label fade-up">How I Work</p>
          <h2 className="fade-up" style={{ marginBottom: "var(--space-2xl)" }}>
            Resourcefulness as a feature
          </h2>

          <div className="grid-3 stagger">
            <div className="card fade-up">
              <h4 style={{ marginBottom: "var(--space-sm)", color: "var(--accent)" }}>
                🛠 Constraint-Driven
              </h4>
              <p className="card-description">
                Database quotas, API limits, and deployment bounds aren&apos;t
                limitations — they&apos;re architectural inputs. Every design decision
                accounts for operational realities.
              </p>
            </div>
            <div className="card fade-up">
              <h4 style={{ marginBottom: "var(--space-sm)", color: "var(--accent)" }}>
                🤖 AI-Accelerated Workflow
              </h4>
              <p className="card-description">
                I use AI tooling deliberately to move faster — optimizing the workflow for speed and output. The models write drafts; I make the decisions.
              </p>
            </div>
            <div className="card fade-up">
              <h4 style={{ marginBottom: "var(--space-sm)", color: "var(--accent)" }}>
                🚀 Ship First
              </h4>
              <p className="card-description">
                Every project has a deploy URL or a working demo. I ship first
                and polish after. Momentum beats perfection when you&apos;re building
                from scratch.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
