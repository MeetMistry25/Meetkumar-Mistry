"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { supabase } from "@/Lib/supabase";

export default function ContactForm() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1500));

        try {
            const { error } = await supabase
                .from("messages")
                .insert([formState]);

            if (error) throw error;

            setStatus("success");
            setFormState({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("Error submitting form:", error);
            // In production, handle error properly.
            setStatus("error");
            alert("Failed to send message. Please try again.");
        }
    };

    return (
        <div className="w-full max-w-lg mx-auto">
            {status === "success" ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8 text-center"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-500 mb-6">
                        <CheckCircle size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-zinc-400">
                        Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                    <button
                        onClick={() => setStatus("idle")}
                        className="mt-6 text-sm text-green-500 hover:text-green-400 font-medium"
                    >
                        Send another message
                    </button>
                </motion.div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            required
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg bg-zinc-900/50 border border-zinc-800 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            placeholder="John Doe"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            required
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg bg-zinc-900/50 border border-zinc-800 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            required
                            rows={4}
                            value={formState.message}
                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg bg-zinc-900/50 border border-zinc-800 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                            placeholder="Tell me about your project..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {status === "loading" ? (
                            <>
                                <Loader2 size={20} className="animate-spin" /> Sending...
                            </>
                        ) : (
                            <>
                                Send Message <Send size={20} />
                            </>
                        )}
                    </button>
                </form>
            )}
        </div>
    );
}
