import DashboardLayout from '@/layout/DashboardLayout'
import UserLayout from '@/layout/UserLayout'
import React from 'react'

export default function MyConnectionsPage() {
  return (
    <UserLayout>
          {/* {authState.profileFetched && <div>
            Hey {authState.user.userId.name} , Welcome to Dashboard
            </div>} */}
    
            <DashboardLayout>
              <h1>My Connections</h1>
            </DashboardLayout>
    
            
        </UserLayout>
  )
}
