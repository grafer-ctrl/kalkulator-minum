
import React from 'react';

const TermsOfServicePage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto prose prose-blue lg:prose-lg">
            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-dark tracking-tight">Terms of Service</h1>
                <p className="mt-2 text-lg text-gray-600">Please read these terms carefully before using our service.</p>
                <p className="text-sm text-gray-500">Last updated: November 8, 2025</p>
            </div>
            
            {/* Google AdSense Placeholder - In-article Ad */}
            {/* 
            <div className="my-8 text-center bg-gray-200 py-10 rounded-lg">
                <p className="text-gray-500">Google AdSense Ad Slot Goes Here</p>
            </div> 
            */}
            
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using Drink-Dose (the "Service"), you accept and agree to be bound by the terms and provision of this agreement.</p>

            <h2>2. Description of Service</h2>
            <p>Drink-Dose is a web-based water intake calculator and hydration tracking tool. Our service provides personalized calculations and educational content.</p>

            <h2>3. User Responsibilities</h2>
            <p>You agree to use the Service only for lawful purposes. You agree not to misuse the service, interfere with its operation, or copy content without permission.</p>

            <h2>4. Disclaimers and Limitations</h2>
            <h4>4.1 Medical Disclaimer</h4>
            <p><strong>IMPORTANT:</strong> The information provided by Drink-Dose is for educational purposes only. It is not intended as medical advice and should not be a substitute for professional medical diagnosis or treatment. Always consult with your healthcare provider before making changes to your health regimen.</p>
            <h4>4.2 Accuracy of Information</h4>
            <p>While we strive for accuracy, we make no warranties about the completeness or reliability of the content. Individual water needs may vary.</p>

            <h2>5. Privacy and Data Protection</h2>
            <p>Your privacy is important to us. Our collection and use of personal information is governed by our <a href="#/privacy-policy">Privacy Policy</a>.</p>

            <h2>6. Intellectual Property</h2>
            <p>The Service and its original content, features, and functionality are the exclusive property of Drink-Dose and its licensors.</p>
            
            <h2>7. Third-Party Services</h2>
            <p>Our Service may contain links to third-party websites. We use Google AdSense to display advertisements, which are subject to Google's terms and policies.</p>

            <h2>8. Limitation of Liability</h2>
            <p>In no event shall Drink-Dose be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.</p>

            <h2>9. Changes to Terms</h2>
            <p>We reserve the right to modify or replace these Terms at any time. We will provide notice of material changes.</p>

            <h2>10. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us at <a href="mailto:contact@hydrolife.com">contact@hydrolife.com</a>.</p>
        </div>
    );
};

export default TermsOfServicePage;
