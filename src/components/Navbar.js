import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { setBlogTray } from '../actions';

const Navbar = () => {
  const dispatch = useDispatch()
    const url = useSelector(state=>state.UrlReducer.api)
  useEffect(()=>{
    axios.get(`${url}writeup`).then((res)=>{
        if(res.data.status){
            // console.log(res.data.resp)
            let tray;
            for (let writeup of res.data.resp) {
            let str = JSON.parse(writeup.content);
            writeup.content = str
              .map((val) => String.fromCharCode(val))
              .join('');
            tray.push(writeup);
        }
            dispatch(setBlogTray(tray))
            // dispatch(setBlogTray(res.data.resp))
        }
    })
}, [dispatch])
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
            <a className="pl-3 text-white" href="https://bm-i-frontend.vercel.app"  style={{cursor: 'pointer'}}>BMi</a> / <Link className='text-white' to="/" style={{cursor: 'default'}}>Blog</Link>
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
