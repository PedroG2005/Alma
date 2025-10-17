import React from 'react';
// 1. Importar o useLocation
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { ArrowRight, Mail, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';
import Button from '../common/Button';

const Contact = () => {
    // 2. Determinar a página atual
    const location = useLocation();
    const isExpressPage = location.pathname === '/express';

    const phoneNumber = '5511912345678';
    const defaultMessage = 'Olá! Encontrei o site da Alma Age e gostaria de mais informações.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

    return (
        <section
            id="contato"
            className="py-20 bg-gradient-to-br from-primary-800 to-primary-900"
        >
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Pronto para Transformar Sua Marca?
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Entre em contato conosco e descubra como podemos ajudar
                        sua empresa a alcançar novos patamares de sucesso.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                        {/* 3. Botão principal agora com cor dinâmica */}
                        <Button
                            size="lg"
                            variant={isExpressPage ? 'default' : 'secondary'} // Usar 'default' para que o className tenha prioridade
                            className={`w-full sm:w-auto ${
                                isExpressPage 
                                    ? 'bg-accent-600 text-primary-900 hover:bg-accent-500' // Estilo Verde
                                    : '' // O estilo 'secondary' da variant já é aplicado
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <a
                            href="mailto:contato@almaage.com.br"
                            className="flex flex-col items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors text-center"
                        >
                            <Mail className="text-white w-7 h-7" />
                            <div>
                                <div className="text-xs text-white/70">Email</div>
                                <div className="text-white font-semibold text-sm">contato@almaage.com.br</div>
                            </div>
                        </a>
                        <a
                            href="tel:+551112345678"
                            className="flex flex-col items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors text-center"
                        >
                            <Phone className="text-white w-7 h-7" />
                            <div>
                                <div className="text-xs text-white/70">Telefone</div>
                                <div className="text-white font-semibold text-sm">(11) 1234-5678</div>
                            </div>
                        </a>
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

                    <div className="mt-16">
                        <h3 className="text-lg font-semibold text-white mb-4">
                            Siga-nos nas Redes
                        </h3>
                        <div className="flex justify-center space-x-4">
                            {/* 4. Ícones sociais com hover dinâmico */}
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white transition-colors ${isExpressPage ? 'hover:bg-accent-600' : 'hover:bg-secondary-600'}`}
                            >
                                <Facebook size={24} />
                            </a>
                            <a
                                href="https://www.instagram.com/agenciaalma.digital/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white transition-colors ${isExpressPage ? 'hover:bg-accent-600' : 'hover:bg-secondary-600'}`}
                            >
                                <Instagram size={24} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white transition-colors ${isExpressPage ? 'hover:bg-accent-600' : 'hover:bg-secondary-600'}`}
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

export default Contact;