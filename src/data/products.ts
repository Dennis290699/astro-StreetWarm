export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  discount?: number;
  image: string;
  tag?: 'New' | 'Sale';
  colors?: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 's1',
    tag: 'New',
    name: 'Cartoon Jacked',
    category: 'Accessory',
    price: 14.99,
    discount: 29.99,
    image: '/assets/productos/product-1.png',
    colors: ['#D2B48C', '#2C3E50', '#7F8C8D']
  },
  {
    id: 's2',
    tag: 'Sale',
    name: 'Clothing Hat Coat',
    category: 'Accessory',
    price: 11.99,
    discount: 21.99,
    image: '/assets/productos/product-2.png',
    colors: ['#000000', '#34495E']
  },
  {
    id: 's3',
    tag: 'Sale',
    name: 'Fur Jacked',
    category: 'Accessory',
    price: 5.99,
    discount: 12.99,
    image: '/assets/productos/product-3.png'
  },
  {
    id: 's4',
    tag: 'New',
    name: 'Printed Tshirt',
    category: 'Clothing',
    price: 13.99,
    discount: 25.99,
    image: '/assets/productos/product-4.png',
    colors: ['#FFFFFF', '#E74C3C', '#2980B9']
  },
  {
    id: 's5',
    tag: 'New',
    name: 'Windbreaker Jacked',
    category: 'Accessory',
    price: 7.99,
    discount: 14.99,
    image: '/assets/productos/product-5.png'
  },
  {
    id: 's6',
    tag: 'Sale',
    name: 'Adidas tracksuit',
    category: 'Accessory',
    price: 14.99,
    discount: 29.99,
    image: '/assets/productos/product-6.png'
  },
  // New Arrivals
  { 
    id: 'n1', 
    name: 'Windbreaker Jacked', 
    category: 'Accessory', 
    price: 14.99, 
    discount: 29.99, 
    image: '/assets/productos/new-1.png',
    tag: 'New'
  },
  { 
    id: 'n2', 
    name: 'Air Jordan Zipper', 
    category: 'Accessory', 
    price: 11.99, 
    discount: 21.99, 
    image: '/assets/productos/new-2.png',
    tag: 'New'
  },
  { 
    id: 'n3', 
    name: 'Fur Jacked', 
    category: 'Accessory', 
    price: 4.99, 
    discount: 9.99, 
    image: '/assets/productos/new-3.png',
    tag: 'New'
  },
  { 
    id: 'n4', 
    name: 'Fleece Jacked', 
    category: 'Accessory', 
    price: 24.99, 
    discount: 49.99, 
    image: '/assets/productos/new-4.png',
    tag: 'New'
  },
  { 
    id: 'n5', 
    name: 'Nike Hoodie', 
    category: 'Accessory', 
    price: 7.99, 
    discount: 14.99, 
    image: '/assets/productos/new-5.png',
    tag: 'New'
  },
  { 
    id: 'n6', 
    name: 'Fleece Jacked', 
    category: 'Accessory', 
    price: 5.99, 
    discount: 12.99, 
    image: '/assets/productos/new-6.png',
    tag: 'New'
  },
];
