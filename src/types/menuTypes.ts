export interface MenuItem {
  id: string;
  name: string;
  category: string;
  image: string;
  price: number;
  priceType?: string;
  description?: string;
  servingInfo?: string;
  sides?: string;
}

export interface MenuSection {
  id: string;
  title: string;
  items: MenuItem[];
}