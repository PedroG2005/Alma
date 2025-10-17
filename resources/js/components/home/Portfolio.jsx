import React, { useState, useEffect } from 'react';
// 1. As importações das setas foram removidas
import { ArrowRight } from 'lucide-react';

import clientLogo1 from '../../assets/images/clients/client-1.svg';
import clientLogo2 from '../../assets/images/clients/client-2.svg';
import clientLogo3 from '../../assets/images/clients/client-3.svg';
import clientLogo4 from '../../assets/images/clients/client-4.svg';
import clientLogo5 from '../../assets/images/clients/client-5.svg';
import clientLogo6 from '../../assets/images/clients/client-6.svg';
import clientLogo7 from '../../assets/images/clients/client-7.svg';
import clientLogo8 from '../../assets/images/clients/client-8.svg';

const clients = [
    { name: 'Innovate Inc.', logo: clientLogo1 },
    { name: 'Quantum Solutions', logo: clientLogo2 },
    { name: 'Apex Dynamics', logo: clientLogo3 },
    { name: 'Stellar Corp.', logo: clientLogo4 },
    { name: 'Nexus Group', logo: clientLogo5 },
    { name: 'Momentum Co.', logo: clientLogo6 },
    { name: 'Visionary Ltd.', logo: clientLogo7 },
    { name: 'Synergy Partners', logo: clientLogo8 },
];

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({ width: undefined });
    useEffect(() => {
        const handleResize = () => setWindowSize({ width: window.innerWidth });
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowSize;
};

const Portfolio = () => {
    const { width } = useWindowSize();
    const isMobile = width < 768;

    const itemsPerPage = isMobile ? 1 : 4;
    const [currentIndex, setCurrentIndex] = useState(0);
    const maxIndex = clients.length - itemsPerPage;
    const totalPages = Math.ceil(clients.length / itemsPerPage);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex, maxIndex]);

    // 2. As funções nextSlide e prevSlide foram removidas
    
    return (
        <section id="portfolio" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Clientes que Confiam em Nós
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Temos orgulho de trabalhar com marcas que compartilham nossa paixão por excelência e inovação.
                    </p>
                </div>

                <div>
                    <div className="relative">
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
                            >
                                {clients.map((client, index) => (
                                    <div
                                        key={index}
                                        className="flex-shrink-0 w-full md:w-1/4 px-4"
                                    >
                                        <div className="bg-gray-50 rounded-xl p-8 flex items-center justify-center aspect-[2/1] hover:bg-gray-100 transition-colors">
                                            <img
                                                src={client.logo}
                                                alt={client.name}
                                                className="max-w-full h-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 3. Os botões de navegação (setas) foram completamente removidos daqui */}
                    </div>

                    <div className="flex justify-center mt-8 space-x-2">
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index * itemsPerPage)}
                                className={`w-3 h-3 rounded-full transition-all ${
                                    currentIndex >= index * itemsPerPage && currentIndex < (index + 1) * itemsPerPage
                                        ? 'bg-secondary-600 w-8'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            />
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <a
                            href="#contato"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full transition-all hover:scale-105 active:scale-95 bg-secondary-600 text-white hover:bg-secondary-700 shadow-lg"
                        >
                            Seja um cliente também
                            <ArrowRight className="ml-2" size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;