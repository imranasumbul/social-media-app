"use client"

import fetcher from '@/lib/fetcher';
import React from 'react'
import useSWR from 'swr'
import RecommendedWrapper from './RecommendedWrapper';
import UserInterface from './UserInterface';


function Recommended() {
    const {data} = useSWR<UserInterface[] | undefined>("/api/users", fetcher);
    if(data?.length == 0){
        return null;
    }
    return (
        <>
            <div className='flex flex-col my-4 space-y-4'>

                
                { data?.map((user:UserInterface) => {
                    return (
                    <RecommendedWrapper key={user.id} id={user.id} name={user.name} username={user.username} profilePic={user.profilePic} />            
                )
                })
                }
            </div>
        </>
    )
}

export default Recommended