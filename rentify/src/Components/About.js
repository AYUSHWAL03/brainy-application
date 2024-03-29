import React from 'react'
import { motion } from 'framer-motion'
const About = () => {
  return (
    <div className="about-us container mt-5 mb-5">
      <h3 className="text-center text-white">About us</h3>
        <div className="row">
            <div className="col-lg-7" data-aos="fade-left">
                
                <p className="mt-3 text-white"> At Rentify, we are passionate about providing exceptional car rental services that cater to the diverse needs of our valued customers.</p>
                <p className="mt-3 text-white">Our mission is to make car rental hassle-free, convenient, and affordable for everyone. Whether you are a frequent traveler, a road trip enthusiast, or simply in need of temporary transportation, we have you covered. </p>
                <motion.button type="button" className="btn btn-primary rounded-2" whileTap={{scale:1.03}}>Discover More</motion.button>
              </div>
            <div className="col-lg-1"></div>
            <motion.div className="col-lg-4 mt-5" data-aos="fade-right" whileHover={{y:-7,transition:{duration:0.1}}}>
              <img src="images/car-about.jpg" alt="" width="100%" height="100%"/>
            </motion.div>
            
            
          
        </div>
    </div>
  )
}

export default About