import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ParallaxBackground from './ParallaxBackground';

const ProjectModal = ({ project, onClose, theme = 'artisan' }) => {
    const [lightboxIndex, setLightboxIndex] = useState(null);
    const isTech = theme === 'tech';

    // --- NOUVEAU : Fonction pour gérer proprement les chemins des assets ---
    const getAssetUrl = (path) => {
        if (!path) return '';
        if (path.startsWith('http')) return path; // Ignore si c'est un lien externe

        // Nettoie le chemin (enlève le slash du début s'il y en a un pour éviter //)
        const cleanPath = path.startsWith('/') ? path.slice(1) : path;
        return `${import.meta.env.BASE_URL}${cleanPath}`;
    };
    // ------------------------------------------------------------------------

    // Lock body scroll only when project is active
    useEffect(() => {
        if (project) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [project]);

    // Keyboard navigation
    useEffect(() => {
        if (!project) return;

        const handleKeyDown = (e) => {
            if (lightboxIndex !== null) {
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowRight') nextImage();
                if (e.key === 'ArrowLeft') prevImage();
            } else {
                if (e.key === 'Escape') onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxIndex, onClose, project]);

    const mainImage = project ? (project.mainImage || project.image) : null;
    const allImages = project ? [mainImage, ...(project.gallery || [])] : [];

    const openLightbox = (index) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);

    const nextImage = (e) => {
        e?.stopPropagation();
        setLightboxIndex((prev) => (prev + 1) % allImages.length);
    };

    const prevImage = (e) => {
        e?.stopPropagation();
        setLightboxIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    };

    // Theme Styles
    const containerClasses = isTech
        ? 'bg-[#001233] text-white font-sans border border-tech-primary/30 shadow-[0_0_50px_rgba(0,243,255,0.15)]'
        : 'bg-artisan-bg text-artisan-secondary font-serif shadow-2xl';

    const scrollbarClass = isTech ? 'tech-scrollbar' : 'artisan-scrollbar';

    const closeBtnClasses = isTech
        ? 'bg-tech-secondary/10 text-tech-primary hover:bg-tech-primary hover:text-black border border-tech-primary/50'
        : 'bg-artisan-surface text-artisan-secondary hover:bg-artisan-secondary hover:text-artisan-bg';

    const visualColClasses = isTech ? 'bg-black/20 border-r border-white/5' : 'bg-artisan-surface/10';
    const contentColClasses = isTech ? 'bg-[#001233]' : 'bg-artisan-bg';

    const titleClasses = isTech ? 'font-bold tracking-tighter text-white' : 'font-chango text-artisan-secondary';
    const categoryClasses = isTech ? 'text-tech-primary font-mono text-sm tracking-widest uppercase' : 'text-artisan-secondary/80 font-serif italic text-lg';

    const proseClasses = isTech
        ? 'prose-p:text-gray-300 prose-headings:text-white prose-strong:text-tech-secondary font-sans'
        : 'prose-p:text-artisan-primary prose-headings:text-artisan-secondary font-serif';

    const detailLabelClasses = isTech ? 'text-tech-secondary/70 font-mono text-xs' : 'text-artisan-secondary/60 uppercase tracking-wider text-sm';
    const detailValueClasses = isTech ? 'text-white font-bold' : 'text-artisan-secondary font-medium text-xl';

    const lightboxBgClass = isTech ? 'bg-[#00091a]' : 'bg-artisan-bg';

    return ReactDOM.createPortal(
        <>
            <AnimatePresence>
                {project && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-hidden"
                        onClick={onClose}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 50 }}
                            className={`w-full max-w-6xl h-[85vh] rounded-xl overflow-hidden my-auto relative flex flex-col ${containerClasses}`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Modal Button */}
                            <button
                                onClick={onClose}
                                className={`absolute top-4 right-4 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${closeBtnClasses}`}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                                {/* Visuals Column */}
                                <div className={`${visualColClasses} p-6 md:p-8 space-y-6 overflow-y-auto ${scrollbarClass} h-full`}>
                                    {/* Main Image */}
                                    <div
                                        className={`aspect-[4/5] rounded-lg overflow-hidden shadow-md cursor-zoom-in group ${isTech ? 'border border-white/10' : ''}`}
                                        onClick={() => openLightbox(0)}
                                    >
                                        <img
                                            src={getAssetUrl(mainImage)}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Gallery Grid */}
                                    <div className="grid grid-cols-2 gap-4">
                                        {project.gallery && project.gallery.map((item, idx) => {
                                            const isVideo = typeof item === 'object' && item.type === 'video';
                                            const src = isVideo ? item.poster : item;

                                            return (
                                                <div
                                                    key={idx}
                                                    className={`relative aspect-square rounded-lg overflow-hidden shadow-sm cursor-zoom-in group ${isTech ? 'border border-white/10' : ''}`}
                                                    onClick={() => openLightbox(idx + 1)}
                                                >
                                                    <img
                                                        src={getAssetUrl(src)}
                                                        alt={`Detail ${idx + 1}`}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                    />
                                                    {isVideo && (
                                                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                                                            <div className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm border ${isTech ? 'bg-tech-primary/80 border-tech-primary text-black' : 'bg-white/80 border-white text-artisan-secondary'}`}>
                                                                <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Content Column */}
                                <div className={`p-8 md:p-12 flex flex-col ${contentColClasses} overflow-y-auto ${scrollbarClass} h-full`}>
                                    <div className="mt-8 md:mt-0">
                                        <span className={`${categoryClasses} mb-2 block`}>{project.category}</span>
                                        <h2 className={`text-5xl ${titleClasses} mb-8`}>{project.title}</h2>

                                        <div className={`prose prose-lg ${proseClasses} mb-12`}>
                                            <p>{project.description}</p>
                                        </div>

                                        {/* Details List */}
                                        <dl className={`grid grid-cols-2 gap-x-8 gap-y-6 border-t pt-8 ${isTech ? 'border-white/10' : 'border-artisan-secondary/20'}`}>
                                            {project.details && Object.entries(project.details).map(([key, value]) => (
                                                <div key={key}>
                                                    <dt className={`${detailLabelClasses} mb-1`}>{key}</dt>
                                                    <dd className={detailValueClasses}>{value}</dd>
                                                </div>
                                            ))}
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Lightbox Overlay */}
            <AnimatePresence>
                {lightboxIndex !== null && project && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`fixed inset-0 z-[100] ${lightboxBgClass} flex items-center justify-center p-4 overflow-hidden`}
                        onClick={closeLightbox}
                    >
                        {/* Background Effects */}
                        <div className="absolute inset-0 z-0">
                            <ParallaxBackground theme={theme} />
                        </div>

                        {/* Image Container */}
                        <motion.div
                            key={lightboxIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="relative z-10 max-w-full max-h-screen p-2 md:p-10 flex flex-col items-center justify-center w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {(() => {
                                const currentItem = allImages[lightboxIndex];
                                const isVideo = typeof currentItem === 'object' && currentItem.type === 'video';

                                if (isVideo) {
                                    return (
                                        <video
                                            src={getAssetUrl(currentItem.src)}
                                            controls
                                            autoPlay
                                            className={`max-h-[80vh] max-w-[90vw] w-auto shadow-2xl rounded-2xl ${isTech ? 'ring-1 ring-tech-primary/50 box-shadow-[0_0_30px_rgba(0,243,255,0.2)]' : 'ring-1 ring-white/10'}`}
                                            poster={getAssetUrl(currentItem.poster)}
                                        />
                                    );
                                } else {
                                    return (
                                        <img
                                            src={getAssetUrl(currentItem)}
                                            alt="Full screen view"
                                            className={`max-h-[80vh] max-w-[90vw] object-contain shadow-2xl rounded-2xl ${isTech ? 'ring-1 ring-tech-primary/50 box-shadow-[0_0_30px_rgba(0,243,255,0.2)]' : 'ring-1 ring-white/10'}`}
                                        />
                                    );
                                }
                            })()}

                            <p className={`text-center mt-4 font-mono text-sm ${isTech ? 'text-tech-primary' : 'text-artisan-secondary'}`}>
                                {lightboxIndex + 1} / {allImages.length}
                            </p>
                        </motion.div>

                        {/* Close Lightbox Button */}
                        <button
                            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                            className={`absolute top-6 right-6 z-20 p-2 rounded-full transition-colors ${isTech ? 'text-tech-primary hover:bg-white/10' : 'text-artisan-secondary hover:bg-artisan-surface/20'}`}
                        >
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Previous Button */}
                        <button
                            onClick={prevImage}
                            className={`absolute left-4 md:left-8 z-20 p-2 rounded-full transition-colors ${isTech ? 'text-tech-primary hover:bg-white/10' : 'text-artisan-secondary hover:bg-artisan-surface/20'}`}
                        >
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Next Button */}
                        <button
                            onClick={nextImage}
                            className={`absolute right-4 md:right-8 z-20 p-2 rounded-full transition-colors ${isTech ? 'text-tech-primary hover:bg-white/10' : 'text-artisan-secondary hover:bg-artisan-surface/20'}`}
                        >
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>,
        document.body
    );
};

export default ProjectModal;