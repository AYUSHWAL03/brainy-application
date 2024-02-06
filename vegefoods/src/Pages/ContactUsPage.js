import React from 'react'
import Hero from '../Components/Hero'

const ContactUsPage = () => {
  return (
    <div>
        <Hero title="Contact"/>
        <div className="contact container mt-5">
            <h1 className="text-center">Contact Us</h1>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, qui?</p>
            <div className="row mt-5">
                <div className="col-lg-5 mt-3 bg-info p-lg-5" style={{ lineHeight:"2.5" }}>
                    <h5>Call Us</h5>
                    <i className=" mt-2 fa fa-phone" aria-hidden="true">  +01245678569</i>
                    <h5>Email Us</h5>
                    <i className=" mt-2 fa fa-envelope" aria-hidden="true">  info@example.com</i>
                    <h5>Office Address</h5>
                    <i className=" mt-2 fa fa-map-marker" aria-hidden="true">  123 Street, New York, USA</i>
                    <h5>Follow Us</h5>
                        <a className="btn btn-outline-light rounded-circle"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                        <a className="btn btn-outline-light rounded-circle"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                        <a className="btn btn-outline-light rounded-circle"><i className="fa fa-youtube" aria-hidden="true"></i></a>
                        <a className="btn btn-outline-light rounded-circle"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                </div>
                <div className="col-lg-7 mt-3 p-lg-5">
                    <p>We would love to hear from you! Whether you have a question, feedback, or simply want to say hello, our friendly team is here to assist you.</p>
                    <div className="row mt-3">
                        <div className="col-lg-6 mt-3">
                            <input type="text" placeholder="Your Name" className="form-control"/>
                        </div>
                        <div className="col-lg-6 mt-3">
                            <input type="email" placeholder="Your Email" className="form-control"/>
                        </div>
                        <div className="col-lg-12 mt-3">
                            <input type="text" placeholder="Subject" className="form-control"/>
                        </div>
                        <div className="col-lg-12 mt-3">
                            <textarea name="" id="" rows="10" placeholder="Your Message" className="form-control w-100"></textarea>
                        </div>
                        <div className="col-lg-3 mt-3">
                            <button type="button" className="btn btn-primary">Send Message</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUsPage