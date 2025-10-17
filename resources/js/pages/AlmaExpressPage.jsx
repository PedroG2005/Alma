import React, { useEffect } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ExpressHero from '../components/express/ExpressHero';
import HowItWorks from '../components/express/HowItWorks';
import Benefits from '../components/express/Benefits';
import FAQ from '../components/express/FAQ';
import Contact from '../components/home/Contact';
import WhatsAppButton from '../components/common/WhatsAppButton';

// 1. Declaramos o componente como uma constante
const AlmaExpressPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen overflow-x-hidden">
            <Header/>
            <main>
                <ExpressHero />
                <HowItWorks />
                <Benefits />
                <FAQ />
                <Contact />
            </main>
            <Footer />
            <WhatsAppButton/>
        </div>
    );
};

// 2. Exportamos a constante no final
export default AlmaExpressPage;