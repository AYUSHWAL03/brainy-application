import React from "react";
import blog1 from "./images/blog1.jpeg"
import blog2 from "./images/blog2.jpeg"
import blog3 from "./images/blog3.jpg"
import { motion } from "framer-motion";
const Blog = (props) => {
  return (
    <div className="blog container mt-5">
      {props.condition ? (
        <> </>
      ) : (
        <div data-aos="fade-up">
          <h1 className="text-center">Latest Blog</h1>
          <p className="text-center">
            Lorem ipsum dolor, sit amet consectetur adipa rerum deserunt illum
            natus doloribus possimus laborum ratione?
          </p>
        </div>
      )}

      <div className="row mt-3">
        <motion.div whileHover={{y:-7}}div className="col-lg-4 mt-3" data-aos="flip-down">
          <div className="image" style={{ width: "100%", height: "300px" }}>
            <img
              src={blog1}
              alt="blog1 image"
              className="w-100 h-100"
            />
          </div>
          <div className="content p-3 bg-dark-subtle">
            <h5>How to cultivate organic fruits and vegetables in own firm</h5>
            <hr />
            <i className="fa fa-user" aria-hidden="true">
              {" "}
              Admin
            </i>
            &nbsp;&nbsp;
            <i className="fa fa-calendar" aria-hidden="true">
              {" "}
              01 Jan | 2021
            </i>
          </div>
        </motion.div>
        <motion.div whileHover={{y:-7}} className="col-lg-4 mt-3" data-aos="flip-down">
          <div className="image" style={{ width: "100%", height: "300px" }}>
            <img
              src={blog2}
              alt="blog2 image"
              className="w-100 h-100"
            />
          </div>
          <div className="content p-3 bg-dark-subtle">
            <h5>How to cultivate organic fruits and vegetables in own firm</h5>
            <hr />
            <i className="fa fa-user" aria-hidden="true">
              {" "}
              Admin
            </i>
            &nbsp;&nbsp;
            <i className="fa fa-calendar" aria-hidden="true">
              {" "}
              01 Jan | 2021
            </i>
          </div>
        </motion.div>
        <motion.div whileHover={{y:-7}} className="col-lg-4 mt-3" data-aos="flip-down">
          <div className="image" style={{ width: "100%", height: "300px" }}>
            <img
              src={blog3}
              alt="blog3 image"
              className="w-100 h-100"
            />
          </div>
          <div className="content p-3 bg-dark-subtle">
            <h5>How to cultivate organic fruits and vegetables in own firm</h5>
            <hr />
            <i className="fa fa-user" aria-hidden="true">
              {" "}
              Admin
            </i>
            &nbsp;&nbsp;
            <i className="fa fa-calendar" aria-hidden="true">
              {" "}
              01 Jan | 2021
            </i>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
