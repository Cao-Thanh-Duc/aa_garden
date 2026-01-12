"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Calendar, Clock, Users, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

type FormData = {
    name: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    guests: number;
    requests?: string;
};

export default function ReservationsPage() {
    const [success, setSuccess] = useState(false);
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log(data);
        setSuccess(true);
    };

    return (
        <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center py-32 px-4">
            {/* Background */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550966871-3ed3c622771f?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/50" />

            <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 lg:grid-cols-5 bg-surface rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                {/* Info Side */}
                <div className="col-span-2 bg-primary/10 p-10 flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl font-heading font-bold text-primary mb-6">Book Your Table</h2>
                        <p className="text-text/70 mb-8 leading-relaxed">
                            Join us for an unforgettable dining experience.
                            We recommend booking at least 24 hours in advance for weekend dinners.
                        </p>
                        <ul className="space-y-4 text-text/80">
                            <li className="flex items-center gap-3">
                                <Clock className="text-accent" />
                                <span>Daily: 11:00 AM - 10:00 PM</span>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-12">
                        <p className="text-xs text-text/40">
                            *For groups larger than 12, please contact our private events team directly.
                        </p>
                    </div>
                </div>

                {/* Form Side */}
                <div className="col-span-3 p-10 bg-surface">
                    {success ? (
                        <div className="h-full flex flex-col items-center justify-center text-center">
                            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-6">
                                <Calendar size={40} />
                            </div>
                            <h3 className="text-2xl font-bold text-text mb-2">Reservation Confirmed!</h3>
                            <p className="text-text/60">We look forward to welcoming you.</p>
                            <button
                                onClick={() => setSuccess(false)}
                                className="mt-8 text-primary font-bold hover:underline"
                            >
                                Make another reservation
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-text/60">Full Name</label>
                                    <input
                                        {...register("name", { required: true })}
                                        className={cn("w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-text focus:border-primary focus:outline-none", errors.name && "border-red-500")}
                                        placeholder="John Doe"
                                    />
                                </div>
                                {/* Phone */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-text/60">Phone</label>
                                    <input
                                        {...register("phone", { required: true })}
                                        className={cn("w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-text focus:border-primary focus:outline-none", errors.phone && "border-red-500")}
                                        placeholder="+1 234 567 890"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-text/60">Email</label>
                                <input
                                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                    className={cn("w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-text focus:border-primary focus:outline-none", errors.email && "border-red-500")}
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Date */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-text/60 flex items-center gap-2"><Calendar size={14} /> Date</label>
                                    <input
                                        type="date"
                                        {...register("date", { required: true })}
                                        className={cn("w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-text focus:border-primary focus:outline-none  scheme-dark", errors.date && "border-red-500")}
                                    />
                                </div>
                                {/* Time */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-text/60 flex items-center gap-2"><Clock size={14} /> Time</label>
                                    <select
                                        {...register("time", { required: true })}
                                        className={cn("w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-text focus:border-primary focus:outline-none", errors.time && "border-red-500")}
                                    >
                                        <option value="">Select Time</option>
                                        <option value="17:00">5:00 PM</option>
                                        <option value="18:00">6:00 PM</option>
                                        <option value="19:00">7:00 PM</option>
                                        <option value="20:00">8:00 PM</option>
                                        <option value="21:00">9:00 PM</option>
                                    </select>
                                </div>
                                {/* Guests */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-text/60 flex items-center gap-2"><Users size={14} /> Guests</label>
                                    <select
                                        {...register("guests", { required: true })}
                                        className={cn("w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-text focus:border-primary focus:outline-none", errors.guests && "border-red-500")}
                                    >
                                        {[2, 3, 4, 5, 6, 7, 8, '9+'].map(num => (
                                            <option key={num} value={num}>{num} People</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Requests */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-text/60 flex items-center gap-2"><MessageSquare size={14} /> Special Requests</label>
                                <textarea
                                    {...register("requests")}
                                    rows={3}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-text focus:border-primary focus:outline-none resize-none"
                                    placeholder="Allergies, special occasion, seat preference..."
                                />
                            </div>

                            <button
                                disabled={isSubmitting}
                                className="w-full py-4 bg-primary hover:bg-primary/90 text-background font-bold rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                            >
                                {isSubmitting ? "Processing..." : "Confirm Reservation"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
