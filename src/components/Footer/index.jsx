import React from 'react';
import styles from './footer.module.css';

import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import Linkedin from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';
const Footer = () => {
	return (
		<footer className={styles.footer}>
			<ul className={styles.footerSocial}>
				<li>
					<img src={Github} alt='' />
				</li>
				<li>
					<img src={Instagram} alt='' />
				</li>
				<li>
					<img src={Linkedin} alt='' />
				</li>
			</ul>

			<span className={styles.footerLogo}>
				<img src={Logo} alt='' />
			</span>
		</footer>
	);
};

export default Footer;
