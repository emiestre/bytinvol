import React from 'react';

const TermsContent: React.FC = () => {
  const prohibitedActivities = [
    "Infringe upon intellectual property rights or violate applicable laws",
    "Unauthorized framing or mirroring of our Site content",
    "Access non-public areas of our systems without authorization",
    "Attempt to breach the security or vulnerability of our systems",
    "Distribute unsolicited advertising, spam, or promotional materials",
    "Interfere with other users' access to our Site",
    "Collect personal information from other users without consent",
    "Impersonate others or misrepresent your affiliations",
  ];

  return (
    <div className="terms-content font-sans text-gray-900 leading-relaxed">
      {/* Header */}
      <div className="header-section mb-8 border-b border-gray-200 pb-4">
        <p className="text-gray-600 mb-4">
          <strong>Last Updated: November 1, 2025</strong>
        </p>
        <p className="text-gray-900 mb-0">
          Welcome to ByteWave Innovations Limited. Please read these Terms of Use carefully as they govern your use of our website and services.
        </p>
      </div>

      {/* Sections */}
      <div className="terms-sections space-y-8">
        <section>
          <h3 className="text-xl font-bold mb-2 text-black">1. AGREEMENT TO TERMS</h3>
          <p>By accessing and using our website located at www.bytewaveinnovations.ca ("Site"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please discontinue use of our Site immediately.</p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-2 text-black">2. CHANGES TO TERMS</h3>
          <p>We reserve the right to modify these Terms at any time. When we make changes, we will post the updated Terms on the Site and update the "Last Updated" date. Your continued use of the Site following the posting of changes constitutes your acceptance of such changes.</p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-2 text-black">3. PRIVACY POLICY</h3>
          <p>Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information. By using our Site, you consent to the practices described in our Privacy Policy.</p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-2 text-black">4. ELIGIBILITY</h3>
          <p>You must be at least 18 years of age and capable of forming a binding contract to use our Site. By using this Site, you represent and warrant that you meet these eligibility requirements.</p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-2 text-black">5. BUSINESS SERVICES INFORMATION</h3>
          <p>The content on our Site provides information about ByteWave Innovations Limited and the services we offer. This information is for general informational purposes only and does not constitute a binding agreement or offer unless formally executed by both parties.</p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-2 text-black">6. FEEDBACK AND SUGGESTIONS</h3>
          <p>We welcome your feedback, comments, and suggestions for improving our Site and services. When you submit feedback to info@bytewaveinnovations.ca, you grant us a perpetual, irrevocable license to use, modify, and implement your suggestions without any obligation to compensate you.</p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-2 text-black">7. PROHIBITED ACTIVITIES</h3>
          <p className="mb-2">You agree not to engage in any of the following activities:</p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            {prohibitedActivities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-2 text-black">8. THIRD-PARTY LINKS</h3>
          <p>Our Site may include links to third-party websites for your convenience. We do not endorse and are not responsible for the content, products, or services offered by these third-party sites. You access them at your own risk.</p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-2 text-black">9. TERMINATION</h3>
          <p>We reserve the right to terminate or suspend your access to our Site at our sole discretion, without prior notice, for any reason including violation of these Terms. Provisions that by their nature should survive termination will remain in effect.</p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-2 text-black">10. DISCLAIMER OF WARRANTIES</h3>
          <div className="p-4 border border-gray-300 bg-gray-50 rounded">
            <p className="mb-0 font-semibold">THE SITE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND.</p>
            <p>We do not guarantee that the Site will be uninterrupted, secure, error-free, or meet your specific requirements.</p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-2 text-black">11. LIMITATION OF LIABILITY</h3>
          <div className="p-4 border border-gray-300 bg-gray-50 rounded">
            <p className="mb-0 font-semibold">TO THE FULLEST EXTENT PERMITTED BY LAW,</p>
            <p>ByteWave Innovations Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the Site.</p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-2 text-black">12. GOVERNING LAW</h3>
          <p>These Terms shall be governed by and construed in accordance with the laws of British Columbia, Canada. Any legal disputes shall be subject to the exclusive jurisdiction of the courts located in British Columbia.</p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-2 text-black">13. CONTACT INFORMATION</h3>
          <div className="p-4 border border-gray-200 rounded bg-gray-50">
            <p className="mb-1">For questions regarding these Terms of Use, please contact us:</p>
            <p className="mb-0"><strong>Email:</strong> info@bytewaveinnovations.ca</p>
            <p className="mb-0"><strong>Website:</strong> www.bytewaveinnovations.ca</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsContent;
