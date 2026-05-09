import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
    const location = useLocation();
    
    const isActive = (path: string) => {
        return location.pathname === path ? "text-brand-yellow" : "text-brand-white/80 hover:text-brand-white";
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 p-4 sm:p-6 pointer-events-none">
            <div className="max-w-4xl mx-auto flex justify-center pointer-events-auto">
                {/* Scrollable container for mobile to avoid wrapping and keep the design sleek */}
                <div className="flex items-center gap-3 sm:gap-6 bg-black/30 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full text-xs sm:text-sm font-light tracking-widest uppercase overflow-x-auto no-scrollbar max-w-full">
                    <Link to="/" className={`transition-colors whitespace-nowrap ${isActive('/')}`}>Início</Link>
                    <span className="text-brand-white/20">|</span>
                    <Link to="/quem-somos" className={`transition-colors whitespace-nowrap ${isActive('/quem-somos')}`}>Quem Somos</Link>
                    <span className="text-brand-white/20">|</span>
                    <Link to="/projetos" className={`transition-colors whitespace-nowrap ${isActive('/projetos')}`}>Projetos</Link>
                    <span className="text-brand-white/20">|</span>
                    <Link to="/participar" className={`transition-colors whitespace-nowrap ${isActive('/participar')}`}>Participar</Link>
                    <span className="text-brand-white/20">|</span>
                    <Link to="/loja" className={`transition-colors whitespace-nowrap ${isActive('/loja')}`}>Loja</Link>
                </div>
            </div>
        </nav>
    );
};
