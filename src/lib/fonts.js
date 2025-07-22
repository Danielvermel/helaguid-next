// src/lib/fonts.js
import { Inter, Poppins } from "next/font/google";

export const poppins = Poppins({
    weight: ["400", "500", "600", "700"], // List all the font weights you actually use
    subsets: ["latin"],
    display: "swap",
    variable: "--font-poppins", // Creates a CSS variable for Tailwind
});

export const inter = Inter({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter", // Creates a CSS variable for Tailwind
});
