import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom';
export default function Header() {
  const currentUser = sessionStorage.getItem('user');

    const logout = () => {
        sessionStorage.removeItem('user');
        window.location.replace('/login');
    }

    const showLoggedIn = () => {

        if (currentUser) {
            return <>
                {/* <li className="nav-item">
                    <Link className="nav-link" to="/product">Product</Link>
                </li> */}
                <li className="nav-item">
                    <Link className="nav-link" to="/schedulae">schedular</Link>
                </li>
                <li className="nav-item">
                    <button onClick={logout} className="btn btn-danger">Logout</button>
                </li>
            </>
        } else {
            return <>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                </li>

            </>
        }
    }

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
              <li><Link className="nav-link" to="/schedular">Schedular</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  
   
  </body>
      

          )
}
