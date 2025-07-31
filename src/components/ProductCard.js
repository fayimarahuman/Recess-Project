import React from "react";
import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
  const handleWhatsApp = () => {
    const phone = "256753670268"; // Replace with actual number
    const message = `Hello, I'm interested in ${product.name}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleCall = () => {
    const phone = "tel:+256753670268"; // Replace with actual number
    window.open(phone, "_self");
  };

  return (
    <div className="product-card">
      <div className="image-wrapper">
        <img src={product.image} alt={product.name} />
      </div>
      <h3>{product.name}</h3>
      <p className="price">UGX {product.price?.toLocaleString()}</p>
      <div className="contact-buttons">
        <button className="btn contact-btn" onClick={handleWhatsApp}>
          WhatsApp
        </button>
        <button className="btn contact-btn" onClick={handleCall}>
          Call
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
