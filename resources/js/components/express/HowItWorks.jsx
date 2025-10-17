import React from 'react';
import { MessageSquare, Lightbulb, Rocket, CheckCircle } from 'lucide-react';

const steps = [
    {
        icon: MessageSquare,
        title: '1. Conte Sua Necessidade',
        description: 'Entre em contato e nos conte o que você precisa. Nosso time está pronto para ouvir e entender seu desafio.',
    },
    {
        icon: Lightbulb,
        title: '2. Receba Uma Proposta',
        description: 'Em poucas horas, você receberá uma proposta personalizada com prazos e valores transparentes.',
    },
    {
        icon: Rocket,
        title: '3. Aprovação e Produção',
        description: 'Após sua aprovação, iniciamos imediatamente a produção com nossa equipe especializada.',
    },
    {
        icon: CheckCircle,
        title: '4. Entrega Expressa',
        description: 'Receba seu projeto finalizado em até 24-48h, pronto para ser implementado e gerar resultados.',
    },
];

const HowItWorks = () => {
    return (
        // 1. Fundo alterado para bg-gray-50 para melhor separação visual
        <section id="como-funciona" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Como Funciona
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Um processo simples e transparente para você ter acesso rápido a soluções profissionais de publicidade.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index} className="relative">
                                {/* 2. Cor da linha conectora atualizada para verde-lima */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-accent-200 via-accent-300 to-transparent"></div>
                                )}
                                
                                <div className="relative z-10 text-center">
                                    {/* 3. Ícone atualizado com a cor de destaque 'accent' */}
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-accent-600 rounded-full mb-6 shadow-lg">
                                        <Icon className="text-primary-900" size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-primary-800 mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* 🌟 NOVO BOTÃO CALL TO ACTION */}
                <div className="text-center mt-20">
                    <a
                        href="#contato"
                        // Estilo do botão usando a cor de destaque (accent) da página Express
                        className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold rounded-full 
                                   bg-accent-600 text-primary-900 shadow-xl 
                                   transition-all duration-300 hover:bg-accent-500 hover:shadow-2xl"
                        // Adiciona um evento simples para rolagem suave se for necessário
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Quero Começar Agora!
                    </a>
                </div>
                {/* FIM NOVO BOTÃO CALL TO ACTION */}

            </div>
        </section>
    );
};

export default HowItWorks;