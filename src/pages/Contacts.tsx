import React, { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";

export const Contacts: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="relative min-h-[95dvh] flex flex-col items-center justify-center overflow-hidden bg-brand-black px-6 pt-24 pb-12">
            {/* Subtle floating elements/blobs to match the theme */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-yellow/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />
            
            <main className={`relative z-10 w-full max-w-3xl flex flex-col items-center space-y-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h1 className="text-brand-white font-display text-5xl md:text-7xl uppercase tracking-tighter drop-shadow-2xl text-center">
                    Contactos
                </h1>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="https://www.instagram.com/jardimmonteformoso/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 bg-brand-white/10 hover:bg-brand-white/20 backdrop-blur-md border border-brand-white/30 px-8 py-4 rounded-full text-brand-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                        <FaInstagram className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                        <span className="text-xl font-medium tracking-tight">Instagram</span>
                    </a>
                </div>
            </main>
        </div>
    );
};
