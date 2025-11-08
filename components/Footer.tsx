
import React from 'react';
import { NavLink } from 'react-router-dom';

const DrinkDoseLogo: React.FC = () => (
    <div className="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.26 7.03a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06L7.94 10 6.26 8.09a.75.75 0 010-1.06zm5.22 0a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 11-1.06-1.06L13.19 10l-1.72-1.72a.75.75 0 010-1.06z" clipRule="evenodd" />
        </svg>
        <span className="text-xl font-bold text-dark">Drink-Dose</span>
    </div>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-accent text-dark mt-12">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div className="flex flex-col items-center md:items-start">
                        <DrinkDoseLogo />
                        <p className="mt-2 text-gray-600">Your Adaptive Hydration Partner.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-2">Navigation</h3>
                        <ul className="space-y-2">
                            <li><NavLink to="/privacy-policy" className="hover:text-primary transition">Privacy Policy</NavLink></li>
                            <li><NavLink to="/terms-of-service" className="hover:text-primary transition">Terms of Service</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-2">Company</h3>
                         <ul className="space-y-2">
                            <li><NavLink to="/contact" className="hover:text-primary transition">Contact</NavLink></li>
                            <li><NavLink to="/about" className="hover:text-primary transition">About</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-secondary mt-8 pt-6 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} HydroLife. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
