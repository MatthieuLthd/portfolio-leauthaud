import React from 'react';
import Scene from './Scene';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen pt-24 lg:pt-0 flex flex-col lg:grid lg:grid-cols-2 items-center justify-items-center overflow-hidden max-w-screen-2xl mx-auto px-6 gap-8 pb-12 lg:pb-0">

            {/* Left Column: Text Content */}
            <div className="relative z-10 w-full flex justify-center lg:justify-start lg:pl-20 mt-12 lg:mt-0 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 50, x: 0 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left pointer-events-auto"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-rajdhani font-semibold mb-2 lg:mb-4 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                        Matthieu<br /> LEAUTHAUD
                    </h1>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-rajdhani font-semibold text-tech-primary mb-4 lg:mb-6">
                        Etudiant VR & IA
                    </h2>
                    <p className="text-sm md:text-base text-gray-400 font-space-mono max-w-lg mb-8 mx-auto lg:mx-0">
                        Passionné par les nouvelles technologies et l'innovation, je cherche à développer mes compétences dans ces domaines.
                    </p>
                </motion.div>
            </div>

            {/* Right Column: 3D Scene */}
            <div className="relative w-full h-[45vh] md:h-[55vh] lg:h-full z-0 opacity-100 flex items-center justify-center -mt-8 lg:mt-0">
                <Scene />
            </div>
        </section>
    );
};

export default HeroSection;
