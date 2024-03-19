


import './App.css';
import { Auth } from './Component/Auth';
import Navbar from './Component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Admin from './Component/Admin';
import User from './Component/User';
import Home from './Component/Home';
import Signup from './Component/Signup';
import Login from './Component/Login';
import Profile from './Component/Profile';
import AboutUs from './Component/AboutUs';
import CotactUs from './Component/CotactUs';
import Protect from './Component/Protect';

function App() {
  return (
    <div className="App">

      <Auth>
        
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/contactus" element={<CotactUs/>}/>
        <Route path="/users" element={<Protect><User/></Protect>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>

        </Routes>
      </Auth>
    </div>
  );
}

export default App;



