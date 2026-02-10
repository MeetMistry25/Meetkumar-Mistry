"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/Lib/types";
import { Github, ExternalLink, Shield, Layers, Code, ArrowRight, ChevronDown, Trophy, Lock, Cpu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPageContent({ projects }: { projects: Project[] }) {
    return (
        <div className="py-24 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-20 text-center"
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-6">ALL <span className="text-gradient">PROJECTS</span></h1>
                <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
                    A deep dive into my engineering portfolio. Each project represents a solution to a real-world problem, built with focus on scalability and security.
                </p>
            </motion.div>

            <div className="flex flex-col gap-16">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </div>
    );
}
