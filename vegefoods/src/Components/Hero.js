import React from 'react'

const Hero = (props) => {
  return (
    <div class="hero-section container-fluid d-flex align-items-center" style={{ height:"45vh" }}>
            <div class="hero text-white">
            <h1 style={{ fontSize: "3rem",color:"#BCA37F" }} class="mt-5">{props.title}</h1>
            <p style={{ color:"#BCA37F" }}>Home / Pages / {props.title}</p>
            </div>
</div>
  )
}

export default Hero