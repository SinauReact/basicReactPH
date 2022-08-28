import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import YouTubeComp from "../../component/YouTubeComp/YouTubeComp";
import BlogPost from "../BlogPost/BlogPost";
import Product from "../Product/Product";
import "./Home.css";

const Home = () => {
  return (
    <>
      <BrowserRouter>
        <div className="navigation">
          <Link to="/">Blog Post</Link>
          <Link to="/product">Product</Link>
        </div>
        <Routes>
          <Route></Route>
          <Route path="/" element={<BlogPost />} />
          <Route path="product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Home;
