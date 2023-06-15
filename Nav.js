import React from 'react';
import "./Nav.css";

function Nav() {
  return (
    <div>
        <nav className='navbar'>
            <div className="logo">
                <a href="#" className='nav-logo'>BeYou</a>
            </div>
            <div className="search-bar">
                <input type="search" className='form-control' placeholder='Search' aria-label="Search" />
            </div>
            <div className="nav-items">
              <i class="fa fa-times" onclick="hideMenu()"></i>
                <ul className="nav-menu">
                   <a href="MainContent.js"><li>Home</li></a>
                   <a href="#"><li>My Models</li></a>
                   <a href="#"><li>Eligibility</li></a>
                   <a href="About.js"><li>About</li></a>
                   <a href="#"><li>Contact Us</li></a>
                </ul>
              <i class="fa fa-bars" onclick="showMenu()"></i>

            </div>
        </nav>
        </div>
  )
}

export default Nav;


     {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">BeYou</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link" href="#" data-bs-toggle="dropdown" aria-expanded="false">
            
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Contact</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> */}
    

