
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const DrinkDoseLogo: React.FC = () => (
    <NavLink to="/" className="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.26 7.03a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06L7.94 10 6.26 8.09a.75.75 0 010-1.06zm5.22 0a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 11-1.06-1.06L13.19 10l-1.72-1.72a.75.75 0 010-1.06z" clipRule="evenodd" />
        </svg>
        <span className="text-2xl font-bold text-dark">Drink-Dose</span>
    </NavLink>
);

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinkClasses = "text-gray-600 hover:text-primary transition duration-300 py-2 md:py-0";
    const activeLinkClasses = "text-primary font-semibold";

    return (
        <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <DrinkDoseLogo />
                    <div className="hidden md:flex items-center space-x-8">
                        <NavLink to="/" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Home</NavLink>
                        <NavLink to="/kidney-calculator" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Kidney Calculator</NavLink>
                        <NavLink to="/about" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>About</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Contact</NavLink>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-dark focus:outline-none">
                            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16m-7 6h7" />}
                            </svg>
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden pb-4 flex flex-col items-center space-y-4">
                        <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Home</NavLink>
                        <NavLink to="/kidney-calculator" onClick={() => setIsOpen(false)} className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Kidney Calculator</NavLink>
                        <NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>About</NavLink>
                        <NavLink to="/contact" onClick={() => setIsOpen(false)} className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Contact</NavLink>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
