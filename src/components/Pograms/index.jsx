import React from 'react';
import { programsData } from '../../data/programsData';

import ProgramCard from '../ProgramCard';
import styles from './programs.module.css';
const Programs = () => {
	return (
		<section>
			<div className={styles.programsHeader} id='programs'>
				<span className='strokeText'>Explore our</span>
				<span>Programs</span>
				<span className='strokeText'>to shape you</span>
			</div>

			<div className={styles.programsContent}>
				{programsData.map((program) => (
					<ProgramCard
						image={program.image}
						heading={program.heading}
						details={program.details}
					/>
				))}
			</div>
		</section>
	);
};

export default Programs;
