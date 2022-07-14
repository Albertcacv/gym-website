import React from 'react';
import Figure from '../Figure';
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
					<span className={styles.heroDescription}>
						We will help you to shape and build your ideal body and live up your
						life to fullest
					</span>
				</div>

				<div className={styles.heroFigures}>
					<Figure text='+140' description='EXPERT COACHES' />
					<Figure text='+978' description='MEMBERS JOINED' />
					<Figure text='+50' description='FITNESS PROGRAMS' />
				</div>

				<div className={styles.heroButtons}>
					<button className={styles.heroButton}>Get started</button>
					<button className={styles.heroButton}>Learn more</button>
				</div>

			</article>
			<article className={styles.heroRight}>
				<button>Join now</button>
			</article>
		</section>
	);
};

export default Hero;
