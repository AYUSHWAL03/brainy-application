import React from "react";
import { motion } from "framer-motion";
const Offer = (props) => {
  return (
    <div
      className="container-fluid mt-5 p-4"
      style={{ backgroundColor: "rgba(237, 234, 234, 0.848)!important" }}
    >
      <div className="container offers">
        <div>
          {props.condition && (
            <div className="content text-center">
              <h3>Offers</h3>
              <i>
                We believe in building long-term relationships based on trust,
                transparency, and reliability
              </i>
            </div>
          )}
        </div>
        <div className="row mt-4">
          
          <div className="col-lg-4">
            <motion.div
              className="card border-0 mt-5"
              style={{ backgroundColor: "grey" }} 
              data-aos="flip-up"
              whileHover={{y:-7,transition:{duration:0.1}}}
            >
              <div
                className="card-img bg-white"
                style={{ width: "100%", height: "250px" }}
              >
                <img
                  className="card-img-top"
                  src="images/Car-Download-PNG.png"
                  alt="Card image cap"
                  width="100%"
                />
              </div>
              <div className="card-body p-3  bg-white">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <a
                href="#"
                className="btn btn-block bg-white"
                style={{ borderRadius: "0", marginTop: "1px" }}
              >
                Go somewhere
              </a>
            </motion.div>
          </div>
          
          <div className="col-lg-4">
            <motion.div
              className="card border-0 mt-5"
              style={{ backgroundColor: "grey" }}
              data-aos="flip-up"
              data-aos-duration="500"
              whileHover={{y:-7,transition:{duration:0.1}}}
            >
              <div
                className="card-img bg-white"
                style={{ width: "100%", height: "250px" }}
              >
                <img
                  className="card-img-top"
                  src="images/sports-cars.png"
                  alt="Card image cap"
                  width="100%"
                />
              </div>
              <div className="card-body p-3  bg-white">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <a
                href="#"
                className="btn btn-block bg-white"
                style={{ borderRadius: "0", marginTop: "1px" }}
              >
                Go somewhere
              </a>
            </motion.div>
          </div>

          <div className="col-lg-4">
            <motion.div
              className="card border-0 mt-5"
              style={{ backgroundColor: "grey" }}
              data-aos="flip-up"
              data-aos-duration="1000"
              whileHover={{y:-7,transition:{duration:0.1}}}
            >
              <div
                className="card-img bg-white"
                style={{ width: "100%", height: "250px" }}
              >
                <img
                  className="card-img-top"
                  src="images/ford-edge-orange.png"
                  alt="Card image cap"
                  width="100%"
                />
              </div>
              <div className="card-body p-3  bg-white">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <a
                href="#"
                className="btn btn-block bg-white"
                style={{ borderRadius: "0", marginTop: "1px" }}
              >
                Go somewhere
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
