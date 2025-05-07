import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ItemCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="text-decoration-none">
      <div className="card h-100 shadow-sm hover-shadow">
        <div className="position-relative">
          <img 
            src={product.image} 
            alt={product.name} 
            className="card-img-top"
            style={{ height: "200px", objectFit: "cover" }}
          />
          {/* Display "New" badge if product has less than 10 views */}
          {product.views < 10 && (
            <span className="position-absolute top-0 end-0 badge bg-danger m-2">
              Nouveau
            </span>
          )}
        </div>
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <p className="card-text fw-bold text-secondary mb-0">{product.price} ₫</p>
            <button
              onClick={handleAddToCart}
              className="btn btn-success btn-sm"
            >
              Ajouter
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;