import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2 } from 'lucide-react';

import InfiniteSlider from './InfiniteSlider';

const Hero = () => {
    const avatars = [
        "https://randomuser.me/api/portraits/women/44.jpg",
        "https://randomuser.me/api/portraits/men/32.jpg",
        "https://randomuser.me/api/portraits/women/26.jpg",
        "https://randomuser.me/api/portraits/men/86.jpg",
        "https://randomuser.me/api/portraits/women/65.jpg"
    ];

    return (
        <section className="py-24 relative text-center min-h-screen flex flex-col items-center justify-center overflow-hidden">
            <div className="flex flex-col items-center max-w-[1200px] mx-auto px-6 relative z-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-4 mb-12 bg-white/3 px-4 py-2 rounded-full border border-white/5"
                >
                    <div className="flex">
                        {avatars.map((avatar, i) => (
                            <div key={i} className={`w-8 h-8 rounded-full border-2 border-bg-dark overflow-hidden bg-[#222] ${i > 0 ? '-ml-2' : ''}`}>
                                <img src={avatar} alt="user" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col items-start gap-0.5">
                        <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} size={14} fill="#FFD700" color="#FFD700" />
                            ))}
                        </div>
                        <span className="text-[0.8rem] text-text-secondary font-medium">20,000+ creators</span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-[2.5rem] md:text-[3.5rem] lg:text-[5rem] leading-none font-black mb-8 max-w-[1100px] tracking-tight"
                >
                    Done-for-You Infoproducts <br />
                    <span className="text-accent-red">to Grow Your Business</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-[1.25rem] text-text-secondary max-w-[800px] mb-16 font-normal leading-[1.6]"
                >
                    You can instantly have your own ebooks, courses, and more to sell or <br className="hidden md:block" />
                    plug into your offers. Without high investments or months of creation.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center mb-16"
                >
                    <div className="flex items-center gap-3 font-bold text-[1.1rem]">
                        <CheckCircle2 size={24} fill="var(--accent-red)" color="white" />
                        <span>Pre-Made Products</span>
                    </div>
                    <div className="flex items-center gap-3 font-bold text-[1.1rem]">
                        <CheckCircle2 size={24} fill="var(--accent-red)" color="white" />
                        <span>Fully Custom Creation</span>
                    </div>
                </motion.div>

                {/* Search Bar Section (from 2.png) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="w-full max-w-2xl mx-auto mb-12 px-4"
                >
                    <div className="relative group">
                        <input
                            type="text"
                            placeholder="Find your next winning products"
                            className="w-full bg-white text-black py-4 px-8 rounded-full text-lg font-medium focus:outline-none shadow-2xl shadow-red-500/10 placeholder:text-gray-400"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-accent-red p-3 rounded-full text-white hover:scale-105 transition-transform duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                        </button>
                    </div>
                    <p className="mt-4 text-sm font-medium text-white/40 tracking-wide uppercase">Browse 1000+ resources</p>
                </motion.div>
            </div>

            {/* Replaced static gallery with InfiniteSlider */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="w-full relative z-10"
            >
                <InfiniteSlider />
            </motion.div>

        </section>
    );
};

export default Hero;
