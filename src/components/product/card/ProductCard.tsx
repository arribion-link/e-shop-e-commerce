import { FaStar } from "react-icons/fa6";
import "./productCard.css"

const ProductCard = () => {
  return (
    <div className="product-card-container">
      <img src="https://placehold.net/product.svg" alt="" className="product-image" />
      <div>
        <h2>Product Name</h2>
        <div className="price-conatiner">
          <div className="star-container">
          <FaStar color="yellow" />
            <p><span>4.5</span><span>(124k Reviews)</span></p>
          </div>
          <span className="price">
            KES<span>1200</span>
          </span>
        </div>
        <div className="btn-container">
          <button className="cart-btn">Add to Cart</button>
          <button className="buy-btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard
