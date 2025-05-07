import React from 'react';
import ItemCard from './ItemCard';
import products from '../data/sata';

const BurgerGrid = ({ searchTerm = '' }) => {
  // Filter products based on search term
  const filteredProducts = searchTerm 
    ? products.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products;

  return (
    <div id='menu' className="py-4">
      <h2 className="fs-2 fw-bold mb-4">Nos Produits</h2>

      {filteredProducts.length === 0 ? (
        <p className="text-center py-4 text-muted">Aucun produit trouvé </p>
      ) : (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {filteredProducts.map(product => (
            <div className="col" key={product.id}>
              <ItemCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BurgerGrid;