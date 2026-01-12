/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#111811", // Deep Forest Dark
                primary: "#17cf17", // Neon Organic Green
                accent: "#cfa87f", // Copper/Gold
                surface: "#1c261c", // Cards/Sections
                text: "#f6f8f6",
            },
            fontFamily: {
                sans: ["var(--font-noto-sans)"],
                heading: ["var(--font-be-vietnam-pro)"],
            },
        },
    },
    plugins: [],
};
