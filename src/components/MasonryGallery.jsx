import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { atelierProjects } from '../data/atelierProjects';
import ProjectModal from './ProjectModal';

const MasonryGallery = () => {
    const [selectedProject, setSelectedProject] = useState(null);

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
                        <div className="aspect-w-1 aspect-h-1 mb-4 overflow-hidden bg-gray-100">
                            <img src={project.mainImage} alt={project.title} className="object-cover w-full h-full" />
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
                />
            )}
        </>
    );
};

export default MasonryGallery;
