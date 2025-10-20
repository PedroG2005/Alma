// ContactPush.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { ArrowRight, Mail, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';
import Button from '../common/Button';

const ContactPush = () => {
    const location = useLocation();
    // A lógica foi mantida para a cor dinâmica dos botões e ícones
    const isPushPage = location.pathname === '/express'; 

    // Informações de contato do PDF
    const email = 'oi@agenciaalma.digital';
    const phone = '(61) 3443-5450';
    const whatsappNumber = '556134435450'; // Assumindo que o telefone fixo também é WhatsApp
    const defaultMessage = 'Olá! Encontrei o site da Alma e gostaria de mais informações sobre o Alma Push.';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

    return (
        <section
            id="contato"
            className="py-20 bg-gradient-to-br from-primary-800 to-primary-900"
        >
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Pronto para dar um PUSH na sua Marca?
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Entre em contato conosco e vamos juntos no tal do digital!
                    </p>

                    {/* Botões de Ação */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                        <Button
                            size="lg"
                            variant={isPushPage ? 'default' : 'secondary'} 
                            // 1. BOTÃO PRINCIPAL: Fundo atualizado para o gradiente
                            className={`w-full sm:w-auto ${
                                isPushPage 
                                    ? 'bg-gradient-to-r from-fuchsia-500 via-purple-500 to-lime-400 text-white hover:opacity-90' // Estilo Gradiente
                                    : '' // O estilo 'secondary' da variant já é aplicado na outra página
                            }`}
                        >
                            Solicitar Orçamento
                            <ArrowRight className="inline ml-2" size={20} />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline-light"
                            className="w-full sm:w-auto"
                        >
                            Agendar Reunião
                        </Button>
                    </div>

                    {/* Cards de Contato */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {/* Email Atualizado */}
                        <a
                            href={`mailto:${email}`}
                            className="flex flex-col items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors text-center"
                        >
                            <Mail className="text-white w-7 h-7" />
                            <div>
                                <div className="text-xs text-white/70">Email</div>
                                <div className="text-white font-semibold text-sm">{email}</div>
                            </div>
                        </a>
                        {/* Telefone Atualizado */}
                        <a
                            href={`tel:${phone.replace(/\D/g, '')}`}
                            className="flex flex-col items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors text-center"
                        >
                            <Phone className="text-white w-7 h-7" />
                            <div>
                                <div className="text-xs text-white/70">Telefone</div>
                                <div className="text-white font-semibold text-sm">{phone}</div>
                            </div>
                        </a>
                        {/* WhatsApp Atualizado */}
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors text-center"
                        >
                            <FontAwesomeIcon icon={faWhatsapp} className="text-white w-7 h-7" />
                            <div>
                                <div className="text-xs text-white/70">WhatsApp</div>
                                <div className="text-white font-semibold text-sm">Fale Conosco Agora</div>
                            </div>
                        </a>
                    </div>

                    {/* Seção de Redes Sociais */}
                    <div className="mt-16">
                        <h3 className="text-lg font-semibold text-white mb-4">
                            Siga-nos nas Redes
                        </h3>
                        <div className="flex justify-center space-x-4">
                            <a
                                href="https://www.facebook.com/agenciaalma.publicidade"
                                target="_blank"
                                rel="noopener noreferrer"
                                // 2. ÍCONES SOCIAIS: Hover atualizado para fúcsia, a cor principal do gradiente
                                className={`w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white transition-colors ${isPushPage ? 'hover:bg-fuchsia-500' : 'hover:bg-secondary-600'}`}
                            >
                                <Facebook size={24} />
                            </a>
                            <a
                                href="https://www.instagram.com/agenciaalma.digital/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white transition-colors ${isPushPage ? 'hover:bg-fuchsia-500' : 'hover:bg-secondary-600'}`}
                            >
                                <Instagram size={24} />
                            </a>
                            <a
                                href="https://linkedin.com/company/agenciaalma"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white transition-colors ${isPushPage ? 'hover:bg-fuchsia-500' : 'hover:bg-secondary-600'}`}
                            >
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPush;