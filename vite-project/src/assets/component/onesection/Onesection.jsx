import React from 'react'

import { CiCalendar } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import "./onesection.css"
import { Link } from 'react-router-dom';

export default function Onesection() {
  return (
    <div className='onesection'>
    <div className="bodytext">
      <button>TEZLIKLƏ</button>
        <h2>Yaxınlaşan Konfranslar</h2>
    </div>
        
      <div className="onesections">
     
        <div className="box">
          <div className="boxbtn">
            <button>GƏLƏCƏK</button>
            <button>RESPUBLİKA</button>
          </div>
          <div className="boxtext">
            <h2>Ekoloji təhlükəsizlik və ətraf mühitin qorunması</h2>
          </div>
          <div className="paragraf">
            <p>Ətraf mühitin qorunması, ekoloji təhlükəsizlik və davamlı inkişaf</p>
          </div>
          <div className="boxicosn">
            <div className="oneicon">
              <CiCalendar className="icon" /> <p>22–23 Sentyabr 2025</p>
            </div>
            <div className="oneicon">
              <IoLocationOutline className='icon' /> <p>Mingəçevir Dövlət Universiteti</p>
            </div>

          </div>
          <div className="boxbottombtn">
            <Link to="/search"> 
            <button>Ətraflı Bax </button>
            </Link>
            <Link to="/register">
              <button>Qeydiyyat</button>
            </Link>
          
          </div>
        </div>
        <div className="box">
          <div className="boxbtn">
            <button>GƏLƏCƏK</button>
            <button>RESPUBLİKA</button>
          </div>
          <div className="boxtext">
            <h2>Ekoloji təhlükəsizlik və ətraf mühitin qorunması</h2>
          </div>
          <div className="paragraf">
            <p>Ətraf mühitin qorunması, ekoloji təhlükəsizlik və davamlı inkişaf</p>
          </div>
          <div className="boxicosn">
            <div className="oneicon">
              <CiCalendar className="icon" /> <p>22–23 Sentyabr 2025</p>
            </div>
            <div className="oneicon">
              <IoLocationOutline className='icon' /> <p>Mingəçevir Dövlət Universiteti</p>
            </div>

          </div>
          <div className="boxbottombtn">
             <Link to="/search"> 
            <button>Ətraflı Bax </button>
            </Link>
            <button>Qeydiyyat</button>
          </div>
        </div>
        <div className="box">
          <div className="boxbtn">
            <button>GƏLƏCƏK</button>
            <button>RESPUBLİKA</button>
          </div>
          <div className="boxtext">
            <h2>Ekoloji təhlükəsizlik və ətraf mühitin qorunması</h2>
          </div>
          <div className="paragraf">
            <p>Ətraf mühitin qorunması, ekoloji təhlükəsizlik və davamlı inkişaf</p>
          </div>
          <div className="boxicosn">
            <div className="oneicon">
              <CiCalendar className="icon" /> <p>22–23 Sentyabr 2025</p>
            </div>
            <div className="oneicon">
              <IoLocationOutline className='icon' /> <p>Mingəçevir Dövlət Universiteti</p>
            </div>

          </div>
          <div className="boxbottombtn">
             <Link to="/search"> 
            <button>Ətraflı Bax </button>
            </Link>
            <button>Qeydiyyat</button>
          </div>
        </div>
        <div className="box">
          <div className="boxbtn">
            <button>GƏLƏCƏK</button>
            <button>RESPUBLİKA</button>
          </div>
          <div className="boxtext">
            <h2>Ekoloji təhlükəsizlik və ətraf mühitin qorunması</h2>
          </div>
          <div className="paragraf">
            <p>Ətraf mühitin qorunması, ekoloji təhlükəsizlik və davamlı inkişaf</p>
          </div>
          <div className="boxicosn">
            <div className="oneicon">
              <CiCalendar className="icon" /> <p>22–23 Sentyabr 2025</p>
            </div>
            <div className="oneicon">
              <IoLocationOutline className='icon' /> <p>Mingəçevir Dövlət Universiteti</p>
            </div>

          </div>
          <div className="boxbottombtn">
             <Link to="/search"> 
            <button>Ətraflı Bax </button>
            </Link>
            <button>Qeydiyyat</button>
          </div>
        </div>
      </div>

    </div>
   
  )
}
