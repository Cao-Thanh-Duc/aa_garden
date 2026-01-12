"use client";

import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

const BLOG_POSTS = [
    {
        id: 1,
        title: "The Art of Organic Sourcing",
        date: "Oct 12, 2025",
        author: "Elena Rossi",
        image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=800&auto=format&fit=crop",
        excerpt: "How we partner with local farmers to bring the freshest ingredients to your plate. Our commitment to farm-to-table dining is more than just a tagline—it's a way of life."
    },
    {
        id: 2,
        title: "Winter Menu Unveiled",
        date: "Nov 05, 2025",
        author: "Sous Chef Marco",
        image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=800&auto=format&fit=crop",
        excerpt: "Discover the warm, comforting flavors of our new seasonal collection. Featuring root vegetables, hearty grains, and slow-cooked comforts perfect for the chilly weather."
    },
    {
        id: 3,
        title: "Sustainable Dining Practices",
        date: "Dec 01, 2025",
        author: "Sustainability Lead",
        image: "https://images.unsplash.com/photo-1542601906990-24d4c16419d9?q=80&w=800&auto=format&fit=crop",
        excerpt: "Our commitment to zero waste and eco-friendly restaurant management. From composting to energy-efficient appliances, see how we minimize our footprint."
    }
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-background pb-24 pt-32">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">Journal</h1>
                    <p className="text-text/60 max-w-2xl mx-auto">Stories, recipes, and insights from our team.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_POSTS.map((post) => (
                        <article key={post.id} className="bg-surface rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all group flex flex-col">
                            <div className="h-56 overflow-hidden relative">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-2">
                                    <Calendar size={12} />
                                    {post.date}
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex items-center gap-2 text-text/50 text-sm mb-4">
                                    <User size={14} />
                                    <span>{post.author}</span>
                                </div>
                                <h2 className="text-2xl font-bold text-text mb-4 group-hover:text-primary transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-text/70 mb-6 flex-1">
                                    {post.excerpt}
                                </p>
                                <Link href={`/blog/${post.id}`} className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
                                    Read Full Article <ArrowRight size={16} />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
