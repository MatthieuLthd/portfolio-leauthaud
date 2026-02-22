import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
    { id: 1, year: '2028', role: 'Master', company: '', desc: '' },
    { id: 2, year: '2026', role: 'BUT MMI', company: 'IUT de Vélizy', desc: 'Parcours Web & VR - Options VR et IA' },
    { id: 3, year: '2024', role: 'DUT Informatique', company: 'IUT de Vélizy', desc: '' },
    { id: 4, year: '2022', role: 'BAC Général', company: 'Lycée Violet le Duc - Villiers St-Fréderic', desc: 'Options Mathématiques et NSI' },
];

const ExperienceSection = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    useLayoutEffect(() => {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            // Desktop animation
            gsap.to(sectionRef.current, {
                translateX: '-300vw', // Move left by 3 screen widths (adjust based on content)
                ease: 'none',
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: 'top top',
                    end: '+=2000', // Scroll distance
                    scrub: 1,
                    pin: true,
                    invalidateOnRefresh: true, // Recalculate on refresh/resize
                },
            });
        });

        return () => mm.revert(); // Clean up matchMedia on unmount
    }, []);

    return (
        <section className="overflow-hidden text-white py-12 md:py-0">
            <div ref={triggerRef}>
                <div
                    ref={sectionRef}
                    className="md:h-screen flex flex-col md:flex-row items-start md:items-center px-6 md:px-20 md:w-[400vw] gap-12 md:gap-0" // Stacks vertically on mobile, horizontally on desktop
                >
                    <div className="flex-shrink-0 w-full md:w-screen md:px-10">
                        <h2 className="text-4xl md:text-6xl font-rajdhani font-bold mb-4 md:mb-8">Mon parcours</h2>
                        <p className="text-lg md:text-xl text-gray-400 font-space-mono max-w-md">
                            Chronologie de mes études.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-12 md:gap-0 w-full">
                        {experiences.map((exp) => (
                            <div key={exp.id} className="flex-shrink-0 w-full md:w-[60vw] lg:w-[40vw] md:px-8 border-l-2 border-tech-primary/30 md:border-l-0 md:border-t-2 md:pt-8 md:mt-20 pl-6 md:pl-0 relative before:content-[''] before:absolute before:w-4 before:h-4 before:bg-tech-primary before:rounded-full before:-left-[9px] md:before:left-0 md:before:-top-[7px] before:top-2 md:before:top-auto">
                                <span className="text-6xl md:text-8xl font-rajdhani font-bold text-white/10 block mb-2 md:mb-4">{exp.year}</span>
                                <h3 className="text-3xl md:text-4xl font-rajdhani font-bold text-tech-primary mb-1 md:mb-2">{exp.role}</h3>
                                <h4 className="text-xl md:text-2xl font-rajdhani text-white mb-2 md:mb-4">{exp.company}</h4>
                                <p className="text-base md:text-lg text-gray-400 font-space-mono">{exp.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;