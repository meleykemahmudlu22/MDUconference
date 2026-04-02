import React from 'react'
import "./about.css"
import { PiMedal } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import { Newheader } from '../../component/newheader/Newheader';
import { Footer } from '../../component/footer/Footer';

export const About = () => {
    return  (
        <div className='aboutconatiners'>
        <Newheader/>
            <div className="aboutcontainer">
                <div className="abouttext">
                    <h2>Haqqımızda</h2>
                    <p>MDU Konfrans Mərkəzinin missiyası və ənənələri</p>
                </div>

                <div className="aboutbox">
                    <div className="aboutleft">
                        <div className="aboutlefttext">
                            <h2>Konfrans Ənənəmiz</h2>
                        </div>
                        <div className="abouttextbottm">
                            <p>Mingəçevir Dövlət Universiteti 2000-ci illərdən başlayaraq mütəmadi olaraq milli və beynəlxalq səviyyəli elmi konfranslar təşkil edir. Bu konfranslar universitetin akademik potensialını nümayiş etdirməklə yanaşı, elm adamlarının, tədqiqatçıların və tələbələrin fikir mübadiləsi aparması üçün platforma rolunu oynayır.</p>
                            <p>MDU Konfrans Mərkəzi bu zəngin ənənənin rəqəmsal əksidir. Burada keçmiş konfransların arxiv materiallarından tutmuş, gələcək tədbirlərə qeydiyyata qədər bütün proseslər vahid platformada cəmləşdirilib. Məqsədimiz — elmi fəaliyyəti daha əlçatan, şəffaf və effektiv etməkdir.</p>
                            <p>Universitetimiz davamlı inkişaf, süni intellekt, təhsil innovasiyaları, ekoloji təhlükəsizlik və milli dəyərlərin qorunması kimi aktual mövzularda konfranslar keçirir. Hər il 15-dən çox ölkədən 1500-ə yaxın alim və tədqiqatçı tədbirlərimizdə iştirak edir.</p>
                        </div>
                    </div>
                    <div className="aboutboxleft">
                        <div className="leftbox">
                            <div className="leftboxicon">
                             <PiMedal className='abouticon' />
                            </div>
                            <div className="leftboxtext">
                                <h2>Missiya</h2>
                                <p>Elmi tədqiqatı dəstəkləmək və beynəlxalq əməkdaşlığı genişləndirmək</p>
                            </div>
                        </div>
                        <div className="leftbox">
                            <div className="leftboxicon">
                             <PiMedal className='abouticon' />
                            </div>
                            <div className="leftboxtext">
                                <h2>Missiya</h2>
                                <p>Elmi tədqiqatı dəstəkləmək və beynəlxalq əməkdaşlığı genişləndirmək</p>
                            </div>
                        </div>
                        <div className="leftbox">
                            <div className="leftboxicon">
                             <PiMedal className='abouticon' />
                            </div>
                            <div className="leftboxtext">
                                <h2>Missiya</h2>
                                <p>Elmi tədqiqatı dəstəkləmək və beynəlxalq əməkdaşlığı genişləndirmək</p>
                            </div>
                        </div>
                        <div className="leftbox">
                            <div className="leftboxicon">
                             <PiMedal className='abouticon' />
                            </div>
                            <div className="leftboxtext">
                                <h2>Missiya</h2>
                                <p>Elmi tədqiqatı dəstəkləmək və beynəlxalq əməkdaşlığı genişləndirmək</p>
                            </div>
                        </div>
                    </div>

                   
                </div>
                 <div className="aboutnumber">
                        <div className="aboutnumberbox">
                            <div className="aboutnumbertext">
                                <h1>60+</h1>
                                <p>Keçirilmiş Konfrans</p>
                            </div>
                            <div className="aboutnumbertext">
                                <h1>60+</h1>
                                <p>Keçirilmiş Konfrans</p>
                            </div>
                            <div className="aboutnumbertext">
                                <h1>60+</h1>
                                <p>Keçirilmiş Konfrans</p>
                            </div>
                            <div className="aboutnumbertext">
                                <h1>60+</h1>
                                <p>Keçirilmiş Konfrans</p>
                            </div>
                        </div>
                    </div>

                    <div className="abouttreecontainer">
                        <h2>Tərəfdaş Universitetlər</h2>
                        <div className="abottrebox">
                          
                          <div className="abouttreete">
                            <TbWorld className='abouttreeicon'/>
                            <h3>Qazi Universiteti (Türkiyə)</h3>
                          </div>
                          <div className="abouttreete">
                            <TbWorld className='abouttreeicon'/>
                            <h3>Qazi Universiteti (Türkiyə)</h3>
                          </div>
                          <div className="abouttreete">
                            <TbWorld className='abouttreeicon'/>
                            <h3>Qazi Universiteti (Türkiyə)</h3>
                          </div>
                          <div className="abouttreete">
                            <TbWorld className='abouttreeicon'/>
                            <h3>Qazi Universiteti (Türkiyə)</h3>
                          </div>
                          <div className="abouttreete">
                            <TbWorld className='abouttreeicon'/>
                            <h3>Qazi Universiteti (Türkiyə)</h3>
                          </div>
                          <div className="abouttreete">
                            <TbWorld className='abouttreeicon'/>
                            <h3>Qazi Universiteti (Türkiyə)</h3>
                          </div>
                          <div className="abouttreete">
                            <TbWorld className='abouttreeicon'/>
                            <h3>Qazi Universiteti (Türkiyə)</h3>
                          </div>
                        </div>
                    </div>
            </div>
            <Footer/>
        </div>
    )
}
