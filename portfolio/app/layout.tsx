import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScrollAnimator from "./components/ScrollAnimator";

export const metadata: Metadata = {
  title: {
    default: "Nick Nyagol · Civic-Tech Systems Builder",
    template: "%s · Nick Nyagol",
  },
  description:
    "Civic-tech systems builder shipping multi-tenant platforms and public-finance tooling from Nairobi.",
  metadataBase: new URL("https://nicknyagol.dev"),
  openGraph: {
    title: "Nick Nyagol · Civic-Tech Systems Builder",
    description:
      "Civic-tech systems builder shipping multi-tenant platforms and public-finance tooling from Nairobi.",
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
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <ScrollAnimator />
      </body>
    </html>
  );
}
