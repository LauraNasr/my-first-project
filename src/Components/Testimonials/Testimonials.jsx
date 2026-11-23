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
  {
    id: 1,
    img: user1,
    name: 'Maya Haddad',
    location: 'Education Major, Edusity',
    text: 'The hands-on teaching practice and mentor feedback helped me step into a real classroom with confidence. I truly felt prepared to support students and lead from day one.'
  },
  {
    id: 2,
    img: user2,
    name: 'Liam Carter',
    location: 'Educational Leadership, Edusity',
    text: 'What stood out most was how much the faculty cares about shaping thoughtful leaders. Every course connected theory to real school challenges and community impact.'
  },
  {
    id: 3,
    img: user3,
    name: 'Tariq Harb',
    location: 'Curriculum & Instruction, Edusity',
    text: 'Our workshops and group projects pushed me to design lessons that actually engage learners. The supportive environment here made growth feel natural and exciting.'
  },
  {
    id: 4,
    img: user4,
    name: 'Elena Rossi',
    location: 'School Counseling, Edusity',
    text: 'From practical training to close guidance from professors, Edusity gave me the tools to guide students with empathy and clarity. It really feels like a place built for future leaders.'
  },
];

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
          {slides.map(({ id, img, name, location, text }) => (
            <li key={id}>
              <div className="slide">
                <div className="user-info">
                  <img src={img} alt={name} height={80} />
                  <div>
                    <h3>{name}</h3>
                    <span>{location}</span>
                  </div>
                </div>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Testimonials