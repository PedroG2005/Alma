import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: 'Quanto tempo leva para receber meu projeto?',
        answer: 'A maioria dos projetos do Alma Push são entregues em 24 a 48 horas após a aprovação do briefing e pagamento. Projetos mais complexos podem levar até 72 horas.',
    },
    {
        question: 'Quais tipos de serviços estão incluídos no Alma Push?',
        answer: 'Oferecemos criação de posts para redes sociais, banners digitais, artes para anúncios, identidade visual básica, apresentações corporativas e muito mais. Entre em contato para saber se atendemos sua necessidade específica.',
    },
    {
        question: 'Posso solicitar revisões no projeto?',
        answer: 'Sim! Todos os nossos planos incluem até 2 rodadas de revisões sem custo adicional. Queremos garantir que você fique 100% satisfeito com o resultado final.',
    },
    {
        question: 'Como funciona o processo de pagamento?',
        answer: 'Aceitamos diversas formas de pagamento incluindo cartão de crédito, PIX e transferência bancária. O pagamento é realizado após a aprovação da proposta e antes do início da produção.',
    },
    {
        question: 'Vocês fornecem os arquivos editáveis?',
        answer: 'Sim, fornecemos os arquivos finais em formatos editáveis (como PSD, AI, ou outros) além dos formatos prontos para uso (PNG, JPG, PDF), dependendo do tipo de projeto.',
    },
    {
        question: 'Qual é a diferença entre o Alma Push e os serviços tradicionais?',
        answer: 'O Alma Push é focado em entregas rápidas e processos simplificados, ideal para demandas urgentes. Nossos serviços tradicionais envolvem projetos mais complexos e estratégicos com prazos mais longos.',
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="perguntas" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Perguntas Frequentes
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Tire suas dúvidas sobre o Alma Push e descubra como podemos ajudar seu negócio.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
                            >
                                <span className="font-semibold text-primary-800 pr-4">
                                    {faq.question}
                                </span>
                                {/* 1. Cor do ícone de seta alterada para verde-lima */}
                                <ChevronDown
                                    className={`flex-shrink-0 text-accent-600 transition-transform ${
                                        openIndex === index ? 'rotate-180' : ''
                                    }`}
                                    size={24}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${
                                    openIndex === index ? 'max-h-96' : 'max-h-0'
                                }`}
                            >
                                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;