import React from 'react'
import { Roboto } from '@next/font/google'

import styles from '../../styles/home.module.css'

const roboto = Roboto({
  weight: ['300'],
  subsets: ['latin']
})

const Layout = ({ children }) => {
  return (
    <div className={roboto.className}>
      <marquee className={styles.banner}>This is my banner!</marquee>
      <div className={roboto.className}>
        {children}
      </div>
    </div>
  )
}

export default Layout
