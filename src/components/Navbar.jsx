import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Products', href: '#', hasDropdown: true },
        { name: 'Services', href: '#', hasDropdown: true },
        { name: 'Resources', href: '#', hasDropdown: true },
        { name: 'About', href: '#' },
    ];

    return (
        <>
            {/* Announcement Bar */}
            <div className="w-full bg-accent-red text-white py-2 text-center text-[0.85rem] font-semibold fixed z-[1001]">
                <div className="flex items-center justify-center gap-4">
                    <span className="bg-black/20 px-2.5 py-0.5 rounded-full text-[0.75rem]">Kickstart 2026 🔥</span>
                    <span>Save 70% on All Products ●</span>
                </div>
            </div>

            <nav className="px-8 py-6 w-full relative z-[1000] pt-[60px]">
                <div className="flex items-center justify-between max-w-[1200px] mx-auto">
                    {/* Logo */}
                    <div className="flex items-center gap-2.5 group cursor-pointer">
                        <div className="bg-accent-red w-9 h-9 rounded-lg flex items-center justify-center font-black text-white shadow-lg shadow-red-500/20 group-hover:scale-105 transition-transform">
                            <span className="text-lg">E</span>
                        </div>
                        <span className="text-lg font-black tracking-[0.15em] text-white">ENTREPEDIA</span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/80 mx-auto">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-white/60 font-semibold px-4 py-1.5 rounded-full transition-all duration-300 text-[0.9rem] flex items-center gap-1.5 hover:text-white hover:bg-white/5"
                            >
                                {link.name}
                                {link.hasDropdown && <span className="text-[0.6rem] opacity-30">▾</span>}
                            </a>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="hidden lg:block">
                        <button className="bg-white/5 text-white/90 px-7 py-2.5 rounded-full font-bold border border-white/10 cursor-pointer transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 active:scale-95">
                            Sign in
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="lg:hidden block cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="lg:hidden block mt-4 p-4 glass rounded-2xl"
                        >
                            <div className="flex flex-col gap-2">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-text-secondary font-medium p-3 rounded-xl transition-all duration-200 hover:text-text-primary hover:bg-white/5"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <button className="w-full mt-4 bg-white/5 text-white px-6 py-2.5 rounded-full font-semibold border border-white/10 cursor-pointer transition-all duration-200 hover:bg-white/10">
                                    Sign in
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
};

export default Navbar;
