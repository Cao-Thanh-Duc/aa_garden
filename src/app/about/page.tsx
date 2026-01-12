"use client";



export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background pb-24">
            {/* Hero */}
            <div className="h-[60vh] relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">Our Story</h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">Cultivating connection through culinary excellence</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-20">
                {/* Story Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <div>
                        <h2 className="text-3xl font-heading font-bold text-text mb-8">From Seed to Table</h2>
                        <div className="space-y-6 text-text/70 text-lg leading-relaxed">
                            <p>
                                AA Garden Fusion began with a simple seed—the idea that luxury dining could be deeply rooted in nature.
                                Founded in 2024, we transformed an abandoned urban lot into a flourishing sanctuary of biodiversity.
                            </p>
                            <p>
                                Our on-site garden supplies 70% of the herbs and edible flowers used in our kitchen.
                                What we don&apos;t grow ourselves, we source from local artisan farmers who share our commitment
                                to regenerative agriculture.
                            </p>
                            <p>
                                Every plate is a tribute to the changing seasons, designed to harmonize traditional flavors with modern innovation.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img src="https://images.unsplash.com/photo-1599581896796-7c936087b203?q=80&w=600&auto=format&fit=crop" className="rounded-2xl mt-8" alt="Garden" />
                        <img src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=600&auto=format&fit=crop" className="rounded-2xl" alt="Fresh Produce" />
                    </div>
                </div>

                {/* Chef Section */}
                <div className="bg-surface rounded-3xl p-10 md:p-16 mb-32 border border-white/5">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                        <div className="md:col-span-1">
                            <img
                                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop"
                                alt="Executive Chef"
                                className="rounded-xl shadow-2xl w-full"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <span className="text-primary font-bold uppercase tracking-widest mb-2 block">Executive Chef</span>
                            <h2 className="text-4xl font-heading font-bold text-text mb-6">Elena Rossi</h2>
                            <p className="text-text/70 text-lg mb-8 leading-relaxed">
                                With over 15 years of experience in Michelin-starred kitchens across Europe and Asia,
                                Chef Elena brings a unique global perspective to AA Garden Fusion.
                                Her philosophy is simple: &quot;Respect the ingredient, and it will speak for itself.&quot;
                            </p>
                            <img src="/signature.png" alt="Chef Signature" className="h-12 opacity-50 invert" />
                        </div>
                    </div>
                </div>

                {/* Atmosphere Grid */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-heading font-bold text-text mb-4">The Atmosphere</h2>
                    <p className="text-text/60">A sanctuary for the senses</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="h-64 rounded-xl overflow-hidden"><img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Interior" /></div>
                    <div className="h-64 rounded-xl overflow-hidden md:col-span-2"><img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Plating" /></div>
                    <div className="h-64 rounded-xl overflow-hidden"><img src="https://images.unsplash.com/photo-1550966871-3ed3c622771f?q=80&w=600" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Vibe" /></div>
                </div>
            </div>
        </div>
    );
}
