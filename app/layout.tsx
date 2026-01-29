import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Meetkumar Mistry | Full Stack Developer",
  description: "Portfolio of Meetkumar Mistry, showcasing projects in Full Stack Development.",
  openGraph: {
    title: "Meetkumar Mistry | Full Stack Developer",
    description: "Portfolio of Meetkumar Mistry, showcasing projects in Full Stack Development.",
    type: "website",
    locale: "en_US",
    url: "https://meet-portfolio.vercel.app",
    siteName: "Meetkumar Mistry",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meetkumar Mistry | Full Stack Developer",
    description: "Portfolio of Meetkumar Mistry.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-background text-foreground antialiased min-h-screen flex flex-col selection:bg-primary/30 selection:text-white`}>
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black opacity-40"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px]"></div>
        </div>

        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
