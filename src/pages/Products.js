import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import "../styles/Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  const handleAddToCart = (product) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  if (!isLoggedIn) {
    navigate("/register");
    return;
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const exists = cart.find((item) => item.id === product.id);

  if (!exists) {
    cart.push({ ...product, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item added to cart!");
  } else {
    alert("Item already in cart.");
  }
};
  const filteredCategory = searchParams.get("category");
  const searchTerm = searchParams.get("search")?.toLowerCase();

  const filteredProducts = products.filter((product) => {
    const matchCategory = filteredCategory
      ? product.category.toLowerCase() === filteredCategory.toLowerCase()
      : true;
    const matchSearch = searchTerm
      ? product.name.toLowerCase().includes(searchTerm)
      : true;
    return matchCategory && matchSearch;
  });

  return (
    <div className="products-page">
      <h2>Our Product Catalogue</h2>
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))
        ) : (
          <p>No products match your search.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
