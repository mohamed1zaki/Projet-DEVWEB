import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container py-5">
        <div className="card shadow text-center p-5">
          <h2 className="mb-4">Votre panier est vide</h2>
          <p className="text-muted mb-4">Vous n'avez pas encore ajouté de produits à votre panier.</p>
          <div>
            <Link to="/" className="btn btn-warning">
              Parcourir les produits
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h1 className="mb-4">Votre Panier</h1>
      
      <div className="card shadow">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th>Produit</th>
                <th className="text-center">Prix unitaire</th>
                <th className="text-center">Quantité</th>
                <th className="text-center">Total</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="me-3 rounded"
                        style={{ width: "60px", height: "60px", objectFit: "cover" }}
                      />
                      <span className="fw-medium">{item.name}</span>
                    </div>
                  </td>
                  <td className="text-center">{item.price} ₫</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <div className="input-group" style={{ width: "120px" }}>
                        <button 
                          onClick={() => decreaseQuantity(item.id)}
                          className="btn btn-outline-secondary"
                        >
                          -
                        </button>
                        <span className="input-group-text bg-light flex-grow-1 text-center">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => increaseQuantity(item.id)}
                          className="btn btn-outline-secondary"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="text-center fw-bold">{item.price * item.quantity} ₫</td>
                  <td className="text-center">
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="btn btn-outline-danger btn-sm"
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Summary and total */}
        <div className="card-footer bg-light">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="fs-5 fw-bold mb-2">
                Total: <span className="text-warning">{getCartTotal()} ₫</span>
              </div>
              <button className="btn btn-warning">
                Passer à la caisse
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;