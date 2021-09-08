import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom';
export default function Header() {
    return (
        
    
      

      <header className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"/></svg>
            </a>
    
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><Link className="nav-link px-2 text-secondary" to="/Cover">Home</Link></li>
              {/* <li><a href="#" className="nav-link px-2 text-white">Features</a></li>
              <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
              <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
              <li><a href="#" className="nav-link px-2 text-white">About</a></li> */}
            </ul>
    
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              {/* <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search"/> */}
            </form>
    
            <div className="text-end">
              <Link type="button" className="btn btn-outline-light me-2" to="/Login">Login</Link>
              <Link type="button" className="btn btn-warning" to="/Register">Register</Link>
            </div>
          </div>
        </div>
      </header>
    )
}
