import "./recommend.css"
import { FaRightLong, FaLeftLong } from "react-icons/fa6"
// import React from 'react'

const Recommend = () => {
  return (
      <section className="recommend-section">
          <div>
            <h1>Explore our recommendations</h1>
              <div>
                  <FaLeftLong />
                  <FaRightLong />
              </div>  
          </div>
    </section>
  )
}

export default Recommend
