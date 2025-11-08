
import React, { useState, useCallback } from 'react';
import { Gender, eGFRResult } from '../types';

const KidneyHealthCalculator: React.FC = () => {
    const [age, setAge] = useState<string>('');
    const [gender, setGender] = useState<Gender>(Gender.Male);
    const [creatinine, setCreatinine] = useState<string>('');
    const [bun, setBun] = useState<string>('');
    const [result, setResult] = useState<eGFRResult | null>(null);
    const [error, setError] = useState<string>('');

    const calculateEGFR = useCallback(() => {
        const ageNum = parseInt(age, 10);
        const creatinineNum = parseFloat(creatinine);

        if (isNaN(ageNum) || ageNum <= 0 || isNaN(creatinineNum) || creatinineNum <= 0) {
            setError('Please enter valid positive numbers for age and creatinine.');
            setResult(null);
            return;
        }
        setError('');

        // CKD-EPI 2021 Equation
        const kappa = gender === Gender.Female ? 0.7 : 0.9;
        const alpha = gender === Gender.Female ? -0.241 : -0.302;
        const scrOverKappa = creatinineNum / kappa;
        
        let eGFR = 142 * Math.pow(Math.min(scrOverKappa, 1), alpha) * Math.pow(Math.max(scrOverKappa, 1), -1.200);
        eGFR *= Math.pow(0.9938, ageNum);
        if (gender === Gender.Female) {
            eGFR *= 1.012;
        }

        let category: eGFRResult['category'] = null;
        let explanation = '';

        if (eGFR >= 90) {
            category = 'Normal';
            explanation = 'Kidney function is normal or only slightly reduced.';
        } else if (eGFR >= 30 && eGFR < 90) {
            category = 'Mild to Moderate';
            explanation = 'Moderately decreased kidney function; monitoring and lifestyle changes may be needed.';
        } else {
            category = 'Severe';
            explanation = 'Severe kidney disease; requires immediate medical attention and specialized care.';
        }

        setResult({ value: eGFR, category, explanation });

    }, [age, gender, creatinine]);
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        calculateEGFR();
    };
    
    const getResultColorClasses = (category: eGFRResult['category']) => {
        switch (category) {
            case 'Normal':
                return 'bg-green-100 text-green-800 border-green-400';
            case 'Mild to Moderate':
                return 'bg-yellow-100 text-yellow-800 border-yellow-400';
            case 'Severe':
                return 'bg-red-100 text-red-800 border-red-400';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-400';
        }
    }

    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6 text-center">Kidney Health Calculator (eGFR)</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">Age (years)</label>
                        <input
                            type="number"
                            id="age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            placeholder="e.g., 50"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                        <div className="flex items-center space-x-4">
                            <label className="flex items-center">
                                <input type="radio" value={Gender.Male} checked={gender === Gender.Male} onChange={() => setGender(Gender.Male)} className="form-radio text-primary focus:ring-primary"/>
                                <span className="ml-2 text-gray-700">Male</span>
                            </label>
                             <label className="flex items-center">
                                <input type="radio" value={Gender.Female} checked={gender === Gender.Female} onChange={() => setGender(Gender.Female)} className="form-radio text-primary focus:ring-primary"/>
                                <span className="ml-2 text-gray-700">Female</span>
                            </label>
                        </div>
                    </div>
                     <div>
                        <label htmlFor="creatinine" className="block text-sm font-medium text-gray-700 mb-1">Creatinine (mg/dL)</label>
                        <input
                            type="number"
                            step="0.1"
                            id="creatinine"
                            value={creatinine}
                            onChange={(e) => setCreatinine(e.target.value)}
                            placeholder="0.6 - 1.2 is normal"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition"
                            required
                        />
                    </div>
                     <div>
                        <label htmlFor="bun" className="block text-sm font-medium text-gray-700 mb-1">Urea/BUN (mg/dL)</label>
                        <input
                            type="number"
                            id="bun"
                            value={bun}
                            onChange={(e) => setBun(e.target.value)}
                            placeholder="7 - 20 is normal"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition"
                        />
                    </div>
                </div>
                {error && <p className="text-red-500 text-sm text-center pt-2">{error}</p>}
                <button type="submit" className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                    Calculate eGFR
                </button>
            </form>
            {result && result.value !== null && (
                 <div className={`mt-8 p-6 rounded-lg text-center border-l-4 ${getResultColorClasses(result.category)}`}>
                    <p className="text-lg">Your estimated Glomerular Filtration Rate (eGFR) is:</p>
                    <p className="text-4xl font-extrabold my-2">{result.value.toFixed(0)} <span className="text-xl font-normal">mL/min/1.73m²</span></p>
                    <p className="font-semibold text-xl">{result.category}</p>
                    <p className="text-md mt-1">{result.explanation}</p>
                 </div>
            )}
        </div>
    );
};

export default KidneyHealthCalculator;
