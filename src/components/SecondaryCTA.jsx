import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Box } from 'lucide-react';

const SecondaryCTA = () => {
    return (
        <section className="bg-black py-32 px-6 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-red/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-10"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-red/10 border border-accent-red/20">
                        <Box size={14} className="text-accent-red" />
                        <span className="text-[0.65rem] font-black uppercase tracking-widest text-white">Unlimited Business Library</span>
                    </div>

                    <h2 className="text-[3rem] md:text-[4.5rem] font-bold text-white leading-[1] tracking-tighter">
                        Discover done-for-you <br />
                        <span className="text-accent-red">digital products</span> you <br />
                        can sell or use
                    </h2>

                    <p className="text-xl text-white/50 leading-relaxed max-w-xl">
                        Imagine you have more than 1000 courses, books, templates, audios, and more at your fingertips. Your own digital library without limits.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <button className="bg-accent-red text-white py-5 px-10 rounded-full font-black text-lg flex items-center justify-center gap-4 hover:shadow-[0_20px_40px_-10px_rgba(255,0,0,0.5)] active:scale-95 transition-all">
                            Learn about Master Library
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="relative z-10 rounded-[48px] overflow-hidden border border-white/10 shadow-3xl">
                        <img
                            src="https://framerusercontent.com/images/WHHBxNCjnjvNUWalCq4CwE7qhI.png?width=1839&height=1219"
                            alt="Digital products library"
                            className="w-full h-auto hover:scale-105 transition-transform duration-1000"
                        />
                    </div>
                    {/* Glowing effect under image */}
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent-red/20 blur-[100px] rounded-full z-0" />
                </motion.div>
            </div>
        </section>
    );
};

export default SecondaryCTA;
