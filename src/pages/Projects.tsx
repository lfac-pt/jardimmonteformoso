import React, { useEffect, useState } from "react";

export const Projects: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const projects = [
        "São flores, Coimbra!",
        "Planeta Verde",
        "Prados Urbanos"
    ];

    return (
        <div className="relative min-h-[85dvh] flex flex-col items-center justify-center overflow-hidden bg-brand-black px-6 pt-24 pb-12">
            {/* Subtle floating elements/blobs to match the theme */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-yellow/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />
            
            <main className={`relative z-10 w-full max-w-5xl flex flex-col items-center space-y-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h1 className="text-brand-white font-display text-5xl md:text-7xl uppercase tracking-tighter drop-shadow-2xl text-center">
                    Projetos
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    {projects.map((project, index) => (
                        <div 
                            key={index}
                            className={`bg-brand-white/5 border border-brand-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm flex items-center justify-center text-center transition-all duration-700 ease-out hover:bg-brand-white/10 hover:-translate-y-2 hover:border-brand-yellow/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                            style={{ transitionDelay: `${300 + index * 150}ms` }}
                        >
                            <h2 className="text-brand-white text-2xl md:text-3xl font-light tracking-wide">{project}</h2>
                        </div>
                    ))}
                </div>
                
                <p className={`text-brand-white/40 text-sm tracking-[0.2em] uppercase transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1000ms' }}>
                    Mais detalhes em breve
                </p>
            </main>
        </div>
    );
};
