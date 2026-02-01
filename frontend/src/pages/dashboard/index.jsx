import { getAboutUser } from '@/config/redux/action/authAction';
import { getAllPosts } from '@/config/redux/action/postAction';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function dashboard() {
    const router = useRouter();
    const [isTokenThere, setIsTokenThere] = useState(false);
    const dispatch = useDispatch();
    const  authState = useSelector((state) => state.auth);

    useEffect(() => {   
        if(localStorage.getItem("token") === null){
          router.push('/login');
        }

        setIsTokenThere(true);

    });

    useEffect(() => {
        if(isTokenThere){
            dispatch(getAllPosts());
            dispatch(getAboutUser({token : localStorage.getItem("token")}));
        }

    }, [isTokenThere]);
  return (
    <div>
      {authState.profilefetched && <div>
        Hey  , Welcome to Dashboard
        </div>}
    </div>
  )
}
