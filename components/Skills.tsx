"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/Lib/data";

export default function Skills() {
    return (
        <section className="py-24 px-6 bg-zinc-900/30">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
                    <p className="text-zinc-400">A curated stack for building robust applications.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {SKILLS.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-6 rounded-xl border border-white/5"
                        >
                            <h3 className="text-lg font-semibold mb-4 text-primary">{skillGroup.category}</h3>
                            <ul className="space-y-2">
                                {skillGroup.items.map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-zinc-300">
                                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
