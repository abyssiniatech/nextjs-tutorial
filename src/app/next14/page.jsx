
import { Link } from 'next/link';
import styles from "./next.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Welcome to Next.js 14!</h1>
    
      <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
      </nav>
       
    </div>
  )
}

export default Header
