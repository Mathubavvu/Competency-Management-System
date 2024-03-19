import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    const[username,setUserName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const handleSignup=()=>{
        axios.post(`http://localhost:3002/users`,
        {
            "username":username,
            "email":email,
            "password":password
        })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
  return (
    <div className='bgc'>
      <form onSubmit={handleSignup} className='sign-up'>
        <h1>Signup </h1>
        {/* <label>Username:</label><br></br> */}
        <input type='text' value={username} placeholder='Username' onChange={(e)=>setUserName(e.target.value)}/>
        <br></br><br></br>
        {/* <label>Email:</label><br></br> */}
        <input type='email' value={email} placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
        <br></br><br></br>
        {/* <label>Password:</label><br></br> */}
        <input type='password' value={password} placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
        <br></br><br></br>
        <button type='submit'>Signup</button><br></br>
      </form><br></br>
      <Link to='/login'>Already have an Account? Login</Link>
      <br></br><br></br>
    </div>
  )
}

export default Signup
