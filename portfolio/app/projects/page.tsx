import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "../data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Multi-tenant platforms, civic-tech tools, and public-finance systems built by Nickson Nyagol Ochieng.",
};

export default function Projects() {
  return (
    <div className="page-content">
      <section className="section">
        <div className="container">
          <p className="section-label fade-up">Projects</p>
          <h1 className="fade-up">Things I&apos;ve built</h1>
          <p
            className="hero-description fade-up"
            style={{ marginTop: "var(--space-md)" }}
          >
            Every project here is a real build — deployed, used, or actively
            in development. No tutorials, no toy apps.
          </p>

          <div
            className="grid-2"
            style={{ marginTop: "var(--space-3xl)" }}
          >
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <article className="card fade-up" id={`project-${project.slug}`}>
                  <div className="card-header">
                    <h2 className="card-title">{project.title}</h2>
                    <span className={`badge badge-${project.status}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="card-description">{project.tagline}</p>
                  <p
                    className="card-description"
                    style={{
                      marginTop: "var(--space-sm)",
                      fontSize: "0.875rem",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {project.description}
                  </p>
                  <div className="tags">
                    {project.stack.slice(0, 5).map((tech) => (
                      <span key={tech} className="badge badge-tech">
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 5 && (
                      <span className="badge badge-tech">
                        +{project.stack.length - 5}
                      </span>
                    )}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
