import React from 'react'
import {Link} from 'react-router-dom'

export default function Features({name}) {
  return (
    <div className="features">
    <a className="fe1 col-sm col-md" href="/">
      <div className=" col-sm" >
         <h3 className="fe-heading">
         <Link to="/features" className="navLinks" style={{color: "black"}}>
            {name}
         </Link>
         </h3>
      </div>
   </a>
    </div>
  )
}
