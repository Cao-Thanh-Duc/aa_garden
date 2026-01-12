"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-surface text-text border-t border-white/5 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="block">
                            <span className="text-3xl font-heading font-bold text-primary">AA Garden</span>
                        </Link>
                        <p className="text-text/70 leading-relaxed">
                            Experience the perfect fusion of traditional flavors and modern organic luxury.
                            A sanctuary for your senses in the heart of the city.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-background transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-background transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-background transition-colors">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-heading font-bold text-accent mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/menu" className="text-text/70 hover:text-primary transition-colors flex items-center gap-2">
                                    <ArrowRight size={16} className="text-primary" /> Menu
                                </Link>
                            </li>
                            <li>
                                <Link href="/reservations" className="text-text/70 hover:text-primary transition-colors flex items-center gap-2">
                                    <ArrowRight size={16} className="text-primary" /> Reservations
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-text/70 hover:text-primary transition-colors flex items-center gap-2">
                                    <ArrowRight size={16} className="text-primary" /> Private Dining
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="text-text/70 hover:text-primary transition-colors flex items-center gap-2">
                                    <ArrowRight size={16} className="text-primary" /> Gallery
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-heading font-bold text-accent mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-text/70">
                                <MapPin size={20} className="text-primary shrink-0 mt-1" />
                                <span>123 Garden Avenue, Eco City,<br />Green District, 10000</span>
                            </li>
                            <li className="flex items-center gap-3 text-text/70">
                                <Phone size={20} className="text-primary shrink-0" />
                                <span>+84 123 456 789</span>
                            </li>
                            <li className="flex items-center gap-3 text-text/70">
                                <Mail size={20} className="text-primary shrink-0" />
                                <span>contact@aagarden.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-xl font-heading font-bold text-accent mb-6">Newsletter</h3>
                        <p className="text-text/70 mb-4">Subscribe for latest updates and exclusive offers.</p>
                        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary transition-colors"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary/90 text-background font-bold py-3 rounded-lg transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-text/50 text-sm">
                        © 2026 AA Garden Fusion. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <Link href="/policy" className="text-text/50 hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/support" className="text-text/50 hover:text-primary transition-colors">Terms of Service</Link>
                        <Link href="/support" className="text-text/50 hover:text-primary transition-colors">FAQ</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
