import React from 'react';
import { plansData } from '../../data/plansData';
import styles from './plans.module.css';
import PlansCard from './PlansCard';
const Plans = () => {
	return (
		<section className={styles.plans}>
		<div className={`blur ${styles.plansBlur1}`}></div>
		<div className={`blur ${styles.plansBlur2}`}></div>
			<div className={styles.plansHeader} id='plans'>
				<span className='strokeText'>Ready to start</span>
				<span> your journey</span>
				<span className='strokeText'> now withus</span>
			</div>

			<div className={styles.plansContent}>
				{plansData.map((plan) => (
					<PlansCard
						key={plan.name}
						name={plan.name}
						price={plan.price}
						features={plan.features}
					/>
				))}
			</div>
		</section>
	);
};

export default Plans;
