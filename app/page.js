import React from 'react'
import Image from 'next/image'

import styles from '../styles/home.module.css'

const HomePage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Image src='/../public/logo.png' alt='next-logo' width={200} height={200} />
        <div className={styles.title}>Home Page</div>
      </div>
    </div>
  )
}

export default HomePage
