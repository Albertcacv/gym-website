import React from 'react'
import styles from './figure.module.css'
const Figure = ({text, description}) => {
  return (
    <article className={styles.figure}>
      <span className={styles.figureText}>{text}</span>
      <span className={styles.figureDescription}>{description}</span>
    </article>
  )
}

export default Figure