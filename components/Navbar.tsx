"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/Lib/utils"; // I might need to create utils if it doesn't exist, I'll check "Lib" content again or just use straight classes for now.
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
          MM<span className="text-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-zinc-400"
              )}
            >
              {link.name}
              {pathname === link.href && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-[21px] left-0 right-0 h-[1px] bg-primary"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-zinc-400 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
          suppressHydrationWarning
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-16 left-0 right-0 glass border-b border-white/5 p-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-base font-medium transition-colors",
                pathname === link.href ? "text-primary" : "text-zinc-400"
              )}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}

