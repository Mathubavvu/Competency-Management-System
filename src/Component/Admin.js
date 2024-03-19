

import axios from 'axios'
import React, { useEffect , useState} from 'react'
const Admin = () => {
    const[post,setPost]=useState([])
    const[photo,setPhoto]=useState('')
    const[id,setId]=useState(0)
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[location,setLocation]=useState('')
    const[talent, setTalent]=useState("Web Development")
    const[role, setRole]=useState("Manager")
    useEffect(()=>{
        axios.get('http://localhost:3001/students')
        .then(res=>{setPost(res.data)})
        .catch(err=>{console.log(err)})
    })
    const handleSubmit=()=>{
      axios.post(`http://localhost:3001/students`,{
        "id":id, "photo":photo, "name":name, "email":email,"location":location,"talent":talent,"role":role
      })
      .then(res=>{console.log(res)})
      .catch(err=>{console.log(err)})
    }
    const handleDelete=(id)=>{
      axios.delete(`http://localhost:3001/students/${id}`)
      .then(res=>{console.log(res)})
      .catch(err=>{console.log(err)})
    }
    const[popup,setPopup]=useState(false)
    const[photo1,setPhoto1]=useState('')
    const[id1,setId1]=useState(0)
    const[name1,setName1]=useState('')
    const[email1,setEmail1]=useState('')
    const[location1,setLocation1]=useState('')
    const[talent1,setTalent1]=useState('')
    const[role1, setRole1]=useState('')

    const openPopup=(datas)=>{
      setPopup(true)
      setPhoto1(datas.photo)
      setId1(datas.id)
      setName1(datas.name)
      setEmail1(datas.email)
      setLocation1(datas.location)
      setTalent1(datas.talent)
      setRole1(datas.role)
    }
    const handleUpdate=()=>{
      axios.put(`http://localhost:3001/students/${id1}`,
      {"id":id1, "photo":photo1, "name":name1,"email":email1,"location":location1,"talent":talent1,"role":role1
      })
      .then(res=>{console.log(res)})
      .catch(err=>{console.log(err)})
    }

    

  return (
    <div className='admin'>
      <form onSubmit={handleSubmit}><br></br>
        <label>Photo:</label>
        <input type='text' value={photo} onChange={(e)=>setPhoto(e.target.value)} /><br></br><br></br>
        <label>ID:</label>
        <input type='number' value={id} onChange={(e)=>setId(e.target.value)}/>
        <br></br><br></br>
        <label>Name:</label>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
        <br></br><br></br>
        <label>Email:</label>
        <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br></br><br></br>
        <label >Talent</label>
      
      <select value={talent} onChange={(e)=>setTalent(e.target.value)} >
        <option value="Data Structures">Data Structures</option>
        <option value="Problem-Solving">Problem-Solving</option>
        <option value="Software Development">Software Development</option>
        <option value="Web Development">Web Development</option>
        <option value="Operating Systems">Operating Systems</option>
        <option value="Networking">Networking</option>
        <option value="Cybersecurity">Cybersecurity</option>
        <option value="DevOps">DevOps</option>
      </select>
      <br></br><br></br>
      <label >Role</label>
      
      <select value={role} onChange={(e)=>setRole(e.target.value)}>
        <option value="Employee">Employee</option>
        <option value="Manager">Manager</option>
        <option value="Admin">Admin</option>
      </select>
      <br></br><br></br>
        <label>Location:</label>
        <input type='text' value={location} onChange={(e)=>setLocation(e.target.value)}/>
        <br></br><br></br>
        <button type='submit'>Submit</button><br></br>
      </form><br></br>

      <table>
        <thead>
          <tr>
            <th>Photo</th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Talent</th>
            <th>Role</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            post.map(x=>(
              <tr>
                <td><img src={x.photo} width={150} height={150} /></td>
                <td>{x.id}</td>
                <td>{x.name}</td>
                <td>{x.email}</td>
                <td>{x.talent}</td>
                <td>{x.role}</td>
                <td>{x.location}</td>
                
                <td>
                  <button onClick={()=>openPopup(x)}>Update</button>
                  <button onClick={()=>handleDelete(x.id)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
        <br></br>
        <br></br>
      </table>
      <br></br>
      <br></br>
      {popup && <div className='popup1'>
         <form onSubmit={handleUpdate}>
         <label>Photo:</label>
        <input type='text' value={photo1} onChange={(e)=>setPhoto1(e.target.value)} /><br></br><br></br>
          <label>ID:</label>
          <input type='number' value={id1} onChange={(e)=>setId1(e.target.value)}/>
          <br></br><br></br>
          <label>Name:</label>
          <input type='text' value={name1} onChange={(e)=>setName1(e.target.value)}/>
          <br></br><br></br>
          <label>Email:</label>
          <input type='email' value={email1} onChange={(e)=>setEmail1(e.target.value)}/>
          <br></br><br></br>
          <label >Talent</label>
      
      <select value={talent1} onChange={(e)=>setTalent1(e.target.value)} >
        <option value="Data Structures">Data Structures</option>
        <option value="Problem-Solving">Problem-Solving</option>
        <option value="Software Development">Software Development</option>
        <option value="Web Development">Web Development</option>
        <option value="Operating Systems">Operating Systems</option>
        <option value="Networking">Networking</option>
        <option value="Cybersecurity">Cybersecurity</option>
        <option value="dDevOps">DevOps</option>
      </select>
      <br></br><br></br>
      <label >Role</label>
      
      <select value={role1} onChange={(e)=>setRole1(e.target.value)}>
        <option value="Employee">Employee</option>
        <option value="Manager">Manager</option>
        <option value="Admin">Admin</option>
      </select>
      <br></br><br></br>
          <label>Location:</label>
          <input type='text' value={location1} onChange={(e)=>setLocation1(e.target.value)}/>
          <br></br><br></br>
          <button type='submit'>Submit</button>
        </form>
      </div>
      }

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
    </div>
  )
}
export default Admin



