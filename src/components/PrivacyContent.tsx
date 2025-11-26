import React from 'react';

const PrivacyContent: React.FC = () => {
  const infoList1 = [
    "Personal information such as name, postal address, email address, telephone number, or any other identifier by which you may be contacted online or offline",
    "Information about your internet connection, the equipment you use to access our Site, and usage details",
    "Information about your business requirements if you engage our services",
    "Payment information when you purchase services from us",
    "Information you provide when you contact us or submit inquiries",
  ];

  const infoList2 = [
    "Directly from you when you provide it to us (e.g., through forms, account registration, purchases)",
    "Automatically as you navigate through the Site (e.g., usage details, IP addresses, cookies)",
    "From third parties, for example, our business partners",
  ];

  const infoList3 = [
    "To present our Site and its contents to you",
    "To provide you with information, products, or services that you request from us",
    "To fulfill any other purpose for which you provide it",
    "To notify you about changes to our Site or any products or services we offer",
    "To allow you to participate in interactive features on our Site",
    "For marketing and promotional purposes",
    "To improve our Site and services",
    "For any other purpose with your consent",
  ];

  const disclosureList = [
    "To our subsidiaries and affiliates",
    "To contractors, service providers, and other third parties we use to support our business",
    "To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Bytewaveinnovations Limited's assets",
    "For any other purpose disclosed by us when you provide the information",
    "With your consent",
    "To comply with any court order, law, or legal process",
    "If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of Bytewaveinnovations Limited, our customers, or others",
  ];

  return (
    <div className="privacy-content font-sans text-gray-900 leading-relaxed space-y-8">
      <p className="text-gray-600 mb-4 font-semibold">
        Last Updated: November 1, 2025
      </p>

      <p className="text-gray-800 mb-6">
        ByteWave Innovations Limited ("ByteWave Innovations Limited," "we," "us," or "our") respects your privacy and is committed to protecting it through our compliance with this Privacy Policy ("Policy"). This Policy describes the types of information we may collect from you or that you may provide when you visit our website www.bytewaveinnovations.ca (our "Site") and our practices for collecting, using, maintaining, protecting, and disclosing that information.
      </p>

      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-3">1. Information We Collect</h3>
          <p className="text-gray-800 mb-2">We collect several types of information from and about users of our Site, including:</p>
          <ul className="list-disc list-inside text-gray-800 space-y-1 ml-4">
            {infoList1.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-3">2. How We Collect Information</h3>
          <p className="text-gray-800 mb-2">We collect this information:</p>
          <ul className="list-disc list-inside text-gray-800 space-y-1 ml-4">
            {infoList2.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h3>
          <p className="text-gray-800 mb-2">We use information that we collect about you or that you provide to us:</p>
          <ul className="list-disc list-inside text-gray-800 space-y-1 ml-4">
            {infoList3.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-3">4. Disclosure of Your Information</h3>
          <p className="text-gray-800 mb-2">We may disclose aggregated information about our users, and information that does not identify any individual, without restriction. We may disclose personal information:</p>
          <ul className="list-disc list-inside text-gray-800 space-y-1 ml-4">
            {disclosureList.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-3">5. Cookies and Tracking Technologies</h3>
          <p className="text-gray-800">We use cookies and similar tracking technologies to track activity on our Site and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-3">6. Third-Party Websites</h3>
          <p className="text-gray-800">Our Site may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites.</p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-3">7. Data Security</h3>
          <p className="text-gray-800">We implement measures designed to protect your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure.</p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-3">8. Children's Privacy</h3>
          <p className="text-gray-800">Our Site is not intended for children under 13. We do not knowingly collect personal information from children under 13 without parental consent.</p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-3">9. Your Choices</h3>
          <p className="text-gray-800">You can review and change your personal information by logging into your account. You may also opt out of receiving marketing emails from us.</p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-3">10. Changes to Our Privacy Policy</h3>
          <p className="text-gray-800">We will post any changes we make to our Policy on this page. The date the Policy was last revised is identified at the top of the page.</p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-3">11. Contact Information</h3>
          <p className="text-gray-800">To ask questions or comment about this Policy and our privacy practices, contact us at: <strong>info@bytewaveinnovations.ca</strong></p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyContent;
