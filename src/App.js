import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AppleMobile from "./components/AppleMobile/AppleMobile";
import ProdectDetales from "./pages/ProdectDetales/ProdectDetales";
import Cart from "./pages/Cart/Cart";
import Searching from "./components/Searching/Searching";

const App = () => {
  const [dataing, setdataing] = useState([]);
  const handeladd = ({ id, image, price, category }) => {
    fetch("http://localhost:2000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        price,
        image,
        category,
      }),
    });
  };
  const handeldelete = ({ id }) => {
    fetch(`http://localhost:2000/cart/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };
  const [cart, setcart] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      fetch("http://localhost:2000/cart")
        .then((res) => res.json())
        .then((json) => setcart(json));
    };
    fetchdata();
  });
  const [search, setsearch] = useState();
  return (
    <div className="App">
      <Router>
        <Navbar cart={cart} setsearch={setsearch} />
        <Searching search={search} className="stylesearch" />
        <Routes>
          <Route
            path="/"
            element={
              <AppleMobile
                setdataing={setdataing}
                dataing={dataing}
                handeladd={handeladd}
              />
            }
          />
          <Route path="/ProdectDetales/:id" element={<ProdectDetales />} />
          <Route
            path="/cart"
            element={<Cart handeldelete={handeldelete} cart={cart} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
