import React from 'react';
import "./Header.css";
import dog from './dog.jpg';

const Header = props => (
	<header>
		<img className="dog" src={dog} alt={dog} />
		<div className="Header">
			<h1 className="Header-note">Click on every image just once!</h1>
		</div>
	</header>
);

export default Header;