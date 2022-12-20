import React from 'react'
import styles from '../../../styles/home.module.css'

import { Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: ['300']
})

const AboutPage = () => {
  return (
    <div className={roboto.className}>
      <div className={styles.page}>
        <div className={styles.title}>About Page</div>
      </div>
    </div>
  )
}

export default AboutPage
