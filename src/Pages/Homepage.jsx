import React, { useState } from "react";
// import Card from 'react-bootstrap/Card';
import Products from "../products.json";
import Card from "../Components/Card";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const Homepage = () => {
  const dispatch = useDispatch();

  // const productQuantity = useState()

  const [productQnty, setProductQnty ] = useState(0)
  

  return (
    <>
      <div className="row justify-content-center mx-auto overflow-hidden">
        {Products.map((item) => {
          return (
            <div className="col-3" key={item.id}>
              <div
                style={{ maxWidth: "18rem", maxHeight: "500px" }}
                className="card mx-auto"
              >
                <img
                  style={{
                    width: "300px",
                    height: "300px",
                    objectFit: "contain",
                  }}
                  src={item.image}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">             
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. {item.quantity}
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => dispatch(addToCart({ item }))}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Homepage;