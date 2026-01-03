'use client';

import AIVINavigationV4 from '@/components/aiviv4/AIVINavigationV4';
import AIVIFooter from '@/components/aiviv3/AIVIFooter';
import { DemoPopupProvider } from '@/components/aiviv3/DemoPopupContext';
import Link from 'next/link';

function PrivacyContent() {
  return (
    <div className="bg-[#000] min-h-screen antialiased font-manrope">
      <AIVINavigationV4 transparent={false} />

      <main className="pt-[72px]">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 px-6">
          {/* Background grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,0,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,0,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
          {/* Radial gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#8b00ff]/5 via-transparent to-transparent" />

          <div className="relative max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/40 mb-8">
              <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/60">Privacy Policy</span>
            </nav>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Privacy{' '}
              <span className="bg-gradient-to-r from-[#8b00ff] to-[#f84608] text-transparent bg-clip-text">
                Policy
              </span>
            </h1>

            {/* Last Updated Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06]">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#8b00ff] to-[#f84608]" />
              <span className="text-sm text-white/60">Last Updated: November 10, 2025</span>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative px-6 pb-20">
          <div className="relative max-w-4xl mx-auto space-y-6">

            {/* Introduction */}
            <div className="group bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 md:p-10 hover:border-white/[0.1] transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p className="text-white/70 leading-relaxed">
                AIVI LLC ("AIVI," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered communication automation services, including our voice, SMS, email, and document processing platforms.
              </p>
            </div>

            {/* Section 1 */}
            <div className="group bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 md:p-10 hover:border-white/[0.1] transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#8b00ff]/20 to-[#f84608]/20 border border-[#8b00ff]/30 text-white font-semibold text-sm">
                  01
                </span>
                <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
              </div>

              <h3 className="text-xl font-semibold text-white/90 mt-6 mb-3">1.1 Information You Provide</h3>
              <ul className="text-white/70 space-y-2 list-disc pl-6 marker:text-[#8b00ff]">
                <li>Contact information (name, email address, phone number, company name)</li>
                <li>Account credentials and authentication information</li>
                <li>Business information and company details</li>
                <li>Payment and billing information</li>
                <li>Communications and correspondence with us</li>
              </ul>

              <h3 className="text-xl font-semibold text-white/90 mt-6 mb-3">1.2 Information Collected Through Our Services</h3>
              <ul className="text-white/70 space-y-2 list-disc pl-6 marker:text-[#8b00ff]">
                <li>Call recordings and transcripts (with appropriate consent)</li>
                <li>SMS and email message content and metadata</li>
                <li>Document uploads and processed data (OCR/AI extracted information)</li>
                <li>Customer interaction data and conversation analytics</li>
                <li>Lead data, campaign performance metrics, and conversion statistics</li>
              </ul>

              <h3 className="text-xl font-semibold text-white/90 mt-6 mb-3">1.3 Automatically Collected Information</h3>
              <ul className="text-white/70 space-y-2 list-disc pl-6 marker:text-[#8b00ff]">
                <li>IP addresses and device identifiers</li>
                <li>Browser type, operating system, and device information</li>
                <li>Usage data, including pages visited and features used</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Performance and error logs</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="group bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 md:p-10 hover:border-white/[0.1] transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#8b00ff]/20 to-[#f84608]/20 border border-[#8b00ff]/30 text-white font-semibold text-sm">
                  02
                </span>
                <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
              </div>
              <p className="text-white/70 mb-4">We use the collected information for the following purposes:</p>
              <ul className="text-white/70 space-y-2 list-disc pl-6 marker:text-[#8b00ff]">
                <li>Providing, maintaining, and improving our AI communication services</li>
                <li>Processing and delivering voice calls, SMS messages, and email campaigns</li>
                <li>Analyzing documents using OCR and AI language models</li>
                <li>Training and improving our AI models and algorithms</li>
                <li>Generating analytics, insights, and performance reports</li>
                <li>Processing payments and managing subscriptions</li>
                <li>Providing customer support and technical assistance</li>
                <li>Sending service updates, security alerts, and administrative messages</li>
                <li>Detecting, preventing, and addressing fraud, security issues, and technical problems</li>
                <li>Complying with legal obligations and regulatory requirements</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="group bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 md:p-10 hover:border-white/[0.1] transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#8b00ff]/20 to-[#f84608]/20 border border-[#8b00ff]/30 text-white font-semibold text-sm">
                  03
                </span>
                <h2 className="text-2xl font-bold text-white">Third-Party Services and Integrations</h2>
              </div>
              <p className="text-white/70 mb-6">AIVI integrates with and uses the following third-party services to deliver our platform:</p>

              <h3 className="text-xl font-semibold text-[#f84608] mt-6 mb-3">3.1 Twilio (Voice & SMS)</h3>
              <p className="text-white/70">
                We use Twilio for voice calling and SMS messaging services. Data processed through Twilio is subject to Twilio's Privacy Policy and security standards. Twilio is SOC 2 Type II certified and GDPR compliant.
              </p>

              <h3 className="text-xl font-semibold text-[#f84608] mt-6 mb-3">3.2 Voice AI Services</h3>
              <p className="text-white/70">
                Our AI voice agent capabilities are powered by service providers. Voice conversations may be processed through their infrastructure for real-time AI responses and transcription services.
              </p>

              <h3 className="text-xl font-semibold text-[#f84608] mt-6 mb-3">3.3 N8N (Workflow Automation)</h3>
              <p className="text-white/70">
                We utilize N8N for workflow automation and integration orchestration. Data flows between integrated systems are processed through our N8N infrastructure with encryption in transit.
              </p>

              <h3 className="text-xl font-semibold text-[#f84608] mt-6 mb-3">3.4 OpenAI & Other AI Providers</h3>
              <p className="text-white/70">
                We may use OpenAI and other AI service providers for natural language processing, document analysis, and conversation intelligence. Data sent to these services is processed according to their respective privacy policies and data processing agreements.
              </p>

              <h3 className="text-xl font-semibold text-[#f84608] mt-6 mb-3">3.5 CRM and Marketing Integrations</h3>
              <p className="text-white/70">
                AIVI integrates with various CRM systems (Salesforce, HubSpot, etc.) and marketing platforms. Data synchronization with these systems is governed by your agreements with those providers.
              </p>
            </div>

            {/* Section 4 */}
            <div className="group bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 md:p-10 hover:border-white/[0.1] transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#8b00ff]/20 to-[#f84608]/20 border border-[#8b00ff]/30 text-white font-semibold text-sm">
                  04
                </span>
                <h2 className="text-2xl font-bold text-white">Data Security and Protection</h2>
              </div>

              <h3 className="text-xl font-semibold text-white/90 mt-6 mb-3">4.1 Security Measures</h3>
              <ul className="text-white/70 space-y-2 list-disc pl-6 marker:text-[#8b00ff]">
                <li>End-to-end encryption for data in transit using TLS 1.3</li>
                <li>Encryption at rest for stored data</li>
                <li>SOC 2 Type II certified infrastructure</li>
                <li>Regular security audits and penetration testing</li>
                <li>Multi-factor authentication (MFA) for account access</li>
                <li>Role-based access control (RBAC) and principle of least privilege</li>
                <li>Automated threat detection and incident response procedures</li>
              </ul>

              <h3 className="text-xl font-semibold text-white/90 mt-6 mb-3">4.2 PII Handling</h3>
              <p className="text-white/70">
                Personally Identifiable Information (PII) is handled with extreme care. By default, PII is only stored in transit and is not retained in our systems longer than necessary for processing. Sensitive data such as Social Security Numbers, financial account numbers, and health information are processed with additional security controls.
              </p>

              <h3 className="text-xl font-semibold text-white/90 mt-6 mb-3">4.3 HIPAA Compliance</h3>
              <p className="text-white/70">
                For healthcare clients, AIVI offers HIPAA-compliant services with appropriate Business Associate Agreements (BAA). Protected Health Information (PHI) is handled in accordance with HIPAA regulations and stored in segregated, secure environments.
              </p>
            </div>

            {/* Section 5 */}
            <div className="group bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 md:p-10 hover:border-white/[0.1] transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#8b00ff]/20 to-[#f84608]/20 border border-[#8b00ff]/30 text-white font-semibold text-sm">
                  05
                </span>
                <h2 className="text-2xl font-bold text-white">Data Retention and Deletion</h2>
              </div>
              <ul className="text-white/70 space-y-3 list-disc pl-6 marker:text-[#8b00ff]">
                <li><strong className="text-white">Call Recordings:</strong> Retained for 90 days unless otherwise specified or required by law</li>
                <li><strong className="text-white">Message Content:</strong> SMS and email content retained for 180 days for analytics and compliance purposes</li>
                <li><strong className="text-white">Documents:</strong> Uploaded documents processed and deleted after extraction unless storage is explicitly requested</li>
                <li><strong className="text-white">Analytics Data:</strong> Aggregated and anonymized analytics retained indefinitely for service improvement</li>
                <li><strong className="text-white">Account Data:</strong> Retained for the duration of the business relationship plus applicable retention periods for legal and tax purposes</li>
                <li><strong className="text-white">Deletion Requests:</strong> Users may request deletion of their data by contacting privacy@aivi.com</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="group bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 md:p-10 hover:border-white/[0.1] transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#8b00ff]/20 to-[#f84608]/20 border border-[#8b00ff]/30 text-white font-semibold text-sm">
                  06
                </span>
                <h2 className="text-2xl font-bold text-white">Data Sharing and Disclosure</h2>
              </div>
              <p className="text-white/70 mb-4">We do not sell your personal information. We may share your information in the following circumstances:</p>
              <ul className="text-white/70 space-y-2 list-disc pl-6 marker:text-[#8b00ff]">
                <li><strong className="text-white">Service Providers:</strong> With third-party vendors who perform services on our behalf (Twilio, Retell, N8N, cloud hosting providers)</li>
                <li><strong className="text-white">Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                <li><strong className="text-white">Legal Requirements:</strong> When required by law, subpoena, or other legal process</li>
                <li><strong className="text-white">Protection of Rights:</strong> To protect our rights, privacy, safety, property, or that of our users</li>
                <li><strong className="text-white">With Your Consent:</strong> When you explicitly authorize data sharing</li>
              </ul>
            </div>

            {/* Section 7 */}
            <div className="group bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 md:p-10 hover:border-white/[0.1] transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#8b00ff]/20 to-[#f84608]/20 border border-[#8b00ff]/30 text-white font-semibold text-sm">
                  07
                </span>
                <h2 className="text-2xl font-bold text-white">Your Privacy Rights</h2>
              </div>
              <p className="text-white/70 mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="text-white/70 space-y-2 list-disc pl-6 marker:text-[#8b00ff]">
                <li><strong className="text-white">Access:</strong> Request access to the personal information we hold about you</li>
                <li><strong className="text-white">Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong className="text-white">Deletion:</strong> Request deletion of your personal information (subject to legal retention requirements)</li>
                <li><strong className="text-white">Portability:</strong> Request a copy of your data in a structured, machine-readable format</li>
                <li><strong className="text-white">Opt-Out:</strong> Opt out of marketing communications and certain data processing activities</li>
                <li><strong className="text-white">Restrict Processing:</strong> Request restriction of processing under certain circumstances</li>
                <li><strong className="text-white">Object:</strong> Object to processing based on legitimate interests</li>
              </ul>
              <p className="text-white/70 mt-4">
                To exercise these rights, please contact us at <a href="mailto:privacy@aivi.com" className="text-[#f84608] hover:text-[#fb923c] transition-colors">privacy@aivi.com</a>.
              </p>
            </div>

            {/* Section 8 */}
            <div className="group bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 md:p-10 hover:border-white/[0.1] transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#8b00ff]/20 to-[#f84608]/20 border border-[#8b00ff]/30 text-white font-semibold text-sm">
                  08
                </span>
                <h2 className="text-2xl font-bold text-white">International Data Transfers</h2>
              </div>
              <p className="text-white/70">
                AIVI operates globally and may transfer data to countries outside your jurisdiction. We ensure appropriate safeguards are in place, including Standard Contractual Clauses (SCCs) for transfers outside the EEA, and compliance with applicable data protection laws.
              </p>
            </div>

            {/* Section 9 */}
            <div className="group bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 md:p-10 hover:border-white/[0.1] transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#8b00ff]/20 to-[#f84608]/20 border border-[#8b00ff]/30 text-white font-semibold text-sm">
                  09
                </span>
                <h2 className="text-2xl font-bold text-white">Cookies and Tracking Technologies</h2>
              </div>
              <p className="text-white/70 mb-4">We use cookies and similar technologies to:</p>
              <ul className="text-white/70 space-y-2 list-disc pl-6 marker:text-[#8b00ff]">
                <li>Maintain user sessions and authentication</li>
                <li>Remember user preferences and settings</li>
                <li>Analyze usage patterns and service performance</li>
                <li>Provide personalized content and recommendations</li>
              </ul>
              <p className="text-white/70 mt-4">
                You can control cookies through your browser settings, but disabling cookies may limit functionality.
              </p>
            </div>

            {/* Section 10 */}
            <div className="group bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 md:p-10 hover:border-white/[0.1] transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#8b00ff]/20 to-[#f84608]/20 border border-[#8b00ff]/30 text-white font-semibold text-sm">
                  10
                </span>
                <h2 className="text-2xl font-bold text-white">Children's Privacy</h2>
              </div>
              <p className="text-white/70">
                AIVI's services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If we learn we have collected information from a child without parental consent, we will delete that information promptly.
              </p>
            </div>

            {/* Section 11 */}
            <div className="group bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 md:p-10 hover:border-white/[0.1] transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#8b00ff]/20 to-[#f84608]/20 border border-[#8b00ff]/30 text-white font-semibold text-sm">
                  11
                </span>
                <h2 className="text-2xl font-bold text-white">Changes to This Privacy Policy</h2>
              </div>
              <p className="text-white/70">
                We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on our website and updating the "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the revised policy.
              </p>
            </div>

            {/* Section 12 - Contact */}
            <div className="group bg-white/[0.02] border border-[#f84608]/20 rounded-2xl p-8 md:p-10 hover:border-[#f84608]/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#f84608]/20 to-[#8b00ff]/20 border border-[#f84608]/30 text-white font-semibold text-sm">
                  12
                </span>
                <h2 className="text-2xl font-bold text-white">Contact Us</h2>
              </div>
              <p className="text-white/70 mb-6">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="text-white/70 space-y-3">
                <p><strong className="text-white/90">Email:</strong> <a href="mailto:privacy@aivi.com" className="text-[#f84608] hover:text-[#fb923c] transition-colors">privacy@aivi.com</a></p>
                <p><strong className="text-white/90">Data Protection Officer:</strong> <a href="mailto:dpo@aivi.com" className="text-[#f84608] hover:text-[#fb923c] transition-colors">dpo@aivi.com</a></p>
                <p className="pt-2">
                  <strong className="text-white/90">Mailing Address:</strong><br />
                  <span className="text-white/60">
                    AIVI LLC<br />
                    [Your Company Address]<br />
                    [City, State ZIP]<br />
                    United States
                  </span>
                </p>
              </div>
            </div>

            {/* Compliance Certifications */}
            <div className="relative overflow-hidden rounded-2xl p-8 md:p-10 bg-gradient-to-br from-[#8b00ff]/10 via-transparent to-[#f84608]/10 border border-[#8b00ff]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8b00ff]/5 to-[#f84608]/5" />
              <div className="relative">
                <h2 className="text-2xl font-bold text-white mb-6">Compliance Certifications</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    'SOC 2 Type II',
                    'HIPAA Compliant',
                    'GDPR Ready',
                    'CCPA Compliant',
                    'ISO 27001',
                    'PCI DSS'
                  ].map((cert) => (
                    <div key={cert} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-400/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white/80 text-sm font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <AIVIFooter />
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <DemoPopupProvider>
      <PrivacyContent />
    </DemoPopupProvider>
  );
}
