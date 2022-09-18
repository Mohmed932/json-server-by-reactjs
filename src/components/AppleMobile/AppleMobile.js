/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./AppleMobile.css";
const AppleMobile = ({ dataing, setdataing, handeladd }) => {
  useEffect(() => {
    const fetchdata = async () => {
      fetch("http://localhost:5000/prodect")
        .then((res) => res.json())
        .then((json) => setdataing(json));
    };
    fetchdata();
  }, [dataing]);
  return (
    <div className="AppleMobile">
      {dataing.map(({ id, image, price, category }) => (
        <div className="data-prodect" key={id}>
          <img src={image} />
          <div className="prodect-detales">
            <h4>{price}</h4>
            <h4>{category}</h4>
          </div>
          <div className="btn">
            <Link to={`/ProdectDetales/${id}`}>
              <button>buy</button>
            </Link>
            <button onClick={() => handeladd({ id, image, price, category })}>
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppleMobile;
