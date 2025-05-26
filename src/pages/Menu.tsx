import React from 'react';
import Header from '../components/Header';
import MenuSection from '../components/MenuSection';
import { menuData } from '../data/menuData';
import Footer from '../components/Footer';

const Menu: React.FC = () => {
  return (
    <div className="menu-container">
      <Header />
      <div className="menu-content">
        {menuData.map((section) => (
          <MenuSection 
            key={section.id}
            title={section.title}
            items={section.items}
          />
        ))}
      </div>

      <Footer/>
    </div>
  );
};

export default Menu;