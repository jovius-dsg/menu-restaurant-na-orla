import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="restaurant-header">
      <div className="header-content">
        <div className="logo-container">
          <img
            src="src\img\logo-Na-Orla-Site.png"
            alt="Na Orla Bar e Restaurante"
            className="logo-image"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;