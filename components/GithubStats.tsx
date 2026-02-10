"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function GithubStats() {
    const [stats, setStats] = useState<{ public_repos: number; followers: number; following: number } | null>(null);

    useEffect(() => {
        fetch("https://api.github.com/users/MeetMistry25")
            .then(res => res.json())
            .then(data => setStats(data))
            .catch(err => console.error("Error fetching GitHub stats:", err));
    }, []);

    return (
        <section className="py-16 px-6 bg-zinc-900/30 border-y border-white/5">
            <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-8">Concept to Code. Consistently.</h3>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    {/* Real GitHub Stats Block */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-6 glass-card rounded-xl w-full max-w-md"
                    >
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                                <p className="text-3xl font-bold text-white">{stats?.public_repos || "10+"}</p>
                                <p className="text-xs text-zinc-500 uppercase font-bold mt-1">Repositories</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-white">{stats?.followers || "5+"}</p>
                                <p className="text-xs text-zinc-500 uppercase font-bold mt-1">Followers</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-white">{stats?.following || "5+"}</p>
                                <p className="text-xs text-zinc-500 uppercase font-bold mt-1">Following</p>
                            </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-white/10">
                            <div className="flex items-center justify-center gap-2 text-sm text-green-400">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                Open to Collaboration
                            </div>
                        </div>
                    </motion.div>

                    <div className="text-left space-y-4">
                        <p className="text-zinc-400">
                            I commit code daily. My GitHub reflects my passion for continuous learning and building.
                        </p>
                        <a
                            href="https://github.com/MeetMistry25"
                            target="_blank"
                            className="text-primary hover:underline font-medium"
                        >
                            Check out my profile →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
