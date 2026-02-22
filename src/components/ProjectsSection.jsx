
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectModal from './ProjectModal';

const projects = [
    {
        id: 1,
        title: 'Le Livre des Pionnières',
        category: 'Expérience VR',
        image: 'Images/LDP/Gemini_Generated_Image_6jkr626jkr626jkr.png',
        description: "Une expérience immersive qui vous transporte dans le passé de femmes qui ont marquées l'histoire. Une expérience narrative dans laquelle vous choisissez l'histoire que vous souhaitez. Un style unique mélangeant 3D et 2D avec un style \'Pop-up art\'.",
        gallery: [
            {
                type: 'video',
                src: 'Images/LDP/Demo1_SAE_LDP.mp4',
                poster: 'Images/LDP/miniaDemo.png'
            },
            'Images/LDP/SpoutSender.png',
            'Images/LDP/SpoutReciver.png',
            'Images/LDP/Workflow_StreamDiff.png',
            {
                type: 'video',
                src: 'Images/LDP/StreamDiff X Unity Fonctionnement.mp4',
                poster: 'Images/LDP/miniaStreamDiff.png'
            },
            'Images/LDP/Workflow_VoiceCloning.png',
        ],
        details: {
            "Technologie": "Unity, C#, Meta SDK, Meta Quest 3, ComfyUI, Blender",
            "Année": "2026",
            "Rôle": "Développeur VR et IA",
            "Durée": "6 mois"
        }
    },
    {
        id: 2,
        title: 'Sound Design',
        category: 'Montage',
        image: 'Images/TD_Son/PacificRim.jpeg',
        description: "Lors de ce travail nous avons dû trouver une vidéo, supprimer totalement le son d'origine et recréer toute la bande sonore.",
        gallery: [
            {
                type: 'video',
                src: 'Images/TD_Son/TD Son - Final.mp4',
                poster: 'Images/TD_Son/PacificRim.jpeg'
            },
            'Images/TD_Son/ImageMontage-partie1.png',
            'Images/TD_Son/ImageMontage-partie2.png'
        ],
        details: {
            "Technologie": "Adobe Audition, Audacity, Soundly",
            "Année": "Janvier 2025",
            "Durée": "3 jours"
        }
    },
    {
        id: 3,
        title: 'Light Guardian',
        category: 'Machine Learning',
        image: 'https://placehold.co/600x400/1a1a1a/00ff00',
        description: "Next-generation AI interface focusing on natural language processing and adaptive UI. The system learns from user patterns to provide a personalized workflow assistant.",
        gallery: [
            'https://placehold.co/600x600/1a1a1a/00ff00/1',
            'https://placehold.co/600x600/1a1a1a/00ff00/2',
            'https://placehold.co/600x600/1a1a1a/00ff00/3',
            'https://placehold.co/600x600/1a1a1a/00ff00/4'
        ],
        details: {
            "Technologie": "Python, TensorFlow, React",
            "Année": "2023",
            "Rôle": "Full Stack Dev",
            "Durée": "5 mois"
        }
    },
    {
        id: 4,
        title: 'Cyber Deck',
        category: 'Hardware Interface',
        image: 'https://placehold.co/600x400/1a1a1a/ff0055',
        description: "Physical computing project integrating custom hardware controls with a digital dashboard. A tribute to retro-futuristic terminals and cyberdecks.",
        gallery: [
            'https://placehold.co/600x600/1a1a1a/ff0055/1',
            'https://placehold.co/600x600/1a1a1a/ff0055/2',
            'https://placehold.co/600x600/1a1a1a/ff0055/3',
            'https://placehold.co/600x600/1a1a1a/ff0055/4'
        ],
        details: {
            "Technologie": "Arduino, Node.js, Electron",
            "Année": "2022",
            "Rôle": "Maker",
            "Durée": "2 mois"
        }
    },
    {
        id: 5,
        title: 'Ether Drive',
        category: 'Blockchain',
        image: 'https://placehold.co/600x400/1a1a1a/00ffff',
        description: "Decentralized storage solution with a sleek, futuristic interface. Prioritizing user privacy and data security through distributed network architecture.",
        gallery: [
            'https://placehold.co/600x600/1a1a1a/00ffff/1',
            'https://placehold.co/600x600/1a1a1a/00ffff/2',
            'https://placehold.co/600x600/1a1a1a/00ffff/3',
            'https://placehold.co/600x600/1a1a1a/00ffff/4'
        ],
        details: {
            "Technologie": "Solidity, Web3.js, IPFS",
            "Année": "2024",
            "Rôle": "Blockchain Dev",
            "Durée": "4 mois"
        }
    },
];

const ProjectsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const getAssetUrl = (path) => {
        if (!path || typeof path !== 'string') return '';
        if (path.startsWith('http')) return path; // Ignore si c'est un lien externe
        const cleanPath = path.startsWith('/') ? path.slice(1) : path;
        return `${import.meta.env.BASE_URL}${cleanPath}`;
    };

    const nextProject = (e) => {
        e?.stopPropagation();
        setActiveIndex((prev) => (prev + 1) % projects.length);
    };

    const prevProject = (e) => {
        e?.stopPropagation();
        setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const handleCardClick = (index, project) => {
        if (index === activeIndex) {
            setSelectedProject(project);
        } else {
            setActiveIndex(index);
        }
    };

    // Swipe handlers for mobile
    const handleDragEnd = (event, info) => {
        if (info.offset.x < -50) {
            nextProject();
        } else if (info.offset.x > 50) {
            prevProject();
        }
    };

    return (
        <section className="py-20 px-6 overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-rajdhani font-semibold mb-12 md:mb-16 text-center text-white">Mes Projets</h2>

            <div className="relative w-full max-w-7xl mx-auto h-[500px] md:h-[600px] flex items-center justify-center perspective-1000">
                <AnimatePresence>
                    {projects.map((project, index) => {
                        let offset = index - activeIndex;
                        const isActive = index === activeIndex;

                        return (
                            <motion.div
                                key={project.id}
                                layout
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                initial={false}
                                animate={{
                                    x: isMobile ? 0 : offset * 450,
                                    scale: isActive ? 1 : isMobile ? 0.9 : 0.8,
                                    opacity: isActive ? 1 : Math.abs(offset) > 1 && !isMobile ? 0.3 : isMobile ? 0 : 0.6,
                                    zIndex: isActive ? 50 : 10 - Math.abs(offset),
                                    rotateY: isMobile ? 0 : (isActive ? 0 : offset * -15),
                                }}
                                drag={isMobile && isActive ? "x" : false}
                                dragConstraints={{ left: 0, right: 0 }}
                                onDragEnd={isMobile && isActive ? handleDragEnd : undefined}
                                className={`absolute aspect-video rounded-2xl bg-tech-surface overflow-hidden cursor-pointer ${isMobile ? 'w-[90vw] touch-pan-y' : 'w-[700px]'
                                    }`}
                                style={{ transformStyle: 'preserve-3d' }}
                                onClick={() => handleCardClick(index, project)}
                            >
                                <div className="relative w-full h-full group">
                                    <img
                                        src={getAssetUrl(project.image)}
                                        alt={project.title}
                                        className="w-full h-full object-cover pointer-events-none" // Disable pointer on img to prevent drag conflicts
                                    />
                                    <div className={`absolute inset-0 bg-black/60 flex flex-col justify-end p-4 md:p-6 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                        <h3 className="text-xl md:text-3xl font-rajdhani font-semibold text-white mb-2">{project.title}</h3>
                                        <p className="text-tech-primary font-space-mono text-xs md:text-sm tracking-wider uppercase mb-2 md:mb-4">{project.category}</p>
                                        {isActive && (
                                            <span className="inline-block w-max px-3 py-1.5 md:px-4 md:py-2 bg-tech-primary/10 text-tech-primary font-space-mono text-xs md:text-sm rounded-full hover:bg-tech-primary hover:text-black transition-colors">
                                                Voir le projet
                                            </span>
                                        )}
                                    </div>

                                    {isActive && (
                                        <div className="absolute inset-0 rounded-2xl pointer-events-none box-border" />
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>

                <button
                    onClick={prevProject}
                    className="absolute left-1 md:left-0 z-50 p-3 md:p-4 rounded-full bg-white/5 text-white hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button
                    onClick={nextProject}
                    className="absolute right-1 md:right-0 z-50 p-3 md:p-4 rounded-full bg-white/5 text-white hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>

            <div className="flex justify-center mt-8 gap-3">
                {projects.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-6 md:w-8 bg-tech-primary shadow-[0_0_10px_#00f3ff]' : 'bg-white/20 hover:bg-white/40'}`}
                    />
                ))}
            </div>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
                theme="tech"
            />
        </section>
    );
};

export default ProjectsSection;
