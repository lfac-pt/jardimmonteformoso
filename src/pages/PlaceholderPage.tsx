import React from "react";

interface Props {
    title: string;
}

export const PlaceholderPage: React.FC<Props> = ({ title }) => {
    return (
        <div className="relative min-h-[95dvh] flex flex-col items-center justify-center overflow-hidden bg-brand-black px-6 pt-24">
            {/* Subtle floating elements/blobs to match the theme */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-yellow/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="text-center space-y-6 relative z-10 p-6">
                <h1 className="text-brand-white font-display text-5xl md:text-7xl uppercase tracking-tighter drop-shadow-2xl">
                    {title}
                </h1>
                <p className="text-brand-white/60 text-xl md:text-2xl tracking-wide font-light">
                    Ainda não disponível
                </p>
            </div>
        </div>
    );
};
