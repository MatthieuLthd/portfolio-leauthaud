import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children, isAtelier }) => {
    // Current Theme Colors
    const techColor = '#001233'; // Deep Blue
    const artisanColor = '#284139'; // Warm White

    // Logic:
    // If we are leaving (Exit), we want to wipe UP to cover the screen.
    // Start color: Current Page Color.
    // End color: Next Page Color (Approx).

    // If we are entering (Initial/Animate), we want to wipe UP to reveal the screen.
    // Start color: Current Page Color (which matches previous page's exit end color).

    const currentColor = isAtelier ? artisanColor : techColor;
    const nextColor = isAtelier ? techColor : artisanColor;

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-full"
            >
                {children}
            </motion.div>

            {/* Transition Overlay */}
            <motion.div
                className="fixed inset-0 z-[100] pointer-events-none"
                initial={{ scaleY: 1, backgroundColor: currentColor, originY: 0 }}
                animate={{
                    scaleY: 0,
                    backgroundColor: currentColor,
                    originY: 0,
                    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }
                }}
                exit={{
                    scaleY: 1,
                    backgroundColor: [currentColor, nextColor],
                    originY: 1,
                    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
                }}
            />
        </>
    );
};

export default PageTransition;
