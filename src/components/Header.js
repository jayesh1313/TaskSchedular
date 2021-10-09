import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom';
import '../stylesheets/Header.css'
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
                    <Link className="nav-link" to="/schedule">schedular</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/addappointment">Add Appointment</Link>
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
      
      <nav class="navbar navbar-expand-custom navbar-mainbg">
      <a class="navbar-brand navbar-logo" href="#">Task Schedular</a>
      <button class="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fas fa-bars text-white"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
              <div class="hori-selector"><div class="left"></div><div class="right"></div></div>
              <li class="nav-item">
                  <Link class="nav-link" href="javascript:void(0);" to="/Cover"><i class="fas fa-tachometer-alt"></i>Home</Link>
              </li>
             
             
              <li class="nav-item">
                  <Link class="nav-link" href="javascript:void(0);"to="/Login"><i class="far fa-clone" ></i>Login</Link>
              </li>
              <li class="nav-item">
                  <Link class="nav-link" href="javascript:void(0);" to="/Register"><i class="far fa-calendar-alt"></i>Registert</Link>
              </li>
              <li class="nav-item">
                  <Link class="nav-link" href="javascript:void(0);" to="/schedule"><i class="far fa-chart-bar"></i>Schedular</Link>
              </li>
              <li class="nav-item">
                  <Link class="nav-link" href="javascript:void(0);" to="/addappointment"><i class="far fa-copy"></i>Add Appointment</Link>
              </li>
              <li class="nav-item">
                  <Link class="nav-link" href="javascript:void(0);"to="/login"><i class="far fa-copy"></i>Logout</Link>
              </li>
          </ul>
      </div>
  </nav> 

          )
}
