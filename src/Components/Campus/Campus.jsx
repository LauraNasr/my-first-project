import React from 'react'
import './Campus.css'
import gallery1 from '../../assets/gallery-1.jpg'
import gallery2 from '../../assets/p.jpg'
import gallery3 from '../../assets/gallery_3.jpg'
import gallery4 from '../../assets/gallery_4.jpg'
import white from '../../assets/dark.png'

const Campus = () => {
  return (
    <div className="campus">
        <div className="gallery">
            <img src= {gallery1} alt=""/>
            <img src= {gallery2} alt=""/>
            <img src= {gallery3} alt=""/>
            <img src= {gallery4} alt=""/>
        </div>
      <button className='btn dark-btn'>See more here <img src={white} alt="" /></button>

    </div>
  )
}

export default Campus
