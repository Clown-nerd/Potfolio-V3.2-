import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Build logs, case studies, and technical writing by Nickson Nyagol Ochieng.",
};

interface Article {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
}

const articles: Article[] = [
  {
    slug: "multi-tenancy-rls",
    title: "Why I Chose Row-Level Security Over Schema-Per-Tenant",
    date: "2026-07",
    category: "Build Log",
    excerpt:
      "A walkthrough of the architectural decision behind the MIS platform's multi-tenancy model — why RLS won over schema isolation, and the trade-offs I made along the way.",
  },
  {
    slug: "antigravity-workflow",
    title: "The Antigravity Workflow: Routing Tasks Across AI Models",
    date: "2026-06",
    category: "Workflow",
    excerpt:
      "A breakdown of task routing across specialized AI tooling — turning AI assistance into a structured, human-in-the-loop engineering workflow.",
  },
  {
    slug: "civic-tech-nairobi",
    title: "Building Civic Tech From Nairobi: What Nobody Tells You",
    date: "2026-05",
    category: "Essay",
    excerpt:
      "The reality of building government-adjacent software in Kenya — M-Pesa integrations, USSD constraints, institutional inertia, and why I keep doing it anyway.",
  },
];

export default function Writing() {
  return (
    <div className="page-content">
      <section className="section">
        <div className="container">
          <p className="section-label fade-up">Writing</p>
          <h1 className="fade-up">Build logs &amp; essays</h1>
          <p
            className="hero-description fade-up"
            style={{ marginTop: "var(--space-md)" }}
          >
            Technical writing about what I&apos;m building, how I work, and what
            I&apos;m learning. No fluff — just the decisions, trade-offs, and
            outcomes.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div
            className="fade-up"
            style={{
              marginBottom: "var(--space-2xl)",
              padding: "var(--space-lg)",
              background: "var(--bg-secondary)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-md)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "var(--space-md)",
              flexWrap: "wrap",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--accent)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "var(--space-xs)",
                }}
              >
                // Live Technical Blog
              </p>
              <p style={{ color: "var(--text-primary)", fontWeight: 500, margin: 0 }}>
                Bash n Build — live build logs, architecture breakdown &amp; tech essays
              </p>
            </div>
            <a
              href="https://tech-blog-ten-silk.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              style={{ fontSize: "0.8125rem", whiteSpace: "nowrap" }}
            >
              Read full posts on Bash n Build &rarr;
            </a>
          </div>

          <div className="stagger" style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)" }}>
            {articles.map((article) => (
              <article
                key={article.slug}
                className="card fade-up"
                id={`article-${article.slug}`}
                style={{ cursor: "default" }}
              >
                <div className="card-header">
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "var(--space-sm)",
                        marginBottom: "var(--space-sm)",
                      }}
                    >
                      <span className="badge badge-tech">{article.category}</span>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.75rem",
                          color: "var(--text-tertiary)",
                        }}
                      >
                        {article.date}
                      </span>
                    </div>
                    <h2 className="card-title" style={{ fontSize: "1.25rem" }}>
                      {article.title}
                    </h2>
                  </div>
                </div>
                <p className="card-description">{article.excerpt}</p>
                <p
                  style={{
                    marginTop: "var(--space-md)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8125rem",
                    color: "var(--text-tertiary)",
                    fontStyle: "italic",
                  }}
                >
                  article in progress
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
