import React, { useEffect } from 'react';
import ParallaxBackground from '../components/ParallaxBackground';
import MasonryGallery from '../components/MasonryGallery';
import { motion } from 'framer-motion';

const Atelier = () => {
    useEffect(() => {
        document.body.classList.add('artisan-scrollbar');
        return () => {
            document.body.classList.remove('artisan-scrollbar');
        };
    }, []);

    return (
        <div className="relative min-h-screen bg-artisan-bg text-artisan-secondary overflow-hidden">
            <ParallaxBackground theme="artisan" />

            <div className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h1 className="font-chango text-6xl md:text-8xl mb-6 text-artisan-secondary">Projets manuels</h1>
                    <p className="font-serif text-xl md:text-2xl text-artisan-primary italic max-w-2xl mx-auto">
                        "En plus du virtuel, j'aime créer des choses physiques"
                    </p>
                    <div className="w-24 h-1 bg-artisan-secondary mx-auto mt-8 rounded-full"></div>
                </motion.div>

                <MasonryGallery />
            </div>

            <footer className="relative z-10 py-12 text-center text-artisan-primary/60 font-serif italic">
                <p>LEAUTHAUD Matthieu - 2026</p>
            </footer>
        </div>
    );
};

export default Atelier;
