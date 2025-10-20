import React from "react";
import { Check, ArrowRight } from "lucide-react";

// Planos atualizados com base no PDF
const plans = [
    {
        title: "Alma Size",
        price: "Consulte",
        period: "",
        features: [
            "Diagnóstico e Planejamento",
            "Desenvolvimento de Criativos",
            "Postagens Impulsionadas (Dark Post)",
            "Gestão de Campanhas",
            "Relatório Mensal de Métricas",
        ],
        highlight: false,
        investment: "Investimento em tráfego recomendado: R$ 1.000/mês."
    },
    {
        title: "Alma Max",
        price: "R$ 7.000",
        period: "/mês",
        features: [
            "Tudo do Alma Size e mais:",
            "Gestão do Site e Redes Sociais",
            "7 Posts Semanais (Facebook/Instagram)",
            "8 Campanhas Impulsionadas",
            "10 a 12 Criativos para Teste A/B",
            "2 Campanhas no Google Ads",
            "Cobertura de Eventos (cotado à parte)",
        ],
        highlight: true,
        investment: "Investimento em tráfego recomendado: a partir de R$1mil por mês."
    },
    {
        title: "Alma Pro",
        price: "Consulte",
        period: "",
        features: [
            "Pacote de serviços intermediário",
            "Ideal para negócios em crescimento",
            "Gestão de Múltiplos Canais",
            "Relatórios de Performance quinzenais",
            "Consultoria Estratégica",
        ],
        highlight: false,
        investment: "Investimento em tráfego flexível."
    },
];

const Benefits = () => {
    return (
        <section id="planos" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Pacotes de Serviço para o seu Negócio
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Escolha o pacote que mais se encaixa no seu planejamento e vamos dar um PUSH na sua empresa.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            // 1. BORDA DO CARD: Aplicado um wrapper para criar uma borda em gradiente no plano destacado
                            className={`relative rounded-2xl transition-all duration-300 ${
                                plan.highlight
                                    ? "bg-gradient-to-r from-fuchsia-500 via-purple-500 to-lime-400 p-1 shadow-2xl transform lg:scale-105"
                                    : "bg-gray-50 border border-gray-200 shadow-lg"
                            }`}
                        >
                            <div className={`h-full flex flex-col p-8 rounded-[14px] ${plan.highlight ? 'bg-white' : 'bg-gray-50'}`}>
                                {plan.highlight && (
                                    // 2. BADGE: Fundo atualizado para o gradiente
                                    <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-fuchsia-500 to-lime-400 text-white font-semibold text-sm rounded-full">
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
                                        <li key={fIndex} className="flex items-start">
                                            {/* 3. ÍCONE CHECK: Alterado para a cor principal do gradiente (fúcsia) */}
                                            <Check className="w-5 h-5 text-fuchsia-500 mr-3 flex-shrink-0 mt-1" />
                                            <span className="text-gray-600" dangerouslySetInnerHTML={{ __html: feature }}></span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-xs text-gray-500 mt-auto pt-4 mb-6">{plan.investment}</p>

                                <a
                                    href="#contato"
                                    // 4. BOTÃO DE AÇÃO: Fundo atualizado para o gradiente
                                    className={`w-full text-center mt-auto px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 ${
                                        plan.highlight
                                            ? "bg-gradient-to-r from-fuchsia-500 to-lime-400 text-white hover:opacity-90"
                                            : "bg-primary-800 text-white hover:bg-primary-900"
                                    }`}
                                >
                                    Contratar Plano
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;