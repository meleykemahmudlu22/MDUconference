import React from 'react'
import "./archive.css"
import { IoEyeOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Newheader } from '../../component/newheader/Newheader';
import { Footer } from '../../component/footer/Footer';

export const Archive = () => {
     const year= ["Bütün illər", 2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026]
    const dates= ["Bütün fakültələr ","Mühəndislik","Təbiət elimləri","Humanitar Elimlər","Təhsil","Iqtisadiat və idarəetmə"]
    const title= ["Bütün Mövzular","Davamlı inkişaf ","Tətbiqi Elimlər","Heydər Əliyev İrsi","Təhsil İnnovasiyaları","Suni intelekt ","Iqtisadiat ","Ekologiya","Filologiya","Kibertəhlükəsizlik","Enerji siyasəti","Multidissiplinar"]

    const formate= ["Bütün formatlar","PDF ","Video","Foto", ]
  return (
  
        <div className="archivecontainer">
             <Newheader/>
            <div className="archivebox">
                <div className="archivetext">
                    <h1>Arxiv</h1>
                    <p>Bütün konfrans materialları bir yerdə</p>
                </div>
                <div className="archiveboxtop">
                    
                    <div className="arciveleft">
                        <h4>Filtirlər</h4>
                        <div className="archivesearch">
                            <input  placeholder='Axtar...' type="text" name="" id="" />
                        </div>
                        <div className="archiveselect">
                            <select name="" id="">
                               {
            year.map(years=>(
               <option key={years} value={years}>{years}</option>
            ))
          }
                            </select>
                            <select name="" id="">
                              {dates.map(item=>(
 <option key={item} value={item}>{item}</option>
          ))}
                            </select>
                            <select name="" id="">
                               {title.map(item =>(
 <option key={item} value={item}>{item} </option>
          ))}
                            </select>
                            <select name="" id="">
                               {formate.map(item =>(
 <option key={item} value={item}>{item} </option>
          ))}
                            </select>
                        </div>
                    </div>
                    <div className="archiveright">
                        <div className="archiverightbox">
                            <div className="archiveicon">
                                   <IoDocumentTextOutline className='srchiveicon' />
                            </div>
                            <div className="archiveboxtext">
                                <h3>Konfrans Proqramı</h3>
                                <p>Davamlı İnkişaf Strategiyası: Qlobal Meyillər,</p>
                                <p>6–8 Dekabr 2025</p>
                            </div>
                            <div className="archivebtn">
                                <button><IoEyeOutline />Bax</button>
                                <button><FiDownload />Yüklə</button>
                            </div>
                        </div>
                        <div className="archiverightbox">
                            <div className="archiveicon">
                                   <IoVideocamOutline className='srchiveicon' />
                            </div>
                            <div className="archiveboxtext">
                                <h3>Konfrans Proqramı</h3>
                                <p>Davamlı İnkişaf Strategiyası: Qlobal Meyillər,</p>
                                <p>6–8 Dekabr 2025</p>
                            </div>
                            <div className="archivebtn">
                                <button><IoEyeOutline />Bax</button>
                                <button><FiDownload />Yüklə</button>
                            </div>
                        </div>
                        <div className="archiverightbox">
                            <div className="archiveicon">
                                   <IoDocumentTextOutline className='srchiveicon' />
                            </div>
                            <div className="archiveboxtext">
                                <h3>Konfrans Proqramı</h3>
                                <p>Davamlı İnkişaf Strategiyası: Qlobal Meyillər,</p>
                                <p>6–8 Dekabr 2025</p>
                            </div>
                            <div className="archivebtn">
                                <button><IoEyeOutline />Bax</button>
                                <button><FiDownload />Yüklə</button>
                            </div>
                        </div>
                        <div className="archiverightbox">
                            <div className="archiveicon">
                                   <IoVideocamOutline className='srchiveicon' />
                            </div>
                            <div className="archiveboxtext">
                                <h3>Konfrans Proqramı</h3>
                                <p>Davamlı İnkişaf Strategiyası: Qlobal Meyillər,</p>
                                <p>6–8 Dekabr 2025</p>
                            </div>
                            <div className="archivebtn">
                                <button><IoEyeOutline />Bax</button>
                                <button><FiDownload />Yüklə</button>
                            </div>
                        </div>
                        <div className="archiverightbox">
                            <div className="archiveicon">
                                   <IoDocumentTextOutline className='srchiveicon' />
                            </div>
                            <div className="archiveboxtext">
                                <h3>Konfrans Proqramı</h3>
                                <p>Davamlı İnkişaf Strategiyası: Qlobal Meyillər,</p>
                                <p>6–8 Dekabr 2025</p>
                            </div>
                            <div className="archivebtn">
                                <button><IoEyeOutline />Bax</button>
                                <button><FiDownload />Yüklə</button>
                            </div>
                        </div>
                        <div className="archiverightbox">
                            <div className="archiveicon">
                                   <IoVideocamOutline className='srchiveicon' />
                            </div>
                            <div className="archiveboxtext">
                                <h3>Konfrans Proqramı</h3>
                                <p>Davamlı İnkişaf Strategiyası: Qlobal Meyillər,</p>
                                <p>6–8 Dekabr 2025</p>
                            </div>
                            <div className="archivebtn">
                                <button><IoEyeOutline />Bax</button>
                                <button><FiDownload />Yüklə</button>
                            </div>
                        </div>
                        <div className="archiverightbox">
                            <div className="archiveicon">
                                   <IoDocumentTextOutline className='srchiveicon' />
                            </div>
                            <div className="archiveboxtext">
                                <h3>Konfrans Proqramı</h3>
                                <p>Davamlı İnkişaf Strategiyası: Qlobal Meyillər,</p>
                                <p>6–8 Dekabr 2025</p>
                            </div>
                            <div className="archivebtn">
                                <button><IoEyeOutline />Bax</button>
                                <button><FiDownload />Yüklə</button>
                            </div>
                        </div>
                        <div className="archiverightbox">
                            <div className="archiveicon">
                                   <IoDocumentTextOutline className='srchiveicon' />
                            </div>
                            <div className="archiveboxtext">
                                <h3>Konfrans Proqramı</h3>
                                <p>Davamlı İnkişaf Strategiyası: Qlobal Meyillər,</p>
                                <p>6–8 Dekabr 2025</p>
                            </div>
                            <div className="archivebtn">
                                <button><IoEyeOutline />Bax</button>
                                <button><FiDownload />Yüklə</button>
                            </div>
                        </div>
                        <div className="archiverightbox">
                            <div className="archiveicon">
                                   <IoDocumentTextOutline className='srchiveicon' />
                            </div>
                            <div className="archiveboxtext">
                                <h3>Konfrans Proqramı</h3>
                                <p>Davamlı İnkişaf Strategiyası: Qlobal Meyillər,</p>
                                <p>6–8 Dekabr 2025</p>
                            </div>
                            <div className="archivebtn">
                                <button><IoEyeOutline />Bax</button>
                                <button><FiDownload />Yüklə</button>
                            </div>
                        </div>
                        <div className="archiverightbox">
                            <div className="archiveicon">
                                   < MdOutlinePhotoSizeSelectActual className='srchiveicon' />
                            </div>
                            <div className="archiveboxtext">
                                <h3>Konfrans Proqramı</h3>
                                <p>Davamlı İnkişaf Strategiyası: Qlobal Meyillər,</p>
                                <p>6–8 Dekabr 2025</p>
                            </div>
                            <div className="archivebtn">
                                <button><IoEyeOutline />Bax</button>
                                <button><FiDownload />Yüklə</button>
                            </div>
                        </div>
                        <div className="archiverightbox">
                            <div className="archiveicon">
                                   <IoDocumentTextOutline className='srchiveicon' />
                            </div>
                            <div className="archiveboxtext">
                                <h3>Konfrans Proqramı</h3>
                                <p>Davamlı İnkişaf Strategiyası: Qlobal Meyillər,</p>
                                <p>6–8 Dekabr 2025</p>
                            </div>
                            <div className="archivebtn">
                                <button><IoEyeOutline />Bax</button>
                                <button><FiDownload />Yüklə</button>
                            </div>
                        </div>
                        <div className="archiverightbox">
                            <div className="archiveicon">
                                   <IoDocumentTextOutline className='srchiveicon' />
                            </div>
                            <div className="archiveboxtext">
                                <h3>Konfrans Proqramı</h3>
                                <p>Davamlı İnkişaf Strategiyası: Qlobal Meyillər,</p>
                                <p>6–8 Dekabr 2025</p>
                            </div>
                            <div className="archivebtn">
                                <button><IoEyeOutline />Bax</button>
                                <button><FiDownload />Yüklə</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    
  )
}
