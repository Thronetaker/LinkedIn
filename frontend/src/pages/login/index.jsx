import UserLayout from '@/layout/UserLayout'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './style.module.css';
import { useRouter } from 'next/router';
import { registerUser } from '@/config/redux/action/authAction';

export default function LoginComponent() {

  const authState =  useSelector((state) => state.auth)
  const router = useRouter();
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [ name, setName] = useState('');  

  const dispatch = useDispatch();

  const [isLoginMethod, setIsLoginMethod] = useState(false);

  useEffect(() => { 
    if(authState.loggedIn)
      router.push('/dashboard');
  }, [authState.loggedIn]);

  const handleRegister  = () =>{
    console.log("Register..");
    dispatch(registerUser({username, password, email, name}));
    
  }
  return (
    <UserLayout>
      
      <div className={styles.container}>
      <div className={styles.cardContainer}>
         <div className={styles.cardContainer_left}>
          <p className={styles.cardleft_heading}>{isLoginMethod ? "Sign in" : "Sign Up"}</p>
          <p style={{color: authState.isError ?"red":"green"}}>{ authState.message.message}</p>
          
          <div className={styles.inputContainer}>

            <div className={styles.inputRow}>
              <input onChange={(e) => setUsername(e.target.value)} className={styles.inputField} type='text' placeholder='Username'/>
              <input onChange={(e) => setName(e.target.value)} className={styles.inputField} type='text' placeholder='Name'/>
            </div>

            <input onChange={(e) => setPassword(e.target.value)} className={styles.inputField} type='text' placeholder='Password'/>
            <input onChange={(e) => setEmail(e.target.value)} className={styles.inputField} type='text' placeholder='Email'/>

            <div className={styles.actionButton} onClick={ () => {
              if(isLoginMethod){
                // login logic    
              } else {
                handleRegister();
              } 
            } }>
              <p>{ isLoginMethod ? "Sign In" : "Sign Up" }</p>
            </div>

          </div>
          
         </div>
         <div className={styles.cardContainer_right}>
         </div>
      </div>
      </div>
    </UserLayout>
  )
}
