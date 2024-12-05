import React from 'react'
import EditUserComponent from '../edit_profile/EditUserComponent'
import { Button } from '../ui/button'

function EditProfileBtn() {
  return (
    <EditUserComponent triggerItem={
      <Button className='px-5'>
        Edit Profile
    </Button>
    }>
      
    </EditUserComponent>
    
  )
}

export default EditProfileBtn