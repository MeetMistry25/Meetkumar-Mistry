"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="z-10 max-w-4xl"
            >
                <h2 className="text-sm md:text-base font-semibold tracking-wider text-primary uppercase mb-4">
                    Hello, I'm Meetkumar Mistry
                </h2>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                    Building Scalable <br />
                    <span className="text-primary">Full Stack Solutions</span>
                </h1>
                <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
                    Specializing in Angular, ASP.NET Core, and the MERN Stack.
                    Crafting secure, high-performance web applications with a focus on modern architecture.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/projects"
                        className="group relative px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all flex items-center gap-2"
                    >
                        View Projects
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 rounded-full bg-white/20 blur-lg group-hover:blur-xl transition-all opacity-0 group-hover:opacity-100" />
                    </Link>

                    <Link
                        href="/contact"
                        className="px-8 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
                    >
                        Contact Me
                    </Link>
                </div>
            </motion.div>

            {/* Decorative gradient overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10" />
        </section>
    );
}
