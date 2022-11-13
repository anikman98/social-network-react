import React from 'react'
import ProfileCard from './ProfileCard'
import AuthUser from './AuthUser'

const Profile = () => {

    const {user} = AuthUser();

  return (
    <div className='container'>
        <ProfileCard props={user} />
    </div>
  )
}

export default Profile
