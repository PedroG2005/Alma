import React from 'react';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}) => {
    const baseStyles = 'font-semibold rounded-full transition-all hover:scale-105 active:scale-95';

    const variants = {
        // Cinza-chumbo (principal)
        primary: 'bg-primary-800 text-white hover:bg-primary-900',
        // Magenta (secundário)
        secondary: 'bg-secondary-600 text-white hover:bg-secondary-700',
        // Fundo branco, texto escuro
        light: 'bg-white text-primary-800 hover:bg-gray-100',
        // Contorno escuro para fundos claros
        outline: 'border-2 border-primary-800 text-primary-800 hover:bg-primary-800 hover:text-white',
        // Contorno claro para fundos escuros
        'outline-light': 'border-2 border-white text-white hover:bg-white hover:text-primary-800',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;