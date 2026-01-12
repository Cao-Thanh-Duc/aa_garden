"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselProps {
    children: React.ReactNode[];
    className?: string;
    autoPlay?: boolean;
    interval?: number;
}

export default function Carousel({
    children,
    className,
    autoPlay = false,
    interval = 5000
}: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        if (!autoPlay) return;
        const timer = setInterval(() => {
            next();
        }, interval);
        return () => clearInterval(timer);
    }, [currentIndex, autoPlay, interval]);

    const next = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1 === children.length ? 0 : prev + 1));
    };

    const prev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 < 0 ? children.length - 1 : prev - 1));
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    return (
        <div className={cn("relative group overflow-hidden", className)}>
            <div className="overflow-hidden relative h-full w-full">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                        }}
                        className="absolute inset-0 w-full h-full"
                    >
                        {children[currentIndex]}
                    </motion.div>
                </AnimatePresence>
            </div>

            <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-primary/90 p-2 rounded-full text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-10"
            >
                <ChevronLeft size={24} />
            </button>

            <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-primary/90 p-2 rounded-full text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-10"
            >
                <ChevronRight size={24} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {children.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setDirection(idx > currentIndex ? 1 : -1);
                            setCurrentIndex(idx);
                        }}
                        className={cn(
                            "w-2.5 h-2.5 rounded-full transition-all",
                            idx === currentIndex ? "bg-primary w-6" : "bg-white/50 hover:bg-white"
                        )}
                    />
                ))}
            </div>
        </div>
    );
}
