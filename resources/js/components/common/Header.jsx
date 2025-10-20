// @refresh reset
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

import logoBranca from '../../assets/images/LogoAlmaBranca.png';
import logoPreta from '../../assets/images/LogoAlmaPreta.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const phoneNumber = '5511912345678';
    const defaultMessage = 'Olá! Encontrei o site da Alma Age e gostaria de mais informações.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    const instagramUrl = 'https://www.instagram.com/agenciaalma.digital/';

    const isExpressPage = location.pathname === '/express';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    // Lógica unificada de rolagem suave para âncoras na mesma página (Home e Express)
    const handleAnchorClick = (e, targetId) => {
        // Permite a rolagem suave se estiver na Home ou na Express
        if (location.pathname === '/' || location.pathname === '/express') { 
            e.preventDefault();
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
            setIsMobileMenuOpen(false); // Fecha o menu mobile após o clique
        }
    };

    const showDarkVersion = isScrolled || isMobileMenuOpen;
    
    // 🔄 CORREÇÃO: O botão CTA agora sempre usará a cor de destaque da página atual
    const ctaButtonClasses = `px-6 py-2 rounded-full font-semibold transition-all hover:scale-105 ${
        isExpressPage
            ? 'bg-accent-600 text-primary-900 hover:bg-accent-500' // Na Express, usa a cor ACCENT
            : 'bg-secondary-600 text-white hover:bg-secondary-700' // Na Home, usa a cor SECONDARY
    }`;
    
    // Estilos do Link de Contato (agora link normal)
    const normalLinkClasses = `transition-colors hover:opacity-80 ${showDarkVersion ? 'text-primary-700' : 'text-white'}`;


    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                showDarkVersion
                    ? 'bg-white shadow-lg py-4'
                    : 'bg-transparent py-6'
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center">
                        <img
                            src={showDarkVersion ? logoPreta : logoBranca}
                            alt="Alma Age Logo"
                            className="h-8 w-auto transition-all duration-300"
                        />
                    </Link>

                    {/* 🚀 PONTO DE QUEBRA AJUSTADO: hidden lg:flex */}
                    <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 flex-nowrap">
                        {/* Links de âncora normais */}
                        {!isExpressPage && (
                            <>
                                <a href="#inicio" className={normalLinkClasses} onClick={(e) => handleAnchorClick(e, 'inicio')}>Início</a>
                                <a href="#servicos" className={normalLinkClasses} onClick={(e) => handleAnchorClick(e, 'servicos')}>Serviços</a>
                                <a href="#portfolio" className={normalLinkClasses} onClick={(e) => handleAnchorClick(e, 'portfolio')}>Portfólio</a>
                                <a href="#redes" className={normalLinkClasses} onClick={(e) => handleAnchorClick(e, 'redes')}>Redes</a>
                                <a href="#contato" className={normalLinkClasses} onClick={(e) => handleAnchorClick(e, 'contato')}>
                                    Fale Conosco
                                </a>
                            </>
                        )}
                        
                        {isExpressPage && (
                            <>
                                <a href="#inicio" className={normalLinkClasses} onClick={(e) => handleAnchorClick(e, 'inicio')}>Início</a>
                                <a href="#como-funciona" className={normalLinkClasses} onClick={(e) => handleAnchorClick(e, 'como-funciona')}>Como Funciona</a>
                                <a href="#planos" className={normalLinkClasses} onClick={(e) => handleAnchorClick(e, 'planos')}>Planos</a>
                                <a href="#perguntas" className={normalLinkClasses} onClick={(e) => handleAnchorClick(e, 'perguntas')}>FAQ</a>
                                <a href="#contato" className={normalLinkClasses} onClick={(e) => handleAnchorClick(e, 'contato')}>
                                    Fale Conosco
                                </a>
                            </>
                        )}
                        
                        {/* Divisor */}
                        <div className={`h-6 w-px ${showDarkVersion ? 'bg-gray-200' : 'bg-white/20'}`}></div>

                        {/* Ícones de Redes Sociais */}
                        <div className="flex items-center space-x-4">
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={`transition-transform hover:scale-110 ${showDarkVersion ? 'text-primary-800' : 'text-white'}`}>
                                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                            </a>
                            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className={`transition-transform hover:scale-110 ${showDarkVersion ? 'text-primary-800' : 'text-white'}`}>
                                <FontAwesomeIcon icon={faInstagram} size="lg" />
                            </a>
                        </div>
                        
                        {/* BOTÃO CTA (Link de página) - Agora usa cor consistente com a página atual (Desktop) */}
                        {!isExpressPage && (
                            <Link to="/express" className={ctaButtonClasses}>Alma Push</Link>
                        )}
                        
                        {isExpressPage && (
                            <Link to="/" className={ctaButtonClasses}>Home</Link>
                        )}
                    </nav>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`lg:hidden ${showDarkVersion ? 'text-primary-900' : 'text-white'}`}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Menu Mobile - Ponto de quebra ajustado: lg:hidden */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
                        {!isExpressPage && (
                             <>
                                <a href="#inicio" className="block px-4 py-2 text-primary-700 hover:bg-gray-100" onClick={(e) => handleAnchorClick(e, 'inicio')}>Início</a>
                                <a href="#servicos" className="block px-4 py-2 text-primary-700 hover:bg-gray-100" onClick={(e) => handleAnchorClick(e, 'servicos')}>Serviços</a>
                                <a href="#portfolio" className="block px-4 py-2 text-primary-700 hover:bg-gray-100" onClick={(e) => handleAnchorClick(e, 'portfolio')}>Portfólio</a>
                                <a href="#redes" className="block px-4 py-2 text-primary-700 hover:bg-gray-100" onClick={(e) => handleAnchorClick(e, 'redes')}>Redes</a>
                                <a href="#contato" className="block px-4 py-2 text-primary-700 hover:bg-gray-100" onClick={(e) => handleAnchorClick(e, 'contato')}>Fale Conosco</a>
                                <Link to="/express" className="block px-4 py-2 bg-secondary-600 text-white font-semibold mx-4 rounded-lg text-center hover:bg-secondary-700 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Alma Push</Link>
                            </>
                        )}
                        {isExpressPage && (
                             <>
                                <a href="#inicio" className="block px-4 py-2 text-primary-700 hover:bg-gray-100" onClick={(e) => handleAnchorClick(e, 'inicio')}>Início</a>
                                <a href="#como-funciona" className="block px-4 py-2 text-primary-700 hover:bg-gray-100" onClick={(e) => handleAnchorClick(e, 'como-funciona')}>Como Funciona</a>
                                <a href="#planos" className="block px-4 py-2 text-primary-700 hover:bg-gray-100" onClick={(e) => handleAnchorClick(e, 'planos')}>Planos</a>
                                <a href="#perguntas" className="block px-4 py-2 text-primary-700 hover:bg-gray-100" onClick={(e) => handleAnchorClick(e, 'perguntas')}>FAQ</a>
                                <a href="#contato" className="block px-4 py-2 text-primary-700 hover:bg-gray-100" onClick={(e) => handleAnchorClick(e, 'contato')}>Fale Conosco</a>
                                <Link to="/" className="block px-4 py-2 bg-accent-600 text-primary-900 font-semibold mx-4 rounded-lg text-center hover:bg-accent-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                            </>
                        )}
                        
                        <div className="border-t border-gray-200 mx-4 my-4"></div>
                        <div className="flex justify-center items-center space-x-6 px-4">
                             <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-primary-800 transition-transform hover:scale-110">
                                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                            </a>
                            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-primary-800 transition-transform hover:scale-110">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;