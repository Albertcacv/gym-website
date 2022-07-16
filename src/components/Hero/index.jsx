import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Calories from '../../assets/calories.png';
import Heart from '../../assets/heart.png';
import HeroImage from '../../assets/hero_image.png';
import HeroImageBack from '../../assets/hero_image_back.png';
import Figure from '../Figure';
import Header from '../Header';
import styles from './hero.module.css';
const Hero = () => {
	const transition = { type: 'spring', duration: 3 };
	const [widthView, setWidthView] = useState(0);
	const mobile = widthView <= 768 ? true : false;

	useEffect(() => {
		window.addEventListener('resize', setWidthView(window.innerWidth));

		return () => {
			window.addEventListener('resize', setWidthView(window.innerWidth));
		};
	}, []);

	console.log(widthView);
	return (
		<section className={styles.hero}>
			<div className={`blur  ${styles.heroBlur}`}></div>
			<article className={styles.heroLeft}>
				<Header />
				<div className={styles.ad}>
					<motion.div
						initial={{ left: mobile ? '165px' : '238px' }}
						whileInView={{ left: '8px' }}
						transition={{ ...transition, type: 'tween' }}
					></motion.div>
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

				<motion.div
					// initial={{ right: '-1rem' }}
					// whileInView={{ rigth: '4rem' }}
					// transition={{ ...transition, type: 'tween' }}
					className={styles.heartRate}
				>
					<img src={Heart} alt='' />
					<span>Heart Rate</span>
					<span>116 bpm</span>
				</motion.div>

				<img src={HeroImage} alt='' className={styles.heroImage} />
				<img src={HeroImageBack} alt='' className={styles.heroImageBack} />

				<div className={styles.calories}>
					<img src={Calories} alt='' />
					<div>
						<span>Calories burned</span>
						<span>220 kcal</span>
					</div>
				</div>
			</article>
		</section>
	);
};

export default Hero;
