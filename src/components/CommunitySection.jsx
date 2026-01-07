import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Quote, Printer, Book, FileText, CheckCircle, Users, Trophy } from 'lucide-react';

const testimonials = [
    {
        name: "Jacob L.",
        country: "United States",
        title: "The resources have been a fantastic addition to our online academy",
        content: "Their high-quality content has enriched our educational offerings, making it easier for our students to learn.",
        image: "https://framerusercontent.com/images/3wX5S7ucpAoi8Bpn5UjazFUzF54.jpeg?scale-down-to=512&width=800&height=800"
    },
    {
        name: "Edwin P.",
        country: "Singapore",
        title: "I didn't expect the quality of the products to be as good as they are",
        content: "Everything is visually polished, content-rich, and ready to sell. Just add your own logo. It’s a huge time saver.",
        image: "https://framerusercontent.com/images/eENqRg4mRcdfWbCaDxORpGyfOc.jpg?scale-down-to=512&width=2048&height=2048"
    },
    {
        name: "Emily B.",
        country: "United Kingdom",
        title: "I saved thousands of hours of creation with one investment.",
        content: "Now I can focus on changing the lives of others with information that not everybody has access to.",
        image: "https://framerusercontent.com/images/VD2GJF0aV6iyLRKJzpPDllGDKp0.jpeg?width=491&height=491"
    },
    {
        name: "James W.",
        country: "Australia",
        title: "It saved me so much time! I'm happy to have found it right now.",
        content: "I believe this package to have saved me 6 months of development time and boosted my credibility instantly.",
        image: "https://framerusercontent.com/images/9LyopQa5nBaoboghFzGRQqG07xE.jpeg?scale-down-to=512&width=1024&height=1024"
    },
    {
        name: "Frederik J.",
        country: "Denmark",
        title: "I've tried several PLR sites and I must say no one provides more value",
        content: "Every month you add new products and there are great tools to help us sell, I give you a 20 out of 10",
        image: "https://framerusercontent.com/images/WQXegpqjkA3ikfGjjWkl4fJE.jpeg?width=500&height=500"
    },
    {
        name: "Michael K.",
        country: "United States",
        title: "An absolute game-changer for my own business community.",
        content: "This gave me the opportunity to quickly create digital products and lead magnets for my community.",
        image: "https://framerusercontent.com/images/2HJ9S4s94MbNfS5G72iWdbIebo.jpeg?scale-down-to=512&width=1024&height=1024"
    }
];

