"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Leaf, Utensils, Wine, Calendar } from "lucide-react";
import Carousel from "@/components/ui/Carousel";
import Accordion from "@/components/ui/Accordion";
import { cn } from "@/lib/utils";

// Real Images from Unsplash
const HERO_BG = "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1920&auto=format&fit=crop"; // Atmospheric Garden Restaurant
const HERO_VIDEO_PLACEHOLDER = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1920&auto=format&fit=crop"; // Backup for video

// Data
const FEATURED_MENU = [
  {
    id: 1,
    title: "Truffle Mushroom Risotto",
    price: "$24",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=800&auto=format&fit=crop", // Risotto
    description: "Arborio rice, wild mushrooms, black truffle oil, parmesan crisp.",
    category: "Starters",
    icon: Leaf
  },
  {
    id: 2,
    title: "Pan-Seared Sea Bass",
    price: "$38",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop", // Sea Bass/Fish
    description: "Sustainably sourced bass, seasonal organic vegetables, lemon butter sauce.",
    category: "Mains",
    icon: Utensils
  },
  {
    id: 3,
    title: "Garden Signature Botanical",
    price: "$16",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop", // Cocktail
    description: "Infused gin, elderflower, cucumber, fresh herbs from our garden.",
    category: "Drinks",
    icon: Wine
  }
];

const REVIEWS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Food Critic",
    content: "An absolute masterpiece. The fusion of flavors is unlike anything else in the city.",
    rating: 5,
    avatar: "S"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Regular Guest",
    content: "The ambiance is stunning, but the food steals the show. The Private Dining experience was flawless.",
    rating: 5,
    avatar: "M"
  },
  {
    id: 3,
    role: "Event Planner",
    name: "Emma Wilson",
    content: "AA Garden Fusion has become my go-to venue for high-end corporate events. Impeccable service.",
    rating: 5,
    avatar: "E"
  }
];

