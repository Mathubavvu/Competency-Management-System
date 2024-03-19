import React from 'react'
import { NavLink } from 'react-router-dom'
import about from './about.jpg'
const AboutUs = () => {
  return (
    <div className='about1'><br></br><br></br>
      <NavLink to="/">Home</NavLink>
        <NavLink to="/aboutus">AboutUs</NavLink>
        <NavLink to="/ContactUs">ContactUs</NavLink><br></br><br></br>
      <h1>About Us</h1>
      
      <p>We believe that a skilled and capable workforce 
        is the cornerstone of organizational success.
         Our Competency Management System (CMS) is designed 
         to empower businesses to unlock the full potential 
         of their employees by strategically managing and 
         developing their skills and capabilities.</p>
         <img src={about} width={400} height={300}/><br></br>

         <h2>Our Mission</h2>
         <p>Our mission is to provide innovative solutions 
          that enable organizations to build high-performing 
          teams, foster continuous learning, and drive 
          business growth. We are committed to delivering 
          cutting-edge technology and exceptional service 
          to help our clients achieve their talent 
          management objectives.</p>
          <h2>What We Offer</h2>
      <p>Our Competency Management System offers a comprehensive platform for:</p>
      <ul>
        <li>Defining and tracking competencies</li>
        <li>Assessing employee skills and proficiencies</li>
        <li>Generating insightful reports and analytics</li>
      </ul>
      
      <h2>Why Choose Us?</h2>
      <p>Here are a few reasons to choose our Competency Management System:</p>
      <ul>
        <li>User-friendly interface for easy navigation and usage</li>
        <li>Customizable features to adapt to your organization's unique needs</li>
        <li>Scalable solution suitable for small businesses to large enterprises</li>
        <li>Robust security measures to safeguard sensitive data</li>
        <li>Responsive customer support to assist you every step of the way</li>
      </ul><br></br><br></br>
    </div>
  )
}

export default AboutUs



