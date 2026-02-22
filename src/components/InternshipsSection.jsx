import React from 'react';
import { motion } from 'framer-motion';

const internships = [
    {
        title: 'Alternant Marketing', company: 'Les Vergers de Gally', type: 'Alternance', period: 'Septembre 2025 - Septembre 2026', desc: "Coordinateur refonte du site web. SEO/GEO, Missions de communication, CRM Hubspot."
    },
    {
        title: 'Stagiaire Marketing', company: 'Les Vergers de Gally', type: 'Stage', period: 'Avril - Juin 2025', desc: "Réalisations de vidéos de A à Z, SEO, rédaction d'articles et conception  de pages."
    },
    {
        title: 'Stagiaire Refonte site web e-commerce', company: 'Les Deux gourmands', type: 'Stage', period: 'Avril - Juin 2024', desc: "Refonte complète du site web e-commerce sur Shopify."
    },
    {
        title: 'Stagiaire Développement', company: 'Arte France', type: 'Stage', period: 'Avril - Juin 2023', desc: "Développement de l'internationalisation d'une application interne."
    },
];

const InternshipsSection = () => {
    return (
        <section className="py-20 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl font-bold mb-12 text-center text-white">Expériences</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {internships.map((item, index) => (
                        <div key={index} className="mb-8">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                                    <p className="text-tech-primary font-mono">{item.company}</p>
                                </div>
                                <span className="px-3 py-1 text-xs font-bold rounded-full bg-tech-secondary/20 text-tech-secondary border border-tech-secondary/50">
                                    {item.type}
                                </span>
                            </div>
                            <p className="text-sm text-gray-500 mb-4">{item.period}</p>
                            <p className="text-gray-300">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default InternshipsSection;
