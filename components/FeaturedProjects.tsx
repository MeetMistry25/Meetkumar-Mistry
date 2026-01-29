"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import ZoomableImage from "./ZoomableImage";

interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    image: string; // URL or path
    github?: string;
    demo?: string;
}

export default function FeaturedProjects({ projects }: { projects: Project[] }) {
    if (!projects.length) return null;

    return (
        <section className="py-24 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
                <div className="h-1 w-20 bg-primary rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative rounded-2xl overflow-hidden glass-card h-full flex flex-col"
                    >
                        {/* Image */}
                        <div className="aspect-video bg-zinc-950 relative overflow-hidden">
                            <ZoomableImage src={project.image} alt={project.title} />
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-zinc-400 text-sm mb-4 line-clamp-3 flex-grow">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 mt-auto">
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
        </section>
    );
}
