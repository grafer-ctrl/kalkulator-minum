
import React from 'react';
import KidneyHealthCalculator from '../components/KidneyHealthCalculator';

const InfoCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <h3 className="text-xl font-bold text-dark mb-3">{title}</h3>
        <div className="text-gray-600 space-y-2">{children}</div>
    </div>
);

const KidneyCalculatorPage: React.FC = () => {
    return (
        <div className="space-y-12">
            <section className="text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-dark tracking-tight">
                    Assess Your <span className="text-primary">Kidney Function</span>
                </h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                    Our Kidney Health Calculator estimates your Glomerular Filtration Rate (eGFR) to help you understand your kidney health objectively based on lab data.
                </p>
            </section>
            
            {/* Google AdSense Placeholder - Responsive Ad */}
            {/* 
            <div className="my-8 text-center bg-gray-200 py-10 rounded-lg">
                <p className="text-gray-500">Google AdSense Ad Slot Goes Here</p>
            </div> 
            */}

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                <div className="lg:col-span-3">
                    <KidneyHealthCalculator />
                </div>
                <div className="lg:col-span-2 space-y-6">
                    <InfoCard title="🧪 Medical Information">
                        <p><strong>Creatinine Levels:</strong> A waste product from muscle metabolism. Healthy kidneys filter it from your blood. High levels may indicate reduced kidney function.</p>
                        <p><strong>Urea/BUN Levels:</strong> A waste product from protein breakdown. High levels can suggest kidney issues, dehydration, or other conditions.</p>
                    </InfoCard>
                    <InfoCard title="📊 eGFR Categories">
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="w-5 h-5 rounded-full bg-green-500 mr-3 mt-1 flex-shrink-0"></span>
                                <div><strong>Normal (≥ 90):</strong> Kidney function is normal or only slightly reduced.</div>
                            </li>
                             <li className="flex items-start">
                                <span className="w-5 h-5 rounded-full bg-yellow-500 mr-3 mt-1 flex-shrink-0"></span>
                                <div><strong>Mild to Moderate (30-89):</strong> Moderately decreased kidney function; monitoring is advised.</div>
                            </li>
                             <li className="flex items-start">
                                <span className="w-5 h-5 rounded-full bg-red-500 mr-3 mt-1 flex-shrink-0"></span>
                                <div><strong>Severe (&lt; 30):</strong> Severe kidney disease; requires immediate medical attention.</div>
                            </li>
                        </ul>
                    </InfoCard>
                    <div className="bg-blue-100 border-l-4 border-primary text-blue-800 p-4 rounded-r-lg">
                        <p className="font-bold">Medical Disclaimer</p>
                        <p className="text-sm">This tool is for informational purposes only and is not a substitute for professional medical advice. Consult a healthcare provider for any health concerns.</p>
                    </div>
                    <div className="text-xs text-gray-600 p-4 bg-gray-100 rounded-lg">
                        <p className="font-semibold text-gray-700 mb-1">Calculation Reference:</p>
                        <p>
                            The eGFR is calculated using the CKD-EPI 2021 equation. For more information, visit the <a href="https://www.kidney.org/atoz/content/gfr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">National Kidney Foundation</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KidneyCalculatorPage;
