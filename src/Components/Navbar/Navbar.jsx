import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/p4.png'
import menu_icon from '../../assets/menu.jpg'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenu(prev => !prev);
  const closeMenu = () => setMobileMenu(false);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <Link to='hero' smooth={true} offset={0} duration={500} onClick={closeMenu}>
        <img src={logo} alt="Logo" className='logo' style={{ cursor: 'pointer' }} />
      </Link>
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='program' smooth={true} offset={-260} duration={500} onClick={closeMenu}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500} onClick={closeMenu}>About</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500} onClick={closeMenu}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500} onClick={closeMenu}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn' onClick={closeMenu}>Contact us</Link></li>
      </ul>
      <img src={menu_icon} alt="Menu" width={30} className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar