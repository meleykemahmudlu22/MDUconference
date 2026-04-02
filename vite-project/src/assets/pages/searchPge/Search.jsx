import React, {  useEffect, useState } from 'react'
import { CiCalendar } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import axios from "axios";
import "./search.css"
import { Newheader } from '../../component/newheader/Newheader';
export function Search() {
    const [active, setActive]= useState(0)
    const [searchdata, setSearchdata] =useState([])
    const [selectedYear ,setSelectedyear]=useState("")
    const [searchText,setSearchText]=useState("")
    const [selectfakulty ,setSelectfakulty]=useState("")
    const [selecttitle,setSelecttitle]=useState("")
    const year= [ 2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026]
    const dates= ["Bütün fakültələr ","Mühəndislik","Təbiət elimləri","Humanitar Elimlər","Təhsil","Iqtisadiat və idarəetmə"]
    const titles= ["Bütün Mövzular","Davamlı inkişaf ","Tətbiqi Elimlər","Heydər Əliyev İrsi","Təhsil İnnovasiyaları","Suni intelekt ","Iqtisadiat ","Ekologiya","Filologiya","Kibertəhlükəsizlik","Enerji siyasəti","Multidissiplinar"]
    const categories = ["mdu", "respublika", "beynelxalq"]
     useEffect(() => {
  async function getdata(){
    let {data}=  await axios.get("https://678e58c7a64c82aeb1200f8c.mockapi.io/search")
    console.log(data) 
    setSearchdata(data)
  }
  getdata()
}, [])

   const filteredData = searchdata.filter(item => {

  const matchCategory = item.Category?.toLowerCase() === categories[active]

    const matchYear = selectedYear 
      ? item.year === Number(selectedYear )
      : true
  const matchfakulty =
  selectfakulty && selectfakulty !== "Bütün fakültələr "
    ? item.fakulty === selectfakulty
    : true;
    const mathtitle=
  selecttitle && selecttitle !== "Bütün Mövzular"
    ? item.title === selecttitle
    : true;

   const matchSearch = searchText
  ? (item.Title || "").toLowerCase().includes(searchText.toLowerCase())
  : true;
    return matchCategory && matchYear && matchSearch && matchfakulty&&mathtitle
  })

  return (
  <div className='searchcontainers'>
   <Newheader/>
   <div className="searchtexttop">
    
   <div className="searchcommon">
     <div className="searchtext">
        <h2>Konfranslar</h2>
        <p>MDU və tərəfdaş universitetlərin elmi tədbirləri</p>
    </div>
<div className="searcinpbtn">
       <div className="searchbtn">
       <button
  className={active===0 ? "active":""}
  onClick={() => {
    setActive(0)
    setSelectedyear("") 
    setSelecttitle("")
    setSelectfakulty("")
  }}
>
  MDU-da keçirilənlər
</button>

<button
  className={active===1 ? "active":""}
  onClick={() => {
    setActive(1)
    setSelectedyear("") 
     setSelecttitle("")
     setSelectfakulty("")
  }}
>
  Respublika Səviyyəli
</button>

<button
  className={active===2 ? "active":""}
  onClick={() => {
    setActive(2)
    setSelectedyear("") 
     setSelecttitle("")
     setSelectfakulty("")
  }}
>
  Beynəlxalq
</button>
    </div>
    <div className="searchinp">
        <input onChange={(e)=>setSearchText(e.target.value)} placeholder='Axtar...' type="text" name="" id="" />

        <select value={setSelectedyear} onChange={(e)=>setSelectedyear(e.target.value)} name="" id="">
          {
            year.map(years=>(
               <option key={years} value={years}>{years}</option>
            ))
          }
            
        </select>
        <select value={selectfakulty} onChange={(e)=>setSelectfakulty(e.target.value)} name="" id="">
          {dates.map(fakulty=>(
 <option key={fakulty} value={fakulty}>{fakulty}</option>
          ))}
           
        </select>
        <select value={selecttitle} onChange={(e)=>setSelecttitle(e.target.value)} name="" id="">
          {titles.map(item =>(
 <option key={item} value={item}>{item} </option>
          ))}
           
        </select>
    </div>
</div>
<div className="searchbox">
       <div className="kf">
  {filteredData.length === 0 ? (
    <p>Heç bir məlumat yoxdur</p>
  ) : (
    filteredData.map((item) => (
      <div key={item.id} className="boxss">
        <div className="boxbtn">
          <div className="boxbtn">
            <button className="boxbtns">
              {item.status === "gelecek" ? "GƏLƏCƏK" : "ARXİV"}
            </button>

            <button className="boxbtns">
              {item.Category === "respublika" ? "RESPUBLİKA" : "BEYNƏLXALQ"}
            </button>
          </div>
        </div>

        <div className="boxtext">
          <h2>{item.Title}</h2>
        </div>

        <div className="paragraf">
          <p>{item.button}</p>
        </div>

        <div className="boxicosn">
          <div className="oneicon">
            <CiCalendar className="icon" /> <p>{item.Category}</p>
          </div>
          <div className="oneicon">
            <IoLocationOutline className="icon" /> <p>Mingəçevir Dövlət Universiteti</p>
          </div>
        </div>

        <div className="boxbottombtn">
          <button>Ətraflı Bax</button>
          {item.status === "gelecek" && (
            <button>Qeydiyyat</button>
          )}
        </div>
      </div>
    ))
  )}
</div>
</div>
   </div>
 </div>
  </div>
  
  
 
    
  )
}
