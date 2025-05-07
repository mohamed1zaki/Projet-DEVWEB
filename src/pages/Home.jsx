import React, { useState } from 'react';
import BurgerGrid from '../components/BurgerGrid';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="container py-4">
      {/* Welcome message */}
      <h1 className='text-success fw-bold mb-4'>Bienvenu!</h1>
      
      {/* Search bar */}
      <div className="row justify-content-center mb-5">
        <div className="col-md-6">
          <div className="input-group">
            <span className="input-group-text bg-warning text-dark">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control border-warning"
              placeholder="Rechercher un burger..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
      
      {/* Products grid with filtering */}
      <BurgerGrid searchTerm={searchTerm} />
    </div>
  );
};

export default Home;