import React from "react";
import {motion} from "framer-motion"
const Testimonials = () => {
  return (
    
    <div className="container  mt-5">
      
      <div className="content p-3 text-center text-white" data-aos="fade-up">
        <h3>Testimonials</h3>
        <i>Lorem ipsum dolor sit amet consectetur.</i>
      </div>
      <div className="testimonials">
        <div className="row mt-5">
          <motion.div className="col-lg-3 col-md-4 col-sm-12 mt-5" data-aos="flip-up" whileHover={{y:-7,transition:{duration:0.1}}}>
            <div
              className="position-relative mb-3 "
              style={{ width: "100%", height: "270px" }}
            >
              <img
                src="images/team-1-1.jpg"
                alt=""
                width="100%"
                
                className="position-absolute testimonial"
              />
              <div className="content p-3">
                <h4>John Doe</h4>
                <i>Lorem ipsum dolor sit amet consectetur.</i>
              </div>
            </div>
          </motion.div>

          <motion.div className="col-lg-3 col-md-4 col-sm-12 mt-5" data-aos="flip-up" data-aos-duration="1000" whileHover={{y:-7,transition:{duration:0.1}}}>
            <div
              className="position-relative mb-3 "
              style={{ width: "100%", height: "270px" }}
            >
              <img
                src="images/team-1-2.jpg"
                alt=""
                width="100%"
                className="position-absolute testimonial"
              />
              <div className="content p-3">
                <h4>John Doe</h4>
                <i>Lorem ipsum dolor sit amet consectetur.</i>
              </div>
            </div>
          </motion.div>

          <motion.div className="col-lg-3 col-md-4  col-sm-12 mt-5" data-aos="flip-up" data-aos-duration="1500" whileHover={{y:-7,transition:{duration:0.1}}}>
            <div
              className="position-relative mb-3 "
              style={{ width: "100%", height: "270px" }}
            >
              <img
                src="images/team-1-3.jpg"
                alt=""
                width="100%"
                className="position-absolute testimonial"
              />
              <div className="content p-3">
                <h4>John Doe</h4>
                <i>Lorem ipsum dolor sit amet consectetur.</i>
              </div>
            </div>
          </motion.div>

          <motion.div className="col-lg-3 col-md-4 col-sm-12 mt-5" data-aos="flip-up" data-aos-duration="2000" whileHover={{y:-7,transition:{duration:0.1}}}>
            <div
              className="position-relative mb-3 "
              style={{ width: "100%", height: "270px" }}
            >
              <img
                src="images/team-1-6.jpg"
                alt=""
                width="100%"
                className="position-absolute testimonial"
              />
              <div className="content p-3 ">
                <h4>John Doe</h4>
                <i>Lorem ipsum dolor sit amet consectetur.</i>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