const CommunitySection = () => {
    return (
        <div className="bg-black text-white relative overflow-hidden" id="community">
            {/* 1. Header & Ratings Section */}
            <section className="pt-24 pb-12 px-6">
                <div className="max-w-[1200px] mx-auto flex flex-col items-center">
                    {/* Rating Pill */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 mb-12"
                    >
                        <div className="bg-[#CBFB45] p-1.5 rounded-full text-black">
                            <Star size={14} fill="currentColor" />
                        </div>
                        <span className="text-sm font-medium">Rated 4.8/5 overall by our users</span>
                    </motion.div>

                    {/* Title */}
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-white text-[3rem] md:text-[4rem] font-bold text-center leading-[1.1] mb-12 tracking-tighter"
                    >
                        "Must have content"
                    </motion.h2>

                    {/* Trust Badges */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
                    >
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-lg">Trustpilot</span>
                            <span className="font-medium text-white/60">4.8/5</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-lg">Facebook</span>
                            <span className="font-medium text-white/60">5.0/5</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-lg">Google</span>
                            <span className="font-medium text-white/60">4.5/5</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Horizontal Scrolling Testimonials */}
            <section className="py-20 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10" />

                <div className="flex gap-6 animate-marquee">
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <div
                            key={i}
                            className="min-w-[350px] md:min-w-[450px] bg-[#232323] border border-white/10 p-8 rounded-[32px] flex flex-col justify-between h-[380px] shadow-2xl"
                        >
                            <div className="relative">
                                <div className="absolute -top-4 -left-2 text-accent-red opacity-30">
                                    <Quote size={40} fill="currentColor" />
                                </div>
                                <div className="pt-8">
                                    <h4 className="text-white text-xl md:text-2xl font-semibold leading-tight mb-4">{t.title}</h4>
                                    <p className="text-white/50 text-base leading-relaxed line-clamp-3">{t.content}</p>
                                </div>
                            </div>

                            <div className="flex items-center mt-8 gap-4">
                                <div className="w-14 h-14 rounded-full overflow-hidden border border-white/10">
                                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h6 className="text-white font-bold">{t.name}</h6>
                                    <p className="text-white/40 text-sm font-medium tracking-wide uppercase">{t.country}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. Custom Product Section */}
            <section className="py-24 px-6 relative">
                <div className="max-w-[1200px] mx-auto">
                    {/* Top Label */}
                    <div className="flex justify-center mb-10">
                        <div className="px-6 py-2 rounded-full border border-red-500/50 bg-[#CBFB45]/10 text-white font-medium text-sm">
                            Haven't found the right fit?
                        </div>
                    </div>

                    {/* Main Headline */}
                    <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold text-center leading-[1.1] mb-8 tracking-tighter">
                        Get custom product tailored <br />
                        <span className="text-accent-red">to your brand in just 7 days</span>
                    </h2>
                    <p className="text-center text-white/50 text-lg max-w-3xl mx-auto mb-20">
                        We transform your idea into signature book without you writing a single word. Completely custom-made asset that builds authority and generates revenue.
                    </p>

                    {/* Features/Steps Animation Placeholder (Paths & Icons) */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative">
                        {[
                            { label: "Research & Trend Analysis", img: "https://framerusercontent.com/images/vaRXoRFhDG1gVlEgAkIoqIJxd0.png?width=96&height=96" },
                            { label: "Structure & Content Writing", img: "https://framerusercontent.com/images/Mwu8GqVYHc4YW1okjcWQiDsG9m0.png?width=96&height=96" },
                            { label: "Multistep AI Optimization", img: "https://framerusercontent.com/images/zeEb5lbu4ulo0Bd3uywaDT2Gw.png?width=96&height=96" },
                            { label: "Editing & Source Check", img: "https://framerusercontent.com/images/442lLO7uDiypaNTHfAVimSxtAE.png?width=96&height=96" },
                            { label: "Layouting & Formatting", img: "https://framerusercontent.com/images/23BvrvfoD4wxR6iq2zkGvyTv7Y.png?width=96&height=96" },
                            { label: "Designing Cover & Mockup", img: "https://framerusercontent.com/images/TM8PMtKtVeQwrwvq4S2cenlZh0.png?width=96&height=96" }
                        ].map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center text-center gap-4 group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 p-2 group-hover:bg-white/10 transition-colors">
                                    <img src={s.img} alt={s.label} className="w-full h-full object-contain" />
                                </div>
                                <p className="text-[0.7rem] uppercase font-bold tracking-[0.1em] text-white/40">{s.label}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Large Mockup View */}
                    <div className="mt-24 relative group">
                        <div className="absolute -inset-4 bg-red-600/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-2xl shadow-red-500/5 aspect-[16/9]"
                        >
                            <img
                                src="https://framerusercontent.com/images/VsHPzmHuTTlUkpfwj1CVWhSkA0.png"
                                alt="Custom Product View"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                            />

                            {/* Floating Info Cards (Simulation of the Framer features) */}
                            <div className="absolute top-10 right-10 flex flex-col gap-4 max-w-[280px] hidden md:flex">
                                <div className="bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-white/10 scale-90 group-hover:scale-100 transition-transform">
                                    <Printer className="text-accent-red mb-3" size={24} />
                                    <h4 className="font-bold mb-1">Ready For Print</h4>
                                    <p className="text-white/40 text-xs">Your book is formatted to feel like a true best-seller.</p>
                                </div>
                                <div className="bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-white/10 scale-90 delay-75 group-hover:scale-100 transition-transform">
                                    <Book className="text-accent-red mb-3" size={24} />
                                    <h4 className="font-bold mb-1">EPUB & Kindle</h4>
                                    <p className="text-white/40 text-xs">Optimized for every digital platform and device.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. Stats Section */}
            <section className="pb-32 px-6">
                <div className="max-w-[1000px] mx-auto bg-[#111] rounded-[48px] p-12 md:p-20 relative border border-white/5 overflow-hidden">
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent-red/10 blur-[120px]" />
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent-red/10 blur-[120px]" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center relative z-10">
                        <div className="space-y-4">
                            <h3 className="text-5xl md:text-6xl font-bold tracking-tighter">300+</h3>
                            <p className="text-white/40 uppercase tracking-widest text-xs font-black">Books and Other <br /> Assets Produced</p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-5xl md:text-6xl font-bold tracking-tighter text-accent-red">90+</h3>
                            <p className="text-white/40 uppercase tracking-widest text-xs font-black">Founders, Creators, <br /> and Brands Served</p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-5xl md:text-6xl font-bold tracking-tighter">100%</h3>
                            <p className="text-white/40 uppercase tracking-widest text-xs font-black">Client Satisfaction <br /> Across All Projects</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Giga Button CTA */}
            <section className="pb-32 px-6 flex justify-center">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group bg-accent-red text-white py-6 px-12 rounded-full font-bold text-xl md:text-2xl inline-flex items-center gap-6 shadow-[0_20px_50px_rgba(255,0,0,0.3)] hover:shadow-[0_25px_60px_rgba(255,0,0,0.5)] transition-all"
                >
                    Get Custom Digital Product
                    <div className="bg-white/10 group-hover:bg-white/20 p-2 rounded-full transition-colors">
                        <ArrowRight size={24} />
                    </div>
                </motion.button>
            </section>

            {/* Styles for the infinite marquee */}
            <style jsx>{`
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
            overflow-x: auto;
          }
        }
      `}</style>
        </div>
    );
};

export default CommunitySection;
