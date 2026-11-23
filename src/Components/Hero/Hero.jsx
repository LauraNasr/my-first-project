import React from 'react'
import './Hero.css'


const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1> We Ensure better education for a better world</h1>
            <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills , and experiences needed to excel in the dynamic field of education</p>
           <button className='btn'>
  Explore more
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#000000"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
</button>
        </div>
      
    </div>
  )
}

export default Hero
