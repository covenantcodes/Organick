import React from 'react';
import ProductCard from '../src/components/ProductCard';
import './ProductCard.css'

interface ProductItemProps {
  data: { id: number; name: string }[];
}

const ProductItem: React.FC<ProductItemProps> = ({ data }) => {
  return (
    <ul className='product_main_container'>
      {data.map(item => (
        <ProductCard key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ProductItem; 