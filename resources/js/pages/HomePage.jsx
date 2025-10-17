import React, { useEffect } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Portfolio from '../components/home/Portfolio';
import InstagramFeed from '../components/home/InstagramFeed';
import Contact from '../components/home/Contact';
import WhatsAppButton from '../components/common/WhatsAppButton';

// 1. Declaramos o componente como uma constante
const HomePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen overflow-x-hidden">
            <Header />
            <main>
                <Hero />
                <Services />
                <Portfolio />
                <InstagramFeed />
                <Contact />
            </main>
            <Footer />
            <WhatsAppButton/>
        </div>
    );
};

// 2. Exportamos a constante no final
export default HomePage;