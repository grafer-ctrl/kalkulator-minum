import React from 'react';
import WaterIntakeCalculator from '../components/WaterIntakeCalculator';

const HomePage: React.FC = () => {
    return (
        <div className="space-y-12">
            <section className="text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-dark tracking-tight">
                    Your Adaptive <span className="text-primary">Hydration</span> Partner
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                    Calculate and understand your personal daily water needs. Optimal hydration is unique to you, and Drink-Dose is here to help.
                </p>
            </section>

            {/* Google AdSense Placeholder - Leaderboard Ad */}
            {/* 
            <div className="my-8 text-center bg-gray-200 py-10 rounded-lg">
                <p className="text-gray-500">Google AdSense Ad Slot (e.g., 728x90) Goes Here</p>
            </div> 
            */}
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="order-2 lg:order-1 space-y-6">
                    <h2 className="text-3xl font-bold text-dark">About Drink-Dose</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Drink-Dose is a platform designed to help you calculate and understand your personal daily water requirements. By considering factors like weight, age, activity level, and environmental conditions, Drink-Dose helps you maintain optimal body hydration.
                    </p>
                    
                    <div className="bg-accent p-6 rounded-lg">
                        <h3 className="font-semibold text-xl text-dark mb-3">Key Message</h3>
                        <ul className="space-y-2 list-disc list-inside text-gray-700">
                            <li>The "2 liters per day" standard doesn't apply to everyone.</li>
                            <li>Everyone has unique hydration needs.</li>
                            <li>Drink-Dose is "Your Adaptive Hydration Partner."</li>
                        </ul>
                    </div>

                    <h3 className="font-semibold text-xl text-dark pt-2">Based on WHO Principles (2005)</h3>
                     <p className="text-gray-600">
                        According to the WHO document – Nutrients in Drinking Water (2005) – water needs are influenced by temperature, humidity, physical activity, fluid intake from food, and the body's natural signals like urine color and thirst.
                    </p>
                </div>
                <div className="order-1 lg:order-2">
                    <WaterIntakeCalculator />
                </div>
            </div>
        </div>
    );
};

export default HomePage;