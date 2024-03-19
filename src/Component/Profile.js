import React from 'react'
import { useAuth } from './Auth'
const Profile = () => {
    const auth=useAuth()
    const handleLogout=()=>{
        auth.logout()
    }
  return (
    <div className='bgcprofile'>
      <br></br><br></br><br></br>
      <h1>Welcome {auth.user}</h1><br></br>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profile

