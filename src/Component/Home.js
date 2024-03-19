import React from 'react'
import Competency from './Competenency.png'
import { NavLink } from 'react-router-dom'
const Home = () => {
  return (
    <div className='Home'>
      <div className='item1'>
      <h2>Competency Management System</h2>

      <NavLink to="/">Home</NavLink>
        <NavLink to="/aboutus">AboutUs</NavLink>
        <NavLink to="/ContactUs">ContactUs</NavLink>
      </div>
      

      <div className=' item2'>
        <img src={Competency} width={500} height={500} />
      </div>
      </div>
      
  )
}
export default Home



