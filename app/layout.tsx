import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "State of Retail",
  description: "Case studies, insights, and mini classes on the state of retail."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="container py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
