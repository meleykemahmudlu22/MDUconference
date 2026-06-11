import React, { useEffect, useState } from 'react'

import { CiCalendar } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import "./onesection.css"
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Onesection() {
const[datas,setDatas]=useState([])

  useEffect(()=>{
 async function getdata () {
  try {
    
  const {data}=  await axios.get("https://6a1ad52fbc2f94475492b2ec.mockapi.io/conference")
  setDatas(data)

  } catch (error) {
    console.log(error);
    
  }
    
  }
  getdata()
  },[])
  return (
    <div className='onesection'>
    <div className="bodytext">
      <button>TEZLIKLƏ</button>
        <h2>Yaxınlaşan Konfranslar</h2>
    </div>
        
      <div className="onesections">
     
       {
        datas.map((item)=>(
           <div className="box"key={item.id}>
          <div className="boxbtns">
            <button>GƏLƏCƏK</button>
            <button>RESPUBLİKA</button>
          </div>
          <div className="boxtext">
            <h2>{item.name}</h2>
          </div>
          <div className="paragraf">
            <p>{item.title}</p>
          </div>
          <div className="boxicosn">
            <div className="oneicon">
              <CiCalendar className="icon" /> <p>{item.date}</p>
            </div>
            <div className="oneicon">
              <IoLocationOutline className='icon' /> <p>{item.location}</p>
            </div>

          </div>
          <div className="boxbottombtns">
            <Link to={`/detail/${item.id}`}> 
            <button>Ətraflı Bax </button>
            </Link>
            {/* <Link to="/register">
              <button>Qeydiyyat</button>
            </Link> */}
          
          </div>
        </div>
        ))
       }
      
      </div>

    </div>
   
  )
}
