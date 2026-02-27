import React from 'react';
import { motion } from 'framer-motion';

const TechAtelierSwitch = ({ isAtelier }) => {
    return (
        <div
            className={`group relative w-20 h-10 rounded-full p-1 cursor-pointer transition-all duration-500 ${isAtelier
                    ? 'bg-artisan-secondary hover:bg-tech-secondary shadow-[0_0_15px_2px_rgba(225,171,114,0.6)] hover:shadow-[0_0_20px_2px_rgba(0,243,255,0.6)]'
                    : 'bg-tech-secondary hover:bg-artisan-secondary shadow-[0_0_20px_2px_rgba(0,243,255,0.6)] hover:shadow-[0_0_15px_2px_rgba(225,171,114,0.6)]'
                }`}
        >
            {/* Icons Background */}
            <div className="absolute inset-0 flex items-center justify-between px-3 pointer-events-none">
                {/* Tech Icon Position (Left) */}
                <span className={`transition-all duration-500 ${!isAtelier ? 'opacity-0' : 'opacity-50 text-artisan-bg group-hover:text-tech-bg'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="currentColor">
                        <path d="M360-360v-240h240v240H360Zm80-80h80v-80h-80v80Zm-80 320v-80h-80q-33 0-56.5-23.5T200-280v-80h-80v-80h80v-80h-80v-80h80v-80q0-33 23.5-56.5T280-760h80v-80h80v80h80v-80h80v80h80q33 0 56.5 23.5T760-680v80h80v80h-80v80h80v80h-80v80q0 33-23.5 56.5T680-200h-80v80h-80v-80h-80v80h-80Zm320-160v-400H280v400h400ZM480-480Z" />
                    </svg>
                </span>

                {/* Atelier Icon Position (Right) */}
                <span className={`transition-all duration-500 ${isAtelier ? 'opacity-0' : 'opacity-50 text-tech-bg group-hover:text-artisan-bg'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="currentColor">
                        <path d="M754-81q-8 0-15-2.5T726-92L522-296q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l85-85q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l204 204q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13l-85 85q-6 6-13 8.5T754-81Zm0-95 29-29-147-147-29 29 147 147ZM205-80q-8 0-15.5-3T176-92l-84-84q-6-6-9-13.5T80-205q0-8 3-15t9-13l212-212h85l34-34-165-165h-57L80-765l113-113 121 121v57l165 165 116-116-43-43 56-56H495l-28-28 142-142 28 28v113l56-56 142 142q17 17 26 38.5t9 45.5q0 24-9 46t-26 39l-85-85-56 56-42-42-207 207v84L233-92q-6 6-13 9t-15 3Zm0-96 170-170v-29h-29L176-205l29 29Zm0 0-29-29 15 14 14 15Zm549 0 29-29-29 29Z" />
                    </svg>
                </span>
            </div>

            {/* Moving Thumb */}
            <motion.div
                className={`w-8 h-8 rounded-full shadow-md flex items-center justify-center transition-colors duration-500 ${isAtelier
                        ? 'bg-artisan-bg text-artisan-secondary group-hover:bg-tech-bg group-hover:text-tech-secondary'
                        : 'bg-tech-bg text-tech-secondary group-hover:bg-artisan-bg group-hover:text-artisan-secondary'
                    }`}
                animate={{
                    x: isAtelier ? 40 : 0,
                    rotate: isAtelier ? 360 : 0
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
                {/* Active Icon inside Thumb */}
                {isAtelier ? (
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="currentColor">
                        <path d="M754-81q-8 0-15-2.5T726-92L522-296q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l85-85q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l204 204q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13l-85 85q-6 6-13 8.5T754-81Zm0-95 29-29-147-147-29 29 147 147ZM205-80q-8 0-15.5-3T176-92l-84-84q-6-6-9-13.5T80-205q0-8 3-15t9-13l212-212h85l34-34-165-165h-57L80-765l113-113 121 121v57l165 165 116-116-43-43 56-56H495l-28-28 142-142 28 28v113l56-56 142 142q17 17 26 38.5t9 45.5q0 24-9 46t-26 39l-85-85-56 56-42-42-207 207v84L233-92q-6 6-13 9t-15 3Zm0-96 170-170v-29h-29L176-205l29 29Zm0 0-29-29 15 14 14 15Zm549 0 29-29-29 29Z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="currentColor">
                        <path d="M360-360v-240h240v240H360Zm80-80h80v-80h-80v80Zm-80 320v-80h-80q-33 0-56.5-23.5T200-280v-80h-80v-80h80v-80h-80v-80h80v-80q0-33 23.5-56.5T280-760h80v-80h80v80h80v-80h80v80h80q33 0 56.5 23.5T760-680v80h80v80h-80v80h80v80h-80v80q0 33-23.5 56.5T680-200h-80v80h-80v-80h-80v80h-80Zm320-160v-400H280v400h400ZM480-480Z" />
                    </svg>
                )}
            </motion.div>
        </div>
    );
};

export default TechAtelierSwitch;
