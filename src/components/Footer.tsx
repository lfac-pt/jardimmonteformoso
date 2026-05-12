import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-white flex justify-center relative z-20 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] overflow-hidden">
            <div className="w-full">
                {/* Desktop Image */}
                <img 
                    src="/logos-desktop.webp" 
                    alt="Apoios e Parceiros" 
                    className="hidden sm:block w-full h-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
                {/* Mobile Image */}
                <img 
                    src="/logos-mobile.webp" 
                    alt="Apoios e Parceiros" 
                    className="block sm:hidden w-full h-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
            </div>
        </footer>
    );
};
