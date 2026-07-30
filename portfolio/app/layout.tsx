import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScrollAnimator from "./components/ScrollAnimator";

export const metadata: Metadata = {
  title: {
    default: "Nick Nyagol Ochieng — Civic-Tech Systems Builder",
    template: "%s | Nick Nyagol Ochieng",
  },
  description:
    "Full-stack developer building multi-tenant platforms and public-finance tooling from Nairobi, Kenya.",
  metadataBase: new URL("https://nicknyagol.dev"),
  openGraph: {
    title: "Nick Nyagol Ochieng — Civic-Tech Systems Builder",
    description:
      "Full-stack developer building multi-tenant platforms and public-finance tooling from Nairobi.",
    type: "website",
    locale: "en_KE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <ScrollAnimator />
      </body>
    </html>
  );
}
