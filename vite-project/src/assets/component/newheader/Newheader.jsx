import React from 'react'
import { IoIosMoon } from "react-icons/io";
import { Link } from 'react-router-dom'
import image from "../../../image/ChatGPT Image May 13, 2026, 01_27_07 PM.png"
import { IoMdMenu } from "react-icons/io";
import "./newheader.css"

export const Newheader = () => {
  return (
    <div className='newheadercontainer'> 
        <div className="Header">
            <div className="headerlogi">
              <div className="logo">
                <img src={image} alt="MDU Logo" />
              </div>
              <div className="logotext">
                <h2>MDU Konfrans Mərkəzi</h2>
                <p>Elm və Təhsil üçün Platforma</p>
              </div>
            </div>
    
            <div className="headernav">
              <nav>
                <ul>
                  <Link to="/">
                   <li>Ana səhifə</li>
                  </Link>
                 
                  <Link to="/search">
                   <li>Konfranslar</li>
                  </Link>
                 
                  <Link to="/archve">
                   <li>Arxiv</li>
                  </Link>
                 <Link to="/calendar">
                  <li>Təqvim</li>
                 </Link>
                 
                  <Link to="/register">
                  <li>Qeydiyyat</li>
                  </Link>
                  <Link to="/about">
                  <li>Haqqımızda</li>
                  </Link>
                  <Link to='/contact'>
                    <li>Əlaqə</li>
                  </Link>
                
                </ul>
              </nav>
            </div>
    
            <div className="headericon">
              <IoIosMoon />
            </div>
            <div className="menu">
<IoMdMenu />
            </div>
          </div></div>
  )
}
