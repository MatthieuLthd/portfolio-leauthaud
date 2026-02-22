import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import TechAtelierSwitch from './TechAtelierSwitch';

const Navbar = ({ isAtelier }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const navLinks = [
        { name: 'Accueil', path: '/#accueil' },
        { name: 'Projets', path: '/#projets' },
        { name: 'Mon parcours', path: '/#parcours' },
        { name: 'Expériences', path: '/#experiences' },
        { name: 'Compétences', path: '/#competences' },
        { name: 'Contact', path: '/#contact' },
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
                <div className="hidden md:flex items-center space-x-12">
                    {navLinks.map((link) => (
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
                <div className="hidden md:flex items-center">
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
                    className={`md:hidden z-50 w-10 h-10 flex items-center justify-center hover:bg-white/5 rounded-full transition-colors ${textColor}`}
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
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center ${isAtelier ? 'bg-artisan-bg' : 'bg-[#001233]'}`}
                    >
                        <ul className="flex flex-col space-y-8 text-center">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <NavLink
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={({ isActive }) =>
                                            `block text-2xl font-rajdhani font-bold uppercase tracking-widest ${isActive ? activeColor : mobileLinkColor}`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                            <li className="pt-8">
                                <Link
                                    to={isAtelier ? "/" : "/atelier"}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <TechAtelierSwitch isAtelier={isAtelier} />
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
