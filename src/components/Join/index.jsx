import React from 'react';
import styles from './join-us.module.css';
const Join = () => {
	return (
		<section className={styles.joinUs} id='join-us'>
			<div className={styles.joinUsLeft}>
				<div>
					<span className='strokeText'>READY TO </span>
					<span>LEVEL UP </span>
				</div>
				<div>
					<span>YOUR BODY </span>
					<span className='strokeText'>WITH US? </span>
				</div>
			</div>

			<div className={styles.joinUsRigth}>
				<form className={styles.joinForm}>
					<input
						type='email'
						name='user_email'
						placeholder='Enter your Email Address'
					/>
          <button className={styles.joinFormButton}>Join Now</button>
				</form>
			</div>
		</section>
	);
};

export default Join;
