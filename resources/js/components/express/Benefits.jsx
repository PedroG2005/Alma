import React from "react";
// 1. Ícones atualizados para a nova estrutura
import { Check, ArrowRight } from "lucide-react";

// 2. Nova estrutura de dados para os planos (valores e benefícios fictícios)
const plans = [
    {
        title: "Essencial",
        price: "R$ 149",
        period: "/projeto",
        features: [
            "1 Arte para Redes Sociais",
            "2 Rodadas de Revisão",
            "Entrega em até 48h",
            "Arquivos em alta resolução",
        ],
        highlight: false,
    },
    {
        title: "Profissional",
        price: "R$ 399",
        period: "/projeto",
        features: [
            "3 Artes para Redes Sociais",
            "Identidade Visual Express",
            "Revisões Ilimitadas",
            "Entrega em até 24h",
            "Suporte Prioritário",
        ],
        highlight: true,
    },
    {
        title: "Completo",
        price: "R$ 699",
        period: "/projeto",
        features: [
            "Pacote com 5 Artes",
            "Vídeo Curto (Reels/Stories)",
            "Todos os benefícios do Profissional",
            "Consultoria de 30 min",
        ],
        highlight: false,
    },
];

const Benefits = () => {
    return (
        // Fundo branco para destacar os cards
        <section id="planos" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    {/* Títulos atualizados para refletir a nova seção de planos */}
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Planos Flexíveis Para Agilizar Seu Sucesso
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Escolha o plano ideal para a sua necessidade e comece a
                        ver resultados em tempo recorde.
                    </p>
                </div>

                {/* Grelha de 3 colunas para os planos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative border rounded-2xl p-8 flex flex-col h-full transition-all duration-300 ${
                                plan.highlight
                                    ? "bg-white shadow-2xl border-accent-600 transform lg:scale-105"
                                    : "bg-gray-50 border-gray-200 shadow-lg"
                            }`}
                        >
                            {/* Badge de destaque para o plano do meio */}
                            {plan.highlight && (
                                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent-600 text-primary-900 font-semibold text-sm rounded-full">
                                    Mais Popular
                                </div>
                            )}

                            <h3 className="text-2xl font-bold text-primary-800 mb-2">
                                {plan.title}
                            </h3>
                            <div className="flex items-baseline mb-6">
                                <span className="text-4xl font-extrabold text-primary-900">
                                    {plan.price}
                                </span>
                                <span className="text-gray-500 ml-2">
                                    {plan.period}
                                </span>
                            </div>

                            <ul className="space-y-4 mb-8 text-left">
                                {plan.features.map((feature, fIndex) => (
                                    <li
                                        key={fIndex}
                                        className="flex items-start"
                                    >
                                        <Check className="w-5 h-5 text-accent-600 mr-3 flex-shrink-0 mt-1" />
                                        <span className="text-gray-600">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Botão de ação do card */}
                            <a
                                href="#contato"
                                className={`w-full text-center mt-auto px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 ${
                                    plan.highlight
                                        ? "bg-accent-600 text-primary-900 hover:bg-accent-500"
                                        : "bg-primary-800 text-white hover:bg-primary-900"
                                }`}
                            >
                                Contratar Plano
                            </a>
                        </div>
                    ))}
                </div>

                {/* Botão de Call to Action geral */}
                <div className="text-center mt-16">
                    <a
                        href="#contato"
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full transition-all hover:scale-105 active:scale-95 bg-accent-600 text-primary-900 hover:bg-accent-500 shadow-lg"
                    >
                        Saiba Mais
                        <ArrowRight className="ml-2" size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
