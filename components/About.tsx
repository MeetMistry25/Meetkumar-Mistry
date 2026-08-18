"use client";

import { motion } from "framer-motion";
import { User, Server, Database, Code } from "lucide-react";

export default function About() {
    return (
        <section className="py-24 px-6 relative bg-zinc-900/50">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    <div>
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <span className="p-2 bg-primary/10 rounded-lg text-primary"><User size={24} /></span>
                            About Me
                        </h2>
                        <div className="space-y-4 text-zinc-400 leading-relaxed">
                            <p>
                                I am a Computer Engineer with a deep focus on building
                                <span className="text-zinc-100 font-medium"> secure, scalable, and production-ready applications</span>.
                                Unlike typical juniors, I prioritize system architecture, data integrity, and performance optimization.
                            </p>
                            <p>
                                My journey bridges the gap between complex backend logic and responsive frontend experiences.
                                Whether it's designing normalization-friendly database schemas in <span className="text-zinc-100 font-medium">SQL</span> or
                                implementing strict <span className="text-zinc-100 font-medium">JWT & RBAC</span> security protocols, I engineer software that is robust and reliable.
                            </p>
                            <p>
                                I am actively seeking <span className="text-white font-medium">Frontend or Full Stack Engineering roles</span> where
                                I can leverage my expertise in <span className="text-primary">.NET Core</span> and <span className="text-primary">MERN stack</span> to solve real-world technical challenges.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { icon: Server, title: "Backend Engineering", desc: "ASP.NET Core, Node.js, Express" },
                            { icon: Database, title: "Database Architecture", desc: "PostgreSQL, MongoDB, SQL Optimization" },
                            { icon: Code, title: "Clean Frontend", desc: "Angular, React, Tailwind CSS" },
                            { icon: User, title: "Authentication", desc: "OAuth, JWT, Role-Based Security" }
                        ].map((item, idx) => (
                            <div key={idx} className="p-6 glass-card rounded-xl border border-white/5 hover:border-primary/20 transition-all">
                                <item.icon className="text-primary mb-4" size={28} />
                                <h3 className="font-semibold text-lg text-zinc-200 mb-2">{item.title}</h3>
                                <p className="text-sm text-zinc-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
