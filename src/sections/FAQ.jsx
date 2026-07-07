import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";
import FadeInSection from "../components/FadeInSection";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What should I wear?",
      answer: null,
      scrollTo: "what-to-wear", // links to the WhatToWear section instead of expanding
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
        "Kids who are included in your invitation are more than welcome to join! Please indicate their attendance when you RSVP. As we're working with a fixed guest count, kindly check your invitation to see if your little ones are included.",
    },
    {
      question: "Is there a gift registry?",
      answer:
        "Your presence is the best present! If you wish to give, cash gifts are appreciated.",
    },
  ];

  const handleClick = (faq, index) => {
    if (faq.scrollTo) {
      document
        .getElementById(faq.scrollTo)
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      setOpenIndex(openIndex === index ? null : index);
    }
  };

  return (
    <Layout id="faq" className="bg-champagne-50">
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <FadeInSection>
        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gold-100 rounded shadow-sm overflow-hidden"
            >
              <button
                onClick={() => handleClick(faq, index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-champagne-50 transition-colors duration-200"
              >
                <span className="font-medium text-warm-800 text-sm md:text-base">
                  {faq.question}
                </span>

                {faq.scrollTo ? (
                  // Link-style affordance — no rotation animation
                  <span className="text-gold-400 text-base ml-4 flex-shrink-0 leading-none">
                    →
                  </span>
                ) : (
                  // Normal expand/collapse
                  <motion.span
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="text-gold-400 text-xl ml-4 flex-shrink-0 leading-none"
                  >
                    +
                  </motion.span>
                )}
              </button>

              {/* Only render accordion body for non-link items */}
              {!faq.scrollTo && (
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="px-6 py-4 text-warm-700 text-sm leading-relaxed border-t border-gold-100 bg-champagne-50/60">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>
      </FadeInSection>
    </Layout>
  );
}

export default FAQ;
