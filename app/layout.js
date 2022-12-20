import Link from 'next/link'
import { Roboto } from '@next/font/google'

import '../styles/globals.css'
import styles from '../styles/home.module.css'

const roboto = Roboto({
  weight: ['300']
})

const navItems = [
  {
    text: 'Home',
    route: '/'
  },
  {
    text: 'About',
    route: '/about'
  },
  {
    text: 'Posts',
    route: '/posts'
  }
]

export default function RootLayout ({ children }) {
  return (
    <html>
      <head />
      <main className={roboto.className}>
        <div className={styles.navbar}>
          {navItems.map(item => (
            <Link key={item.text} href={item.route} className={styles.navitem}>{item.text}</Link>
          ))}
        </div>
        <body className={roboto.className}>{children}</body>
      </main>
    </html>
  )
}