const FAQS = [
  {
    question: "Do you cater to dietary restrictions?",
    answer: "Absolutely. Our menu is inclusive of vegan, gluten-free, and nut-free options. Please inform your server of any allergies upon arrival."
  },
  {
    question: "Is there a dress code?",
    answer: "We recommend Smart Casual. We want you to feel comfortable but elegant."
  },
  {
    question: "How far in advance should I book for private dining?",
    answer: "For private events, we recommend booking at least 2 weeks in advance to ensure availability and menu customization."
  }
];

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="flex flex-col min-h-screen">

      {/* 1. Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div
            className="w-full h-full bg-cover bg-center animate-ken-burns"
            style={{ backgroundImage: `url(${HERO_BG})` }}
          />
        </div>

        <div className="relative z-20 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block py-1 px-3 border border-primary/50 text-primary uppercase tracking-widest text-sm mb-6 rounded-full bg-black/30 backdrop-blur-md">
              Est. 2024
            </span>
            <h1 className="text-5xl md:text-8xl font-heading font-bold text-white mb-8 leading-none">
              AA Garden <br />
              <span className="text-primary">Fusion</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-12 font-light">
              Where organic ingredients blend with avant-garde culinary techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/menu"
                className="bg-primary hover:bg-primary/90 text-background font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-primary/20"
              >
                View Menu
              </Link>
              <Link
                href="/reservations"
                className="bg-white/10 hover:bg-white text-white hover:text-background backdrop-blur-md border border-white/30 font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105"
              >
                Book Your Table
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Intro Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute -left-20 top-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                <img
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop"
                  alt="Chef Plating"
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}
            >
              <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Our Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-8">
                The Organic <br /> Luxury Experience
              </h2>
              <p className="text-text/70 text-lg leading-relaxed mb-8">
                At AA Garden Fusion, we believe that luxury shouldn&apos;t come at the cost of nature.
                Our team cultivates a deep connection with the land, sourcing exclusively from
                organic farms and sustainable fisheries. Each dish is a story of season, soil, and skill,
                crated to stimulate all your senses.
              </p>
              <Link href="/about" className="text-primary font-bold hover:text-accent transition-colors inline-flex items-center gap-2 group">
                Read Our Story <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Featured Menu Slider */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-text mb-4">Curated Flavors</h2>
            <p className="text-text/60 max-w-2xl mx-auto">
              A glimpse into our seasonal tasting menu, featuring the finest ingredients of the Winter harvest.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Carousel
              className="h-[500px] md:h-[400px] rounded-2xl overflow-hidden border border-white/5 bg-background shadow-2xl"
              autoPlay
              interval={6000}
            >
              {FEATURED_MENU.map((item) => (
                <div key={item.id} className="h-full w-full flex flex-col md:flex-row">
                  <div className="h-1/2 md:h-full md:w-1/2 relative">
                    <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-primary font-bold bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                      <item.icon size={16} />
                      <span className="text-xs uppercase tracking-wider">{item.category}</span>
                    </div>
                  </div>
                  <div className="h-1/2 md:h-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl md:text-3xl font-bold text-text">{item.title}</h3>
                      <span className="text-accent font-heading font-bold text-2xl">{item.price}</span>
                    </div>
                    <p className="text-text/70 text-lg mb-8 leading-relaxed">{item.description}</p>
                    <Link
                      href="/menu"
                      className="self-start text-sm font-bold text-primary hover:text-white border border-primary hover:bg-primary px-6 py-3 rounded-lg transition-all"
                    >
                      View Full Menu
                    </Link>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* 4. Service Spotlight */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2000&auto=format&fit=crop"
                alt="Private Dining"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/70" />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-16">
              <div className="flex flex-col justify-center">
                <span className="text-primary font-bold uppercase tracking-widest mb-4">Exclusive Services</span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Private Dining & Events</h2>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  Host your next celebration in our dedicated garden pavilion.
                  Whether it&apos;s an intimate proposal, a corporate gala, or a family reunion,
                  our team crafts bespoke experiences tailored to your desires.
                </p>
                <Link href="/services" className="self-start px-8 py-4 bg-accent text-background font-bold rounded-lg hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20">
                  Inquire Now
                </Link>
              </div>
              {/* Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Utensils className="text-primary mb-4" size={32} />
                  <h3 className="font-bold text-white text-lg mb-2">Customized Menus</h3>
                  <p className="text-gray-400 text-sm">Chef-curated menus tailored to your guests.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Wine className="text-primary mb-4" size={32} />
                  <h3 className="font-bold text-white text-lg mb-2">Sommelier Pairing</h3>
                  <p className="text-gray-400 text-sm">Expert wine pairing for every course.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Leaf className="text-primary mb-4" size={32} />
                  <h3 className="font-bold text-white text-lg mb-2">Floral Decoration</h3>
                  <p className="text-gray-400 text-sm">Fresh arrangements from our garden.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Calendar className="text-primary mb-4" size={32} />
                  <h3 className="font-bold text-white text-lg mb-2">Event Planning</h3>
                  <p className="text-gray-400 text-sm">Dedicated coordinator for your event.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials & FAQ */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Guest Love Slider */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-text mb-10">Guest Experiences</h2>
              <Carousel className="h-64 rounded-xl" autoPlay={false}>
                {REVIEWS.map((review) => (
                  <div key={review.id} className="h-full bg-background p-8 rounded-xl border border-white/5 relative flex flex-col justify-center">
                    <div className="flex gap-1 mb-6 text-accent">
                      {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                    </div>
                    <p className="text-text/80 mb-6 italic text-lg leading-relaxed">&quot;{review.content}&quot;</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-bold text-primary text-xl">
                        {review.avatar}
                      </div>
                      <div>
                        <h4 className="font-bold text-text">{review.name}</h4>
                        <p className="text-sm text-text/50">{review.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>

            {/* FAQ Accordion */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-text mb-10">Common Questions</h2>
              <Accordion items={FAQS} />
              <div className="mt-8 text-right">
                <Link href="/support" className="text-primary hover:text-accent transition-colors font-medium inline-flex items-center gap-2">
                  View All FAQs <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
