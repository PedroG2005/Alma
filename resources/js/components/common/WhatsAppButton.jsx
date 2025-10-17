import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton = () => {
    const phoneNumber = '5511912345678'; // <-- COLOQUE O SEU NÚMERO AQUI
    const defaultMessage = 'Olá! Encontrei o site da Alma Age e gostaria de mais informações.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 bg-green-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
            aria-label="Fale conosco pelo WhatsApp"
        >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
    );
};

export default WhatsAppButton;