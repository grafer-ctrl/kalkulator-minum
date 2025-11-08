
import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto prose prose-blue lg:prose-lg">
            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-dark tracking-tight">Privacy Policy</h1>
                <p className="mt-2 text-lg text-gray-600">Your privacy is important to us. Learn how we protect and handle your data.</p>
                <p className="text-sm text-gray-500">Last updated: November 8, 2025</p>
            </div>
            
            {/* Google AdSense Placeholder - In-article Ad */}
            {/* 
            <div className="my-8 text-center bg-gray-200 py-10 rounded-lg">
                <p className="text-gray-500">Google AdSense Ad Slot Goes Here</p>
            </div> 
            */}

            <h2>1. Information We Collect</h2>
            <h4>1.1 Information You Provide</h4>
            <p>When you use Drink-Dose, we may collect information that you voluntarily provide, such as contact information when you reach out to us (name, email address, message content) and feedback you submit.</p>
            <h4>1.2 Information We Don't Collect</h4>
            <p><strong>Important:</strong> We do NOT collect, store, or transmit any sensitive information like your weight, age, personal health data, location, or IP address (beyond basic analytics).</p>
            <h4>1.3 Automatically Collected Information</h4>
            <p>We may automatically collect certain information through cookies, such as device information and usage data, to improve our service.</p>
            
            <h2>2. How We Use Your Information</h2>
            <p>We use the limited information we collect to provide and maintain our service, improve user experience, and respond to your inquiries.</p>

            <h2>3. Third-Party Services</h2>
            <h4>3.1 Google AdSense</h4>
            <p>Our website uses Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits. You may opt out of personalized advertising by visiting Google Ads Settings.</p>
            <h4>3.2 Google Analytics</h4>
            <p>We use Google Analytics to analyze website traffic. This data is used to compile reports and help us improve our service.</p>

            <h2>4. Cookies and Tracking Technologies</h2>
            <p>We use essential, analytics, and advertising cookies. You can control cookies through your browser settings, but disabling them may affect website functionality.</p>

            <h2>5. Data Security</h2>
            <p>We implement appropriate security measures to protect your information, but no method of transmission over the internet is 100% secure.</p>

            <h2>6. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information and object to its processing.</p>

            <h2>7. Children's Privacy</h2>
            <p>Our service is not intended for children under 13. We do not knowingly collect personal information from children.</p>

            <h2>8. Changes to This Privacy Policy</h2>
            <p>We may update this policy from time to time. We will notify you of any significant changes by posting the new policy on this page.</p>

            <h2>9. Contact Us</h2>
            <p>If you have any questions about this privacy policy, please contact us at <a href="mailto:contact@hydrolife.com">contact@hydrolife.com</a> or via our contact page.</p>
        </div>
    );
};

export default PrivacyPolicyPage;
