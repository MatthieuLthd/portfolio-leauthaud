import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import InternshipsSection from '../components/InternshipsSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import ParallaxBackground from '../components/ParallaxBackground';

const WaveSeparator = ({ flipped = false, mirror = false }) => (
    <div className={`w-full overflow-hidden leading-[0] ${flipped ? 'rotate-180' : ''} ${mirror ? 'scale-y-[-1]' : ''}`}>
        <svg
            className="relative block w-[calc(100%+1.3px)] h-[100px]"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
        >
            <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,172 82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="fill-tech-surface"
            ></path>
        </svg>
    </div>
);

import SectionBackground from '../components/SectionBackground';

const Home = () => {
    useEffect(() => {
        document.documentElement.classList.add('tech-scrollbar');
        document.body.classList.add('tech-scrollbar');
        return () => {
            document.documentElement.classList.remove('tech-scrollbar');
            document.body.classList.remove('tech-scrollbar');
        };
    }, []);

    return (
        <div className="relative min-h-screen overflow-x-hidden bg-black">
            {/* Navigation */}
            {/* Note: Navbar is usually in Layout, but if it's here ensure z-index is high */}

            {/* --- Hero Section --- */}
            <section id="accueil" className="relative min-h-screen bg-[#001233]">
                {/* Background: Mesh Gradient (Tech) or Image */}
                <div className="absolute inset-0 z-0">
                    <ParallaxBackground theme="tech" />
                </div>

                {/* Fade Mask at the bottom of Hero to blend into Unified Wrapper */}
                <div className="absolute bottom-0 left-0 w-full h-48 md:h-64 bg-gradient-to-t from-[#001233] to-transparent z-10 pointer-events-none" />

                <div className="relative z-10">
                    <HeroSection />
                </div>
            </section>

            {/* --- Unified Section for Projects & Experience --- */}
            <div className="relative w-full overflow-hidden">
                {/* Unified Background: Seamless gradient matching Hero (top #001233) and Internships (bottom #001233) */}
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#001233] via-[#00091a] to-[#001233] pointer-events-none" />
                <div className="absolute inset-0 z-0 bg-noise mix-blend-overlay opacity-30 pointer-events-none" />

                {/* Embedded Parallax Elements for Tech Theme */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-tech-primary/5 rounded-full blur-3xl mix-blend-screen" />
                    <div className="absolute top-[40%] right-[10%] w-96 h-96 bg-tech-secondary/10 rounded-full blur-3xl mix-blend-screen" />
                    <div className="absolute bottom-[20%] left-[15%] w-72 h-72 bg-tech-primary/5 rounded-full blur-3xl mix-blend-screen" />

                    {/* Grid Lines Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)] pointer-events-none" />
                </div>

                {/* --- Projects Section --- */}
                <section id="projets" className="relative py-20">
                    <div className="relative z-10">
                        <ProjectsSection />
                    </div>
                </section>

                {/* --- Experience Section --- */}
                <section id="parcours" className="relative py-20">
                    <div className="relative z-10">
                        <ExperienceSection />
                    </div>
                </section>
            </div>

            {/* --- Internships Section --- */}
            <section id="experiences" className="relative py-20 bg-[#001233]">
                {/* Fade from Hero/Projects #001233 down to #011a4a */}
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#001233] to-[#011a4a] pointer-events-none" />
                <div className="relative z-10">
                    <InternshipsSection />
                </div>
            </section>

            {/* --- Skills & Contact Section --- */}
            <section id="competences" className="relative py-20 bg-[#011a4a]">
                {/* Fade from Internships #011a4a back down to #001233 */}
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#011a4a] to-[#001233] pointer-events-none" />
                <div className="relative z-10">
                    <SkillsSection />
                </div>
            </section>

            <section id="contact" className="relative py-20 bg-[#001233]">
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#001233] to-black pointer-events-none" />
                <div className="relative z-10">
                    <ContactSection />
                </div>
            </section>

            <footer className="py-12 text-center text-gray-500 text-sm relative z-10 bg-black">
                LEAUTHAUD Matthieu - 2026
            </footer>
        </div>
    );
};

export default Home;
