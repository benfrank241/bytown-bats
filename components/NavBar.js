// components/NavBar.js
import Link from 'next/link';
import styles from './NavBar.module.css';  // Assume you have some basic CSS for styling

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.navItem}>
        Home
      </Link>
      <Link href="/schedule" className={styles.navItem}>
        Schedule
      </Link>
      <Link href="/stats" className={styles.navItem}>
        Stats
      </Link>
      <Link href="/roster" className={styles.navItem}>
        Roster
      </Link>
    </nav>
  );
};

export default NavBar;