import React from 'react';
import '../styles/FAQ.css';

const FAQ = () => {
  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-item">
        <h4>How do I place an order?</h4>
        <p>Browse our product catalogue, add items to your cart, and proceed to checkout.</p>
      </div>
      <div className="faq-item">
        <h4>Do you offer delivery services?</h4>
        <p>Yes, we deliver within Kampala and other regions across Uganda. Delivery costs vary by location.</p>
      </div>
      <div className="faq-item">
        <h4>What payment methods do you accept?</h4>
        <p>We accept Mobile Money, Cash on Delivery, and Bank Transfers.</p>
      </div>
      <div className="faq-item">
        <h4>Can I return or exchange a product?</h4>
        <p>Yes. We have a 7-day return policy on items in original condition with a receipt.</p>
      </div>
    </div>
  );
};

export default FAQ;
