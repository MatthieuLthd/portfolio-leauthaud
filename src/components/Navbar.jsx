import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import TechAtelierSwitch from './TechAtelierSwitch';

const Navbar = ({ isAtelier }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const navLinks = [
        { name: 'Accueil', path: '#accueil' },
        { name: 'Projets', path: '#projets' },
        { name: 'Mon parcours', path: '#parcours' },
        { name: 'Expériences', path: '#experiences' },
        { name: 'Compétences', path: '#competences' },
        { name: 'Contact', path: '#contact' },
    ];

    const textColor = isAtelier ? 'text-artisan-secondary' : 'text-white';
    const hoverColor = isAtelier ? 'hover:text-artisan-primary' : 'hover:text-white';
    const activeColor = isAtelier ? 'text-artisan-primary' : 'text-tech-primary';
    const bgColor = isAtelier ? 'bg-artisan-bg/90' : 'bg-white/5'; // Keep base bg for contrast if needed, or fully transparent if glass removal was strict. Using variable for flexibility.
    const logoColor = isAtelier ? 'text-artisan-secondary' : 'text-white';

    // Mobile styling
    const mobileBgColor = isAtelier ? 'bg-artisan-bg' : 'bg-[#001233]/95';
    const mobileLinkColor = isAtelier ? 'text-artisan-secondary' : 'text-white';

    React.useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false); // Hide on scroll down
            } else {
                setIsVisible(true); // Show on scroll up
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${lastScrollY > 50 ? (isAtelier ? 'bg-artisan-bg/90 backdrop-blur-md py-4' : 'bg-[#001233]/80 backdrop-blur-md py-4') : 'bg-transparent py-8'}`}
        >
            <div className={`max-w-7xl mx-auto flex items-center justify-between px-6 transition-colors duration-500`}>
                {/* Logo / Brand */}
                <Link to="/" className={`text-xl md:text-2xl font-rajdhani font-bold tracking-widest uppercase transition-colors duration-500 ${logoColor} z-50`}>
                    PORTFOLIO<span className={isAtelier ? 'text-artisan-primary' : 'text-tech-primary'}>.</span>
                </Link>

                {/* Main Navigation (Desktop) */}
                <div className="hidden lg:flex items-center space-x-12">
                    {!isAtelier && navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `text-sm font-rajdhani font-bold uppercase tracking-[0.2em] transition-all duration-300 ${isActive
                                    ? activeColor
                                    : `${isAtelier ? 'text-artisan-secondary/70' : 'text-gray-400'} ${hoverColor}`
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* Tech/Atelier Switch (Desktop) */}
                <div className="hidden lg:flex items-center">
                    <Link
                        to={isAtelier ? "/" : "/atelier"}
                        aria-label={isAtelier ? "Version Tech" : "Version Atelier"}
                        className="transition-transform hover:scale-105"
                    >
                        <TechAtelierSwitch isAtelier={isAtelier} />
                    </Link>
                </div>

                {/* Mobile Menu Button - Kept generally same but aligned style */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`lg:hidden z-50 w-10 h-10 flex items-center justify-center hover:bg-white/5 rounded-full transition-colors ${textColor}`}
                >
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 h-[100dvh] min-h-screen z-40 lg:hidden flex flex-col items-center justify-center"
                        style={{ backgroundColor: isAtelier ? 'rgba(23, 23, 23, 0.98)' : 'rgba(0, 18, 51, 0.98)' }}
                    >
                        <ul className="flex flex-col space-y-8 text-center w-full px-6">
                            {!isAtelier && navLinks.map((link, i) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.05 }}
                                >
                                    <NavLink
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={({ isActive }) =>
                                            `block text-xl md:text-3xl font-rajdhani font-bold uppercase tracking-widest transition-all duration-300 ${isActive ? `${activeColor} scale-110` : `${mobileLinkColor} opacity-70 hover:opacity-100 hover:scale-105`}`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                </motion.li>
                            ))}
                            <motion.li
                                className="pt-8 flex justify-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + navLinks.length * 0.05 }}
                            >
                                <Link
                                    to={isAtelier ? "/" : "/atelier"}
                                    onClick={() => setIsOpen(false)}
                                    className="transform scale-100 md:scale-110 transition-transform hover:scale-110 md:hover:scale-[1.25]"
                                >
                                    <TechAtelierSwitch isAtelier={isAtelier} />
                                </Link>
                            </motion.li>
                        </ul>

                        {/* Decorative background elements for mobile menu */}
                        <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none">
                            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-tech-primary/10 rounded-full blur-[100px]"></div>
                            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-tech-secondary/10 rounded-full blur-[120px]"></div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
