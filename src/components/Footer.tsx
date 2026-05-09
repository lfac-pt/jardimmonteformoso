import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-white pt-0 sm:pt-2 pb-0 sm:pb-12 px-0 sm:px-6 flex justify-center relative z-20 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] overflow-hidden">
            <div className="w-full max-w-7xl">
                {/* Desktop Image */}
                <img 
                    src="/logos-desktop.webp" 
                    alt="Apoios e Parceiros" 
                    className="hidden sm:block w-[95%] md:w-[92%] h-auto object-contain mx-auto opacity-90 hover:opacity-100 transition-opacity -mt-4 md:-mt-8"
                />
                {/* Mobile Image */}
                <img 
                    src="/logos-mobile.webp" 
                    alt="Apoios e Parceiros" 
                    className="block sm:hidden w-[120%] max-w-[120%] -ml-[10%] h-auto object-contain opacity-90 hover:opacity-100 transition-opacity -mt-10 -mb-32"
                />
            </div>
        </footer>
    );
};
