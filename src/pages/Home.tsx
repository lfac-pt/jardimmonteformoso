import React, { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";

export const Home: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <>
            {/* React 19 Metadata Hoisting */}
            <title>Jardim Monte Formoso | Um refúgio para a biodiversidade em Coimbra</title>
            <meta name="description" content="O Jardim Monte Formoso é um projeto dedicado à transformação dos espaços urbanos de Coimbra em santuários para a biodiversidade." />
            <link rel="canonical" href="https://jardimmonteformoso.pt" />
            
            {/* Open Graph Tags */}
            <meta property="og:title" content="Jardim Monte Formoso" />
            <meta property="og:description" content="Um refúgio urbano para a biodiversidade no coração de Coimbra." />
            <meta property="og:image" content="https://jardimmonteformoso.pt/hero.jpg" />
            <meta property="og:url" content="https://jardimmonteformoso.pt" />
            <meta property="og:type" content="website" />

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Jardim Monte Formoso" />
            <meta name="twitter:description" content="Um refúgio urbano para a biodiversidade em Coimbra." />
            <meta name="twitter:image" content="https://jardimmonteformoso.pt/hero.jpg" />

            <div className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-brand-black">
                {/* Full-screen Background Image with subtle zoom animation */}
                <div 
                    className={`absolute inset-0 transition-transform duration-[10000ms] ease-out ${isVisible ? 'scale-110' : 'scale-100'}`}
                    style={{
                        backgroundImage: 'url("/hero.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center 35%',
                    }}
                >
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                </div>

                {/* Content Container */}
                <main className={`relative z-10 w-full max-w-4xl px-6 text-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    <div className="flex flex-col items-center gap-8">
                        <h1 className="font-display text-7xl md:text-9xl text-brand-white uppercase leading-none tracking-tighter drop-shadow-2xl">
                            Jardim<br />
                            <span className="text-brand-yellow drop-shadow-lg">Monte Formoso</span>
                        </h1>
                        
                        <p className="max-w-xl text-xl md:text-2xl text-brand-white/90 font-light tracking-wide leading-relaxed">
                            Um refúgio urbano para a biodiversidade no coração de Coimbra.
                        </p>

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
                    </div>
                </main>

                {/* Subtle floating elements/blobs */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-yellow/20 rounded-full blur-[100px] animate-pulse pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] animate-pulse delay-700 pointer-events-none" />
                
                {/* subtle text */}
                <div className={`absolute bottom-8 left-0 w-full text-center transition-opacity duration-1000 delay-1000 ${isVisible ? 'opacity-40' : 'opacity-0'}`}>
                    <p className="text-brand-white text-sm tracking-[0.2em] uppercase">Coimbra • Portugal</p>
                </div>
            </div>
        </>
    );
};


