import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom';
export default function Header() {
    return (
      
    <body>
    <div className="menu-wrap">
      <input type="checkbox" className="toggler"/>
      <div className="hamburger"><div></div></div>
      <div className="menu">
        <div>
          <div>
            <ul>
              <li><Link className="nav-link" to="/Cover">Home</Link></li>
              <li><Link className="nav-link" to="/Login">Login</Link></li>
              <li><Link className="nav-link" to="/Register">Register</Link></li>
              {/* <li><a href="#">Contact</a></li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  
   
  </body>
      

          )
}
