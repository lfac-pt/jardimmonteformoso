import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="fixed bottom-0 left-0 w-full z-50 p-4 sm:p-8 pointer-events-none flex justify-center">
            <div className="pointer-events-auto w-full px-4">
                {/* Desktop Image */}
                <img 
                    src="/logos-desktop.webp" 
                    alt="Apoios e Parceiros" 
                    className="hidden sm:block w-[90%] md:w-[80%] max-w-7xl h-auto object-contain invert brightness-0 opacity-95 hover:opacity-100 transition-opacity drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] mx-auto"
                />
                {/* Mobile Image */}
                <img 
                    src="/logos-mobile.webp" 
                    alt="Apoios e Parceiros" 
                    className="block sm:hidden w-[95%] h-auto object-contain invert brightness-0 opacity-95 hover:opacity-100 transition-opacity drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] mx-auto"
                />
            </div>
        </footer>
    );
};
