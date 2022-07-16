import React from 'react';
import styles from './reasons.module.css';

import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';

import nb from '../../assets/nb.png';
import tick from '../../assets/tick.png';
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'

const Reasons = () => {
	return (
		<section className={styles.reasons} id='reasons'>
			<div className={styles.reasonsLeft}>
				<img src={image1} alt='' />
				<img src={image2} alt='' />
				<img src={image3} alt='' />
				<img src={image4} alt='' />
			</div>
			<div className={styles.reasonsRight}>
				<span>some reasons</span>

				<div className={styles.reasonsIntro}>
					<span className='strokeText'>why</span>
					<span> choose us?</span>
				</div>

				<div className={styles.reasonsDescription}>
					<span>
						<img src={tick} alt='' /> OVER 140+ EXPERT COACHS
					</span>
					<span>
						<img src={tick} alt='' /> TRAIN SMARTER AND FASTER THAN BEFORE
					</span>
					<span>
						<img src={tick} alt='' /> 1 FREE PROGRAM FOR NEW MEMBER
					</span>
					<span>
						<img src={tick} alt='' /> RELIABLE PARTNERS
					</span>
				</div>

				<div className={styles.reasonsPartners}>
					<span>OUR PARTNERS</span>
					<ul>
						<li>
							<img src={nb} alt='' />
						</li>
						<li>
            <img src={adidas} alt='' />
            </li>
						<li>
            <img src={nike} alt='' />
            </li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Reasons;
