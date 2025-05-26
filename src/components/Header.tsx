import React from 'react';
import * as images from "../data/img.ts";

const Header: React.FC = () => {
  return (
    <header className="restaurant-header">
      <div className="header-content">
        <div className="logo-container">
          <img
            src={images.logoNaOrlaSite}
            alt="Na Orla Bar e Restaurante"
            className="logo-image"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;