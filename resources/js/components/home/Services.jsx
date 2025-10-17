import React from 'react';
// 1. Ícones atualizados para a versão final da lista
import { Palette, TrendingUp, Video, Megaphone, MousePointerClick, Sparkles, ArrowRight } from 'lucide-react';

const services = [
    {
        icon: Palette,
        title: 'Branding & Identidade Visual',
        description: 'Criamos identidades visuais marcantes que refletem a essência da sua marca e conectam com seu público.',
    },
    {
        icon: TrendingUp,
        title: 'Marketing Digital',
        description: 'Estratégias completas de marketing digital para aumentar sua presença online e gerar resultados mensuráveis.',
    },
    {
        icon: Video,
        title: 'Produção Audiovisual',
        description: 'Vídeos profissionais que contam histórias envolventes e fortalecem a comunicação da sua marca.',
    },
    {
        icon: Megaphone,
        title: 'Gestão de Redes Sociais',
        description: 'Gerenciamento completo das suas redes sociais com conteúdo estratégico e engajamento autêntico.',
    },
    {
        icon: MousePointerClick,
        title: 'Tráfego Pago & Performance',
        description: 'Gerenciamos campanhas de anúncios no Google e redes sociais para atrair os clientes certos e maximizar seu ROI.',
    },
    {
        icon: Sparkles,
        title: 'Campanhas Publicitárias',
        description: 'Campanhas criativas e impactantes que geram reconhecimento de marca e impulsionam vendas.',
    },
];

const Services = () => {
    return (
        <section id="servicos" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Nossos Serviços
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Soluções completas e integradas para elevar sua marca a um novo patamar de sucesso.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                            >
                                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-800 transition-colors">
                                    <Icon className="text-primary-800 group-hover:text-white transition-colors" size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* 2. Botão de Call to Action adicionado */}
                <div className="text-center mt-16">
                    <a
                        href="#contato"
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full transition-all hover:scale-105 active:scale-95 bg-secondary-600 text-white hover:bg-secondary-700 shadow-lg"
                    >
                        Fale com um Especialista
                        <ArrowRight className="ml-2" size={20} />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Services;