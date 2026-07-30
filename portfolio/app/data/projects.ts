export interface Project {
  slug: string;
  title: string;
  tagline: string;
  status: "active" | "concept" | "wip" | "shipped";
  description: string;
  stack: string[];
  features: string[];
  challenge: string;
  approach: string;
  outcome: string;
  links?: { label: string; url: string }[];
}

export const projects: Project[] = [
  {
    slug: "mis",
    title: "Multi-Tenant MIS Platform",
    tagline: "Shared-schema multi-tenant management information system",
    status: "active",
    description:
      "A multi-tenant Management Information System that serves multiple organizations from a single database using PostgreSQL Row-Level Security. Each tenant gets isolated data views, role-based access control, and their own dashboard — all running on one Neon database instance.",
    stack: [
      "Next.js",
      "PostgreSQL",
      "Neon",
      "Drizzle ORM",
      "Row-Level Security",
      "Vercel",
      "TypeScript",
    ],
    features: [
      "Shared-schema multi-tenancy with PostgreSQL RLS policies",
      "Per-tenant role-based access control (admin, manager, viewer)",
      "Dynamic dashboard generation per organization",
      "Automated tenant provisioning and onboarding flow",
      "Real-time data isolation — zero cross-tenant leakage",
    ],
    challenge:
      "Most multi-tenant solutions use schema-per-tenant or database-per-tenant, which gets expensive fast on managed databases. I needed a way to serve 12+ organizations from a single Neon database without sacrificing data isolation or query performance.",
    approach:
      "Implemented shared-schema multi-tenancy using PostgreSQL Row-Level Security (RLS) policies. Every table has a tenant_id column, and RLS policies enforce that queries only return rows belonging to the authenticated tenant. Drizzle ORM handles the schema migrations, and the auth layer injects tenant context into every database session.",
    outcome:
      "12 active tenants running on a single Neon free-tier instance. Zero cross-tenant data incidents. Sub-100ms query times despite shared resources.",
    links: [
      { label: "GitHub", url: "https://github.com/Clown-nerd" },
    ],
  },
  {
    slug: "tender-eye",
    title: "Kenya Tender Eye",
    tagline: "Public procurement transparency tracker",
    status: "active",
    description:
      "A civic-tech platform that tracks and surfaces Kenyan government tender information, making public procurement data accessible and searchable. Built to increase transparency in how public funds are allocated through the tendering process.",
    stack: [
      "Next.js",
      "PostgreSQL",
      "Node.js",
      "TypeScript",
      "Vercel",
    ],
    features: [
      "Aggregated tender data from multiple government sources",
      "Full-text search across tender titles, descriptions, and entities",
      "Tender status tracking (open, closed, awarded)",
      "Email alerts for new tenders matching saved criteria",
      "Public API for civic-tech developers and journalists",
    ],
    challenge:
      "Government procurement data in Kenya is scattered across multiple portals, often in inconsistent formats and difficult to search. Citizens and watchdog organizations have no easy way to track how public money is being allocated.",
    approach:
      "Built scrapers to normalize tender data from multiple government portals into a unified PostgreSQL database. Added full-text search with pg_trgm for fuzzy matching, and a Next.js frontend with filters for entity, category, and deadline. Email notification workers handle alert subscriptions.",
    outcome:
      "Thousands of tenders indexed and searchable. Used by civic organizations and journalists tracking procurement patterns in county governments.",
  },
  {
    slug: "kpfas",
    title: "KPFAS — Kenya Public Finance Automation",
    tagline: "Queue-driven financial processing for public institutions",
    status: "wip",
    description:
      "A backend system designed to automate repetitive financial processes in Kenyan public institutions. Uses job queues to handle batch processing of financial reports, reconciliation tasks, and compliance checks without manual intervention.",
    stack: [
      "Node.js",
      "Fastify",
      "BullMQ",
      "Redis",
      "PostgreSQL",
      "TypeScript",
    ],
    features: [
      "Queue-based job processing with BullMQ + Redis",
      "Automated financial report generation (monthly, quarterly)",
      "Batch reconciliation engine for multi-source financial data",
      "Retry logic with dead-letter queues for failed jobs",
      "Admin dashboard for queue monitoring and job inspection",
    ],
    challenge:
      "Public finance officers spend hours manually reconciling data from multiple systems and generating compliance reports. The process is error-prone and creates bottlenecks at end-of-month and end-of-quarter deadlines.",
    approach:
      "Designed a Fastify API layer that accepts financial data inputs and enqueues processing jobs through BullMQ. Workers handle reconciliation, validation, and report generation asynchronously. Redis manages queue state, and dead-letter queues capture failures for manual review. PostgreSQL stores all processed results with full audit trails.",
    outcome:
      "Currently in development. Architecture designed to handle batch processing of financial data at scale, with built-in retry logic and audit compliance.",
  },
  {
    slug: "akosombo",
    title: "Akosombo Library System",
    tagline: "Digital catalog and lending system for a public library",
    status: "shipped",
    description:
      "A library management system handling digital cataloging, member registration, book lending/returns, and overdue tracking. Built for a public library that previously operated entirely on paper records.",
    stack: [
      "Next.js",
      "PostgreSQL",
      "Node.js",
      "TypeScript",
    ],
    features: [
      "Digital book catalog with search and filter",
      "Member registration and profile management",
      "Lending and return workflow with due-date tracking",
      "Overdue notifications and fine calculation",
      "Admin dashboard for inventory and usage reports",
    ],
    challenge:
      "The library operated on paper-based lending records. Finding books, tracking who had what, and managing overdue items was entirely manual — leading to lost books and frustrated members.",
    approach:
      "Built a straightforward CRUD system with a focus on speed and simplicity. The catalog supports search by title, author, ISBN, and category. The lending module tracks checkout/return dates and auto-calculates fines. Kept the UI simple enough for library staff who aren't tech-savvy.",
    outcome:
      "Fully digitized library operations. Staff report significant time savings on daily lending operations and near-zero lost-book incidents since adoption.",
  },
  {
    slug: "partner-sync",
    title: "Partner Sync",
    tagline: "NGO partner data synchronization tool",
    status: "shipped",
    description:
      "A data synchronization tool that keeps partner organization records in sync across multiple NGO systems. Handles conflict resolution, deduplication, and batch updates across different data formats.",
    stack: [
      "Node.js",
      "PostgreSQL",
      "TypeScript",
      "Redis",
    ],
    features: [
      "Bi-directional sync between partner databases",
      "Configurable conflict resolution strategies",
      "Deduplication engine using fuzzy matching",
      "Batch import/export in CSV and JSON formats",
      "Sync history and audit log",
    ],
    challenge:
      "NGOs working with multiple partner organizations often maintain overlapping datasets that drift out of sync. Manual reconciliation is tedious and error-prone, especially when dealing with inconsistent data formats.",
    approach:
      "Built a sync engine that maps fields across different schemas, detects conflicts using timestamp and hash comparison, and applies configurable resolution strategies (latest-wins, manual review, merge). Redis caches intermediate sync state for performance.",
    outcome:
      "Reduced partner data reconciliation time from days to minutes. Currently handling sync for multiple partner organizations with different data schemas.",
  },
  {
    slug: "mpesa-tracker",
    title: "M-Pesa Tracker",
    tagline: "Personal M-Pesa transaction analytics",
    status: "shipped",
    description:
      "A personal finance tool that parses M-Pesa SMS transaction messages and generates spending analytics, category breakdowns, and monthly reports. Turns raw transaction SMSes into actionable financial insights.",
    stack: [
      "Node.js",
      "Next.js",
      "PostgreSQL",
      "TypeScript",
    ],
    features: [
      "SMS parser for M-Pesa transaction confirmation messages",
      "Auto-categorization of transactions (food, transport, bills, etc.)",
      "Monthly spending breakdown with visual charts",
      "Transaction search and filter",
      "Export reports as PDF or CSV",
    ],
    challenge:
      "M-Pesa is the primary payment method for millions of Kenyans, but there's no built-in spending analytics. Transaction history is just a list of SMSes — no categorization, no trends, no insights.",
    approach:
      "Built a regex-based parser that extracts amount, recipient, date, and type from M-Pesa SMS formats. A rules engine auto-categorizes transactions based on recipient patterns. The Next.js dashboard renders charts and allows manual category corrections that train future auto-categorization.",
    outcome:
      "Personal tool that provides clear visibility into monthly M-Pesa spending patterns. Exported reports used for personal budgeting and expense tracking.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const featuredSlugs = ["mis", "tender-eye", "kpfas"];

export const featuredProjects = projects.filter((p) =>
  featuredSlugs.includes(p.slug)
);
