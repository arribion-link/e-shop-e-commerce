import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import "./header.css"
const Header = () => {
  return (
    <>
      <header>
        <h1>E-SHOP</h1>
        <nav>
          <ul>
            <li>
              <Link to="#">Products</Link>
            </li>
            <li>
              <Link to="#">Shop</Link>
            </li>
            <li>
              <Link to="#">Blog</Link>
            </li>
          </ul>
        </nav>
        <div>
            <FaMagnifyingGlass />
            <MdOutlineShoppingCart />
            <img src="" alt="profile" />
        </div>
      </header>
    </>
  );
};

export default Header;
