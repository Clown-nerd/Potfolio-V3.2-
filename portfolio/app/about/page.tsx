import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nick Nyagol Ochieng — CS student, civic-tech builder, and full-stack developer based in Nairobi, Kenya.",
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
            I&apos;m Nick Nyagol Ochieng — a full-stack developer and CS diploma
            student at Kasarani Technical and Vocational College. I build
            multi-tenant platforms, civic-tech tools, and public-finance
            systems. Currently on industrial attachment as a lab technician at
            the Technical University of Kenya.
          </p>
        </div>
      </section>

      <hr className="divider container" />

      {/* Origin */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <p className="section-label fade-up">Origin Story</p>
          <div className="project-content fade-up">
            <p>
              I started coding because I saw systems around me that didn&apos;t
              work — procurement portals that nobody could search, library
              records kept in paper notebooks, financial reports compiled
              manually every month. I didn&apos;t have a CS background or a
              powerful machine. What I had was a laptop with 8 GB of RAM, a
              128 GB SSD, and a stubborn refusal to accept that &quot;that&apos;s
              just how it is.&quot;
            </p>
            <p>
              My freelance brand is{" "}
              <strong style={{ color: "var(--accent)" }}>Clown Nerds</strong> —
              because the best builders don&apos;t take themselves too seriously,
              but they take the work very seriously. Under that banner, I ship
              real tools for real problems: multi-tenant platforms running on
              free-tier databases, procurement trackers that make government
              spending searchable, USSD-based civic infrastructure concepts
              that could reach anyone with a phone.
            </p>
          </div>
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
            The &quot;Antigravity&quot; Method
          </h2>
          <div className="project-content fade-up">
            <p>
              I route tasks across a multi-model AI stack. It&apos;s not a product —
              it&apos;s how I work. Different models have different strengths, and
              I use that to ship faster than my hardware should allow:
            </p>
            <ul>
              <li>
                <strong>Gemini</strong> — strategic planning, architecture
                decisions, long-context analysis
              </li>
              <li>
                <strong>Claude</strong> — code generation, debugging,
                refactoring, documentation
              </li>
              <li>
                <strong>GPT</strong> — copywriting, user-facing content,
                brainstorming
              </li>
              <li>
                <strong>Cursor</strong> — IDE-integrated AI for real-time
                code completion and pair programming
              </li>
            </ul>
            <p>
              The key insight: no single model is best at everything. By routing
              tasks to the right model, I get senior-engineer-level output from
              a student-level budget. The workflow itself is a competitive
              advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Constraints */}
      <section className="section">
        <div className="container">
          <p className="section-label fade-up">Constraints</p>
          <h2 className="fade-up" style={{ marginBottom: "var(--space-2xl)" }}>
            What I build with
          </h2>
          <div className="grid-3 stagger">
            <div className="card fade-up">
              <p
                className="card-title"
                style={{ fontFamily: "var(--font-mono)", color: "var(--accent)" }}
              >
                8 GB RAM
              </p>
              <p className="card-description" style={{ marginTop: "var(--space-sm)" }}>
                Every dependency, every Docker container, every dev server
                competes for the same 8 gigs. This forces lean architecture
                decisions.
              </p>
            </div>
            <div className="card fade-up">
              <p
                className="card-title"
                style={{ fontFamily: "var(--font-mono)", color: "var(--accent)" }}
              >
                128 GB SSD
              </p>
              <p className="card-description" style={{ marginTop: "var(--space-sm)" }}>
                No room for bloated node_modules or idle projects. Everything
                on this machine earns its space.
              </p>
            </div>
            <div className="card fade-up">
              <p
                className="card-title"
                style={{ fontFamily: "var(--font-mono)", color: "var(--accent)" }}
              >
                Azure VM
              </p>
              <p className="card-description" style={{ marginTop: "var(--space-sm)" }}>
                For heavy builds, CI runs, and anything that would melt the
                laptop. Cloud compute as an extension of a constrained local
                setup.
              </p>
            </div>
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
                Shipping multi-tenant platforms, civic-tech tools, and public-finance systems on constrained local hardware.
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
