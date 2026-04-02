import React from 'react'
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import "./footer.css"

export const Footer = () => {
    return (
        <div>
            <div className="footersection">
              <div className="toxtextfooter">
                  <div className="footerboxtop">
                    <div className="footerbtn">
                        <div className="mdubtn">
                            <button>MDU</button>
                        </div>
                        <div className="mdutext">
                            <p>MDU Konfrans Mərkəzi</p>
                            <p>Elm və İnnovasiya üçün Rəsmi Platforma</p>
                        </div>

                    </div>
                    <div className="footertext">
                        <p>Mingəçevir Dövlət Universitetinin rəsmi konfrans portalı. Elmi fəaliyyətinizi bizimlə paylaşın.</p>
                    </div>

                </div>
                <div className="footernav">
                    <h2>Keçidlər</h2>
                    <nav>
                        <ul>
                            <li>Konfranslar</li>
                            <li>Arxiv</li>
                            <li>Təqvim</li>
                            <li>Qeydiyyat</li>
                            <li>Haqqımızda</li>
                        </ul>
                    </nav>
                </div>

                <div className="contact">
                    <h2>Əlaqə</h2>
                    <div className="iconfooter">
                        <IoLocation className='ifooter' /> <p>Azərbaycan, Mingəçevir şəhəri, D.Əliyeva küçəsi 21</p>
                    </div>
                    <div className="iconfooter">
                        <FaPhoneAlt className='ifooter' /> <p>+994 24 266 17 41</p>
                    </div>
                    <div className="iconfooter">
                        < MdOutlineEmail className='ifooter' /><p>info@mdu.edu.az</p>
                    </div>



                </div>

                <div className="social">
                    <h2>Sosial Şəbəkələr</h2>
                    <div className="socialicon">
                        <p><FaInstagram /> </p>
                        <p> <FaFacebookF /></p>
                        <p><CiYoutube /></p>
                    </div>

                </div>

              </div>
 <hr />
            <div className="bootomfooter">
                <p>© 2026 Mingəçevir Dövlət Universiteti. Bütün hüquqlar qorunur.</p>
            </div>
            </div>
           
        </div>
    )
}
