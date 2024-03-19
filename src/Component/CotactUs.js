import React from 'react'
import { NavLink } from 'react-router-dom'
import contact from './contact.jpg'
const CotactUs = () => {
  return (
    
      <div className='contact1'><br></br><br></br>
      <NavLink to="/">Home</NavLink>
        <NavLink to="/aboutus">AboutUs</NavLink>
        <NavLink to="/ContactUs">ContactUs</NavLink><br></br><br></br>
          <h1>Contact Us</h1>
          <div className='contact'>
          <div className="contactus-container">
        <div className="grid-left email">
            <div className="grid-items it1">Email: </div>
            <div className="grid-items it2">competency@gmail.com</div>
        </div><br></br>
        <div className="grid-left phone">
            <div className="grid-items it1">Phone: </div>
            <div className="grid-items it2">43545 43543/ 43545 43567</div>
        </div><br></br>
        <div className="grid-left location">
            <div className="grid-items it1">Location: </div>
            <div className="grid-items it2"> Virdhunagar</div>
        </div><br></br>
        <div className="grid-left fax">
            <div className="grid-items it1">Fax: </div>
            <div className="grid-items it2">04532-59434 / 04531-59436</div>
        </div><br></br>
        
    </div>
    <div className="image-contact">
      <img src={contact}/>
    </div>
    </div>
    
          <h1>Get in Touch With Us</h1>
        <p>We're here to answer any questions you may have.</p>
        <div className="message-container">
      <form>
        <h4>Send Message</h4>
        <input className="detail f-name" type="text"  placeholder="First Name"/>
        <input className="detail l-name" type="text"  placeholder="Last Name"/><br></br><br></br>
        <input className="detail phone1" type="text"  placeholder="Phone Number"/><br></br><br></br>
        <input className="detail mail1" type="text" placeholder="Email"/><br></br><br></br>
        <textarea className="detail mess1" placeholder="Type your Message"></textarea><br></br><br></br>
        <button onclick="submit">Submit</button><br></br><br></br>
      </form>
    </div><br></br><br></br>
          </div>
    
  )
}

export default CotactUs



