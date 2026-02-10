"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MOCK_PROJECTS } from "@/Lib/data";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, Shield, Layers, Code, ArrowRight, ChevronDown, Trophy, Lock, Cpu } from "lucide-react";
import { Project } from "@/Lib/types";
import { useState } from "react";

import { ProjectCard } from "@/components/ProjectCard";

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
