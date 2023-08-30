import "../ProductCard.css";

interface ProductCardProps {
  item: { id: number; name: string };
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  return (
    <div className="product_box">
      <div className="category">Vegetable</div>
      <div className="product_image_container">
        <img
          src="../../img/brocolli(1).png"
          alt=""
          className="product_image"
        />
      </div>
      <div className="product_name">
            Calabrese Broccoli
      </div>

      <div className="pro">

      </div>
    </div>
  );
};

export default ProductCard;
