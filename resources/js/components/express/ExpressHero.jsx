import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';
import Button from '../common/Button';

// 1. IMPORTAÇÃO DA IMAGEM DE FUNDO
//    Certifique-se de que sua imagem esteja neste caminho ou ajuste conforme necessário.
import heroBackground from '../../assets/images/push-background.png';

const ExpressHero = () => {
    return (
        // 2. BACKGROUND: Alterado para usar a imagem importada.
        <section  
            id="inicio" 
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBackground})` }}
        >
            {/* 3. SOBREPOSIÇÃO (OVERLAY): Adicionado um filtro escuro para garantir a legibilidade do texto. */}
            <div className="absolute inset-0 bg-black/60 z-0"></div>

            {/* Content (agora com z-10 para ficar sobre a imagem e o overlay) */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center pt-24 pb-8">
                    <div className="animate-fade-in-up"> 
                        {/* ÍCONE: Estilo "glassmorphism" mantido para se destacar */}
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
                            <Zap className="text-white" size={40} />
                        </div>
                        
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Alma Push
                        </h1>
                        <p className="text-2xl sm:text-3xl md:text-4xl text-white mb-8 font-semibold">
                            Gestão Inteligente de Redes Sociais e Tráfego Pago
                        </p>
                        
                        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                            Mergulhamos no seu negócio para diagnosticar, planejar e otimizar a performance da sua marca no mundo digital, buscando os melhores resultados com o menor custo. 
                        </p>
                        
                        {/* Botões mantidos como branco para alto contraste */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                            <Button
                                size="lg"
                                variant="light"
                                className="w-full sm:w-auto"
                                onClick={() => document.getElementById('planos').scrollIntoView({ behavior: 'smooth' })}
                            >
                                Conheça os Planos
                                <ArrowRight className="inline ml-2" size={20} />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline-light"
                                className="w-full sm:w-auto"
                                onClick={() => document.getElementById('como-funciona').scrollIntoView({ behavior: 'smooth' })}
                            >
                                Como Funciona
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExpressHero;

