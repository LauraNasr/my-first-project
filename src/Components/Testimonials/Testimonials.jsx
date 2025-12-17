import React, { useRef } from 'react'
import './Testimonials.css'
import nexticon from'../../assets/nexticon.jpg'
import backicon from'../../assets/backicon.jpg'
import user1 from'../../assets/user1.jfif'
import user2 from'../../assets/user2.jfif'
import user3 from'../../assets/user3.jfif'
import user4 from'../../assets/user4.jpg'

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

const slideForward = ()=>{
if(tx > -50 ){
  tx -= 25;
}
slider.current.style.transform=`translateX(${tx}%)`;
}
const slideBackward = ()=>{
  if(tx < 0 ){
    tx += 25;
  }
  slider.current.style.transform=`translateX(${tx}%)`;
}
  return (
    <div className='testimonials'>
        <img src={nexticon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={backicon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
              <li>
                <div className="slide">
                  <div className="user-info">
                    <img src={user1} alt="" height={85}/>
                    <div>
                      <h3>William Jackson 1</h3>
                      <span>Eduusity , USA</span>
                    </div>
                  </div>
                  <p>Choosing to pursue  my degree at Edusity was one of the best decisions I've ever made  .The  supportive community , 
                    state-of-the-art facilites, and commitment to academic execllence  have truly exceeded my expectations.
                  </p>
                </div>
              </li>
              <li>
                <div className="slide">
                  <div className="user-info">
                    <img src={user2} alt="" height={80}/>
                    <div>
                      <h3>William Jackson 2</h3>
                      <span>Eduusity , USA</span>
                    </div>
                  </div>
                  <p>Choosing to pursue  my degree at Edusity was one of the best decisions I've ever made  .The  supportive community , 
                    state-of-the-art facilites, and commitment to academic execllence  have truly exceeded my expectations.
                  </p>
                </div>
              </li>
              <li>
                <div className="slide">
                  <div className="user-info">
                    <img src={user3} alt="" height={80}/>
                    <div>
                      <h3>William Jackson 3</h3>
                      <span>Eduusity , USA</span>
                    </div>
                  </div>
                  <p>Choosing to pursue  my degree at Edusity was one of the best decisions I've ever made  .The  supportive community , 
                    state-of-the-art facilites, and commitment to academic execllence  have truly exceeded my expectations.
                  </p>
                </div>
              </li>
              <li>
                <div className="slide">
                  <div className="user-info">
                    <img src={user4} alt=""height={80}/>
                    <div>
                      <h3>William Jackson 4</h3>
                      <span>Eduusity , USA</span>
                    </div>
                  </div>
                  <p>Choosing to pursue  my degree at Edusity was one of the best decisions I've ever made  .The  supportive community , 
                    state-of-the-art facilites, and commitment to academic execllence  have truly exceeded my expectations.
                  </p>
                </div>
              </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials
