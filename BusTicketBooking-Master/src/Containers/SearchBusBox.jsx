import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const SearchBusBox = () => {
  return (
    <>
      <motion.div class="card p-2" whileHover={{y:-4 ,transition:{duration:0.1},boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} data-aos="flip-up" data-aos-duration="1000">
        <div class="row">
          <div
            class="imagebus col-4"
            style={{ height: "100px", width: "100px" }}
          >
            <img
              src={require(`../Assets/Images/busimage.jpg`)}
              height="100%"
              width="100%"
            />
          </div>
          <div class="description col-8 text-danger">
            <div class="des text-justify">Form : Ahmedabad To : Rajkot</div>
            <div class="des text-justify">time : 10:00 AM / 03:00 AM</div>
            <div class="book ml-5 mt-2">
              <Link to="/buspage" class=" p-1 text-white bg-danger">
                Book Bus
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SearchBusBox;
