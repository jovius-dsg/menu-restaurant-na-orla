import React from 'react';
import { MenuItem as MenuItemType } from '../types/menuTypes';

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const {
    name,
    image,
    price,
    priceType,
    description,
    servingInfo,
    category
  } = item;

  const formatPrice = (price: number) => {
    return `R$${price.toFixed(2).replace('.', ',')}`;
  };

  const capitalizeWords = (text: string) => {
    return text
      .toLowerCase()
      .split(' ')
      .map(word => {
        if (word.length === 0) return '';
        return word[0].toUpperCase() + word.slice(1);
      })
      .join(' ');
  };

  return (
    <div className="menu-item">
      <div className="menu-item-image-container">
        <img
          src={image}
          alt={name}
          className="menu-item-image"
        />
        <div className="category-tag menu-item-category">
          {capitalizeWords(name)}
        </div>
      </div>

      <div className="menu-item-details">
        {priceType && (
          <div className="price-type">
            {priceType} {formatPrice(price)}
          </div>
        )}

        {!priceType && (
          <div className="price">
            {formatPrice(price)}
          </div>
        )}

        {servingInfo && (
          <div className="serving-info">
            {servingInfo}
          </div>
        )}

        {description && (
          <div className="item-description">
            {description}
          </div>
        )}

        {item.sides && (
          <div className="item-sides">
            {item.sides}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItem;