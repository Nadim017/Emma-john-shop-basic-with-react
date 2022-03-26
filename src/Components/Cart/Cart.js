import React from "react";
import Product from "./../Product/Product";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;
  let total = cart.reduce((products, product) => products + product.price, 0);

  let shipping = 0;
  if (total < 35 && total >= 15) {
    shipping = 4.99;
  } else if (total > 0 && total < 15) {
    shipping = 12.99;
  } else if (total > 35) {
    shipping = 0;
  }
  const tax = (total / 10).toFixed(2);
  const grandTotal = (total + shipping + Number(tax)).toFixed(2);
  const formatNumber = (num) => {
    const precision = num.toFixed(2);
    return Number(precision);
  };
  return (
    <>
      <div className="cart-area">
        <div className="text-area">
          <h4>Order Summary :</h4>
          <p>Items Ordered :{cart.length}</p>
          <p>
            Product Price: <bold>{formatNumber(total)}</bold>$
          </p>
          <p>
            <small>
              Shipping Cost :<bold>{shipping}</bold>$
            </small>
          </p>
          <p>
            <small>Tax: {tax}$</small>
          </p>
          <p>Total Price :{grandTotal}$</p>
          <button className="btn">Review Order</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
