import React from 'react'
import './Campus.css'
import gallery1 from '../../assets/gallery_1.jpg'
import gallery2 from '../../assets/gallery_3.jpg'
import gallery3 from '../../assets/gallery_4.jpg'
import gallery4 from '../../assets/p.jpg'

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={gallery1} alt="" />
        <img src={gallery2} alt="" />
        <img src={gallery3} alt="" />
        <img src={gallery4} alt="" />
      </div>
      <button className='btn dark-btn'>
        See more here
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}

export default Campus
