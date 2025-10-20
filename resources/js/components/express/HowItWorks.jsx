import React from 'react';
// Ícones representativos para os novos passos
import { ClipboardList, FileSignature, Users, KeyRound, Rocket, BarChart2 } from 'lucide-react';

// Passos atualizados para conter apenas 6 itens
const steps = [
    {
        icon: ClipboardList,
        title: '1. Definição do Pacote',
        description: 'O primeiro passo é a definição do pacote que mais se encaixa no seu planejamento e objetivos.',
    },
    {
        icon: FileSignature,
        title: '2. Assinatura de Contrato',
        description: 'Com o pacote definido, o próximo passo é a formalização da nossa parceria com a assinatura do contrato.',
    },
    {
        icon: Users,
        title: '3. Reunião de Pauta',
        description: 'Realizamos uma reunião de pauta para planejar em detalhes as primeiras ações a serem criadas.',
    },
    {
        icon: KeyRound,
        title: '4. Acesso aos Canais',
        description: 'Trocamos os dados de acesso dos canais necessários para que nossa equipe possa iniciar os trabalhos.',
    },
    {
        icon: Rocket,
        title: '5. Primeira Campanha',
        description: 'Com tudo pronto, partimos para a criação e lançamento da sua primeira campanha impulsionada.',
    },
    {
        icon: BarChart2,
        title: '6. Relatórios de Resultados',
        description: 'Geramos relatórios de mensuração para que você possa acompanhar o desempenho e os resultados.',
    },
];

const HowItWorks = () => {
    return (
        <section id="como-funciona" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    {/* Título atualizado para 6 passos */}
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        São 6 Passos para dar um PUSH na sua Empresa!
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Nosso processo é transparente e focado em métricas claras para que os resultados se tornem inevitáveis.
                    </p>
                </div>

                {/* --- LAYOUT DE GRADE SIMPLES E RESPONSIVO --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 justify-items-center">
                    {steps.map((step) => {
                        const Icon = step.icon;
                        return (
                            <div 
                                key={step.title} 
                                // O layout agora é perfeitamente simétrico, sem necessidade de classes especiais
                                className="flex flex-col items-center text-center max-w-xs"
                            >
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-fuchsia-500 via-purple-500 to-lime-400 rounded-full mb-6 shadow-lg">
                                    <Icon className="text-white" size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-primary-800 mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;