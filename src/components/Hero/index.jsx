import React from 'react';
import Header from '../Header';
import styles from './hero.module.css';
const Hero = () => {
	return (
		<section className={styles.hero}>
			<article className={styles.heroLeft}>
				<Header />
				<div className={styles.ad}>
					<span>The best fitness club in town</span>
				</div>

				<div className={styles.heroText}>
					<div>
						<span className='strokeText'>SHAPE </span>
						<span>Your</span>
					</div>
					<div>
						<span>Ideal body</span>
					</div>
				</div>
			</article>
			<article className={styles.heroRight}>right side</article>
		</section>
	);
};

export default Hero;
