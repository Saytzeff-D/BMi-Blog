import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="mb-5 pb-5">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-bmi navbar-height bmi-opacity-lg">
          <span
            className="navbar-brand mx-0 mx-lg-5 font-weight-bold text-white"
          >
            <img
              src={require('../assets/bmi_logo.png')}
              alt="Basileia Ministries Int'l"
              width="30px"
            />
            <Link className="pl-3 text-white" to="/https://bm-i-frontend.vercel.app" style={{cursor: 'pointer'}}>BMi</Link> / <Link className='text-white' to="/" style={{cursor: 'default'}}>Blog</Link>
          </span>
          <div className="collapse navbar-collapse justify-content-end bmi-collapse-opacity" id="bmiNavBar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className="nav-link text-white p-0" style={{fontSize: '15px'}} aria-current="page">
                    <span className='text-white align-content-end'>Stay in touch</span><br />
                    <span className="text-muted">Get notified of new posts</span>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link text-white p-0 mx-2">
                <input className='form-control bg-bmi text-bmi-match' placeholder='Email Address' />
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link text-white p-0 font-weight-bold cursor-pointer">
                <button className='btn bg-match-bmi' >Subscribe</button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
