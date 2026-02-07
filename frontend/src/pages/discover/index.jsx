import DashboardLayout from '@/layout/DashboardLayout'
import UserLayout from '@/layout/UserLayout'
import React from 'react'

export default function Discoverpage() {
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
