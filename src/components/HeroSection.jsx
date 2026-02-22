import React from 'react';
import Scene from './Scene';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className="relative h-screen grid grid-cols-1 md:grid-cols-2 items-center justify-items-center overflow-hidden max-w-screen-2xl mx-auto px-6 gap-8">

            {/* Left Column: Text Content */}
            <div className="relative z-10 w-full flex justify-center md:justify-start md:pl-20 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left pointer-events-auto"
                >
                    <h1 className="text-6xl md:text-8xl font-rajdhani font-semibold mb-4 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                        Matthieu<br /> LEAUTHAUD
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-rajdhani font-semibold text-tech-primary mb-6">
                        Etudiant VR & IA
                    </h2>
                    <p className="text-gray-400 font-space-mono max-w-lg mb-8">
                        Passionné par les nouvelles technologies et l'innovation, je cherche à développer mes compétences dans ces domaines.
                    </p>
                </motion.div>
            </div>

            {/* Right Column: 3D Scene */}
            <div className="relative w-full h-[50vh] md:h-full z-0 opacity-100 flex items-center justify-center">
                <Scene />
            </div>
        </section>
    );
};

export default HeroSection;
