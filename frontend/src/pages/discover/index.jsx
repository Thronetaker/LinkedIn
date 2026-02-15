import { getAllUsers } from '@/config/redux/action/authAction';
import DashboardLayout from '@/layout/DashboardLayout'
import UserLayout from '@/layout/UserLayout'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

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
              <h1>Discover Page</h1>
            </DashboardLayout>
    
            
        </UserLayout>
  )
}
