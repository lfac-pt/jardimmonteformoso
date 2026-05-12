import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

export const Navbar: React.FC = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const isActive = (path: string) => {
        return location.pathname === path ? "text-brand-yellow" : "text-brand-white/80 hover:text-brand-white";
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 p-4 sm:p-6 pointer-events-none">
            <div className="max-w-4xl mx-auto flex flex-col items-center pointer-events-auto relative">
                
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6 bg-black/30 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full text-sm font-light tracking-widest uppercase">
                    <Link to="/" className={`transition-colors whitespace-nowrap ${isActive('/')}`}>Início</Link>
                    <span className="text-brand-white/20">|</span>
                    <Link to="/quem-somos" className={`transition-colors whitespace-nowrap ${isActive('/quem-somos')}`}>Quem Somos</Link>
                    <span className="text-brand-white/20">|</span>
                    <Link to="/projetos" className={`transition-colors whitespace-nowrap ${isActive('/projetos')}`}>Projetos</Link>
                    <span className="text-brand-white/20">|</span>
                    <Link to="/participar" className={`transition-colors whitespace-nowrap ${isActive('/participar')}`}>Participar</Link>
                    <span className="text-brand-white/20">|</span>
                    <Link to="/loja" className={`transition-colors whitespace-nowrap ${isActive('/loja')}`}>Loja</Link>
                    <span className="text-brand-white/20">|</span>
                    <Link to="/contactos" className={`transition-colors whitespace-nowrap ${isActive('/contactos')}`}>Contactos</Link>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden flex items-center justify-between bg-black/30 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full min-w-[140px] focus:outline-none active:bg-black/50 transition-colors"
                >
                    <span className="text-xs font-light tracking-widest uppercase text-brand-white/90">Menu</span>
                    <div className="text-brand-white p-1 ml-4">
                        {isMobileMenuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
                    </div>
                </button>

                {/* Mobile Dropdown */}
                <div 
                    className={`md:hidden absolute top-[calc(100%+12px)] w-[90%] max-w-[280px] bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col items-center py-6 gap-5 text-xs font-light tracking-widest uppercase shadow-2xl transition-all duration-300 origin-top ${
                        isMobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
                    }`}
                >
                    <Link to="/" className={`transition-colors ${isActive('/')}`} onClick={() => setIsMobileMenuOpen(false)}>Início</Link>
                    <Link to="/quem-somos" className={`transition-colors ${isActive('/quem-somos')}`} onClick={() => setIsMobileMenuOpen(false)}>Quem Somos</Link>
                    <Link to="/projetos" className={`transition-colors ${isActive('/projetos')}`} onClick={() => setIsMobileMenuOpen(false)}>Projetos</Link>
                    <Link to="/participar" className={`transition-colors ${isActive('/participar')}`} onClick={() => setIsMobileMenuOpen(false)}>Participar</Link>
                    <Link to="/loja" className={`transition-colors ${isActive('/loja')}`} onClick={() => setIsMobileMenuOpen(false)}>Loja</Link>
                    <Link to="/contactos" className={`transition-colors ${isActive('/contactos')}`} onClick={() => setIsMobileMenuOpen(false)}>Contactos</Link>
                </div>
            </div>
        </nav>
    );
};
