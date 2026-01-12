"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Utensils, Wine, Coffee } from "lucide-react";

// Types
type Category = "Starters" | "Mains" | "Desserts" | "Drinks";

const CATEGORIES: { id: Category; label: string; icon: any }[] = [
    { id: "Starters", label: "Starters", icon: Leaf },
    { id: "Mains", label: "Mains", icon: Utensils },
    { id: "Desserts", label: "Desserts", icon: Coffee },
    { id: "Drinks", label: "Drinks", icon: Wine },
];

const MENU_ITEMS = [
    // STARTERS
    {
        id: 101,
        title: "Truffle Mushroom Risotto",
        price: "$24",
        description: "Arborio rice, wild mushrooms, black truffle oil, parmesan crisp.",
        category: "Starters",
        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 102,
        title: "Burrata & Heirloom Tomato",
        price: "$21",
        description: "Fresh burrata, basil pesto, balsamic reduction, toasted pine nuts.",
        category: "Starters",
        image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 103,
        title: "Garden Carpaccio",
        price: "$22",
        description: "Thinly sliced beetroot, goat cheese mousse, walnuts, citrus vinaigrette.",
        category: "Starters",
        image: "https://images.unsplash.com/photo-1547496502-ffa2264a36b5?q=80&w=800&auto=format&fit=crop"
    },

    // MAINS
    {
        id: 201,
        title: "Pan-Seared Sea Bass",
        price: "$38",
        description: "Sustainably sourced bass, seasonal organic vegetables, lemon butter sauce.",
        category: "Mains",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 202,
        title: "Herb-Crusted Lamb Rack",
        price: "$45",
        description: "Grass-fed lamb, fondant potatoes, mint pea purée, red wine jus.",
        category: "Mains",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 203,
        title: "Wild Mushroom Gnocchi",
        price: "$32",
        description: "Handmade potato gnocchi, sage butter, forest mushrooms, pecorino.",
        category: "Mains",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800&auto=format&fit=crop"
    },

    // DESSERTS
    {
        id: 301,
        title: "Dark Chocolate Fondant",
        price: "$16",
        description: "Molten center, raspberry coulis, vanilla bean ice cream.",
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 302,
        title: "Lemon Basil Tart",
        price: "$14",
        description: "Zesty lemon curd, basil infused crust, italian meringue.",
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=800&auto=format&fit=crop"
    },

    // DRINKS
    {
        id: 401,
        title: "Garden Signature Botanical",
        price: "$16",
        description: "Infused gin, elderflower, cucumber, fresh herbs from our garden.",
        category: "Drinks",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 402,
        title: "Organic Merlot",
        price: "$18",
        description: "Napa Valley, 2019. Notes of plum, cherry and mocha.",
        category: "Drinks",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop"
    },
];

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState<Category>("Starters");

    const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

    return (
        <div className="min-h-screen bg-background pb-24">
            {/* Header */}
            <div className="relative h-[400px] flex items-center justify-center overflow-hidden mb-16">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-4">Our Menu</h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">Seasonal ingredients, masterful techniques</p>
                </div>
            </div>

            <div className="container mx-auto px-4">
                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`
                        flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all
                        ${activeCategory === cat.id
                                    ? 'bg-primary text-background scale-105 shadow-lg shadow-primary/20'
                                    : 'bg-surface text-text/60 hover:text-text hover:bg-white/10 border border-white/5'}
                    `}
                        >
                            <cat.icon size={20} />
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Menu Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="bg-surface rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-colors group flex flex-col sm:flex-row h-full sm:h-48"
                            >
                                <div className="w-full sm:w-48 h-48 bg-gray-800 shrink-0 overflow-hidden relative">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6 flex flex-col justify-center flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-text group-hover:text-primary transition-colors">{item.title}</h3>
                                        <span className="text-accent font-heading font-bold text-lg">{item.price}</span>
                                    </div>
                                    <p className="text-text/60 text-sm">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}
