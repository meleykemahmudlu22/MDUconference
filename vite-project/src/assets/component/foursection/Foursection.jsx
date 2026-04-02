import React from 'react'
import "./foursection.css"
export const Foursection = () => {
    const title= ["Bütün Mövzular","Davamlı inkişaf ","Tətbiqi Elimlər","Heydər Əliyev İrsi","Təhsil İnnovasiyaları","Suni intelekt ","Iqtisadiat ","Ekologiya","Filologiya","Kibertəhlükəsizlik","Enerji siyasəti","Multidissiplinar"]
  return (
    <div className='foursearch'>
      <div className="searchsection">
            <div className="searchbox">
                <button>Kəşf Et</button>
                <h1>Konfrans Tövsiyəçisi</h1>
                <p>Maraq sahənizi seçin, sizə uyğun konfransları tapaq</p>

               <select name="" id="">
                 {title.map(item =>(
 <option key={item} value={item}>{item} </option>
          ))}
           
               </select>
            </div>
        </div>
    </div>
        
    
  )
}
