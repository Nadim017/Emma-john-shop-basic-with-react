import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faCoffee } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  console.log(props);
  const { img, name, seller, price, stock } = props.product;
  return (
    <>
      <div className="product">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="product-text">
          <h4>{name}</h4>
          <br />
          <p>
            <small>by : {seller}</small>
          </p>
          <p>${price}</p>

          <p>only left {stock} in stock,Order Soon </p>
          <button
            onClick={() => props.handleProduct(props.product)}
            className="btn"
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
