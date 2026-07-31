import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Condensed currently strip — one line, same signal as homepage */}
      <div
        style={{
          borderBottom: "1px solid var(--border-subtle)",
          paddingBlock: "var(--space-md)",
          marginBottom: "var(--space-xl)",
        }}
      >
        <div className="container">
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--text-tertiary)",
              margin: 0,
              maxWidth: "none",
            }}
          >
            CS Diploma Student · Kasarani TVC
            <span style={{ margin: "0 0.6em", opacity: 0.4 }}>·</span>
            Lab Technician · TU Kenya
            <span style={{ margin: "0 0.6em", opacity: 0.4 }}>·</span>
            Building: Multi-Tenant MIS · Kenya Tender Eye
            <span style={{ margin: "0 0.6em", opacity: 0.4 }}>·</span>
            Nairobi, Kenya 🇰🇪
          </p>
        </div>
      </div>

      <div className="container footer-inner">
        <p className="footer-text">
          © {year} Nickson Nyagol Ochieng · Built from Nairobi
        </p>
        <div className="footer-links">
          <Link
            href="https://github.com/Clown-nerd"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link
            href="https://github.com/Nyagol-dev"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nyagol-dev
          </Link>
          <Link href="/contact" className="footer-link">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
