import React from 'react';
import { Instagram } from 'lucide-react';

// 1. IMPORTAÇÃO DAS IMAGENS
// Ajuste o caminho (ex: '../../assets/...') se o seu componente estiver em um local diferente
import Postagem1 from '../../assets/images/posts/postagem-instagram-1.jpg';
import Postagem2 from '../../assets/images/posts/postagem-instagram-2.jpg';
import Postagem3 from '../../assets/images/posts/postagem-instagram-3.jpg';
import Postagem4 from '../../assets/images/posts/postagem-instagram-4.jpg';
import Postagem5 from '../../assets/images/posts/postagem-instagram-5.jpg';
import Postagem6 from '../../assets/images/posts/postagem-instagram-6.jpg';
import Postagem7 from '../../assets/images/posts/postagem-instagram-7.jpg';
import Postagem8 from '../../assets/images/posts/postagem-instagram-8.jpg';

// URL do Instagram para fácil edição
const instagramUrl = 'https://www.instagram.com/agenciaalma.digital/';
const instagramHandle = '@agenciaalma.digital';

// 2. SUBSTITUIÇÃO DOS PLACEHOLDERS PELAS IMAGENS IMPORTADAS
const instagramPosts = [
    { id: 1, image: Postagem1, link: instagramUrl },
    { id: 2, image: Postagem2, link: instagramUrl },
    { id: 3, image: Postagem3, link: instagramUrl },
    { id: 4, image: Postagem4, link: instagramUrl },
    { id: 5, image: Postagem5, link: instagramUrl },
    { id: 6, image: Postagem6, link: instagramUrl },
    { id: 7, image: Postagem7, link: instagramUrl },
    { id: 8, image: Postagem8, link: instagramUrl },
];

const InstagramFeed = () => {
    return (
        <section id="redes" className="py-20 bg-gray-50"> {/* Fundo consistente com outras seções */}
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    {/* Cores do ícone atualizadas para a marca */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary-600 to-secondary-700 rounded-full mb-4">
                        <Instagram className="text-white" size={32} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Nossas Redes
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
                        Acompanhe nosso trabalho e fique por dentro das últimas tendências e projetos.
                    </p>
                    {/* Link e cores atualizados */}
                    <a
                        href={instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-secondary-600 hover:text-secondary-700 font-semibold text-lg"
                    >
                        {instagramHandle}
                        <Instagram className="ml-2" size={20} />
                    </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {instagramPosts.map((post) => (
                        <a
                            key={post.id}
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative aspect-square overflow-hidden rounded-lg group"
                        >
                            <img
                                src={post.image}
                                alt={`Instagram post ${post.id}`}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                <Instagram className="text-white" size={24} />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstagramFeed;