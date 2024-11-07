import Profile from '@/components/user_profile/Profile';
import React from 'react'

interface PageProps {
    params: {
        userId : string
    }
}
function page({params}: PageProps) {
    const userId =  params.userId;

  return (
    <>
    <Profile userId={userId} />
    
    </>
    
  )
}

export default page