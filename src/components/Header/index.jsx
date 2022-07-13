import React from 'react';
import Logo from '../../assets/logo.png';
import styles from './header.module.css';
const Header = () => {
	return (
		<header className={styles.header}>
			<img src={Logo} alt='' className={styles.logo} />

			<ul className={styles.headerMenu}>
				<li>Home</li>
				<li>Programs</li>
				<li>Why us</li>
				<li>Plans</li>
				<li>Testimonials</li>
			</ul>
		</header>
	);
};

export default Header;
