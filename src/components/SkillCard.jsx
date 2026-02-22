import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ category, items }) => {
    return (
        <motion.div
            className="relative group p-6 rounded-xl bg-[#1e293b] border border-white/10 overflow-hidden hover:bg-[#253247] transition-colors duration-300"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {/* Animated Border Gradient (Optional implementation detail) */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-tech-primary/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </div>

            {/* Glowing Border on Hover */}
            <div className="absolute inset-0 border border-transparent group-hover:border-tech-primary/50 rounded-xl transition-colors duration-300 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10">
                <h3 className="text-2xl font-rajdhani font-bold text-tech-primary mb-4 border-b border-white/10 pb-2 group-hover:border-tech-primary/30 transition-colors">
                    {category}
                </h3>

                <div className="flex flex-wrap gap-2">
                    {items.map((skill, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-sm font-space-mono text-gray-300 bg-black/20 rounded-md border border-white/5 group-hover:border-white/20 group-hover:text-white transition-all duration-300"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Corner Accents */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-tech-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tr-xl" />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-tech-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-xl" />
        </motion.div>
    );
};

export default SkillCard;
