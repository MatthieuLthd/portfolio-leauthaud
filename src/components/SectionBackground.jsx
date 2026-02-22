import React from 'react';

const SectionBackground = ({
    src,
    type = 'image',
    overlayOpacity = 0.5,
    className = "",
    children
}) => {
    return (
        <div className={`absolute inset-0 w-full h-full overflow-hidden -z-10 ${className}`}>
            {/* Media Background */}
            {src && (
                <>
                    {type === 'video' ? (
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                        >
                            <source src={src} type="video/mp4" />
                        </video>
                    ) : (
                        <img
                            src={src}
                            alt="Section Background"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    )}
                </>
            )}

            {/* Fallback/Overlay Gradient */}
            {!src && (
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
            )}

            {/* Dark Overlay */}
            <div
                className="absolute inset-0 bg-black"
                style={{ opacity: overlayOpacity }}
            />

            {/* Content (Optional, usually passed as siblings but can be children if needed) */}
            {children}
        </div>
    );
};

export default SectionBackground;
