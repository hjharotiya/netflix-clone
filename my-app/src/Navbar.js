import React, { useEffect, useState } from 'react'
import nav from './nav.css'
import netflixlogo from '../src/assests/nf.png'
function Navbar() {
	const [show, handelShow] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {handelShow(true);}
			else handelShow(false);
		});
		return () => {
			// window.removeEventListener("scroll");
		};
	}, []);


  return (
	  <div className ={`nav ${show && "black-nav"}`}>
		  <img className='netflix-logo'
			  src={netflixlogo}></img>
		  <img className='netflix-avatar'
			  src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'></img>
    </div>
  )
}

export default Navbar