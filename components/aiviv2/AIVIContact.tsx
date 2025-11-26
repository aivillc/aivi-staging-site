'use client';

import { useState } from 'react';

const contactMethods = [
  {
    icon: '📧',
    title: 'Email Us',
    description: 'Get in touch via email',
    contact: 'hello@aivi.io',
    link: 'mailto:hello@aivi.io',
  },
  {
    icon: '📞',
    title: 'Call Us',
    description: 'Mon-Fri from 8am to 6pm',
    contact: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
  },
  {
    icon: '💬',
    title: 'Live Chat',
    description: 'Chat with our team',
    contact: 'Start a conversation',
    link: '#chat',
  },
  {
    icon: '📍',
    title: 'Visit Us',
    description: 'Come say hello',
    contact: 'San Francisco, CA',
    link: '#map',
  },
];

const departments = [
  { value: 'sales', label: 'Sales Inquiry' },
  { value: 'support', label: 'Technical Support' },
  { value: 'partnership', label: 'Partnership Opportunities' },
  { value: 'careers', label: 'Careers' },
  { value: 'media', label: 'Media & Press' },
  { value: 'other', label: 'Other' },
];

const offices = [
  {
    city: 'San Francisco',
    country: 'United States',
    address: '123 Market Street, Suite 500',
    zip: 'San Francisco, CA 94103',
    emoji: '🇺🇸',
  },
  {
    city: 'London',
    country: 'United Kingdom',
    address: '456 Oxford Street',
    zip: 'London W1D 1BS',
    emoji: '🇬🇧',
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    address: '789 Orchard Road, #10-01',
    zip: 'Singapore 238824',
    emoji: '🇸🇬',
  },
  {
    city: 'Sydney',
    country: 'Australia',
    address: '321 George Street',
    zip: 'Sydney NSW 2000',
    emoji: '🇦🇺',
  },
];

