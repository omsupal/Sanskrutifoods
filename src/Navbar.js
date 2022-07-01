import React, { useState, Fragment } from 'react'
// import { FaBars } from 'react-icons/fa';
import image1 from './assets/logo.png';
import "./css/bootstrap.min.css";
// import { Link } from "react-router-dom";
import './Navbar.css';
import './App.css';

	const Navbar = () => {
		const [colorChange, setColorchange] = useState(false);
		
		const changeNavbarColor = () => {
			if (window.scrollY >= 80) {
				setColorchange(true);
			}
			else {
				setColorchange(false);
			}
		};
		window.addEventListener('scroll', changeNavbarColor);
		return (
			<Fragment>
				<div className={colorChange ? 'navbar colorChange' : 'navbar'}>
					<div className='navmenu'>
						<img
							className="logo"
							src={image1}
							alt="Second slide"
						/>
						<ul className='navlist'>
							<a href='#'><li className={colorChange ? 'list colorChange' : 'list'}>Home</li></a>
							<a href='#'><li className={colorChange ? 'list colorChange' : 'list'}>About</li></a>
							<a href='#'><li className={colorChange ? 'list colorChange' : 'list'}>Products</li></a>
							<a href='#'><li className={colorChange ? 'list colorChange' : 'list'}>Products</li></a>
							<a href='/login'><li className={colorChange ? 'list colorChange' : 'list'}>Login</li></a>
						</ul>
					</div>
				</div>
			</Fragment>
		)
	}

	export default Navbar;
