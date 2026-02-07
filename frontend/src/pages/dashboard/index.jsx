import { getAboutUser } from '@/config/redux/action/authAction';
import { getAllPosts } from '@/config/redux/action/postAction';
import DashboardLayout from '@/layout/DashboardLayout';
import UserLayout from '@/layout/UserLayout';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function dashboard() {
    const router = useRouter();
    const dispatch = useDispatch();
    const  authState = useSelector((state) => state.auth);

    

    useEffect(() => {
        if(authState.isTokenThere){
            dispatch(getAllPosts());
            dispatch(getAboutUser({token : localStorage.getItem("token")}));
        }

    }, [authState.isTokenThere]);
  return (

    <UserLayout>
      {/* {authState.profileFetched && <div>
        Hey {authState.user.userId.name} , Welcome to Dashboard
        </div>} */}

        <DashboardLayout>
          <h1>Dashboard</h1>
        </DashboardLayout>

        
    </UserLayout>
  )
}
