import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';

const Hero = () => {
    return (
        <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center pt-24 pb-8">
                    <div className="animate-fade-in-up">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Transforme Sua Marca em Uma
                            {/* ✅ Gradiente alterado para usar as cores 'secondary' (magenta) */}
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary-500 to-secondary-600">
                                Experiência Inesquecível
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Somos especialistas em criar conexões autênticas entre marcas e pessoas através de estratégias inovadoras de publicidade.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button
                                size="lg"
                                variant="light"
                                className="w-full sm:w-auto"
                                onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}
                            >
                                Comece Agora
                                <ArrowRight className="inline ml-2" size={20} />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline-light"
                                className="w-full sm:w-auto"
                                onClick={() => document.getElementById('servicos').scrollIntoView({ behavior: 'smooth' })}
                            >
                                Conheça Nossos Serviços
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1-2 transform -translate-x-1/2 animate-bounce hidden sm:block">
                <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-3 bg-white rounded-full"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;