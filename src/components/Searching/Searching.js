/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Searching.css";

const Searching = ({ search }) => {
  const [data, setdata] = useState([]);
  const [show, setshow] = useState(false);
  useEffect(() => {
    const fetchdata = async () => {
      fetch("http://localhost:5000/prodect")
        .then((res) => res.json())
        .then((json) => setdata(json));
    };
    fetchdata();
  }, [data]);
  const handelshow = () => {
    setshow(!show);
    search.value = "";
  };
  return (
    <div className="Searching">
      {data
        .filter((item) => {
          if (search === "") {
            return "";
          } else if (item.title.includes(search)) {
            return item;
          }
        })
        .map(({ id, image, title }) => (
          <div className={show ? "show" : "content"} key={id}>
            <img src={image} />
            <Link to={`/ProdectDetales/${id}`} onClick={handelshow}>
              <span>{title}</span>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Searching;

//   if (search === "") {
//     return item;
//   } else {
//     item.category.includes(search);
//   }
