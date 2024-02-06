import React from 'react'
import {motion} from "framer-motion"
import farmer_veggie from "./images/farmer_vegietable.jpeg"
const About = () => {
  return (
    <div className="container about">
            <div className="row mt-5">
                <motion.div className="col-lg-6 p-lg-4 gap-2" style={{ height: "450px",width:"500px" }} whileHover={{y:7}}>
                    
                    <img src={farmer_veggie} className="w-100 h-100 hero-img" alt="Nurturing Environment" data-aos="fade-left"/>
                </motion.div>
                <div className="col-lg-6 d-lg-flex align-items-center p-3">
                    <div className="content" data-aos="fade-right">
                    <h3>Nurturing Health Through Nature</h3>
                    <p>At VegeFoods, we are passionate about bringing you the freshest and healthiest food and vegetables to nourish your body and delight your taste buds. Our mission is to provide a seamless and enjoyable shopping experience that promotes a sustainable and healthy lifestyle. With a commitment to quality, freshness, and customer satisfaction, we strive to be your go-to destination for all your organic food needs.</p>
                    <ul>
                        <li>Farm-to-Table Freshness</li>
                        <li>Wide Range of Organic Offerings</li>
                        <li>Convenience at Your Fingertips</li>
                    </ul>
                    <button type="button" className="btn btn-primary hero-btn">Read More</button>
                </div>
                </div>
            </div>
        </div>
  )
}

export default About