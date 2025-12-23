import "./recommend.css"
import { FaRightLong, FaLeftLong } from "react-icons/fa6"
// import React from 'react'
import ProductCard from "../product/card/ProductCard"
const Recommend = () => {
  return (
    <section className="recommend-section">
      <div className="recommend-header">
        <h1>Explore our recommendations</h1>
        <div>
          <FaLeftLong />
          <FaRightLong />
        </div>
      </div>
      <div className="recommend-grid">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}

export default Recommend
