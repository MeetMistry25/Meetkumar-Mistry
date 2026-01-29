"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

interface ZoomableImageProps {
    src: string;
    alt: string;
}

export default function ZoomableImage({ src, alt }: ZoomableImageProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                className="relative w-full h-full cursor-zoom-in group/image"
                onClick={() => setIsOpen(true)}
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-contain bg-black/50"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover/image:opacity-100 duration-300">
                    <ZoomIn className="text-white drop-shadow-md" size={32} />
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10 cursor-zoom-out"
                    >
                        <button
                            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={32} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="relative w-full h-full max-w-7xl max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={src}
                                alt={alt}
                                fill
                                className="object-contain"
                                quality={100}
                                priority
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
