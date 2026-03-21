import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaArrowLeft, FaTimes, FaExternalLinkAlt } from "react-icons/fa";
import galleryData from "../data/gallery.json";

interface Post {
    id: string;
    caption: string;
    date: string;
    imagePath: string;
    permalink: string;
}

export const Gallery: React.FC = () => {
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const openModal = (post: Post) => {
        setSelectedPost(post);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setSelectedPost(null);
        document.body.style.overflow = "auto";
    };

    return (
        <div className="min-h-screen bg-brand-black text-brand-white font-body selection:bg-brand-yellow selection:text-brand-black">
            <title>Galeria | Jardim Monte Formoso</title>

            {/* Header */}
            <header className={`sticky top-0 z-30 bg-brand-black/80 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex items-center justify-between transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                <Link 
                    to="/" 
                    className="flex items-center gap-2 text-brand-white hover:text-brand-yellow transition-colors group"
                >
                    <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-medium tracking-tight">Voltar</span>
                </Link>
                
                <h1 className="font-display text-2xl md:text-3xl text-brand-yellow uppercase tracking-tight">
                    Galeria
                </h1>

                <a 
                    href="https://www.instagram.com/jardimmonteformoso/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-full hover:bg-brand-yellow hover:text-brand-black transition-all"
                    title="Ver no Instagram"
                >
                    <FaInstagram size={20} />
                </a>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 py-12">
                <div className="mb-12 text-center">
                    <p className={`text-xl md:text-2xl text-brand-white/70 font-light max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                        Momentos, atividades e a evolução da biodiversidade no nosso jardim.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryData.map((post: Post, index: number) => (
                        <div 
                            key={post.id}
                            className={`group relative aspect-square overflow-hidden rounded-2xl bg-white/5 cursor-pointer transition-all duration-700 hover:shadow-[0_0_40px_rgba(252,213,63,0.2)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                            onClick={() => openModal(post)}
                        >
                            <img 
                                src={post.imagePath} 
                                alt={post.caption}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-brand-yellow font-medium text-sm mb-2">
                                    {new Date(post.date).toLocaleDateString('pt-PT', { day: 'numeric', month: 'long', year: 'numeric' })}
                                </span>
                                <p className="text-white text-sm line-clamp-3 font-light leading-relaxed">
                                    {post.caption}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Footer Text */}
            <footer className="py-12 text-center opacity-40">
                <p className="text-sm tracking-widest uppercase">Jardim Monte Formoso • Coimbra</p>
            </footer>

            {/* Modal */}
            {selectedPost && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
                    <div className="absolute inset-0 bg-brand-black/95 backdrop-blur-xl" onClick={closeModal} />
                    
                    <button 
                        onClick={closeModal}
                        className="absolute top-6 right-6 z-50 p-3 bg-white/10 hover:bg-brand-red rounded-full text-white transition-all hover:rotate-90"
                    >
                        <FaTimes size={24} />
                    </button>

                    <div className="relative z-10 w-full max-w-5xl bg-brand-black border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
                        {/* Image Section */}
                        <div className="w-full md:w-2/3 bg-black flex items-center justify-center overflow-hidden">
                            <img 
                                src={selectedPost.imagePath} 
                                alt={selectedPost.caption}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="w-full md:w-1/3 p-8 flex flex-col justify-between overflow-y-auto bg-white/[0.02]">
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center text-brand-black font-bold">
                                        JM
                                    </div>
                                    <div>
                                        <p className="font-bold text-white tracking-tight">jardimmonteformoso</p>
                                        <p className="text-xs text-white/50">{new Date(selectedPost.date).toLocaleDateString('pt-PT', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-brand-white/90 leading-relaxed font-light whitespace-pre-wrap">
                                        {selectedPost.caption}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/10">
                                <a 
                                    href={selectedPost.permalink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-4 bg-brand-white/10 hover:bg-brand-white text-brand-white hover:text-brand-black rounded-xl transition-all font-medium group"
                                >
                                    <span>Ver no Instagram</span>
                                    <FaExternalLinkAlt size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
