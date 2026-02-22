import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
    return (
        <section className="py-20 px-6 max-w-4xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="p-10"
            >
                <h2 className="text-4xl font-rajdhani font-bold mb-6 text-white">Contact</h2>
                <p className="text-gray-400 font-space-mono text-lg mb-8 max-w-2xl mx-auto">
                    N'hésitez pas à me contacter pour discuter.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <a
                        href="mailto:matthieu.leauthaud@gmail.com"
                        className="px-8 py-3 bg-white text-black font-rajdhani font-bold rounded-full hover:bg-gray-200 transition-colors w-full md:w-auto"
                    >
                        Me contacter
                    </a>
                    <a
                        href="https://www.linkedin.com/in/matthieu-l%C3%A9authaud-75b08a272/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-transparent text-white border border-white/20 font-rajdhani font-bold rounded-full hover:bg-white/10 transition-colors w-full md:w-auto"
                    >
                        LinkedIn
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default ContactSection;
