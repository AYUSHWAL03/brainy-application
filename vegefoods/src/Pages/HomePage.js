import React from "react";
import About from "../Components/About";
import Features from "../Components/Features";
import Product from "../Components/Product";
import Visit from "../Components/Visit";
import Customer from "../Components/Customer";
import Blog from "../Components/Blog";
import { motion } from "framer-motion";
const HomePage = () => {
  return (
    <>
      <div className="hero-section container-fluid d-flex align-items-center">
        <div className="hero ">
          <h1
            style={{ fontSize: "4rem;", color: "#BCA37F"}}
            data-aos="fade-left"
          >
            Natural Food is Always Healthy
          </h1>
          <div className="d-flex">
            <a href="/product">
              <motion.div whileHover={{ scale: 1.01 }}>
                <button
                  type="button"
                  className="btn m-2 py-3 px-5 hero-btn"
                  style={{ borderRadius: "30px", backgroundColor: "#f9d64b" }}
                  data-aos="fade-left"
                >
                  Products
                </button>
              </motion.div>
            </a>
            <a href="/feature">
              <motion.div whileHover={{ scale: 1.01 }}>
                <button
                  type="button"
                  className="btn m-2 py-3 px-5 hero-btn"
                  style={{ borderRadius: "30px", backgroundColor: "#4b93f9" }}
                  data-aos="fade-left"
                >
                  Features
                </button>
              </motion.div>
            </a>
          </div>
        </div>
      </div>

      <About />
      <Features />
      <Product />
      <Visit />
      <Customer />
      <Blog />
    </>
  );
};

export default HomePage;
