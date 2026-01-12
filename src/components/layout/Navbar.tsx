"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Search, Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils"; // Assuming a utils file exists or I should inline it. Wait, I don't know if utils exists.
// If utils doesn't exist, I'll inline the class merging or create it.
// Checking file listing earlier: src/lib/utils.ts was not shown. src/components didn't exist.
// I'll create a simple utils.ts or just inline clsx/tailwind-merge here to be safe.
// Actually, with "Senior Frontend Developer" persona, I should probably create the util.

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Menu", href: "/menu" },
    { name: "Reservations", href: "/reservations" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 ${scrolled
                        ? "bg-background/80 backdrop-blur-md shadow-lg py-2"
                        : "bg-transparent py-4"
                    }`}
            >
                <div className="container mx-auto px-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className="text-2xl font-heading font-bold text-primary group-hover:text-accent transition-colors">
                            AA Garden
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden xl:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors hover:text-primary ${pathname === link.href ? "text-primary" : "text-text/80"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <button className="p-2 text-text/80 hover:text-primary transition-colors">
                            <Search size={20} />
                        </button>
                        <Link href="/login" className="p-2 text-text/80 hover:text-primary transition-colors">
                            <User size={20} />
                        </Link>
                        <Link
                            href="/reservations"
                            className="bg-primary hover:bg-primary/90 text-background font-bold py-2 px-6 rounded-full transition-all transform hover:scale-105"
                        >
                            Book Table
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="xl:hidden p-2 text-text"
                        onClick={() => setIsOpen(true)}
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </header>

            {/* Mobile Drawer (Sheet) */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                        />

                        {/* Drawer Content */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 bottom-0 w-[80%] max-w-sm bg-surface border-l border-white/10 z-[70] p-6 flex flex-col shadow-2xl"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <span className="text-xl font-heading font-bold text-primary">Menu</span>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 text-text/60 hover:text-text transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto space-y-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`flex items-center justify-between p-3 rounded-lg transition-colors ${pathname === link.href
                                                ? "bg-primary/10 text-primary"
                                                : "text-text hover:bg-white/5"
                                            }`}
                                    >
                                        <span className="text-lg font-medium">{link.name}</span>
                                        <ChevronRight size={16} className="opacity-50" />
                                    </Link>
                                ))}

                                <hr className="border-white/10 my-4" />

                                <div className="space-y-2">
                                    <Link href="/profile" className="flex items-center gap-3 p-3 text-text/80 hover:text-primary transition-colors">
                                        <User size={20} />
                                        My Account
                                    </Link>
                                    <Link href="/policy" className="block p-3 text-text/60 hover:text-text transition-colors">
                                        Policy
                                    </Link>
                                    <Link href="/support" className="block p-3 text-text/60 hover:text-text transition-colors">
                                        Support
                                    </Link>
                                </div>
                            </div>

                            <div className="mt-6">
                                <Link
                                    href="/reservations"
                                    className="flex items-center justify-center w-full bg-accent hover:bg-accent/90 text-background font-bold py-3 rounded-lg transition-colors"
                                >
                                    Book A Table
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
