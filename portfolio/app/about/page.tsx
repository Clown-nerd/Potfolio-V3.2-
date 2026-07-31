import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nickson Nyagol Ochieng — CS student, civic-tech builder, and full-stack developer based in Nairobi, Kenya.",
};

export default function About() {
  return (
    <div className="page-content">
      {/* Header */}
      <section className="section">
        <div className="container">
          <p className="section-label fade-up">About</p>
          <h1 className="fade-up">
            Building from Nairobi,<br />
            for systems that serve.
          </h1>
          <p
            className="hero-description fade-up"
            style={{ marginTop: "var(--space-lg)" }}
          >
            I&apos;m Nickson Nyagol Ochieng — a full-stack developer and CS diploma
            student at Kasarani Technical and Vocational College. I build
            multi-tenant platforms, civic-tech tools, and public-finance
            systems. Currently on industrial attachment as a lab technician at
            the Technical University of Kenya.
          </p>
        </div>
      </section>

      {/* Antigravity workflow */}
      <section
        className="section"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="container">
          <p className="section-label fade-up">Workflow</p>
          <h2 className="fade-up" style={{ marginBottom: "var(--space-lg)" }}>
            AI-Accelerated Workflow
          </h2>
          <div className="project-content fade-up">
            <p>
              I use AI tooling deliberately to move faster — the models draft, I make the decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section
        className="section"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="container">
          <p className="section-label fade-up">Experience & Education</p>
          <h2 className="fade-up" style={{ marginBottom: "var(--space-2xl)" }}>Experience & Education</h2>
          <div className="fade-up">
            {/* TUK Attachment */}
            <div className="card" style={{ marginBottom: "var(--space-lg)" }}>
              <div className="card-header">
                <div>
                  <h3 className="card-title">
                    Industrial Attachment — Lab Technician
                  </h3>
                  <p
                    className="card-description"
                    style={{ marginTop: "var(--space-xs)" }}
                  >
                    Technical University of Kenya
                  </p>
                </div>
                <span className="badge badge-active">Current</span>
              </div>
              <p
                className="card-description"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.8125rem" }}
              >
                Hands-on technical environment experience
              </p>
            </div>

            {/* Clown Nerds Freelance */}
            <div className="card" style={{ marginBottom: "var(--space-lg)" }}>
              <div className="card-header">
                <div>
                  <h3 className="card-title">
                    Freelance Full-Stack Developer
                  </h3>
                  <p
                    className="card-description"
                    style={{ marginTop: "var(--space-xs)" }}
                  >
                    Clown Nerds
                  </p>
                </div>
                <span className="badge badge-active">Active</span>
              </div>
              <p
                className="card-description"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.8125rem" }}
              >
                Shipping multi-tenant platforms, civic-tech tools, and public-finance systems.
              </p>
            </div>

            {/* Kasarani TVC */}
            <div className="card">
              <div className="card-header">
                <div>
                  <h3 className="card-title">
                    Diploma in Computer Science — Level 6
                  </h3>
                  <p
                    className="card-description"
                    style={{ marginTop: "var(--space-xs)" }}
                  >
                    Kasarani Technical and Vocational College
                  </p>
                </div>
                <span className="badge badge-active">In Progress</span>
              </div>
              <p
                className="card-description"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.8125rem" }}
              >
                Expected graduation: September 2027
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
