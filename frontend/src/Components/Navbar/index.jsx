import React from 'react';
import styles from './style.module.css';
import { useRouter } from 'next/router';

export default function NavBarComponent() {
    const router = useRouter();
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <h2 style={{cursor: 'pointer'}} onClick={() => router.push('/')}>Pro Connect</h2>
        <div className={styles.navbarOptionsContainer}>
            <div className={styles.buttonJoin} onClick={ () => {
              router.push('/login')
            }}>
              <p>Be a partner</p>
            </div>
        </div>
      </nav>
    </div>
  )
}
