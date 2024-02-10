import React from "react";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <>
      <div className="container h-100 mb-4">
        <div className="card bg-danger col-lg-6 col-10 col-sm-10 ml-auto mr-auto p-0 pb-2 pr-2 pl-2 m-0">
          <div className="card-header bg-white text-danger m-0">
            <h1 className="login-head">Contact US</h1>
          </div>
          {/* <div className="card-body"></div> */}

          <form action="">
            <div className="row p-3">
              <div className="form-group col-10 ">
                <label className="text-white" for="Name">
                  Name :
                </label>
                <motion.input
                  type="text"
                  className="form-control form-input ml-1"
                  placeholder="Enter Name"
                  id="Name"
                  whileFocus={{width: '400px'}}
                />
              </div>
              <div className="form-group col-10 ">
                <label className="text-white" for="email">
                  Email :
                </label>
                <motion.input
                  type="email"
                  className="form-control form-input ml-1"
                  placeholder="Enter email"
                  id="email"
                  whileFocus={{width: '400px'}}
                />
              </div>
            </div>
            <div className="form-group p-2">
              <label className="text-white" for="Message">
                Message :
              </label>
              <textarea
                className="form-control form-input ml-1"
                placeholder="Enter Message"
                rows="4"
                style={{ border: "1px solid white" }}
              ></textarea>
            </div>
            <div className="form-group p-0 d-flex justify-content-end">
              <motion.button type="submit" className="btn rounded-2 px-3 mr-2" whileHover={{y:-2,scale:1.1,color:'red'}}>
                Contact
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
