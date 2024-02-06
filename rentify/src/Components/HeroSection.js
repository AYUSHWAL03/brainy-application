import React from 'react'

const HeroSection = (props) => {
  return (
    <div class="hero-section container-fluid d-flex align-items-center text-center" style={{ height: "40vh" }}>
      <div class="content container pt-5 text-white">
        <h1 style={{ fontSize: "3rem", width: "80%", margin: "0 auto",textShadow: "#FC0 1px 0 10px" }}>{props.title}</h1>
      </div>
    </div>
  )
}

export default HeroSection;