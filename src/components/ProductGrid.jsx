import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Clock, CheckCircle2 } from 'lucide-react';

const products = [
    {
        title: "Scale Your Business with Smart Chatbot",
        description: "Email course designed to help you provide guidance on using chatbots to save time and generate leads.",
        image: "https://cdn.pixabay.com/photo/2025/11/02/08/27/boy-9931950_1280.png",
        category: "Email Course"
    },
    {
        title: "Preparing SOPs for Automation",
        description: "Checklist to guide your customers through preparing their SOPs for automation by organizing tasks.",
        image: "https://cdn.pixabay.com/photo/2024/10/01/06/53/boy-9087310_1280.png",
        category: "Checklist"
    },
    {
        title: "The 5-Step AI Lesson Planning Process",
        description: "Guide to help teachers use AI tools to plan smarter lessons and improve teaching results.",
        image: "https://cdn.pixabay.com/photo/2021/11/15/17/39/balloon-6798857_1280.png",
        category: "Guide"
    },
    {
        title: "Personal Branding Mastery",
        description: "Complete roadmap to building a strong personal brand that attracts high-ticket clients.",
        image: "https://cdn.pixabay.com/photo/2024/10/01/06/53/boy-9087310_1280.png",
        category: "Video Course"
    },
    {
        title: "High-Ticket Sales Script",
        description: "Battle-tested scripts to close more deals and handle any objection with ease.",
        image: "https://cdn.pixabay.com/photo/2021/11/15/17/39/balloon-6798857_1280.png",
        category: "Templates"
    },
    {
        title: "Modern AI Content Strategy",
        description: "Leverage AI to create 30 days of high-quality content in just 2 hours.",
        image: "https://cdn.pixabay.com/photo/2025/11/02/08/27/boy-9931950_1280.png",
        category: "Ebook"
    }
];

const ProductGrid = () => {
    return (
        <section className="bg-black py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-accent-red font-black uppercase tracking-widest text-xs mb-4 block">Be market ready today</span>
                        <h2 className="text-[2.5rem] md:text-[4rem] font-bold text-white leading-none tracking-tighter">
                            Explore PLR products <br />
                            <span className="text-white/20">from the library</span>
                        </h2>
                    </div>
                    <div className="hidden lg:flex gap-4 mb-4">
                        <FilterButton active>All Products</FilterButton>
                        <FilterButton>Ebooks</FilterButton>
                        <FilterButton>Courses</FilterButton>
                        <FilterButton>Templates</FilterButton>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-[#111] border border-white/5 rounded-[32px] overflow-hidden hover:border-accent-red/30 transition-all duration-500"
                        >
                            <div className="aspect-[4/3] overflow-hidden relative">
                                <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full text-[0.6rem] font-black uppercase tracking-widest border border-white/10">
                                    {product.category}
                                </div>
                            </div>
                            <div className="p-8 space-y-4">
                                <h3 className="text-xl font-bold text-white leading-snug group-hover:text-accent-red transition-colors">{product.title}</h3>
                                <p className="text-white/40 text-sm leading-relaxed line-clamp-2">{product.description}</p>
                                <div className="pt-4 flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-white/20">
                                        <Clock size={14} />
                                        <span className="text-[0.65rem] font-bold uppercase tracking-widest">Instant Delivery</span>
                                    </div>
                                    <motion.button
                                        whileHover={{ x: 5 }}
                                        className="bg-accent-red/10 text-accent-red p-2 rounded-full hover:bg-accent-red hover:text-white transition-all"
                                    >
                                        <MousePointer2 size={18} />
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FilterButton = ({ children, active }) => (
    <button className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${active
            ? 'bg-accent-red text-white shadow-[0_10px_20px_-5px_rgba(255,0,0,0.3)]'
            : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white'
        }`}>
        {children}
    </button>
);

export default ProductGrid;
