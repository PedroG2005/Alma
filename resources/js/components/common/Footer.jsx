import React from 'react';
// 1. Importar o hook useLocation
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

import logoBranca from '../../assets/images/LogoAlmaBranca.png';

const Footer = () => {
    // 2. Determinar a página atual
    const location = useLocation();
    const isExpressPage = location.pathname === '/express';

    return (
        <footer className="bg-primary-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 text-center md:text-left">
                    {/* Logo e Descrição */}
                    <div className="md:col-span-2">
                        <Link to="/" className="inline-block mb-4">
                            <img src={logoBranca} alt="Alma Age Logo" className="h-7 lg:h-8 w-auto mx-auto md:mx-0" />
                        </Link>
                        <p className="text-sm lg:text-base text-gray-400 mb-4 max-w-md mx-auto md:mx-0">
                            Transformando ideias em experiências memoráveis. Somos uma agência de
                            publicidade focada em resultados e inovação.
                        </p>
                        <div className="flex space-x-4 justify-center md:justify-start">
                            {/* 3. Cor do hover dos ícones sociais agora é dinâmica */}
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center transition-colors ${
                                    isExpressPage ? 'hover:bg-accent-600' : 'hover:bg-secondary-600'
                                }`}
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="https://www.instagram.com/agenciaalma.digital/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center transition-colors ${
                                    isExpressPage ? 'hover:bg-accent-600' : 'hover:bg-secondary-600'
                                }`}
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center transition-colors ${
                                    isExpressPage ? 'hover:bg-accent-600' : 'hover:bg-secondary-600'
                                }`}
                            >
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Links Rápidos */}
                    <div>
                        <h4 className="text-base lg:text-lg font-semibold mb-4">Links Rápidos</h4>
                        <ul className="space-y-2 text-sm lg:text-base">
                            <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                            <li><a href="#servicos" className="text-gray-400 hover:text-white transition-colors">Serviços</a></li>
                            <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Clientes</a></li>
                            <li><Link to="/express" className="text-gray-400 hover:text-white transition-colors">Alma Push</Link></li>
                        </ul>
                    </div>

                    {/* Contato */}
                    <div className="md:col-span-2">
                        <h4 className="text-base lg:text-lg font-semibold mb-4">Contato</h4>
                        <ul className="space-y-3 flex flex-col items-center md:items-start text-sm lg:text-base">
                            {/* 4. Cor dos ícones de contato agora é dinâmica */}
                            <li className="flex items-start space-x-3 text-left w-full max-w-xs md:max-w-none">
                                <MapPin size={20} className={`flex-shrink-0 mt-1 ${isExpressPage ? 'text-accent-600' : 'text-secondary-600'}`} />
                                <span className="text-gray-400 break-words">
                                    St. de Industrias Graficas LOTE 385 - Sudoeste/Octogonal, Brasília - DF
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={20} className={`flex-shrink-0 ${isExpressPage ? 'text-accent-600' : 'text-secondary-600'}`} />
                                <span className="text-gray-400">(11) 1234-5678</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={20} className={`flex-shrink-0 ${isExpressPage ? 'text-accent-600' : 'text-secondary-600'}`} />
                                <span className="text-gray-400 break-words">contato@almaage.com.br</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-xs md:text-sm">
                    <p>&copy; {new Date().getFullYear()} Alma Age. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;