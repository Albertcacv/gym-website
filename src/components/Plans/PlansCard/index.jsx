import React from 'react';
import whiteTick from '../../../assets/whiteTick.png';
import styles from './plans-card.module.css';

const PlansCard = ({ name, price, features }) => {
	return (
		<div className={styles.planCard}>
			<span>{name}</span>
			<span>$ {price}</span>

			<div className={styles.planFeatures}>
				{features.map((feature) => (
					<div className={styles.feature}>
						<img src={whiteTick} alt='' />
						<span>{feature}</span>
					</div>
				))}
			</div>

			<div>
				<span>See more benefits -{'>'} </span>
			</div>
			<button className={styles.plansCardButton}>Join now</button>
		</div>
	);
};

export default PlansCard;
