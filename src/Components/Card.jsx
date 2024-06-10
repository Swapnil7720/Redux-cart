import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const Card = ({ image, title }) => {
  
  const dispatch = useDispatch()
  return (
    <div className="col-3">
      <div className="card" style={{maxWidth: '18rem', "height": '200px'}}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary" 
          onClick={()=> dispatch( addToCart({image, title}) )}
          >
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;