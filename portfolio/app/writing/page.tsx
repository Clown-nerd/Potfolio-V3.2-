import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Build logs, case studies, and technical writing by Nick Nyagol Ochieng.",
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
      "How I use Gemini, Claude, GPT, and Cursor together — not as a gimmick, but as a legitimate productivity multiplier for a solo developer on constrained hardware.",
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
