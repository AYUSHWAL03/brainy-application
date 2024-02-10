import React from "react";
import AboutBox from "../Containers/AboutBox";
import { motion } from "framer-motion";
const About = () => {
  const data = [
    {
      img: "benefits.png",
      title: "UNMATCHED BENEFITS",
      description:
        "We take care of your travel beyond ticketing by providing you with innovative and unique benefits.",
    },
    {
      img: "customer_care.png",
      title: "SUPERIOR CUSTOMER SERVICE",
      description:
        "We put our experience and relationships to good use and are available to solve your travel issues.",
    },
    {
      img: "lowest_Fare.png",
      title: "LOWEST PRICES",
      description:
        "We always give you the lowest price with the best partner offers.",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="mainaboutimage" style={{ textAlign: "center" }} data-aos="fade-up">
          <img src={require(`../Assets/Images/about image.png`)} />
        </div>

        <div className="row mt-4" data-aos="flip-up" data-aos-duration="1000">
          {data.map((item) => (
            <AboutBox item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
