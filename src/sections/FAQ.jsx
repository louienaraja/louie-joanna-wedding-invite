import { useState } from "react";
import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What should I wear?",
      answer: "TBD.",
    },
    {
      question: "Will there be transportation?",
      answer: "Yes! We will provide the transportation for all the guests.",
    },
    {
      question: "Can I bring a plus one?",
      answer:
        "Due to limited capacity, we can only accommodate those listed on your invitation.",
    },
    {
      question: "What's the weather like in November?",
      answer:
        "November in Palawan is typically dry and pleasant (25-30°C). We recommend bringing sunscreen and staying hydrated!",
    },
    {
      question: "Are kids welcome?",
      answer:
        "Yes! Kids under 12 are welcome. Please indicate their attendance in your RSVP.",
    },
    {
      question: "Is there a gift registry?",
      answer:
        "Your presence is the best present! If you wish to give, cash gifts are appreciated.",
    },
  ];

  return (
    <Layout id="faq" className="bg-stone-50">
      <SectionTitle>Frequently Asked Questions</SectionTitle>

      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-emerald-50 transition"
            >
              <span className="font-semibold text-stone-800">
                {faq.question}
              </span>
              <span className="text-emerald-800 text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-emerald-50 text-stone-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default FAQ;
