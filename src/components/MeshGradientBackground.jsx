import React from 'react';
import { motion } from 'framer-motion';

const MeshGradientBackground = () => {
    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#001233]">
            {/* Mesh Gradient Blobs */}
            <div className="absolute inset-0 filter blur-[100px] opacity-90">
                {/* Blob 1 - Deep Blue Base */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 10, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute top-[-10%] left-[-20%] w-[70vw] h-[70vw] bg-[#003366] rounded-full mix-blend-normal opacity-100"
                />

                {/* Blob 2 - Bright Blue Flow */}
                <motion.div
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -40, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute top-[10%] right-[-10%] w-[60vw] h-[60vw] bg-[#0077be] rounded-full mix-blend-screen opacity-80"
                />

                {/* Blob 3 - White/Light Accent */}
                <motion.div
                    animate={{
                        x: [0, -20, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] bg-[#e0f7fa] rounded-full mix-blend-overlay opacity-50"
                />

                {/* Blob 4 - Yellow Accent */}
                <motion.div
                    animate={{
                        x: [0, 20, 0],
                        y: [0, 20, 0],
                    }}
                    transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute bottom-[-10%] left-[-5%] w-[30vw] h-[30vw] bg-[#f1c40f] rounded-full mix-blend-screen opacity-60"
                />
            </div>

            {/* Noise Texture Overlay */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                }}
            />

            {/* Dark Overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/30" />
        </div>
    );
};

export default MeshGradientBackground;
