"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/Lib/types";
import { Github, ExternalLink, Shield, Layers, Code, ArrowRight, ChevronDown, Trophy, Lock, Cpu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
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
                        <h2 className="text-3xl font-bold text-white mb-3">{project.title}</h2>
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
                                    <Github size={18} /> GitHub
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
                            {isOpen ? "Hide Details" : "View Case Study"}
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
                        <div className="p-6 md:p-8 border-t border-white/5 space-y-8">

                            {/* Row 1: Context Cards */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5 relative overflow-hidden group hover:border-red-500/20 transition-colors">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-red-500/50" />
                                    <h4 className="flex items-center gap-3 text-lg font-bold text-white mb-4">
                                        <Shield className="text-red-500" size={20} />
                                        The Challenge
                                    </h4>
                                    <p className="text-zinc-400 leading-relaxed text-sm">
                                        {project.problemStatement || "Addressing critical gaps in current systems."}
                                    </p>
                                </div>

                                <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5 relative overflow-hidden group hover:border-blue-500/20 transition-colors">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/50" />
                                    <h4 className="flex items-center gap-3 text-lg font-bold text-white mb-4">
                                        <Code className="text-blue-500" size={20} />
                                        My Role
                                    </h4>
                                    <p className="text-zinc-400 leading-relaxed text-sm">
                                        {project.role || "Full Stack Developer leading architecture and implementation."}
                                    </p>
                                </div>
                            </div>

                            {/* Row 2: Architecture (Terminal Style) */}
                            {project.architecture && (
                                <div className="bg-zinc-950 p-6 rounded-xl border border-white/10 font-mono text-sm relative shadow-inner">
                                    <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/20" />
                                        <span className="ml-2 text-xs text-zinc-500">system_architecture.log</span>
                                    </div>
                                    <p className="text-zinc-300 leading-relaxed">
                                        <span className="text-green-400">$ system_audit</span> --architecture<br />
                                        <span className="text-zinc-500">{">"}</span> {project.architecture}
                                    </p>
                                </div>
                            )}

                            {/* Row 3: Features & Security */}
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Key Features */}
                                <div>
                                    <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-6">
                                        <Trophy size={18} className="text-amber-500" /> Key Features
                                    </h3>
                                    <div className="space-y-3">
                                        {project.keyFeatures?.map((feature, i) => (
                                            <div key={i} className="flex gap-4 p-3 rounded-lg bg-zinc-900/30 border border-white/5 hover:border-amber-500/30 transition-colors">
                                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 text-xs font-bold">
                                                    {i + 1}
                                                </span>
                                                <p className="text-zinc-400 text-sm">{feature}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Security Ops */}
                                <div>
                                    <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-6">
                                        <Lock size={18} className="text-emerald-500" /> Security Ops
                                    </h3>
                                    <div className="space-y-3">
                                        {project.securityImplementations?.map((item, i) => (
                                            <div key={i} className="flex items-start gap-3 text-sm text-zinc-400 bg-emerald-950/10 p-3 rounded-lg border border-emerald-500/10 hover:bg-emerald-950/20 transition-colors">
                                                <Shield size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Row 4: Challenges & Learnings */}
                            <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-white/5">
                                {/* Challenges */}
                                <div>
                                    <h3 className="flex items-center gap-2 text-sm font-bold text-zinc-500 uppercase tracking-widest mb-4">
                                        <Cpu size={16} /> Engineering Hurdles
                                    </h3>
                                    <ul className="space-y-3">
                                        {project.challengesSolved?.map((challenge, i) => (
                                            <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm group">
                                                <ArrowRight size={16} className="text-purple-500 mt-0.5 group-hover:translate-x-1 transition-transform" />
                                                {challenge}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Learnings */}
                                <div>
                                    <h3 className="flex items-center gap-2 text-sm font-bold text-zinc-500 uppercase tracking-widest mb-4">
                                        <Layers size={16} /> Key Takeaways
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.whatILearned?.map((learn, i) => (
                                            <span key={i} className="px-3 py-1.5 rounded-md bg-white/5 text-zinc-300 text-xs font-mono border border-white/5 hover:border-primary/30 transition-colors cursor-default">
                                                {learn}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
