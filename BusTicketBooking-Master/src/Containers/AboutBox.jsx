import React from "react";
import { motion } from "framer-motion";
const AboutBox = (props) => {
  console.info(props);
  const { img, title, description } = props.item;
  return (
    <>
      <div className="col-md-4">
        <motion.div
          className="card badge-danger text-white"
          style={{ height: "300px" }}
          whileHover={{y:-4 ,transition:{duration:0.1},boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} data-aos="flip-up" data-aos-duration="1000"
        >
          <div className="text-center" style={{ height: "150px" }}>
            <img src={require(`../Assets/Images/${img}`)} className="p-4" />
          </div>
          <div className="mt-3 text-center">
            <h5>{title}</h5>
          </div>
          <div className="mt-2 text-center">
            <blockquote>{description}</blockquote>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AboutBox;
