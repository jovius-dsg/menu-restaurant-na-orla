import React from 'react';
import MenuItem from './MenuItem';
import { MenuItem as MenuItemType } from '../types/menuTypes';

interface MenuSectionProps {
  title: string;
  items: MenuItemType[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, items }) => {
  return (
    <section className="menu-section">
      <h2 className="section-title">{title}</h2>
      
      <div className="menu-items-grid">
        {items.map((item) => (
          <MenuItem 
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;