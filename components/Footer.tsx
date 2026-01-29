"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-black/20 backdrop-blur-sm mt-auto">
            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col gap-2">
                    <p className="text-sm text-zinc-400">
                        © {new Date().getFullYear()} Meetkumar Mistry. All rights reserved.
                    </p>
                    <p className="text-xs text-zinc-600">
                        Built with Next.js, Tailwind, and Supabase.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <Link
                        href="https://github.com/MeetMistry25"
                        target="_blank"
                        className="text-zinc-400 hover:text-white transition-colors"
                    >
                        <Github size={20} />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/meetkumar-mistry-97501126b"
                        target="_blank"
                        className="text-zinc-400 hover:text-white transition-colors"
                    >
                        <Linkedin size={20} />
                    </Link>
                    <Link
                        href="https://twitter.com"
                        target="_blank"
                        className="text-zinc-400 hover:text-white transition-colors"
                    >
                        <Twitter size={20} />
                    </Link>
                    <Link
                        href="mailto:meetkumarmistry25@gmail.com"
                        className="text-zinc-400 hover:text-white transition-colors"
                    >
                        <Mail size={20} />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
