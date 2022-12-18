import '../styles/globals.css'

const navItems = [
  {
    text: 'Home',
    route: '/'
  },
  {
    text: 'About',
    route: '/about'
  }
]

export default function RootLayout ({ children }) {
  return (
    <html>
      <head />
      <header>
        <ul>
          {navItems.map(item => (
            <li key={item.text}>
              <a href={item.route}>{item.text}</a>
            </li>
          ))}
        </ul>
      </header>
      <body>{children}</body>
    </html>
  )
}
