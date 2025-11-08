
import React from 'react';

const ContactPage: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your message! This is a demo form.');
    };

    return (
        <div className="space-y-12">
            <section className="text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-dark tracking-tight">Contact Us</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                    We'd love to hear from you! Get in touch with our team.
                </p>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <h2 className="text-2xl font-bold text-dark mb-6">Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name *</label>
                            <input type="text" id="fullName" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
                            <input type="email" id="email" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary" required />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                            <select id="subject" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary bg-white">
                                <option>General Inquiry</option>
                                <option>Feedback</option>
                                <option>Support</option>
                            </select>
                        </div>
                        <div>
                             <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message *</label>
                             <textarea id="message" rows={4} placeholder="Tell us how we can help you..." className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary" required></textarea>
                        </div>
                         <button type="submit" className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold text-dark mb-4">Get in Touch</h2>
                        <div className="space-y-4 text-gray-700">
                            <p>📧 <strong>Email:</strong> For general inquiries and support: <a href="mailto:contact@hydrolife.com" className="text-primary hover:underline">contact@hydrolife.com</a></p>
                            <p>💬 <strong>Quick Response:</strong> We typically respond within 24-48 hours during business days.</p>
                            <p>🕒 <strong>Business Hours:</strong> Monday - Friday: 9:00 AM - 6:00 PM (UTC)</p>
                            <p>🌍 <strong>Location:</strong> We're a global team working remotely to serve users worldwide.</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-dark mb-4">Frequently Asked Questions</h2>
                        <div className="space-y-4 text-sm text-gray-600">
                            <p><strong>How accurate is the calculator?</strong><br/>Our tool uses science-based formulas, but individual needs may vary. It's for educational purposes only.</p>
                            <p><strong>Is my data safe?</strong><br/>Yes! We don't store personal information. Calculations happen in your browser.</p>
                            <p><strong>Can I use this for medical advice?</strong><br/>No. Our tool should not replace professional medical advice. Consult your healthcare provider for specific concerns.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
