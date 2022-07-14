import React from 'react';
import RightArrow from '../../assets/rightArrow.png';
import styles from './program-card.module.css';
const ProgramCard = ({ image, heading, details }) => {
	return (
		<article className={styles.programCard}> 
			{image}
			<span>{heading}</span>
			<span>{details}</span>
			<div className={styles.joinNow}>
				<span>Join now</span>
				<img src={RightArrow} alt='' />
			</div>
		</article>
	);
};

export default ProgramCard;
