import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <nav className="navbar bg-success shadow">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/" className="navbar-brand fw-bold text-white">Shanty Fastfood</Link>

        <div className="d-flex gap-4">
          <Link to="/" className="nav-link text-white">
            Accueil
          </Link>

          <Link to="/cart" className="nav-link text-white position-relative">
            <i className="bi bi-cart"></i>
            {cartCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartCount}
                
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
