interface ProductCardProps {
    item: { id: number; name: string };
  }
  
  const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
    return <li>{item.name}</li>;
  };
  
export default ProductCard
