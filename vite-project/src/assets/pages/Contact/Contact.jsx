import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { Newheader } from '../../component/newheader/Newheader';
import { Footer } from '../../component/footer/Footer';

import "./Contact.css"



export const Contact = () => {
  return (
    <div className='contactconatiners'>
        <Newheader/>
         <div  className='conatinerscontact'>
      
        <div className="contacttexttop">
                 <h3>Əlaqə</h3>
            <p>Bizimlə əlaqə saxlayın</p>
            </div>
        <div className="contactcontainer">
            
           
            <div className="contactright">
                <form action="">
                    <h2>Bizə Yazın</h2>
                   <div className="contactlabeltop">
                    <div className="contactlabel">
                        <label htmlFor="">Ad*</label>
                        <input placeholder='Adınız' type="text" name="" id="" />
                    </div>
                      <div className="contactlabel">
                        <label htmlFor="">Soyad*</label>
                        <input placeholder='email@numune.com' type="text" name="" id="" />
                    </div>
                   </div>

                   <div className="contactbpttom">
                    <div className="labeltop">
                        <label htmlFor="">Mövzu</label>
                    <input placeholder='Mövzu' type="text" name="" id="" />
                    </div>
                    
                   </div>

                   <div className="contactarea">
                    <div className="area">
                        <label htmlFor="">Mesaj*</label>
                    <textarea placeholder='Mövzu' name="" id=""></textarea>
                    </div>
                    
                   </div>

                   <div className="concatbtn">
                    <button><RiTelegram2Fill />Göndər</button>
                   </div>
                  
                </form>
                <div className="iframecontainer">
   <div className="contactinfo">
                    <h2>Əlaqə məlumatları</h2>
                <div className="info">
                    <div className="infoicon">
                    <CiLocationOn className='infoicons' />
                    </div>
                    <div className="infotext">
                        <h2>Ünvan</h2>
                        <p>Azərbaycan, Mingəçevir şəhəri, D.Əliyeva küçəsi 21</p>
                    </div>
                </div>
                <div className="info">
                    <div className="infoicon">
                    <FaPhoneAlt className='infoicons' />
                    </div>
                    <div className="infotext">
                        <h2>Telefon</h2>
                        <p>+994 24 266 17 41</p>
                    </div>
                </div>
                <div className="info">
                    <div className="infoicon">
                    <MdOutlineMail className='infoicons' />
                    </div>
                    <div className="infotext">
                        <h2>Email</h2>
                        <p>info@mdu.edu.az</p>
                    </div>
                </div>
            </div>
            <div className="iframe">
                <iframe 
  src="https://www.google.com/maps?q=Ming%C9%99%C3%A7evir%20D%C3%B6vl%C9%99t%20Universiteti&output=embed"
  width="96%" 
  height="400" 
  style={{ border: 0 }} 
  allowfullscreen="" 
  loading="lazy">
</iframe>
            </div>
                </div>
               
            </div>
          
        </div>
    </div>
<Footer/>
    </div>
   
  )
}
