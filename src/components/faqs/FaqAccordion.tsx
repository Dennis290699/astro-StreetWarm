import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQS = [
  {
    question: "What is your return and exchange policy?",
    answer: "We offer a 30-day free return policy. If you're not completely satisfied with your purchase, you can return it within 30 days of receipt. Items must be unworn, unwashed, and have original tags attached. Exchanges are also free and processed within 2-3 business days after we receive your item."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to over 100 countries worldwide! International shipping usually takes 5-14 business days depending on customs and location. Free international shipping is available for orders over $150."
  },
  {
    question: "How do I know what size to order?",
    answer: "Each product page features a detailed sizing guide with specific measurements. Our streetwear items typically feature a slightly oversized, relaxed fit. If you prefer a more tailored look, we recommend sizing down."
  },
  {
    question: "Are your materials ethically sourced?",
    answer: "Sustainability and ethical sourcing are at the core of our brand. All our cotton is organic (GOTS certified), and we partner exclusively with factories that ensure fair wages and safe working conditions for all their employees."
  },
  {
    question: "How long does domestic shipping take?",
    answer: "Standard domestic shipping takes 3-5 business days. We also offer expedited 2-day shipping and next-day delivery options at checkout. All orders placed before 2 PM EST are shipped the same day."
  },
  {
    question: "Can I modify or cancel my order after placing it?",
    answer: "You can modify or cancel your order within 2 hours of placing it by contacting our support team. Once the order has been processed by our warehouse, we can no longer make changes."
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4 max-w-3xl mx-auto w-full">
      {FAQS.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div 
            key={index} 
            className={`bg-white rounded-[1.5rem] border ${isOpen ? 'border-[var(--title-color)] shadow-md' : 'border-gray-100 shadow-[0_5px_15px_rgba(0,0,0,0.02)]'} transition-all duration-300 overflow-hidden`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group bg-transparent"
              title={isOpen ? "Collapse section" : "Expand section"}
            >
              <h3 className={`text-lg md:text-xl font-bold pr-8 transition-colors ${isOpen ? 'text-[var(--first-color)]' : 'text-[var(--title-color)] group-hover:text-[var(--first-color)]'}`}>
                {faq.question}
              </h3>
              <div 
                className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[var(--title-color)] text-white rotate-180' : 'bg-gray-50 text-[var(--title-color)] group-hover:bg-gray-100'}`}
              >
                <i className='bx bx-chevron-down text-2xl'></i>
              </div>
            </button>
            
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 }
                  }}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <div className="px-6 md:px-8 pb-6 md:pb-8 text-gray-500 leading-relaxed text-base md:text-lg">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
