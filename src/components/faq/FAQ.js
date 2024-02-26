import React, { useState } from "react";
import "./FAQs.css"; // Make sure to create a CSS file for styling
import appImage from "../images/features.png"; // Replace "app-image.jpg" with your actual image file

const FAQs = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      question: "How do I place an order?",
      answer:
        "You can easily place an order through our app by selecting the services you need, specifying any special instructions, and choosing a convenient pickup and delivery time.",
    },
    {
      question: "What laundry services do you offer?",
      answer:
        "We offer a variety of laundry services including washing, drying, folding, ironing, and dry cleaning for different types of clothing and household items.",
    },
    {
      question: "How can I schedule a pickup and delivery?",
      answer:
        "Scheduling a pickup and delivery is simple! Just select the desired time slots available in the app, and our team will be there to pick up and drop off your laundry at your doorstep.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We currently serve [list of areas/cities/regions]. You can check if your location is covered by entering your address in the app.",
    },
    {
      question: "How long does it take to get my laundry back?",
      answer:
        "The turnaround time for laundry depends on the services you select and the volume of items. Typically, we strive to return your laundry within [timeframe], but this may vary based on demand.",
    },
    {
      question: "What if I have specific instructions for my laundry?",
      answer:
        "You can include any special instructions in the notes section when placing your order. Our team pays close attention to these details to meet your requirements.",
    },
  ];

  const toggleFAQ = (index) => {
    if (expandedFAQ === index) {
      setExpandedFAQ(null);
    } else {
      setExpandedFAQ(index);
    }
  };

  return (
    <div>
      <>
        <h2 className="heading-main">FAQs</h2>
      </>
      <div className="faq-container">
        {" "}
        <div className="app-image-container">
          <img src={appImage} alt="App" className="app-image" />
        </div>
        <div className="faqs-container">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span
                  className={expandedFAQ === index ? "minus-icon" : "plus-icon"}
                >
                  {expandedFAQ === index ? "-" : "+"}
                </span>
              </div>
              {expandedFAQ === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
