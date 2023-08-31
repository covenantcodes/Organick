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

      <div className="product_price_rate_container">
            <div className="price">
                <div className="slated">
                    <s>$20.0</s>
                </div>

                <div className="actual_price">
                    $13.0
                </div>
            </div>

            <div className="rating">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </div>
      </div>
    </div>
  );
};

export default ProductCard;
