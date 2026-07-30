import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProjectBySlug } from "../../data/projects";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not Found" };
  return {
    title: project.title,
    description: project.tagline,
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="page-content">
      <section className="project-header">
        <div className="container">
          <Link href="/projects" className="project-back fade-up">
            ← Back to Projects
          </Link>

          <div className="project-meta fade-up">
            <span className={`badge badge-${project.status}`}>
              {project.status}
            </span>
          </div>

          <h1 className="fade-up">{project.title}</h1>
          <p
            className="hero-description fade-up"
            style={{ marginTop: "var(--space-md)" }}
          >
            {project.tagline}
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="project-detail-layout">
            {/* Main content */}
            <div className="project-content fade-up">
              <h2>Overview</h2>
              <p>{project.description}</p>

              {project.challenge && (
                <>
                  <h2>Challenge</h2>
                  <p>{project.challenge}</p>
                </>
              )}

              {project.approach && (
                <>
                  <h2>Approach</h2>
                  <p>{project.approach}</p>
                </>
              )}

              {project.features && project.features.length > 0 && (
                <>
                  <h2>Key Features</h2>
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </>
              )}

              {project.stackRationale && (
                <>
                  <h2>Stack</h2>
                  <p>{project.stackRationale}</p>
                </>
              )}

              {project.outcome && (
                <>
                  <h2>Outcome</h2>
                  <p>{project.outcome}</p>
                </>
              )}
            </div>

            {/* Sidebar */}
            <aside className="project-sidebar fade-up">
              <div className="sidebar-block">
                <p className="sidebar-label">Tech Stack</p>
                <div className="tags">
                  {project.stack.map((tech) => (
                    <span key={tech} className="badge badge-tech">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="sidebar-block">
                <p className="sidebar-label">Status</p>
                <span className={`badge badge-${project.status}`}>
                  {project.status}
                </span>
              </div>

              <div className="sidebar-block">
                <p className="sidebar-label">Links</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--space-sm)",
                  }}
                >
                  {project.links && project.links.length > 0 ? (
                    project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost"
                        style={{ justifyContent: "center" }}
                      >
                        {link.label} ↗
                      </a>
                    ))
                  ) : (
                    <a
                      href="https://github.com/Clown-nerd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost"
                      style={{ justifyContent: "center" }}
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
