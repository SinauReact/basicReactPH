import React, { useState } from "react";
import CardProduct from "../../component/CardProduct/CardProduct";
import "./Product.css";

const Product = () => {
  const [order, setOrder] = useState(0);

  function handleCounterChange(newOrder) {
    setOrder(newOrder);
  }

  return (
    <>
      <p>halaman Product</p>
      <hr />
      <div className="header">
        <div className="logo">
          <img src={"https://source.unsplash.com/20x20?logo"} alt="" />
        </div>
        <div className="troley">
          <img src={"https://source.unsplash.com/10x10?logo-troley"} alt="" />
          <div className="count">{order}</div>
        </div>
      </div>
      <CardProduct
        onCounterChange={(newOrder) => handleCounterChange(newOrder)}
      />
    </>
  );
};

export default Product;
