import React from 'react';
import styles from './style.module.css';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

export default function NavBarComponent() {
    const router = useRouter();
    const authState =  useSelector((state) => state.auth);
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <h2 style={{cursor: 'pointer'}} onClick={() => router.push('/')}>Pro Connect</h2>


        <div className={styles.navbarOptionsContainer}>

          {authState.profileFetched && <div>

              <div style={{display: "flex", gap:"1.2rem"}}>
                <p>Hey, {authState.user.userId.name}</p>
                <p style={{fontWeight:"bold", cursor:"pointer"}} onClick={() => router.push('/profile')}>Profile</p>
              </div>
            
          </div>}

          {!authState.profileFetched &&
             <div className={styles.buttonJoin} onClick={ () => {
              router.push('/login')
             }}>
              <p>Be a part</p>
            </div>
          } 

        </div>


      </nav>
    </div>
  )
}
