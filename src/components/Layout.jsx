import React, { useState } from 'react';
import Navbar from './Navbar';
import ScrollToAnchor from './ScrollToAnchor';
import LoadingScreen from './LoadingScreen';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
    const location = useLocation();
    const isAtelier = location.pathname === '/atelier';
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className={`min-h-screen transition-colors duration-500 ${isAtelier ? 'bg-artisan-bg text-artisan-secondary font-serif' : 'bg-tech-bg text-white font-sans'} ${isLoading ? 'overflow-hidden h-screen' : ''}`}>
            {/* Show Loading Screen only on initial load. We could persist state or context if we want it ONLY once per session. 
                For now, each refresh triggers it. */}
            {isLoading && (
                <LoadingScreen onFinished={() => setIsLoading(false)} />
            )}

            <ScrollToAnchor />
            <Navbar isAtelier={isAtelier} />

            <main className="w-full">
                {children}
            </main>
        </div>
    );
};

export default Layout;
