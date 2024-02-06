import React from 'react'

const Footer = () => {
  return (
    <div className="footer container-fluid mt-5 bg-black p-lg-3 p-2" style={{ color:"rgba(211, 211, 211, 0.521)" }} data-aos="fade-up">
            <div className="container">
                <div className="row mt-3">
                    <div className="col-lg-3">
                       <img src="images/logo.png" width="250" height="40" alt=""/>
                       <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quasi quas nulla! Possimus quia, eum assumenda quisquam similique sunt quos.</p>
                        <a className="btn btn-outline-light rounded-circle"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                        <a className="btn btn-outline-light rounded-circle"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                        <a className="btn btn-outline-light rounded-circle"><i className="fa fa-youtube" aria-hidden="true"></i></a>
                        <a className="btn btn-outline-light rounded-circle"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                    </div>
                    <div className="col-lg-3 mt-2">
                        <h5 className="text-white">Address</h5>
                        <ul className="list-unstyled">
                            <li><i className="fa fa-map-marker" aria-hidden="true"> 123 Street, New York, USA</i></li>
                            <li><i className="fa fa-phone" aria-hidden="true"></i> +012 345 67890</li>
                            <li><i className="fa fa-envelope" aria-hidden="true"></i> info@example.com</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 mt-2">
                        <h5 className="text-white">Quick Links</h5>
                        <ul className="list-unstyled" >
                            <li><a href="" className="text-decoration-none" style={{ color:"rgba(211, 211, 211, 0.521)" }}> About Us</a></li>
                            <li><a href="" className="text-decoration-none" style={{ color:"rgba(211, 211, 211, 0.521)" }}> Contact Us</a></li>
                            <li><a href="" className="text-decoration-none" style={{ color:"rgba(211, 211, 211, 0.521)" }}> Services</a></li>
                            <li><a href="" className="text-decoration-none" style={{ color:"rgba(211, 211, 211, 0.521)" }}> Term & Condition</a></li>
                            <li><a href="" className="text-decoration-none" style={{ color:"rgba(211, 211, 211, 0.521)" }}> Support</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 mt-2">
                        <h5 className="text-white">Newsletter</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, rerum?</p>
                        <input type="text" placeholder="Your Email" className="form-control rounded-0"/>
                        <button type="button" name="" id="" className="btn btn-primary col-12 mt-3">Subscribe</button>
                    </div>
                </div>
            </div>
            <hr/>
            <p className="text-center text-white">Copyright &copy; VegeFoods. All Rights Reserved</p>
        </div>
  )
}

export default Footer