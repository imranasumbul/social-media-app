"use client"

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import RecommendedWrapper from './RecommendedWrapper';
import { UserInterface } from './UserInterface';



function Recommended() {
    const [recommendedUsers, setRecommendedUsers] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`).then((data) => {
            const users = data.data;
            setRecommendedUsers(users);
           
        });
    }, []);
    
    
    
    return (
        <>
            <div className='flex flex-col my-4 space-y-4'>

                
                { recommendedUsers?.map((user : UserInterface) => {
                    return (
                    <RecommendedWrapper key={user.id} id={user.id} name={user.name} username={user.username} profileImage={user.profileImage} />            
                )
                })
                }
            </div>
        </>
    )
}

export default Recommended