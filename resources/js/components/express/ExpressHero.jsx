import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';
import Button from '../common/Button';

const ExpressHero = () => {
    return (
        // 1. Fundo e estrutura idênticos ao Hero da homepage
        <section  id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600">
            {/* Background Pattern idêntico */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                {/* Espaçamento e alinhamento responsivo */}
                <div className="max-w-4xl mx-auto text-center pt-24 pb-8">
                    {/* A classe animate-fade-in-up foi mantida para a seção de conteúdo */}
                    <div className="animate-fade-in-up"> 
                        {/* 2. Ícone Zap adaptado para a nova paleta de cores */}
                        {/* ⚡ CLASSE 'animate-pulse' REMOVIDA AQUI ⚡ */}
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-accent-600 rounded-full mb-6">
                            <Zap className="text-primary-900" size={40} />
                        </div>
                        
                        {/* 3. Tipografia responsiva idêntica à da homepage */}
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Alma Express
                            {/* Destaque usando a cor 'accent' (verde-lima) */}
                            <span className="block text-accent-600">
                                Publicidade Rápida e Eficaz
                            </span>
                        </h1>
                        
                        {/* Parágrafo com cor de alto contraste */}
                        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Soluções de publicidade ágeis e profissionais para empresas que precisam de resultados rápidos sem abrir mão da qualidade.
                        </p>
                        
                        {/* 4. Botões usando as variantes consistentes do Button.jsx */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                            <Button
                                size="lg"
                                variant="light" // Botão sólido branco
                                className="w-full sm:w-auto"
                                onClick={() => document.getElementById('planos').scrollIntoView({ behavior: 'smooth' })}
                            >
                                Conheça os Planos
                                <ArrowRight className="inline ml-2" size={20} />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline-light" // Botão de contorno branco
                                className="w-full sm:w-auto"
                                onClick={() => document.getElementById('como-funciona').scrollIntoView({ behavior: 'smooth' })}
                            >
                                Como Funciona
                            </Button>
                        </div>

                        {/* 5. Stats adaptados para a nova paleta de cores */}
                        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-accent-600 mb-2">24h</div>
                                <div className="text-white/70 text-sm">Entrega Rápida</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-accent-600 mb-2">100+</div>
                                <div className="text-white/70 text-sm">Projetos Entregues</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-accent-600 mb-2">98%</div>
                                <div className="text-white/70 text-sm">Satisfação</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExpressHero;