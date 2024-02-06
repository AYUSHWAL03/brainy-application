import React from 'react'
import { motion } from 'framer-motion'
const Hero = () => {
  return (
    <div className="hero-section container-fluid d-flex align-items-center">
        <div className="content container mt-5 py-5" data-aos="fade-down">
            <h1 style={{ fontSize: "2.2rem",width: "80%" }} className="ml-lg-5 text-white">
             Discover the Freedom of Wheels<br/>Unleash Your Journey with Premium Cars
            </h1>
            <button type="button" className="btn btn-primary p-3 p-lg-2 border-0 mt-3 ml-lg-5 rounded-2">Contact Us</button>
        </div>
    </div>
  )
}

export default Hero