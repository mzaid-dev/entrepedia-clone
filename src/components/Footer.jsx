import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Youtube, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-24 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                {/* Brand Section */}
                <div className="space-y-8">
                    <div className="flex items-center gap-3">
                        <div className="bg-accent-red w-10 h-10 rounded-lg flex items-center justify-center text-white font-black text-xl">E</div>
                        <span className="text-xl font-black tracking-tighter">ENTREPEDIA</span>
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                        The ultimate library for digital entrepreneurs. Start your business today with market-ready assets.
                    </p>
                    <div className="flex gap-4">
                        <SocialIcon icon={<Instagram size={20} />} />
                        <SocialIcon icon={<Facebook size={20} />} />
                        <SocialIcon icon={<Youtube size={20} />} />
                        <SocialIcon icon={<Twitter size={20} />} />
                        <SocialIcon icon={<Linkedin size={20} />} />
                    </div>
                </div>

                {/* Pages Column */}
                <div className="space-y-6">
                    <h4 className="text-sm font-black uppercase tracking-widest text-accent-red">Pages</h4>
                    <ul className="space-y-4">
                        <FooterLink>Home</FooterLink>
                        <FooterLink>Resources</FooterLink>
                        <FooterLink>Free Resources</FooterLink>
                        <FooterLink>Digital Tools Repository</FooterLink>
                        <FooterLink>Digital Product Ideas</FooterLink>
                        <FooterLink>Partner Program</FooterLink>
                    </ul>
                </div>

                {/* Products Column */}
                <div className="space-y-6">
                    <h4 className="text-sm font-black uppercase tracking-widest text-accent-red">Products</h4>
                    <ul className="space-y-4">
                        <FooterLink>Master Library</FooterLink>
                        <FooterLink>Custom Book Service</FooterLink>
                        <FooterLink>Custom Digital Product</FooterLink>
                        <FooterLink>PLR Digital Products</FooterLink>
                    </ul>
                </div>

                {/* Legal & Platform Column */}
                <div className="space-y-12">
                    <div className="space-y-6">
                        <h4 className="text-sm font-black uppercase tracking-widest text-accent-red">Platform</h4>
                        <ul className="space-y-4">
                            <FooterLink>Sign In</FooterLink>
                            <FooterLink>Forgot password</FooterLink>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-sm font-black uppercase tracking-widest text-accent-red">Legal</h4>
                        <ul className="space-y-4">
                            <FooterLink>Terms & Conditions</FooterLink>
                            <FooterLink>Privacy Policy</FooterLink>
                            <FooterLink>Cookie Settings</FooterLink>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-white/20 text-xs font-medium">© 2026 Entrepedia. All rights reserved.</p>
                <div className="flex items-center gap-6 text-[0.65rem] font-bold text-white/40 uppercase tracking-widest">
                    <a href="#" className="hover:text-accent-red transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-accent-red transition-colors">X / Twitter</a>
                    <a href="#" className="hover:text-accent-red transition-colors">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

const FooterLink = ({ children }) => (
    <li>
        <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300 font-medium">{children}</a>
    </li>
);

const SocialIcon = ({ icon }) => (
    <motion.a
        href="#"
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
    >
        {icon}
    </motion.a>
);

export default Footer;
