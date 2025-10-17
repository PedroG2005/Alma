import './bootstrap';
import '../css/app.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AlmaExpressPage from './pages/AlmaExpressPage';

// 1. Declaramos o componente como uma constante (arrow function)
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/express" element={<AlmaExpressPage />} />
            </Routes>
        </BrowserRouter>
    );
};

const root = createRoot(document.getElementById('root'));
// 2. Renderizamos a constante
root.render(<App />);