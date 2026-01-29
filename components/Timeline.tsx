"use client";

import { motion } from "framer-motion";
import { EXPERIENCES } from "@/Lib/data";

export default function Timeline() {
    return (
        <section className="py-24 px-6 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 text-center"
            >
                <h2 className="text-3xl font-bold mb-4">Journey</h2>
                <p className="text-zinc-400">My professional path and education.</p>
            </motion.div>

            <div className="relative border-l border-zinc-800 ml-3 md:ml-6 space-y-12">
                {EXPERIENCES.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative pl-8 md:pl-12"
                    >
                        <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-primary ring-4 ring-black" />

                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                            <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                            <span className="text-sm font-medium px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 w-fit">
                                {exp.period}
                            </span>
                        </div>

                        <div className="text-primary font-medium mb-2">{exp.company}</div>
                        <p className="text-zinc-400 leading-relaxed max-w-2xl">
                            {exp.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
