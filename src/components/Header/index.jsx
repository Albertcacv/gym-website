import React, { useState } from 'react';
import Bars from '../../assets/bars.png';
import Logo from '../../assets/logo.png';
import styles from './header.module.css';
const Header = () => {
	const mobile = window.innerWidth <= 768 ? true : false;
	const [menu, setMenu] = useState(false);

	return (
		<header className={styles.header} id='home'>
			<img src={Logo} alt='' className={styles.logo} />

			{!menu && mobile ? (
				<div onClick={() => setMenu((prevState) => !prevState)}>
					<img src={Bars} alt='' className={styles.headerBars} />
				</div>
			) : (
				<ul className={styles.headerMenu}>
					<li onClick={() => setMenu(false)}>
						<a href='#home'>Home</a>
					</li>
					<li onClick={() => setMenu(false)}>
						<a href='#programs'>Programs</a>
					</li>
					<li onClick={() => setMenu(false)}>
						<a href='#reasons'>Why us</a>
					</li>
					<li onClick={() => setMenu(false)}>
						<a href='#plans'>Plans</a>
					</li>
				</ul>
			)}
		</header>
	);
};

export default Header;
