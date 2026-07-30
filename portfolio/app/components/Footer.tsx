import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-text">
          © {year} Nick Nyagol Ochieng · Built from Nairobi
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
