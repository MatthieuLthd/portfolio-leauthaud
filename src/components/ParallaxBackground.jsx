import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FloatingItem = ({ children, depth, className }) => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, depth * 200]);

    return (
        <motion.div style={{ y }} className={`absolute ${className}`}>
            {children}
        </motion.div>
    );
};

import MeshGradientBackground from './MeshGradientBackground';

const ParallaxBackground = ({ theme = 'artisan' }) => {
    const isArtisan = theme === 'artisan';

    if (!isArtisan) {
        return <MeshGradientBackground />;
    }

    const shapes = [
        // Original shapes
        { depth: 1.5, pos: "top-[10%] left-[5%]", opacity: "opacity-40", size: "w-16 h-16", color: "bg-artisan-secondary", blur: "blur-xl", shape: "rounded-full" },
        { depth: 0.5, pos: "top-[20%] right-[10%]", opacity: "opacity-30", size: "w-24 h-24", color: "bg-artisan-primary", blur: "blur-2xl", shape: "rounded-full" },
        { depth: 2, pos: "top-[40%] left-[20%]", opacity: "opacity-20", size: "w-12 h-12", color: "bg-artisan-secondary", blur: "blur-md", shape: "rotate-45" },
        { depth: 1, pos: "top-[60%] right-[25%]", opacity: "opacity-25", size: "w-32 h-32", color: "border-4 border-artisan-primary", blur: "blur-md", shape: "rounded-full" },
        { depth: 2.5, pos: "top-[80%] left-[10%]", opacity: "opacity-30", size: "w-20 h-20", color: "bg-artisan-secondary", blur: "blur-2xl", shape: "rounded-lg" },

        // Extended shapes for scrolling
        { depth: -1, pos: "top-[30%] left-[40%]", opacity: "opacity-20", size: "w-40 h-40", color: "bg-artisan-primary", blur: "blur-3xl", shape: "rounded-full" },
        { depth: 1.8, pos: "top-[-20%] right-[30%]", opacity: "opacity-25", size: "w-16 h-16", color: "bg-artisan-secondary", blur: "blur-lg", shape: "rounded-full" },
        { depth: 0.8, pos: "top-[-50%] left-[10%]", opacity: "opacity-30", size: "w-24 h-24", color: "bg-artisan-primary", blur: "blur-xl", shape: "rounded-full" },
        { depth: -0.5, pos: "bottom-[-20%] right-[5%]", opacity: "opacity-20", size: "w-32 h-32", color: "bg-artisan-secondary", blur: "blur-2xl", shape: "rounded-full" },
        { depth: 3, pos: "top-[-80%] left-[50%]", opacity: "opacity-15", size: "w-24 h-24", color: "bg-artisan-primary", blur: "blur-lg", shape: "rounded-full" }
    ];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Background Texture Overlay - Artisan Only */}
            <div className={`absolute inset-0 bg-artisan-texture opacity-20 mix-blend-multiply`}></div>

            {/* Floating Elements */}
            {shapes.map((item, index) => (
                <FloatingItem key={index} depth={item.depth} className={`${item.pos} ${item.opacity}`}>
                    <div className={`${item.size} ${item.color} ${item.blur} ${item.shape} ${item.extra || ''}`}></div>
                </FloatingItem>
            ))}
        </div>
    );
};

export default ParallaxBackground;
