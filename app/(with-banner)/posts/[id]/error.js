'use client'

import React from 'react'

import styles from '../../../../styles/home.module.css'

const error = () => {
  return (
    <div className={styles.page}>
      <div className={styles.title}>❌ This is an error!</div>
    </div>
  )
}

export default error
