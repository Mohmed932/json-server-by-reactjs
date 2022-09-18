/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProdectDetales.css";

const ProdectDetales = () => {
  const [datales, setdatales] = useState([]);
  const params = useParams();
  const path = params.id;
  useEffect(() => {
    const single = async () => {
      fetch(`http://localhost:5000/prodect/${path}`)
        .then((res) => res.json())
        .then((json) => setdatales(json));
    };
    single();
  });
  return (
    <div className="single">
      <div className="single-prodect" key={datales.id}>
        <img src={datales.image} />
        <div className="all-prodects">
          <div className="single-detales">
            <h4>price:{datales.price}</h4>
            <h4>{datales.category}</h4>
            <p>{datales.description}</p>
          </div>
          <button className="buy">buy</button>
        </div>
      </div>
    </div>
  );
};

export default ProdectDetales;
