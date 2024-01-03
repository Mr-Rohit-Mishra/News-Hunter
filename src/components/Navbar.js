import React from 'react'
import{Link}from "react-router-dom";

export default  function Navbar() {
  
  return (
    <>
      <nav className="navbar d-flex flex-column fixed-top" style={{backgroundColor: '#f1f1f1'}}>
        <Link className="navbar-brand fs-2" to="/general">NEWS-HUNTER</Link>
        
              
          <ul className="navbar-nav d-flex flex-row justify-content-evenly">
            <li className="nav-item mx-4 fs-5 fw-semibold">
              <Link className="nav-link" to="/general">Home</Link>
            </li>
            <li className="nav-item mx-4 fs-5 fw-semibold">
              <Link className="nav-link" to="/business">Business</Link>
            </li>
            <li className="nav-item mx-4 fs-5 fw-semibold">
              <Link className="nav-link" to="/entertainment">Entertainment</Link>
            </li>
            <li className="nav-item mx-4 fs-5 fw-semibold">
              <Link className="nav-link" to="/health">Health</Link>
            </li>
            <li className="nav-item mx-4 fs-5 fw-semibold">
              <Link className="nav-link" to="/science">Science</Link>
            </li>
            <li className="nav-item mx-4 fs-5 fw-semibold">
              <Link className="nav-link" to="/sports">Sports</Link>
            </li>
            <li className="nav-item mx-4 fs-5 fw-semibold">
              <Link className="nav-link" to="/technology">Technology</Link>
            </li>
            
          </ul>
            
        
      </nav>
    </>
  )
  
}
