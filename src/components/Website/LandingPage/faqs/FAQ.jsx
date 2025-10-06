import React, { useState } from "react";
import Plus from "../../../../assets/Add_Plus.svg";
import Minus from "../../../../assets/Remove_Minus.svg";

const faqData = [
  {
  question: "Do I really pay nothing?",
  answer: [
    "Accessing general health information and browsing our platform is completely free.",
    "However, booking appointments with verified healthcare professionals involves a transparent fee to ensure quality care and secure scheduling."
  ]
},
  {
    question: "Is my data secure?",
    answer: [
      "Absolutely. We prioritize your privacy and use industry-standard encryption to protect your personal and medical information.",
      "Our systems are regularly audited to ensure compliance with healthcare data regulations."

    ],
  },
  {
    question: "How do I reschedule?",
    answer: [ "You can easily reschedule your appointment from your dashboard.",
      "Just navigate to 'My Appointments' and select a new time slot that works for you."
],
  },
  {
    question: "How do I get a refund?",
    answer: ["Refunds are processed within 5–7 business days after approval.",
      "You’ll receive a confirmation email once your refund is initiated."],
  },
];

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 py-12 sm:py-16">
      <h2 className="text-center mb-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        <span className="text-[#013A63]">Frequently </span>
        <span className="text-black font-normal">asked questions</span>
      </h2>
      <p className="text-center text-gray-500 mb-12 sm:mb-20 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
        Everything you need to know about the Easha24x7
      </p>
      <div className="space-y-6">
        {faqData.map((item, index) => (
          <div key={index} className="py-5 border-b border-gray-200">
            <div
              className="flex justify-between items-center cursor-pointer gap-4 sm:gap-6"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[31px] font-medium text-gray-800">
                {item.question}
              </span>

              <span className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 border border-[#00A99D] rounded-full">
                <img
                  src={activeIndex === index ? Minus : Plus}
                  alt={activeIndex === index ? "Collapse" : "Expand"}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  style={{
                    filter:
                      "invert(42%) sepia(97%) saturate(395%) hue-rotate(125deg) brightness(95%) contrast(90%)",
                  }}
                />
              </span>
            </div>

            {activeIndex === index && (
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-500">
                {item.answer.map((ans, i) => (
                  <li key={i} className="text-sm sm:text-base md:text-lg leading-relaxed">
                    {ans}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
