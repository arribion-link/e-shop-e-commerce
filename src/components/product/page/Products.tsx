import "./products.css"
import ProductCard from "../card/ProductCard"
const Products = () => {
  return (
    <div className="product-container">
      <div className="product-grid">
        <ProductCard />
        <ProductCard />
        <ProductCard />

        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default Products
