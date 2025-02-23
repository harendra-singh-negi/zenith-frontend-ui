import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What are the check-in/check-out timings?",
    answer: "Check-in time is 12:00 PM and check-out time is 11:00 AM. Early check-in and late check-out can be arranged subject to availability."
  },
  {
    question: "Are meals included in the fees?",
    answer: "Yes, we provide 3 meals a day (breakfast, lunch, and dinner) on all days including weekends. We also accommodate special dietary requirements upon request."
  },
  {
    question: "What amenities are included?",
    answer: "All rooms come with Wi-Fi, air conditioning, study table, wardrobe, and attached bathroom. Common areas include a gym, study room, TV room, and laundry facility."
  },
  {
    question: "Is there a curfew?",
    answer: "Yes, there is a curfew timing of 11:00 PM for safety reasons. Late entry can be arranged with prior permission from the management."
  },
  {
    question: "What is the security deposit?",
    answer: "A refundable security deposit of ₹10,000 is required at the time of admission. This will be returned at the time of checkout after deducting any damages if applicable."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked <span className="text-red-500">Questions</span>
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-red-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-48 pb-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;