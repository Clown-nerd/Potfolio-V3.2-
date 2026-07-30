import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stack",
  description:
    "The tools and technologies Nick Nyagol Ochieng uses to build civic-tech systems and multi-tenant platforms.",
};

interface StackItem {
  name: string;
  logo?: string;
  note: string;
}

interface StackGroup {
  label: string;
  items: StackItem[];
}

const stack: StackGroup[] = [
  {
    label: "Frontend",
    items: [
      { name: "Next.js", note: "Primary framework — all projects", logo: "vercel.svg" },
      { name: "React", note: "UI layer for every frontend" },
      { name: "TypeScript", note: "Type safety across the full stack", logo: "typescript.svg" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", note: "Runtime for APIs and workers" },
      { name: "Fastify", note: "KPFAS API layer — fast, schema-validated", logo: "fastapi.svg" },
      { name: "Express", note: "Simpler APIs and prototypes" },
      { name: "BullMQ", note: "Job queues for KPFAS batch processing" },
    ],
  },
  {
    label: "Data",
    items: [
      { name: "PostgreSQL", note: "Primary database — RLS, full-text search", logo: "postgresql.svg" },
      { name: "Neon", note: "Serverless Postgres — free tier for MIS" },
      { name: "Drizzle ORM", note: "Type-safe schema + migrations" },
      { name: "Redis", note: "Queue state, caching, session store", logo: "redis.svg" },
    ],
  },
  {
    label: "Infrastructure",
    items: [
      { name: "Vercel", note: "Deploy target for Next.js projects", logo: "vercel.svg" },
      { name: "Azure VM", note: "Heavy builds, CI, overflow compute", logo: "azure.svg" },
      { name: "Docker", note: "Containerized deployments", logo: "docker.svg" },
      { name: "GitHub Actions", note: "CI/CD pipelines", logo: "githubactions.svg" },
      { name: "Ubuntu", note: "Dev and server OS", logo: "ubuntu.svg" },
    ],
  },
  {
    label: "AI Tooling",
    items: [
      { name: "Gemini", note: "Planning, architecture, long-context analysis" },
      { name: "Claude", note: "Code generation, debugging, documentation" },
      { name: "GPT", note: "Copywriting, brainstorming, user content" },
      { name: "Cursor", note: "IDE-integrated AI pair programming" },
    ],
  },
  {
    label: "Languages",
    items: [
      { name: "TypeScript", note: "Primary language", logo: "typescript.svg" },
      { name: "Python", note: "Scripts, data processing, automation", logo: "python.svg" },
      { name: "SQL", note: "Complex queries, RLS policies, migrations" },
      { name: "Bash", note: "Automation, deployment scripts", logo: "gnubash.svg" },
    ],
  },
];

export default function Stack() {
  return (
    <div className="page-content">
      <section className="section">
        <div className="container">
          <p className="section-label fade-up">Stack</p>
          <h1 className="fade-up">What I build with</h1>
          <p
            className="hero-description fade-up"
            style={{ marginTop: "var(--space-md)" }}
          >
            Not a logo wall — these are tools I actually use in production,
            grouped by how I use them. Each one earned its place.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {stack.map((group) => (
            <div key={group.label} className="stack-group fade-up">
              <h2 className="stack-group-title">{group.label}</h2>
              <div className="stack-grid">
                {group.items.map((item) => (
                  <div key={item.name} className="stack-item">
                    {item.logo ? (
                      <img
                        src={`/logos/${item.logo}`}
                        alt={`${item.name} logo`}
                        className="stack-item-logo"
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className="stack-item-logo"
                        style={{
                          background: "var(--accent-muted)",
                          borderRadius: "var(--radius-sm)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          color: "var(--accent)",
                        }}
                      >
                        {item.name.charAt(0)}
                      </div>
                    )}
                    <div className="stack-item-info">
                      <p className="stack-item-name">{item.name}</p>
                      <p className="stack-item-note">{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
