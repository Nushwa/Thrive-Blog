import React, {useContext} from 'react'
import '../stylesheets/navbar.css'
import '../bootstrap-5.2.0-beta1-dist/css/bootstrap.css'
import {Link} from 'react-router-dom'
import {Context} from '../context/Context.js'

export default function Navbar(){
  const {user, dispatch} = useContext(Context);
    const PF = "http://localhost:5000/images/"


  const handleLogout = ()=>{
    dispatch({type: "LOGOUT"})
  }

    return(
        <nav className=" navbar navbar-expand-lg navbar-light">
    <div className="container-fluid">
        <a style={{fontSize: '38px', padding: '12px', fontFamily: '"Dosis", sans-serif'}} className="navbar-brand" href="/">Thrive Blog</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>    
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
              <Link to="/" className="navLinks">Home</Link>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link " href="/"><Link to="/write" className="navLinks">Write</Link></a>
            </li>
           <li className="nav-item">
              <a className="nav-link" href="/">
              {user ?
               <Link to="/login" className="navLinks" onClick={handleLogout}>Logout</Link>
               : <Link to="/login" className="navLinks">Register</Link>
              }
              
              </a>
            </li>
             
         
            <div className="topRight">
            <li className="nav-item">
              <a className="nav-link" href="/">
              {user ? 
              <Link to="/settings" className="navLinks"> <img className="topImg" src={PF + user.profilePicture} alt="" /> </Link>
              : <Link to="/login" className="navLinks">Login</Link>
              }

              </a>
            </li>

            
            
            </div>
          </ul>  
      </div>
    </div>
  </nav>
    )
}
// {user && "Profile"}
// {user ? "Profile" : <Link to="/login" className="navLinks">Login</Link>}