
import React from 'react';

const FeatureCard: React.FC<{ icon: string; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-transform transform hover:-translate-y-1">
    <div className="text-4xl text-primary mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-dark mb-2">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </div>
);

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-dark tracking-tight">About Drink-Dose</h1>
        <p className="mt-4 text-lg text-gray-600">Your trusted companion for daily hydration tracking and health optimization.</p>
      </section>

      <section className="bg-accent p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-dark mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          Drink-Dose.com is a water intake calculator application that helps you understand your daily fluid requirements. We believe that proper hydration is the foundation of good health, and our tool makes it easy to track and maintain optimal water intake throughout the day.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Created by Dias, a web developer passionate about healthy living, Drink-Dose combines scientific hydration guidelines with user-friendly technology to help people develop better drinking habits and improve their overall well-being.
        </p>
      </section>
      
      {/* Google AdSense Placeholder */}
      {/* 
      <div className="my-8 text-center bg-gray-200 py-10 rounded-lg">
          <p className="text-gray-500">Google AdSense Ad Slot Goes Here</p>
      </div> 
      */}

      <section>
        <h2 className="text-3xl font-bold text-dark mb-6 text-center">Why Choose Drink-Dose?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon="🔬" title="Science-Based">Calculations use established health guidelines from the WHO and medical research.</FeatureCard>
          <FeatureCard icon="🎯" title="Personalized">Considers weight, age, and activity level for accurate, personal recommendations.</FeatureCard>
          <FeatureCard icon="📈" title="Easy Tracking">Helps you maintain consistent hydration throughout the day.</FeatureCard>
          <FeatureCard icon="🎓" title="Educational">Learn about hydration health, benefits, and tips for good habits.</FeatureCard>
          <FeatureCard icon="📱" title="Mobile-Friendly">Access your calculator and tracking from any device, anywhere, anytime.</FeatureCard>
          <FeatureCard icon="🔒" title="Privacy Focused">We don't store your personal data. All calculations happen in your browser.</FeatureCard>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold text-dark mb-4">How It Works</h2>
        <p className="text-gray-700 leading-relaxed">
          Our water intake calculator uses a proven formula that takes into account your body weight as the primary factor, then adjusts for your age and activity level. The result is a personalized daily water requirement in liters, which we break down into easy-to-understand hourly targets. Simply enter your details and our calculator will provide you with your daily water requirement, equivalent number of glasses, and hourly intake targets.
        </p>
      </section>

      <section className="text-center bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-dark mb-3">Our Commitment</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
            We're committed to providing accurate, reliable hydration information while respecting your privacy. Our tool is designed to complement, not replace, professional medical advice. If you have specific health conditions or concerns about hydration, please consult with your healthcare provider.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