export default function AIVIContact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    department: '',
    message: '',
  });
  const [hoveredMethod, setHoveredMethod] = useState<number | null>(null);
  const [hoveredOffice, setHoveredOffice] = useState<number | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full bg-[#E8E5E0]">
      {/* Hero Section */}
      <section className="w-full px-6 py-20">
        <div className="w-full max-w-[calc(100%-48px)] mx-auto bg-white rounded-3xl shadow-lg p-12 lg:p-20 text-center animate-[fadeInUp_0.6s_ease-out]">
          <div className="inline-block mb-6">
            <span className="text-[11px] font-bold tracking-[1.5px] text-[#666666] uppercase px-4 py-2 bg-[#E5FF00]/20 rounded-full">
              Get In Touch
            </span>
          </div>
          <h1 className="text-[56px] lg:text-[68px] leading-[1.1] font-normal text-[#000000] tracking-[-0.015em] mb-6 animate-[fadeInUp_0.8s_ease-out]">
            We'd love to hear
            <br />
            <span className="relative inline-block">
              from you
              <span className="absolute bottom-2 left-0 w-full h-3 bg-[#E5FF00]/30 -z-10" />
            </span>
          </h1>
          <p className="text-[19px] leading-[1.6] text-[#333333] max-w-[700px] mx-auto animate-[fadeInUp_1s_ease-out]">
            Have questions about AIVI? Want to discuss how we can help your team? Our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="w-full px-6 py-6">
        <div className="w-full max-w-[calc(100%-48px)] mx-auto bg-white rounded-3xl shadow-lg p-12 lg:p-16">
          <div className="text-center mb-12 animate-[fadeInUp_0.6s_ease-out]">
            <h2 className="text-[48px] leading-[1.2] font-normal text-[#000000] mb-4">
              Choose Your Channel
            </h2>
            <p className="text-[17px] leading-[1.6] text-[#666666] max-w-[700px] mx-auto">
              Reach out through your preferred method and we'll get back to you shortly
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                onMouseEnter={() => setHoveredMethod(index)}
                onMouseLeave={() => setHoveredMethod(null)}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#E5FF00] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer text-center animate-[fadeInUp_0.6s_ease-out]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-[56px] mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  {method.icon}
                </div>
                <h3 className="text-[20px] font-semibold text-[#000000] mb-2 group-hover:text-blue-600 transition-colors">
                  {method.title}
                </h3>
                <p className="text-[14px] text-[#666666] mb-3">
                  {method.description}
                </p>
                <p className="text-[15px] font-medium text-[#E5FF00] group-hover:text-[#000000] transition-colors">
                  {method.contact}
                </p>
                <div className={`absolute inset-0 bg-[#E5FF00]/5 rounded-2xl transition-opacity duration-300 ${
                  hoveredMethod === index ? 'opacity-100' : 'opacity-0'
                }`} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="w-full px-6 py-6">
        <div className="w-full max-w-[calc(100%-48px)] mx-auto bg-white rounded-3xl shadow-lg p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Form Info */}
            <div className="animate-[fadeInLeft_0.6s_ease-out]">
              <h2 className="text-[42px] leading-[1.2] font-normal text-[#000000] mb-6">
                Send us a message
              </h2>
              <p className="text-[17px] leading-[1.6] text-[#666666] mb-8">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#E5FF00]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#E5FF00]/40 transition-colors">
                    <span className="text-[24px]">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-semibold text-[#000000] mb-1">Fast Response</h3>
                    <p className="text-[15px] text-[#666666]">We typically respond within 2-4 hours during business hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#E5FF00]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#E5FF00]/40 transition-colors">
                    <span className="text-[24px]">🔒</span>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-semibold text-[#000000] mb-1">Secure & Private</h3>
                    <p className="text-[15px] text-[#666666]">Your information is encrypted and never shared with third parties</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#E5FF00]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#E5FF00]/40 transition-colors">
                    <span className="text-[24px]">👥</span>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-semibold text-[#000000] mb-1">Expert Support</h3>
                    <p className="text-[15px] text-[#666666]">Connect directly with our experienced team members</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="animate-[fadeInRight_0.6s_ease-out]">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative group">
                    <label className="block text-[13px] font-semibold text-[#666666] mb-2 uppercase tracking-wider">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('firstName')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full h-12 bg-white border-2 rounded-md px-4 text-[15px] text-[#000000] transition-all duration-300 ${
                        focusedField === 'firstName' ? 'border-[#000000] shadow-lg' : 'border-gray-200'
                      }`}
                    />
                    <div className={`absolute inset-0 bg-[#E5FF00]/10 rounded-md -z-10 blur transition-opacity duration-300 ${
                      focusedField === 'firstName' ? 'opacity-100' : 'opacity-0'
                    }`} />
                  </div>

                  <div className="relative group">
                    <label className="block text-[13px] font-semibold text-[#666666] mb-2 uppercase tracking-wider">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('lastName')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full h-12 bg-white border-2 rounded-md px-4 text-[15px] text-[#000000] transition-all duration-300 ${
                        focusedField === 'lastName' ? 'border-[#000000] shadow-lg' : 'border-gray-200'
                      }`}
                    />
                    <div className={`absolute inset-0 bg-[#E5FF00]/10 rounded-md -z-10 blur transition-opacity duration-300 ${
                      focusedField === 'lastName' ? 'opacity-100' : 'opacity-0'
                    }`} />
                  </div>
                </div>

                {/* Email */}
                <div className="relative group">
                  <label className="block text-[13px] font-semibold text-[#666666] mb-2 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full h-12 bg-white border-2 rounded-md px-4 text-[15px] text-[#000000] transition-all duration-300 ${
                      focusedField === 'email' ? 'border-[#000000] shadow-lg' : 'border-gray-200'
                    }`}
                  />
                  <div className={`absolute inset-0 bg-[#E5FF00]/10 rounded-md -z-10 blur transition-opacity duration-300 ${
                    focusedField === 'email' ? 'opacity-100' : 'opacity-0'
                  }`} />
                </div>

                {/* Company */}
                <div className="relative group">
                  <label className="block text-[13px] font-semibold text-[#666666] mb-2 uppercase tracking-wider">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('company')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full h-12 bg-white border-2 rounded-md px-4 text-[15px] text-[#000000] transition-all duration-300 ${
                      focusedField === 'company' ? 'border-[#000000] shadow-lg' : 'border-gray-200'
                    }`}
                  />
                  <div className={`absolute inset-0 bg-[#E5FF00]/10 rounded-md -z-10 blur transition-opacity duration-300 ${
                    focusedField === 'company' ? 'opacity-100' : 'opacity-0'
                  }`} />
                </div>

                {/* Department */}
                <div className="relative group">
                  <label className="block text-[13px] font-semibold text-[#666666] mb-2 uppercase tracking-wider">
                    Department *
                  </label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('department')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full h-12 bg-white border-2 rounded-md px-4 text-[15px] text-[#000000] transition-all duration-300 ${
                      focusedField === 'department' ? 'border-[#000000] shadow-lg' : 'border-gray-200'
                    }`}
                  >
                    <option value="">Select a department</option>
                    {departments.map((dept) => (
                      <option key={dept.value} value={dept.value}>
                        {dept.label}
                      </option>
                    ))}
                  </select>
                  <div className={`absolute inset-0 bg-[#E5FF00]/10 rounded-md -z-10 blur transition-opacity duration-300 ${
                    focusedField === 'department' ? 'opacity-100' : 'opacity-0'
                  }`} />
                </div>

                {/* Message */}
                <div className="relative group">
                  <label className="block text-[13px] font-semibold text-[#666666] mb-2 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    className={`w-full bg-white border-2 rounded-md px-4 py-3 text-[15px] text-[#000000] transition-all duration-300 resize-none ${
                      focusedField === 'message' ? 'border-[#000000] shadow-lg' : 'border-gray-200'
                    }`}
                    placeholder="Tell us how we can help..."
                  />
                  <div className={`absolute inset-0 bg-[#E5FF00]/10 rounded-md -z-10 blur transition-opacity duration-300 ${
                    focusedField === 'message' ? 'opacity-100' : 'opacity-0'
                  }`} />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group relative w-full h-14 px-8 bg-[#000000] text-white text-[15px] font-semibold rounded-md hover:bg-[#222222] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="w-full px-6 py-6">
        <div className="w-full max-w-[calc(100%-48px)] mx-auto bg-white rounded-3xl shadow-lg p-12 lg:p-16">
          <div className="text-center mb-12 animate-[fadeInUp_0.6s_ease-out]">
            <h2 className="text-[48px] leading-[1.2] font-normal text-[#000000] mb-4">
              Our Global Offices
            </h2>
            <p className="text-[17px] leading-[1.6] text-[#666666] max-w-[700px] mx-auto">
              Visit us at any of our offices around the world
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredOffice(index)}
                onMouseLeave={() => setHoveredOffice(null)}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#E5FF00] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer animate-[fadeInUp_0.6s_ease-out]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-[48px] mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  {office.emoji}
                </div>
                <h3 className="text-[22px] font-semibold text-[#000000] mb-1 group-hover:text-blue-600 transition-colors">
                  {office.city}
                </h3>
                <p className="text-[14px] font-medium text-[#E5FF00] mb-4 uppercase tracking-wider">
                  {office.country}
                </p>
                <p className="text-[14px] text-[#666666] leading-[1.6]">
                  {office.address}<br />
                  {office.zip}
                </p>
                <div className={`absolute inset-0 bg-[#E5FF00]/5 rounded-2xl transition-opacity duration-300 ${
                  hoveredOffice === index ? 'opacity-100' : 'opacity-0'
                }`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="w-full px-6 py-6 pb-12">
        <div className="w-full max-w-[calc(100%-48px)] mx-auto bg-gradient-to-br from-[#000000] to-[#333333] rounded-3xl shadow-lg p-12 lg:p-16 text-center animate-[fadeInUp_0.6s_ease-out]">
          <h2 className="text-[42px] leading-[1.2] font-normal text-white mb-6">
            Have questions before reaching out?
          </h2>
          <p className="text-[17px] leading-[1.6] text-white/80 max-w-[600px] mx-auto mb-8">
            Check out our FAQ section for quick answers to common questions.
          </p>
          <button className="group relative px-8 py-4 bg-[#E5FF00] text-[#000000] text-[15px] font-semibold rounded-md hover:bg-[#D4EE00] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden">
            <span className="relative z-10">View FAQ</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
        </div>
      </section>
    </div>
  );
}
