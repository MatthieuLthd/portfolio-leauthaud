import React, { useState, useEffect } from 'react';
import { useProgress } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onFinished }) => {
    const { progress, active } = useProgress();
    const [show, setShow] = useState(true);
    const [visualProgress, setVisualProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisualProgress((prev) => {
                // If real loading is done (100%), allow visual to go to 100%
                if (progress === 100) {
                    if (prev >= 100) {
                        return 100;
                    }
                    return prev + 5; // Speed up to finish line
                }

                // If real loading is NOT done, cap visual at 90%
                if (prev >= 90) {
                    return 90;
                }

                // Normal simulation: increment slowly
                return prev + 5;
            });
        }, 20);

        return () => clearInterval(interval);
    }, [progress]);

    useEffect(() => {
        if (visualProgress === 100) {
            const timer = setTimeout(() => {
                setShow(false);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [visualProgress]);

    // When the exit animation completes, notify parent
    const handleExitComplete = () => {
        onFinished();
    };

    return (
        <AnimatePresence onExitComplete={handleExitComplete}>
            {show && (
                <motion.div
                    className="fixed inset-0 z-[100] bg-[#000510] flex flex-col items-center justify-center font-mono"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <div className="relative">
                        <motion.h1
                            className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 tracking-tighter mb-8"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            Matthieu LEAUTHAUD
                        </motion.h1>

                        {/* Decorative scanline */}
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none animate-scan" />
                    </div>

                    <div className="w-64 md:w-80 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
                        <motion.div
                            className="h-full bg-tech-primary shadow-[0_0_20px_#00f3ff]"
                            initial={{ width: 0 }}
                            animate={{ width: `${visualProgress}%` }}
                            transition={{ ease: "linear", duration: 0.1 }}
                        />
                    </div>

                    <div className="mt-4 flex items-center justify-between w-64 md:w-80 text-xs uppercase tracking-widest">
                        <span className="text-gray-500">Chargement en cours...</span>
                        <span className="text-tech-primary font-bold">{Math.round(visualProgress)}%</span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
