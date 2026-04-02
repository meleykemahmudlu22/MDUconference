import React from 'react'
import { IoIosMoon } from "react-icons/io";
import "./header.css"
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="HeaderContainer">

      <div className="Header">
        <div className="headerlogi">
          <div className="logo">
            <img src="https://mdu-konfrans-hub.lovable.app/assets/mdu-logo-KEc-IMqB.png" alt="MDU Logo" />
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
      </div>
      <div className="headersearch">
        <div className="searctext">
          <h1>MDU KONFRANS MƏRKƏZI</h1>
          <h3>Elm, İnnovasiya və Beynəlxalq Əməkdaşlıq üçün Platforma</h3>
        </div>
        <div className="search">
          <div className="input">
             <input placeholder='Konfrans axtar: mövzu,il,fakültə' type="text" />
             <div className="btn">
              <Link to="/search">
               <button>Axtar</button>
              </Link>
              
             </div>
              
          </div>
         
         <div className="icon">
          
         </div>
       

        </div>
      </div>
    </div>
  )
}
