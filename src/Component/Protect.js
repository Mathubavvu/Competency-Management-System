import React, { Children } from 'react'
import { useAuth } from './Auth'
import { Navigate } from 'react-router-dom'

const Protect = ({children}) => {
    const auth=useAuth()
        if(!auth.user){
            return<Navigate to='/login'/>
        }
    
  return (
    <div>
      {children}
    </div>
  )
}

export default Protect
