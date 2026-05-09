import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-white pt-2 pb-12 px-6 flex justify-center relative z-20 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] overflow-hidden">
            <div className="w-full max-w-7xl">
                {/* Desktop Image */}
                <img 
                    src="/logos-desktop.webp" 
                    alt="Apoios e Parceiros" 
                    className="hidden sm:block w-[90%] md:w-[85%] h-auto object-contain mx-auto opacity-90 hover:opacity-100 transition-opacity -mt-4 md:-mt-8"
                />
                {/* Mobile Image */}
                <img 
                    src="/logos-mobile.webp" 
                    alt="Apoios e Parceiros" 
                    className="block sm:hidden w-[95%] h-auto object-contain mx-auto opacity-90 hover:opacity-100 transition-opacity -mt-6"
                />
            </div>
        </footer>
    );
};
