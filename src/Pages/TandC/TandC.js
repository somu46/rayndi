import { FaShieldAlt, FaLock, FaUserShield, FaCopyright, FaExclamationTriangle, FaLaptopCode, FaEnvelope,FaPhoneAlt } from 'react-icons/fa';
import { MdAttachMoney } from 'react-icons/md';

const TermsAndConditions = () => {
  return (
    
      <div className="w-full mx-auto bg-gray-800 shadow-2xl overflow-hidden border border-gray-700">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 p-6 sm:p-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <FaShieldAlt className="text-white text-3xl mr-3" />
            <h1 className="text-3xl font-bold text-white">Terms and Conditions</h1>
          </div>
          <p className="text-blue-100">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8">
          <div className="prose prose-invert max-w-none">
            {/* Introduction */}
            <section className="mb-10">
              <p className="text-gray-300 mb-6">
                Welcome to Rayndi ("Company", "we", "our", "us"). These Terms and Conditions ("Terms") govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
            </section>

            {/* Sections */}
            <div className="space-y-10">
              {/* 1. Services */}
              <section>
                <div className="flex items-start mb-4">
                  <div className="bg-blue-900/30 p-2 rounded-lg mr-4">
                    <FaLaptopCode className="text-blue-400 text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-white flex-1">1. Services Provided</h2>
                </div>
                <div className="ml-14 space-y-4">
                  <p className="text-gray-300">
                    Rayndi provides software development, web and mobile application development, e-commerce solutions, and digital marketing services ("Services"). All Services are subject to these Terms and any additional agreements.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>Custom software development tailored to client specifications</li>
                    <li>Web and mobile application design and implementation</li>
                    <li>E-commerce platform development and integration</li>
                    <li>Digital marketing and SEO services</li>
                    <li>Technical consultation and support</li>
                  </ul>
                </div>
              </section>

              {/* 2. Intellectual Property */}
              <section>
                <div className="flex items-start mb-4">
                  <div className="bg-blue-900/30 p-2 rounded-lg mr-4">
                    <FaCopyright className="text-blue-400 text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-white flex-1">2. Intellectual Property Rights</h2>
                </div>
                <div className="ml-14 space-y-4">
                  <p className="text-gray-300">
                    Unless otherwise agreed in writing:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>All pre-existing intellectual property remains the property of its respective owner</li>
                    <li>Developed software and deliverables become client property upon full payment</li>
                    <li>We retain rights to any tools, libraries, or frameworks used in development</li>
                    <li>Client grants us limited license to use deliverables for promotional purposes</li>
                  </ul>
                  <div className="bg-gray-700/50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-gray-300 italic">
                      <FaExclamationTriangle className="inline mr-2 text-yellow-400" />
                      Source code will be delivered only after full payment is received unless otherwise specified in the contract.
                    </p>
                  </div>
                </div>
              </section>

              {/* 3. Payments */}
              <section>
                <div className="flex items-start mb-4">
                  <div className="bg-blue-900/30 p-2 rounded-lg mr-4">
                    <MdAttachMoney className="text-blue-400 text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-white flex-1">3. Payments and Fees</h2>
                </div>
                <div className="ml-14 space-y-4">
                  <p className="text-gray-300">
                    Our payment terms are as follows:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>50% deposit required to begin work on most projects</li>
                    <li>Final payment due upon project completion before delivery</li>
                    <li>Additional charges may apply for scope changes</li>
                    <li>Late payments incur 1.5% monthly interest</li>
                    <li>All prices are in USD unless otherwise specified</li>
                  </ul>
                </div>
              </section>

              {/* 4. Confidentiality */}
              <section>
                <div className="flex items-start mb-4">
                  <div className="bg-blue-900/30 p-2 rounded-lg mr-4">
                    <FaLock className="text-blue-400 text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-white flex-1">4. Confidentiality</h2>
                </div>
                <div className="ml-14 space-y-4">
                  <p className="text-gray-300">
                    Both parties agree to maintain confidentiality regarding:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>Business processes and proprietary information</li>
                    <li>Project details and specifications</li>
                    <li>Source code and technical implementations</li>
                    <li>Financial arrangements and pricing</li>
                  </ul>
                  <p className="text-gray-300">
                    This obligation continues for 3 years after project completion.
                  </p>
                </div>
              </section>

              {/* 5. Limitations */}
              <section>
                <div className="flex items-start mb-4">
                  <div className="bg-blue-900/30 p-2 rounded-lg mr-4">
                    <FaExclamationTriangle className="text-blue-400 text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-white flex-1">5. Limitations of Liability</h2>
                </div>
                <div className="ml-14 space-y-4">
                  <p className="text-gray-300">
                    Rayndi shall not be liable for:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>Any indirect, incidental, or consequential damages</li>
                    <li>Loss of profits or business opportunities</li>
                    <li>Issues arising from third-party services or platforms</li>
                    <li>Client-provided content or materials</li>
                  </ul>
                  <div className="bg-gray-700/50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-gray-300 italic">
                      Our total liability for any claim shall not exceed the amount paid by you for the specific service giving rise to the claim.
                    </p>
                  </div>
                </div>
              </section>

              {/* 6. Termination */}
              <section>
                <div className="flex items-start mb-4">
                  <div className="bg-blue-900/30 p-2 rounded-lg mr-4">
                    <FaUserShield className="text-blue-400 text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-white flex-1">6. Termination</h2>
                </div>
                <div className="ml-14 space-y-4">
                  <p className="text-gray-300">
                    Either party may terminate a project with written notice:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>For material breach with 30 days to cure</li>
                    <li>Immediately for non-payment after 15 days notice</li>
                    <li>Upon mutual agreement</li>
                  </ul>
                  <p className="text-gray-300">
                    Upon termination, client shall pay for all work completed and expenses incurred.
                  </p>
                </div>
              </section>

              {/* 7. Governing Law */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Governing Law</h2>
                <p className="text-gray-300">
                  These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
                </p>
              </section>

              {/* 8. Changes */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Changes to Terms</h2>
                <p className="text-gray-300">
                  We reserve the right to modify these Terms at any time. Continued use of our Services after changes constitutes acceptance of the new Terms.
                </p>
              </section>

              {/* Contact */}
              <section className="pt-6 border-t border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-gray-300 mb-6">
                  If you have any questions about these Terms, please contact us at:
                </p>
                <div className="bg-gray-700/30 p-6 rounded-lg">
                  <p className="text-gray-300 flex items-center mb-2">
                    <FaEnvelope className="mr-3 text-blue-400" />
                    legal@rayndi.com
                  </p>
                  <p className="text-gray-300 flex items-center">
                    <FaPhoneAlt className="mr-3 text-blue-400" />
                    +1 (555) 123-4567
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default TermsAndConditions;