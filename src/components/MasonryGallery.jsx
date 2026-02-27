import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { atelierProjects } from '../data/atelierProjects';
import ProjectModal from './ProjectModal';

const MasonryGallery = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const getAssetUrl = (path) => {
        if (!path || typeof path !== 'string') return '';
        if (path.startsWith('http')) return path;

        const base = import.meta.env.BASE_URL;
        const cleanBase = base.endsWith('/') ? base : `${base}/`;
        const cleanPath = path.startsWith('/') ? path.slice(1) : path;
        return `${cleanBase}${cleanPath}`;
    };

    const handleNextProject = () => {
        if (!selectedProject) return;
        const currentIndex = atelierProjects.findIndex(p => p.id === selectedProject.id);
        const nextIndex = (currentIndex + 1) % atelierProjects.length;
        setSelectedProject(atelierProjects[nextIndex]);
    };

    const handlePrevProject = () => {
        if (!selectedProject) return;
        const currentIndex = atelierProjects.findIndex(p => p.id === selectedProject.id);
        const prevIndex = (currentIndex - 1 + atelierProjects.length) % atelierProjects.length;
        setSelectedProject(atelierProjects[prevIndex]);
    };

    return (
        <>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 p-8">
                {atelierProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02, rotate: 0 }}
                        className="break-inside-avoid bg-[#f6e8bb] p-4 shadow-xl rotate-1 rounded-xl cursor-pointer transition-all duration-300"
                        onClick={() => setSelectedProject(project)}
                        layoutId={`project-${project.id}`}
                    >
                        <div className="aspect-w-1 aspect-h-1 mb-4 overflow-hidden bg-gray-100 relative group">
                            {(() => {
                                const isVideo = typeof project.mainImage === 'object' && project.mainImage !== null && project.mainImage.type === 'video';
                                const isYouTube = typeof project.mainImage === 'object' && project.mainImage !== null && project.mainImage.type === 'youtube';

                                let imgSrc;
                                if (isVideo) imgSrc = project.mainImage.poster;
                                else if (isYouTube) imgSrc = `https://img.youtube.com/vi/${project.mainImage.videoId}/hqdefault.jpg`;
                                else imgSrc = typeof project.mainImage === 'object' && project.mainImage !== null ? (project.mainImage.src || project.mainImage.image) : project.mainImage;

                                return (
                                    <>
                                        <img src={getAssetUrl(imgSrc)} alt={project.title} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" />
                                        {(isVideo || isYouTube) && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                                                <div className="w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm border bg-white/80 border-white text-artisan-secondary shadow-lg">
                                                    <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                );
                            })()}
                        </div>
                        <h3 className="font-chango text-2xl text-artisan-surface mb-2">{project.title}</h3>
                        <p className="font-serif text-gray-600 italic line-clamp-2">{project.description}</p>
                    </motion.div>
                ))}
            </div>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                    onNextProject={handleNextProject}
                    onPrevProject={handlePrevProject}
                />
            )}
        </>
    );
};

export default MasonryGallery;
