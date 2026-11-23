import React, { useEffect, useState } from 'react'
import './Testimonials.css'
import nexticon from '../../assets/nexticon.jpg'
import backicon from '../../assets/backicon.jpg'
import user1 from '../../assets/user1.jfif'
import user2 from '../../assets/user2.jfif'
import user3 from '../../assets/user3.jfif'
import user4 from '../../assets/user4.jpg'

const MOBILE_BREAKPOINT = 800;

const slides = [
  { id: 1, img: user1, name: 'William Jackson 1' },
  { id: 2, img: user2, name: 'William Jackson 2' },
  { id: 3, img: user3, name: 'William Jackson 3' },
  { id: 4, img: user4, name: 'William Jackson 4' },
];

const TEXT = `Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.`;

// mobile: slide wa7de bel saf, desktop: 2 slides bel saf
const getMaxIndex = () => {
  const visible = window.innerWidth <= MOBILE_BREAKPOINT ? 1 : 2;
  return slides.length - visible;
};

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // lamma yetghayyar 7ajm el shashe, rajje3 la awwal slide
  useEffect(() => {
    const reset = () => setIndex(0);
    window.addEventListener('resize', reset);
    return () => window.removeEventListener('resize', reset);
  }, []);

  const slideForward = () => setIndex(i => Math.min(i + 1, getMaxIndex()));
  const slideBackward = () => setIndex(i => Math.max(i - 1, 0));

  return (
    <div className="testimonials">
      <img src={nexticon} alt="Next" className="next-btn" onClick={slideForward} />
      <img src={backicon} alt="Back" className="back-btn" onClick={slideBackward} />

      <div className="slider">
        <ul style={{ transform: `translateX(calc(${index} * -100% / var(--visible)))` }}>
          {slides.map(({ id, img, name }) => (
            <li key={id}>
              <div className="slide">
                <div className="user-info">
                  <img src={img} alt={name} height={80} />
                  <div>
                    <h3>{name}</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>{TEXT}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Testimonials