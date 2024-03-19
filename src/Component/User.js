import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Outlet } from 'react-router-dom'

const User = () => {
  const[post,setPost]=useState([])
  useEffect(()=>{
    axios.get(`http://localhost:3001/students`)
    .then(res=>{setPost(res.data)})
    .catch(err=>{console.log(err)})
  })
  return (
    <div className='user'>
      <h1>User</h1><br></br>
      <div className='flex-container'>
        {
          post.map(x=>(
            <div className='flex-items'>
              <h2><img src={x.photo} width={150} height={150}/> </h2>
              <h2><strong>Id:</strong>{x.id} </h2>
              <h2><strong>Name:</strong>{x.name}</h2>
              <h2><strong>Email:</strong>{x.email}</h2>
              <h2><strong>Talent:</strong>{x.talent}</h2>
              <h2><strong>Role:</strong>{x.role} </h2>
              <h2><strong>Location:</strong>{x.location} </h2>

              <button>view profile</button><br></br><br></br>
              </div>
          ))
        }
      </div><br></br>
      <Outlet/>
    </div>
  )
}

export default User





