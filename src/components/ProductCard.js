import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const { name, image } = product;

  const phoneNumber = "+256753670268"; // Replace with actual contact
  const message = `Hello, I'm interested in your product: ${name}`;

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>

      {/* Contact Options */}
      <div className="contact-buttons">
        <a
          href={`https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`}
          className="contact-btn whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Contact via WhatsApp about ${name}`}
        >
          WhatsApp
        </a>

        <a
          href={`tel:${phoneNumber}`}
          className="contact-btn call"
          aria-label={`Call about ${name}`}
          rel="noopener noreferrer"
        >
          Call
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
