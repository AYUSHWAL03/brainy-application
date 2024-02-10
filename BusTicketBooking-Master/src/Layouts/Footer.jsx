import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-danger text-white border border-dark">
        <div className="row row-cols-lg-4 justify-content-center row-cols-md-2 row-cols-sm-2 row-cols-2 text-center">

          <div className="col p-2 ">
            &emsp;&emsp; &#169;Tours & Travels &emsp;
          </div>
          
            &emsp;
            <i className="col p-3 fa fa-envelope" aria-hidden="true">
              &emsp;&emsp;toursandtravels@gmail.com &emsp;
            </i>
            <br />
            &emsp;
            <i className="col p-3 fa fa-phone" aria-hidden="true">
              &emsp;&emsp;+91 9874563210&emsp;
            </i>
          
        </div>
      </footer>
    </>
  );
};

export default Footer;
