"use client";

import { useState } from "react";
import Lightbox from "@/components/ui/Lightbox";

const GALLERY_IMAGES = [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200",
    "https://images.unsplash.com/photo-1550966871-3ed3c622771f?q=80&w=1200",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200",
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200",
    "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=1200",
    "https://images.unsplash.com/photo-1467003909585-2f8a7270028d?q=80&w=1200"
];

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-background pb-24 pt-32">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">Gallery</h1>
                    <p className="text-text/60 max-w-2xl mx-auto">Moments of beauty, captured in light.</p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {GALLERY_IMAGES.map((src, idx) => (
                        <div
                            key={idx}
                            className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-surface cursor-pointer"
                            onClick={() => setSelectedImage(src)}
                        >
                            <img
                                src={src}
                                alt={`Gallery ${idx}`}
                                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white font-bold border border-white px-4 py-2 rounded-full backdrop-blur-sm">View</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Lightbox
                isOpen={!!selectedImage}
                imageSrc={selectedImage || ""}
                onClose={() => setSelectedImage(null)}
            />
        </div>
    );
}
