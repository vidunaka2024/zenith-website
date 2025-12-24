import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import SchemaMarkup from "@/components/SchemaMarkup";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zenith Innovations - Digital Agency | Software Development & Marketing",
  description: "Full-service digital agency offering custom software development, web development, content creation, social media marketing, influencer marketing and comprehensive digital marketing solutions. Founded in 2019, based in Colombo, Sri Lanka.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <SchemaMarkup />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-grow relative">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
