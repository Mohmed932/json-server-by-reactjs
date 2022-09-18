import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ cart, setsearch }) => {
  return (
    <div className="Navbar">
      <h1>ecommerce</h1>
      <div className="search">
        <input type="text" onChange={(e) => setsearch(e.target.value)} />
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="cartdatales">
        <Link to="/cart">
          <i class="fa-solid fa-cart-shopping"></i>
        </Link>
        <h5 className={cart.length === 0 ? "hidden" : "showh"}>
          {cart.length}
        </h5>
      </div>
    </div>
  );
};

export default Navbar;
