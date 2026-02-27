import { getAllUsers } from '@/config/redux/action/authAction';
import DashboardLayout from '@/layout/DashboardLayout'
import UserLayout from '@/layout/UserLayout'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from "./index.module.css";
import { BASE_URL } from '@/config';

export default function Discoverpage() {
  const authState = useSelector((state) => state.auth); 
  const dispatch = useDispatch();

  useEffect(() => {
    if(authState.all_profiles_fetched === false){
        dispatch(getAllUsers());
    }

  }, [])

  return (
    <UserLayout>
          {/* {authState.profileFetched && <div>
            Hey {authState.user.userId.name} , Welcome to Dashboard
            </div>} */}
    
            <DashboardLayout>
               <div>
            <h1>Discover</h1>
            <div className={styles.allUserProfile}>
              {authState.all_profiles_fetched && authState.all_users.map( (user) => {
                return (
                  <div key={user._id} className={styles.userCard}>
                    <img className = {styles.userCard_image}src={`${BASE_URL}/uploads/${user.userId.profilePicture || "default.jpg"}`} alt="profile" />
                    <div>
                      <h1>{user.userId.name}</h1>
                    <p>{user.userId.username}</p>
                    </div>

                  </div>
                )
              })}
            </div>
          </div>
            </DashboardLayout>
    
            
        </UserLayout>
  )
}
