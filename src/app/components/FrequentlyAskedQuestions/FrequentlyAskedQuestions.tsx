"use client";

// React elements
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// Component
import SectionTitle from "../SectionTitle/SectionTitle";

// Style
import "./FrequentlyAskedQuestions.scss";

interface FAQItem {
  question: string;
  answer: string;
}

// interface FAQProps {
//   items: FAQItem[];
// }

function FrequentlyAskedQuestions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items: FAQItem[] = [
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ];

  return (
    <section className="faq">
      <div className="faq__container">
        <SectionTitle title="Questions fréquentes" textAlignVersion="center" />

        <div className="faq__list">
          {items.map((item, index) => (
            <div
              key={index}
              className={`faq__item ${
                openIndex === index ? "faq__item--open" : ""
              }`}
            >
              <button
                className="faq__question"
                onClick={() => toggleItem(index)}
              >
                {item.question}
                {openIndex === index ? (
                  <ChevronUp className="faq__icon" />
                ) : (
                  <ChevronDown className="faq__icon" />
                )}
              </button>
              <div className="faq__answer">{item.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FrequentlyAskedQuestions;
