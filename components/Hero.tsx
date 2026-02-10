"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Download, Terminal } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-[95vh] flex flex-col justify-center px-6 pt-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] delay-1000 animate-pulse" />
            </div>

            <div className="max-w-7xl mx-auto z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in-up">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Available for Full-time Roles
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight leading-none">
                        Meetkumar <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-accent">Mistry</span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-medium text-zinc-400 mb-6">
                        Full Stack Engineer ( <span className="text-zinc-200">.NET</span> + <span className="text-zinc-200">MERN</span> )
                    </h2>

                    <p className="text-lg text-zinc-400 max-w-xl mb-8 leading-relaxed">
                        I build <span className="text-white font-medium">enterprise-grade applications</span> that scale.
                        Specialized in architecting secure backends with ASP.NET Core and crafting responsive UIs with Angular & React.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-10">
                        <Link
                            href="#projects"
                            className="group px-6 py-3 bg-white text-black rounded-lg font-bold hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                        >
                            View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <a
                            href="/Meetkumar Mistry_CV.pdf"
                            download
                            className="px-6 py-3 border border-white/20 bg-white/5 backdrop-blur-sm text-white rounded-lg font-medium hover:bg-white/10 transition-all flex items-center gap-2"
                        >
                            Download CV <Download size={18} />
                        </a>
                    </div>

                    {/* Social Proof Stats */}
                    {/* <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8 max-w-md">
                        <div>
                            <h3 className="text-2xl font-bold text-white">2+</h3>
                            <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Years Exp.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white">20+</h3>
                            <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Tech Skills</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white">2</h3>
                            <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Enterprise Apps</p>
                        </div>
                    </div> */}
                </motion.div>

                {/* Visual / Tech Stack Showcase on the Right (Desktop) */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="hidden lg:block relative"
                >
                    <div className="relative z-10 bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
                        <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                            <Terminal className="text-zinc-500" size={20} />
                            <span className="text-sm font-mono text-zinc-400">stack_capabilities.json</span>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {/* Backend Power */}
                            <div className="p-4 rounded-xl bg-black/40 border border-white/5 hover:border-primary/30 transition-colors group">
                                <div className="flex items-center justify-between mb-2">
                                    <h4 className="text-zinc-300 font-medium">Backend Core</h4>
                                    <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                                </div>
                                <div className="flex gap-3 text-2xl text-zinc-500 grayscale group-hover:grayscale-0 transition-all duration-300">
                                    <i className="devicon-dotnetcore-plain colored hover:scale-110 transition-transform" title=".NET Core"></i>
                                    <i className="devicon-nodejs-plain colored hover:scale-110 transition-transform" title="Node.js"></i>
                                    <i className="devicon-csharp-plain colored hover:scale-110 transition-transform" title="C#"></i>
                                </div>
                            </div>

                            {/* Frontend Magic */}
                            <div className="p-4 rounded-xl bg-black/40 border border-white/5 hover:border-blue-500/30 transition-colors group">
                                <div className="flex items-center justify-between mb-2">
                                    <h4 className="text-zinc-300 font-medium">Frontend UI</h4>
                                    <div className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                                </div>
                                <div className="flex gap-3 text-2xl text-zinc-500 grayscale group-hover:grayscale-0 transition-all duration-300">
                                    <i className="devicon-angularjs-plain colored hover:scale-110 transition-transform" title="Angular"></i>
                                    <i className="devicon-react-original colored hover:scale-110 transition-transform" title="React"></i>
                                    <i className="devicon-tailwindcss-original colored hover:scale-110 transition-transform" title="Tailwind"></i>
                                    <i className="devicon-typescript-plain colored hover:scale-110 transition-transform" title="TypeScript"></i>
                                </div>
                            </div>

                            {/* Database */}
                            <div className="p-4 rounded-xl bg-black/40 border border-white/5 hover:border-yellow-500/30 transition-colors group">
                                <div className="flex items-center justify-between mb-2">
                                    <h4 className="text-zinc-300 font-medium">Databases</h4>
                                    <div className="h-2 w-2 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
                                </div>
                                <div className="flex gap-3 text-2xl text-zinc-500 grayscale group-hover:grayscale-0 transition-all duration-300">
                                    <i className="devicon-mongodb-plain colored hover:scale-110 transition-transform" title="MongoDB"></i>
                                    <i className="devicon-postgresql-plain colored hover:scale-110 transition-transform" title="PostgreSQL"></i>
                                    <i className="devicon-sqlite-plain colored hover:scale-110 transition-transform" title="SQLite"></i>
                                </div>
                            </div>

                            {/* Cloud & Tools */}
                            <div className="p-4 rounded-xl bg-black/40 border border-white/5 hover:border-purple-500/30 transition-colors group">
                                <div className="flex items-center justify-between mb-2">
                                    <h4 className="text-zinc-300 font-medium">Tools</h4>
                                    <div className="h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                                </div>
                                <div className="flex gap-3 text-2xl text-zinc-500 grayscale group-hover:grayscale-0 transition-all duration-300">
                                    <i className="devicon-git-plain colored hover:scale-110 transition-transform" title="Git"></i>
                                    <i className="devicon-github-original colored hover:scale-110 transition-transform" title="GitHub"></i>
                                    <i className="devicon-vscode-plain colored hover:scale-110 transition-transform" title="VS Code"></i>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                <Link href="https://github.com/MeetMistry25" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                                    <Github size={20} />
                                </Link>
                                <Link href="https://www.linkedin.com/in/meet-mistry-25092004m" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                                    <Linkedin size={20} />
                                </Link>
                            </div>
                            <span className="text-xs font-mono text-primary animate-pulse">● System Online</span>
                        </div>
                    </div>

                    {/* Decorative blobs behind the card */}
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10" />
                    <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -z-10" />
                </motion.div>
            </div>
        </section>
    );
}
