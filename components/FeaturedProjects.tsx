"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MOCK_PROJECTS } from "@/Lib/data";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, Shield, Layers, Code, ArrowRight, ChevronDown, Trophy, Lock, Cpu } from "lucide-react";
import { Project } from "@/Lib/types";
import { useState } from "react";

// Enhanced project card to show new details
function ProjectCard({ project, index }: { project: Project; index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-zinc-900/40 border border-white/5 rounded-2xl overflow-hidden hover:border-primary/20 transition-all duration-300"
        >
            <div className="flex flex-col lg:flex-row">
                {/* Image Section - No Cropping */}
                <div className="w-full lg:w-5/12 bg-black/50 relative min-h-[300px] lg:min-h-full flex items-center justify-center p-4">
                    {/* Background blur for fill */}
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover opacity-20 blur-xl"
                    />

                    {/* Actual Image - Contained to prevent cutting */}
                    <div className="relative w-full h-full min-h-[250px] flex items-center justify-center">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={800}
                            height={600}
                            className="object-contain max-h-[300px] lg:max-h-[400px] w-auto h-auto rounded-lg shadow-2xl"
                        />
                    </div>
                </div>

                {/* Summary Info */}
                <div className="w-full lg:w-7/12 p-8 flex flex-col">
                    <div className="mb-4">
                        <span className="text-primary font-mono text-sm tracking-widest uppercase mb-2 block">{project.category}</span>
                        <h3 className="text-3xl font-bold text-white mb-3">{project.title}</h3>
                        <p className="text-zinc-400 leading-relaxed text-lg mb-6">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tech.map(t => (
                                <span key={t} className="px-3 py-1 bg-zinc-950 border border-zinc-800 rounded-md text-xs text-zinc-400 font-mono">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-auto flex flex-wrap gap-4 items-center justify-between border-t border-white/5 pt-6">
                        <div className="flex gap-4">
                            {project.github && (
                                <Link href={project.github} target="_blank" className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors">
                                    <Github size={18} /> CodeBase
                                </Link>
                            )}
                            {project.demo && (
                                <Link href={project.demo} target="_blank" className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors">
                                    <ExternalLink size={18} /> Live Demo
                                </Link>
                            )}
                        </div>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                        >
                            {isOpen ? "Hide Details" : "View Details"}
                            <ChevronDown className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} size={18} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Accordion Content */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden bg-black/20"
                    >
                        <div className="p-8 border-t border-white/5 space-y-10">

                            {/* 1. Problem & Role */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <section>
                                    <h4 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
                                        <span className="p-1.5 bg-red-500/10 text-red-500 rounded-lg"><Shield size={18} /></span>
                                        Problem Statement
                                    </h4>
                                    <p className="text-zinc-400 leading-relaxed">{project.problemStatement || "Addressing critical gaps in current systems."}</p>
                                </section>
                                <section>
                                    <h4 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
                                        <span className="p-1.5 bg-blue-500/10 text-blue-500 rounded-lg"><Code size={18} /></span>
                                        My Role
                                    </h4>
                                    <p className="text-zinc-400 leading-relaxed">{project.role || "Full Stack Developer leading architecture and implementation."}</p>
                                </section>
                            </div>

                            {/* 2. Architecture */}
                            {project.architecture && (
                                <section className="bg-zinc-900/50 p-6 rounded-xl border border-white/5">
                                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                        <Layers size={20} className="text-primary" /> System Architecture
                                    </h3>
                                    <p className="text-zinc-300 leading-relaxed font-mono text-sm">{project.architecture}</p>
                                </section>
                            )}

                            {/* 3. Key Features (Impact Bullets) */}
                            <div className="grid md:grid-cols-2 gap-8">
                                {project.keyFeatures && (
                                    <section>
                                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                            <Trophy size={20} className="text-yellow-500" /> Key Features
                                        </h3>
                                        <ul className="space-y-3">
                                            {project.keyFeatures.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-500 shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </section>
                                )}

                                <section className="space-y-6">
                                    {/* Security */}
                                    {project.securityImplementations && (
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                                <Lock size={20} className="text-green-500" /> Security
                                            </h3>
                                            <ul className="space-y-2">
                                                {project.securityImplementations.map((sec, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                                                        <Shield size={14} className="mt-1 text-green-500/50 shrink-0" />
                                                        {sec}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Tech Challenges */}
                                    {project.challengesSolved && (
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                                <Cpu size={20} className="text-purple-500" /> Challenges Solved
                                            </h3>
                                            <ul className="space-y-2">
                                                {project.challengesSolved.map((c, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                                                        <ArrowRight size={14} className="mt-1 text-purple-500/50 shrink-0" />
                                                        {c}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </section>
                            </div>

                            {/* 4. What I Learned */}
                            {project.whatILearned && (
                                <section className="border-t border-white/5 pt-6">
                                    <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-4">Core Learnings</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {project.whatILearned.map((l, i) => (
                                            <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 text-zinc-300 text-sm border border-white/5">
                                                {l}
                                            </span>
                                        ))}
                                    </div>
                                </section>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function FeaturedProjects({ projects }: { projects: Project[] }) {
    // Use Passed projects or Fallback to MOCK if empty (though page.tsx handles this)
    const displayProjects = projects.length > 0 ? projects : MOCK_PROJECTS;

    return (
        <section id="projects" className="py-24 px-6 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
                    <p className="text-zinc-400 max-w-2xl">
                        A selection of complex full-stack applications solving real-world problems.
                        Focusing on performance, security, and scalability.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {displayProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link href="https://github.com/MeetMistry25" target="_blank" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium">
                        View more projects on GitHub <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
