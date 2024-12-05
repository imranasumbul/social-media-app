
import { useRouter } from 'next/navigation'

import React from 'react'
import { Button } from '../ui/button';

function RecommendedButtons({userId}: {userId?: string}) {
    const router = useRouter();
  return (
    <>
    <Button onClick={() => {
      router.push(`/user/${userId}`);
      
    }}
     
        
        >View Profile
    </Button>
    </>
  )
}

export default RecommendedButtons;