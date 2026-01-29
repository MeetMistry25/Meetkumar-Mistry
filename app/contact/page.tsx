import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
    return (
        <div className="py-24 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                {/* Left Column: Info */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
                    <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
                        I'm currently responsible for building the frontend of a stealth startup.
                        However, I'm always open to discussing new projects, creative ideas,
                        or opportunities to be part of your visions.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-lg text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                                <a href="mailto:meetkumarmistry25@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
                                    meetkumarmistry25@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-lg text-primary">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                                <p className="text-zinc-400">Ahmedabad, India</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <h3 className="text-lg font-semibold text-white mb-6">Follow Me</h3>
                        <div className="flex gap-4">
                            <Link href="https://github.com/MeetMistry25" className="p-3 bg-white/5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-all">
                                <Github size={20} />
                            </Link>
                            <Link href="https://www.linkedin.com/in/meetkumar-mistry-97501126b" className="p-3 bg-white/5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-all">
                                <Linkedin size={20} />
                            </Link>
                            <Link href="https://twitter.com" className="p-3 bg-white/5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-all">
                                <Twitter size={20} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className="bg-zinc-900/30 glass p-8 md:p-10 rounded-3xl border border-white/5">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
