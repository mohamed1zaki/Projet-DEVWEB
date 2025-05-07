import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import products, { incrementProductViews } from '../data/sata';

// Function to calculate average rating
const calculateAverageRating = (reviews) => {
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((total, review) => total + review.rating, 0);
  return sum / reviews.length;
};

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  
  useEffect(() => {
    if (id) {
      // Find matching product and increment view counter
      const productId = parseInt(id);
      const updatedProduct = incrementProductViews(productId);
      if (updatedProduct) {
        setProduct({ ...updatedProduct });
      }
    }
  }, [id]);

  if (!product) {
    return <div className="container py-5 text-center">Produit non trouvé</div>;
  }

  const averageRating = calculateAverageRating(product.reviews);

  // Generate stars for ratings
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <i 
        key={index} 
        className={`bi ${index < rating ? 'bi-star-fill text-warning' : 'bi-star text-secondary'}`}
      ></i>
    ));
  };

  return (
    <div className="container py-4">
      <div className="card shadow">
        <div className="row g-0">
          {/* Product image */}
          <div className="col-md-6">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-100 h-100 object-fit-cover"
            />
          </div>
          
          {/* Product information */}
          <div className="col-md-6">
            <div className="card-body p-4">
              <h1 className="card-title fs-2 fw-bold mb-3">{product.name}</h1>
              <p className="card-text text-muted mb-4">{product.description}</p>
              
              <p className="fs-3 fw-bold text-warning mb-4">{product.price} ₫</p>
              
              <div className="d-flex mb-4 gap-4">
                <div className="d-flex align-items-center">
                  <i className="bi bi-eye text-muted me-2"></i>
                  <span>{product.views} vues</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-bag text-muted me-2"></i>
                  <span>{product.sold} vendus</span>
                </div>
              </div>
              
              <button 
                onClick={() => addToCart(product)}
                className="btn btn-success btn-lg w-100 mb-4"
              >
                Ajouter au panier
              </button>
              
              {/* Average rating */}
              <div className="mt-4">
                <div className="d-flex align-items-center mb-2">
                  <div className="me-2">
                    {renderStars(averageRating)}
                  </div>
                  <span className="text-muted">
                    {averageRating.toFixed(1)} ({product.reviews.length} avis)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Reviews section */}
        <div className="card-footer bg-white p-4">
          <h2 className="fs-4 fw-semibold mb-3">Avis des clients</h2>
          
          {product.reviews.length === 0 ? (
            <p className="text-muted">Aucun avis pour le moment.</p>
          ) : (
            <div>
              {product.reviews.map(review => (
                <div key={review.id} className="border-bottom pb-3 mb-3">
                  <div className="d-flex align-items-center mb-2">
                    <span className="fw-medium me-2">{review.username}</span>
                    <div>
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <p className="text-muted mb-0">{review.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;