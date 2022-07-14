import React from 'react'
import styles from './figure.module.css'
const Figure = ({text, description}) => {
  return (
    <article className={styles.figure}>
      <span>{text}</span>
      <span>{description}</span>
    </article>
  )
}

export default Figure