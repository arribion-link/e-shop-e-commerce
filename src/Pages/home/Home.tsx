
import "./home.css"
import Header from "../../components/header/Header"
import Sidebar from "../../components/sidebar/Sidebar"
import Products from "../../components/product/page/Products"
import Recommend from "../../components/recommendation/Recommend"
import Banner from "../../components/banner/Banner"
import Footer from "../../components/footer/Footer"
const Home = () => {
  return (
    <>
    <Header/>
      <section className="hero-section">
        
          <h1 className="hero-text">Shop</h1>
      
      </section>
        <div className="main-container min-h-100vh">
            <Sidebar />
            <Products/>
          </div>
          <Recommend />
          <Banner />
          <Footer/>
    </>
  )
}

export default Home
