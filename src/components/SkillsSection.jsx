import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { category: 'XR', items: ['Unity', 'Meta SDK', 'XRInteraction'] },
    { category: 'IA', items: ['ComfyUI', 'TouchDesigner', 'StreamDiffusion', 'Python'] },
    { category: 'Web', items: ['HTML', 'CSS', 'React', 'JavaScript', 'Tailwind'] },
    { category: 'Divers', items: ['Blender', 'Figma', 'Git', 'Github', 'Davinci Resolve', 'Adobe Suite'] },
];

import SkillCard from './SkillCard';

const SkillsSection = () => {
    return (
        <section className="py-20 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl font-rajdhani font-bold mb-12 text-center text-white">Compétences</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skillGroup, index) => (
                        <SkillCard
                            key={index}
                            category={skillGroup.category}
                            items={skillGroup.items}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default SkillsSection;
