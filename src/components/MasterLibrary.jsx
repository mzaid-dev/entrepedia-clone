import React from 'react';
import { motion } from 'framer-motion';
import { Play, CheckCircle2, TrendingUp, Globe, Magnet, Users, Layout, ShoppingBag, ArrowRight } from 'lucide-react';

const MasterLibrary = () => {
    return (
        <section className="relative w-full bg-white pt-32 pb-24 z-20 text-black overflow-hidden">
            {/* Top Logo Cloud */}
            <div className="max-w-7xl mx-auto text-center mb-20">
                <p className="text-[0.7rem] font-bold tracking-[0.2em] uppercase opacity-60 mb-10">Trusted by top brands and individuals worldwide</p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    <span className="text-2xl font-black tracking-tighter">CPHERE</span>
                    <div className="flex flex-col items-center leading-none">
                        <span className="text-[0.6rem] font-bold border border-white/40 px-1 mb-1">CEO</span>
                        <span className="text-xl font-bold tracking-tighter italic">MasterMind</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 border-2 border-white/60 flex items-center justify-center font-bold text-xs">+</div>
                        <span className="text-lg font-bold">Local Pulse</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="text-2xl font-black italic">Donna</span>
                        <span className="text-[0.6rem] font-bold opacity-60 mb-3 ml-0.5">Pro</span>
                    </div>
                </div>
            </div>

            {/* Main Heading Section */}
            <div className="max-w-4xl mx-auto text-center mb-24">
                <div className="inline-block bg-accent-red text-white text-[0.75rem] font-black uppercase px-6 py-2 rounded-full mb-8 shadow-xl shadow-red-500/20">
                    Discover Master Library
                </div>
                <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] leading-[1.1] font-black text-black mb-10 tracking-tight">
                    Sell or use market-ready <br />
                    <span className="text-accent-red">products under your name</span>
                </h2>
                <p className="text-lg md:text-xl text-white/70 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                    Skip the research, writing, designing, or costly outsourcing. Start using done-for-you content to grow your sales, audience, and authority in no time.
                </p>
                <button className="bg-black text-white px-10 py-5 rounded-full font-black text-lg flex items-center gap-4 mx-auto hover:bg-black/80 transition-all active:scale-95 shadow-2xl">
                    <div className="bg-white text-black p-1 rounded-full"><Play fill="currentColor" size={20} /></div>
                    Watch Explainer Video
                </button>
            </div>

            {/* Platform Mockup Placeholder */}
            <div className="max-w-6xl mx-auto mb-32 relative">
                <div className="bg-white/10 backdrop-blur-3xl rounded-[40px] border border-white/20 p-4 shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9]">
                    <div className="w-full h-full bg-black/20 rounded-[30px] border border-white/5 flex">
                        {/* Sidebar Mockup */}
                        <div className="w-1/4 border-r border-white/10 p-6 hidden md:block">
                            <div className="w-10 h-10 bg-accent-red rounded mb-8" />
                            <div className="space-y-4">
                                {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-2 w-full bg-white/10 rounded" />)}
                            </div>
                        </div>
                        {/* Content Mockup */}
                        <div className="flex-1 p-8 grid grid-cols-2 md:grid-cols-3 gap-6">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="aspect-[3/4] bg-white/5 rounded-xl border border-white/10 p-4 flex flex-col justify-end">
                                    <div className="h-2 w-3/4 bg-white/20 rounded mb-2" />
                                    <div className="h-2 w-1/2 bg-white/10 rounded" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent-red/20 blur-[100px] rounded-full" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400/20 blur-[100px] rounded-full" />
            </div>

            {/* Feature Cards Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                <FeatureCard title="Demanded Content" desc="Best-selling topics that people really buy. Based on market research." color="bg-white/95 text-black" />
                <FeatureCard title="Private Label Rights" desc="Fully rebrand, edit, and use as you want. Without any restrictions." color="bg-accent-red text-white" variant="large" />
                <FeatureCard title="1000+" subtitle="Digital Products" desc="Almost unlimited selection of content in one of the biggest libraries out there." color="bg-black text-white" variant="dark" />
                <FeatureCard title="15 Media Formats" desc="Ebooks, Courses, Audios, Templates, Prompts, Notion Systems + more." color="bg-white/95 text-black" />
                <FeatureCard title="Constantly Updated" desc="We add 20 new products every week to meet the latest trends." color="bg-white/95 text-black" />
                <FeatureCard title="Created by Experts" desc="Each product is made in-house by our team. World-class standards." color="bg-white/95 text-black" />
            </div>

            {/* Usage Options Section */}
            <div className="max-w-4xl mx-auto text-center mb-20">
                <div className="inline-block bg-black text-white text-[0.7rem] font-black uppercase px-6 py-2 rounded-full mb-8">
                    You have complete freedom
                </div>
                <h2 className="text-[2.5rem] md:text-[3.5rem] leading-[1.2] font-black text-white mb-20 tracking-tight">
                    Unlimited options to <br />
                    <span className="text-accent-red">use the resources</span>
                </h2>

                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                    <UsageItem icon={<TrendingUp size={24} />} text="Sell as your own product" />
                    <UsageItem icon={<Globe size={24} />} text="Expand product portfolio" />
                    <UsageItem icon={<Magnet size={24} />} text="Offer as free leadmagnet" />
                    <UsageItem icon={<Users size={24} />} text="Educate your audience" />
                    <UsageItem icon={<ShoppingBag size={24} />} text="Sell as author on Amazon" />
                </div>
            </div>

            {/* Final CTA */}
            <div className="text-center pb-24">
                <button className="bg-accent-red text-white pl-10 pr-2 py-2 rounded-full font-black text-lg inline-flex items-center gap-6 hover:opacity-90 transition-all active:scale-95 shadow-[0_20px_40px_-10px_rgba(255,0,0,0.5)]">
                    Explore Master Library
                    <div className="bg-black text-white p-4 rounded-full">
                        <ArrowRight size={24} />
                    </div>
                </button>
            </div>
        </section>
    );
};

const FeatureCard = ({ title, subtitle, desc, color, variant }) => (
    <div className={`${color} p-10 rounded-[40px] border border-black/5 shadow-lg flex flex-col justify-start h-full min-h-[350px] transition-transform hover:-translate-y-2 relative overflow-hidden`}>
        {variant === 'large' && <div className="absolute -bottom-20 -left-10 w-60 h-20 bg-black/10 blur-2xl rotate-45" />}
        {variant === 'dark' && <div className="mb-6 opacity-20"><ShoppingBag size={80} /></div>}
        <h3 className="text-2xl font-black mb-4 leading-none uppercase">
            {title} {subtitle && <><br /><span className="text-lg opacity-60 normal-case font-bold">{subtitle}</span></>}
        </h3>
        <p className="text-md opacity-80 font-medium leading-relaxed">{desc}</p>
    </div>
);

const UsageItem = ({ icon, text }) => (
    <div className="bg-white/5 border border-white/10 p-8 rounded-[30px] flex flex-col items-center justify-center gap-6 hover:bg-white/10 transition-all group">
        <div className="text-white group-hover:scale-110 transition-transform duration-300 opacity-60 group-hover:opacity-100">{icon}</div>
        <span className="text-[0.8rem] font-bold text-black/80 leading-tight">{text}</span>
    </div>
);

export default MasterLibrary;
