"use client";

import { useForm } from "react-hook-form";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";
import { cn } from "@/lib/utils";

type ContactFormData = {
    name: string;
    email: string;
    message: string;
};

export default function ContactPage() {
    const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

    const onSubmit = (data: ContactFormData) => {
        console.log(data);
        alert("Message sent!");
    };

    return (
        <div className="min-h-screen bg-background pb-24 pt-32">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">Get in Touch</h1>
                    <p className="text-text/60 max-w-2xl mx-auto">We'd love to hear from you. Questions, feedback, or just to say hello.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Info & Form */}
                    <div className="space-y-12">
                        {/* Contact Info Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-surface p-6 rounded-xl border border-white/5">
                                <MapPin className="text-primary mb-4" size={32} />
                                <h3 className="font-bold text-lg text-text mb-2">Location</h3>
                                <p className="text-text/60">123 Garden Avenue,<br />Eco City, 10000</p>
                            </div>
                            <div className="bg-surface p-6 rounded-xl border border-white/5">
                                <Phone className="text-primary mb-4" size={32} />
                                <h3 className="font-bold text-lg text-text mb-2">Call Us</h3>
                                <p className="text-text/60">+84 123 456 789<br />Mon-Sun, 9am - 10pm</p>
                            </div>
                            <div className="bg-surface p-6 rounded-xl border border-white/5">
                                <Mail className="text-primary mb-4" size={32} />
                                <h3 className="font-bold text-lg text-text mb-2">Email</h3>
                                <p className="text-text/60">contact@aagarden.com<br />events@aagarden.com</p>
                            </div>
                            <div className="bg-surface p-6 rounded-xl border border-white/5">
                                <Clock className="text-primary mb-4" size={32} />
                                <h3 className="font-bold text-lg text-text mb-2">Hours</h3>
                                <p className="text-text/60">Lunch: 11am - 3pm<br />Dinner: 5pm - 10pm</p>
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit(onSubmit)} className="bg-surface p-8 rounded-2xl border border-white/5 space-y-6">
                            <h3 className="text-2xl font-bold text-text mb-4">Send a Message</h3>

                            <div>
                                <input
                                    {...register("name", { required: true })}
                                    placeholder="Your Name"
                                    className={cn("w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-text focus:border-primary focus:outline-none", errors.name && "border-red-500")}
                                />
                            </div>
                            <div>
                                <input
                                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                    placeholder="Your Email"
                                    className={cn("w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-text focus:border-primary focus:outline-none", errors.email && "border-red-500")}
                                />
                            </div>
                            <div>
                                <textarea
                                    {...register("message", { required: true })}
                                    rows={4}
                                    placeholder="How can we help?"
                                    className={cn("w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-text focus:border-primary focus:outline-none resize-none", errors.message && "border-red-500")}
                                />
                            </div>
                            <button className="w-full bg-primary hover:bg-primary/90 text-background font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>

                    {/* Map */}
                    <div className="h-[600px] lg:h-auto bg-gray-800 rounded-3xl overflow-hidden border border-white/5 relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.460232421295!2d106.6652136757523!3d10.776019389372658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed0297b47b7%3A0x8e8317df8549320e!2sBitexco%20Financial%20Tower!5e0!3m2!1sen!2s!4v1714529328846!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 grayscale invert contrast-125 opacity-70 hover:opacity-100 transition-opacity duration-500"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
