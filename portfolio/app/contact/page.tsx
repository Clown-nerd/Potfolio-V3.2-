import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Nick Nyagol Ochieng — open to freelance projects, collaborations, and civic-tech conversations.",
};

export default function Contact() {
  return (
    <div className="page-content">
      <section className="section">
        <div className="container">
          <p className="section-label fade-up">Contact</p>
          <h1 className="fade-up">Let&apos;s build something</h1>
          <p
            className="hero-description fade-up"
            style={{ marginTop: "var(--space-md)" }}
          >
            I&apos;m open to freelance projects, civic-tech collaborations, and
            conversations about building systems that serve people. Based in
            Nairobi, available remotely.
          </p>

          <div
            className="contact-links fade-up"
            style={{ marginTop: "var(--space-3xl)" }}
          >
            <a
              href="mailto:nicknyagol@gmail.com"
              className="contact-link-item"
              id="contact-email"
            >
              <svg className="contact-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <div>
                <p className="contact-link-text">nicknyagol@gmail.com</p>
                <p className="contact-link-label">Email — best for project inquiries</p>
              </div>
            </a>

            <a
              href="https://github.com/Clown-nerd"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-item"
              id="contact-github"
            >
              <svg className="contact-link-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <div>
                <p className="contact-link-text">Clown-nerd</p>
                <p className="contact-link-label">GitHub — main org for freelance work</p>
              </div>
            </a>

            <a
              href="https://github.com/Nyagol-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-item"
              id="contact-github-personal"
            >
              <svg className="contact-link-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <div>
                <p className="contact-link-text">Nyagol-dev</p>
                <p className="contact-link-label">GitHub — personal experiments</p>
              </div>
            </a>
          </div>

          {/* Availability note */}
          <div
            className="fade-up"
            style={{
              marginTop: "var(--space-3xl)",
              padding: "var(--space-lg)",
              background: "var(--accent-subtle)",
              border: "1px solid var(--accent-muted)",
              borderRadius: "var(--radius-md)",
              maxWidth: "480px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8125rem",
                color: "var(--accent)",
                marginBottom: "var(--space-xs)",
              }}
            >
              // availability
            </p>
            <p
              style={{
                fontSize: "0.9375rem",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
              }}
            >
              Currently open to freelance projects and collaborations.
              Especially interested in civic-tech, government tooling, and
              multi-tenant SaaS. Based in Nairobi (EAT, UTC+3).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
