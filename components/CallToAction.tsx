"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden glass p-12 md:p-20 text-center border border-white/10">

                {/* Background glow */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative z-10"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
                        Let's Build Something Amazing
                    </h2>
                    <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
                        Have a project in mind or want to discuss the latest tech?
                        I'm always open to new opportunities and collaborations.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform duration-300"
                    >
                        Get in Touch <ArrowRight size={20} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
