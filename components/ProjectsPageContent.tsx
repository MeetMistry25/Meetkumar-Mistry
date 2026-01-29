"use client";

import { motion } from "framer-motion";
import { Project } from "@/Lib/types";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import ZoomableImage from "./ZoomableImage";

export default function ProjectsPageContent({ projects }: { projects: Project[] }) {
    return (
        <div className="py-24 px-6 max-w-7xl mx-auto">
            <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
                <p className="text-zinc-400 max-w-2xl text-lg mb-8">
                    Full-stack applications designed to streamline campus operations and enhance student experiences.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        layout
                        className="group relative rounded-2xl overflow-hidden glass-card flex flex-col h-full"
                    >
                        {/* Image */}
                        <div className="aspect-video bg-zinc-950 relative overflow-hidden group">
                            <ZoomableImage src={project.image} alt={project.title} />
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-zinc-400 text-sm mb-4 line-clamp-3">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4">
                                {project.github && (
                                    <Link href={project.github} target="_blank" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
                                        <Github size={16} /> Code
                                    </Link>
                                )}
                                {project.demo && (
                                    <Link href={project.demo} target="_blank" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
                                        <ExternalLink size={16} /> Live Demo
                                    </Link>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
