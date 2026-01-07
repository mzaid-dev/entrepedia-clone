import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, ChevronDown, Send } from 'lucide-react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [messages, setMessages] = useState([]);

    const initialMessage = "Hey there!";
    const emailPrompt = "Before we start, could you share your email? That way, we can follow up if you need further assistance 🙂";

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            // Typing sequence for first message
            setIsTyping(true);
            setTimeout(() => {
                setIsTyping(false);
                setMessages([{ type: 'bot', text: initialMessage }]);

                // Typing sequence for second message
                setTimeout(() => {
                    setIsTyping(true);
                    setTimeout(() => {
                        setIsTyping(false);
                        setMessages(prev => [...prev, { type: 'bot', text: emailPrompt, isEmailPrompt: true }]);
                    }, 1500);
                }, 1000);
            }, 1000);
        }
    }, [isOpen, messages.length]);

    return (
        <div className="fixed bottom-8 right-8 z-[2000]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="absolute bottom-20 right-0 w-[350px] md:w-[400px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-black/5"
                    >
                        {/* Header */}
                        <div className="bg-black text-white p-6 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                                    <img src="https://i.pravatar.cc/100?img=12" alt="Tomas" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Tomas</h3>
                                    <p className="text-white/60 text-sm">Entrepedia Support</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <ChevronDown size={24} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="h-[400px] bg-[#F4F4F4] p-6 overflow-y-auto flex flex-col gap-4">
                            <p className="text-[10px] uppercase font-bold text-gray-400 mb-2">Tomas</p>

                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`p-4 rounded-2xl max-w-[85%] text-sm leading-relaxed ${msg.type === 'bot' ? 'bg-white text-black' : 'bg-black text-white self-end'
                                        }`}
                                >
                                    {msg.text}
                                    {msg.isEmailPrompt && (
                                        <div className="mt-4 flex flex-col gap-3">
                                            <input
                                                type="email"
                                                placeholder="Your Email"
                                                className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-gray-300"
                                            />
                                            <button className="text-right text-[#00D084] font-bold flex items-center justify-end gap-1 hover:opacity-80 transition-opacity">
                                                Submit <Send size={14} />
                                            </button>
                                        </div>
                                    )}
                                </motion.div>
                            ))}

                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="bg-white p-3 rounded-2xl w-16 flex justify-center gap-1 shadow-sm"
                                >
                                    <motion.span
                                        animate={{ opacity: [0.2, 1, 0.2] }}
                                        transition={{ repeat: Infinity, duration: 1 }}
                                        className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                                    />
                                    <motion.span
                                        animate={{ opacity: [0.2, 1, 0.2] }}
                                        transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                                        className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                                    />
                                    <motion.span
                                        animate={{ opacity: [0.2, 1, 0.2] }}
                                        transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                                        className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                                    />
                                </motion.div>
                            )}
                        </div>

                        {/* Footer Input Placeholder */}
                        <div className="p-4 bg-white border-t border-gray-100 italic text-gray-300 text-sm">
                            Enter details in the input field
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.8, rotate: 20 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(true)}
                        className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white shadow-2xl border border-white/10 group overflow-hidden relative"
                    >
                        <MessageSquare size={28} className="relative z-10" />
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Chatbot;
