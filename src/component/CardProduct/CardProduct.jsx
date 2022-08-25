import React, { useState } from "react";

const CardProduct = ({ onCounterChange }) => {
  const [order, setOrder] = useState(0);

  const handleMinus = () => {
    if (order > 0) {
      setOrder(order - 1);
    } else {
      setOrder(0);
    }
  };

  const handlePlus = () => {
    setOrder(order + 1);
  };
  onCounterChange(order);

  return (
    <>
      <div className="card">
        <div className="img-thumb-prod">
          <img src={"https://source.unsplash.com/200x200?chicken"} alt="" />
        </div>
        <p className="product-title">Daging Ayam Berbumbu</p>
        <p className="product-price">Rp 410, 000</p>
        <div className="counter">
          <button className="minus" onClick={handleMinus}>
            -
          </button>
          <input type="text" value={order} />
          <button className="plus " onClick={handlePlus}>
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default CardProduct;
