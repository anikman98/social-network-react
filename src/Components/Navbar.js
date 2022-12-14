import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Home from './Home';
import AuthUser from './AuthUser';

const Navbar = () => {

  const {getToken,token,logout,user} = AuthUser();

    const logoutUser = () => {
        if(token != undefined){
            logout();
        }
    }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand" href="#">Social Network</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  {
                    getToken() 
                    ? <>
                      <li className="nav-item">
                        <Link className="nav-link" to="/friends">Friends</Link>
                      </li> 
                      <li className="nav-item">
                        <Link className="nav-link" to="/search">Search</Link>
                      </li> 
                      <li className="nav-item">
                        <Link className='nav-link' to='/profile'>{user.username}</Link>
                      </li>
                      <li className="nav-item">
                        <span role="button" className="nav-link" onClick={logoutUser}>Logout</span>
                      </li>
                    </>
                    :
                    <>
                      <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                      </li>
                    </>
                  }
              </ul>
            </div>  
        </div>
    </nav>
  )
}

export default Navbar