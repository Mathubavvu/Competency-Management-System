import React, { useEffect, useState } from 'react'
import { useAuth } from './Auth'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const navigate=useNavigate()
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const[userlist,setUserlist]=useState([])
    useEffect(()=>{
      axios.get('http://localhost:3001/users')
      .then(res=>setUserlist(res.data))
      .catch(err=>console.log(err))
    },[])
    const auth=useAuth()
    const handleLogin=()=>{
      const userExist=userlist.some(u=>u.username===username && u.password===password)

      if(userExist){
        auth.login(username)
       navigate('/')
      }else{
        alert('Invalid Username or Password')
      }
    }
  return (
    <div className='bgc'>
      <form onSubmit={handleLogin} className='sign-up'>
        <h1>Login</h1>
        <br></br>
      {/* <label>Username:</label> */}
      <input type='text' value={username} placeholder='Username' onChange={(e)=>{setUsername(e.target.value)}}/><br></br><br></br><br></br>
      {/* <label>Password:</label> */}
      <input type='password' value={password} placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/><br></br><br></br><br ></br>
      <button type='submit'>Login</button><br></br><br></br>
      </form>
      <NavLink to="/signup">Don't have an account? Signup</NavLink>
      <br></br><br></br>
    </div>
  )
}
export default Login



