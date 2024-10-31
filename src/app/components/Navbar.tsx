"use client";

import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          <img src="/logo.png" alt="Logo" className={styles.logo} />
        </Link>
        <div className={`${styles.navLinks} ${isOpen ? styles.showMenu : ''}`}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
          <Link href="/projects" className={styles.navLink}>
            Projects
          </Link>
          <Link href="/contact" className={styles.navLink}>
            Contact
          </Link>
        </div>
        <button className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>
    </nav>
  );
}