import React, { useState } from 'react'
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { GoDownload } from "react-icons/go";
import  axios from "axios"
import "./register.css"
import { Newheader } from '../../component/newheader/Newheader';
import { Footer } from '../../component/footer/Footer';
export const Register = () => {
    const [step,setStep]=useState(1)
  const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        organization: "",
        position: "",
        conferences: [],
        userType: "",
        file: null,
        message: ""
    })

   
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

   
    const handleCheckbox = (value) => {
        const exists = formData.conferences.includes(value)

        setFormData({
            ...formData,
            conferences: exists
                ? formData.conferences.filter(i => i !== value)
                : [...formData.conferences, value]
        })
    }

   
    const handleUserType = (type) => {
        setFormData({
            ...formData,
            userType: type
        })
    }

   
    const handleFile = (e) => {
        setFormData({
            ...formData,
            file: e.target.files[0]
        })
    }

    
    const validateStep = () => {

        if (step === 1) {
            if (!formData.name || !formData.surname || !formData.email || !formData.phone) {
                alert("Zəhmət olmasa bütün xanaları doldurun")
                return false
            }
        }

        if (step === 2) {
            if (formData.conferences.length === 0) {
                alert("Ən azı bir konfrans seçin")
                return false
            }
        }

        if (step === 3) {
            if (!formData.userType) {
                alert("İştirak növünü seçin")
                return false
            }
        }

        if (step === 4) {
            if (!formData.file) {
                alert("Fayl yükləyin")
                return false
            }
        }

        if (step === 5) {
            if (!formData.message) {
                alert("Mesaj yazın")
                return false
            }
        }

        return true
    }

 
    const nextStep = () => {
        if (!validateStep()) return
        if (step < 5) setStep(step + 1)
    }

   
    const backStep = () => {
        if (step > 1) setStep(step - 1)
    }

   
    const submitForm = async () => {
        if (!validateStep()) return

        try {
            const res = await axios.post("https://678e58c7a64c82aeb1200f8c.mockapi.io/new", {
                ...formData,
                file: formData.file ? formData.file.name : null
            })

            console.log("SUCCESS:", res.data)
            alert("Göndərildi!")

        } catch (err) {
            console.log(err)
        }
    }
  return (
  <div className='registercontainers' >
   <Newheader/>
   <div className='registertops'>
   
     <div className='registertopstext'>
                <h1>Qeydiyyat</h1>
                <p>Elmi fəaliyyətinizi bizimlə paylaşın</p>
            </div>
     <div className='center' >
        
        <div className="registercontainer">
            {
                [1,2,3,4,5,].map((item)=>(
                    <div className='topnumber' key={item}>
<button className={step===item?"active":""}>
    
    {item}
   
</button>
<p>
    {item === 1 && "Şəxsi məlumat"}
              {item === 2 && "Konfrans Seçimi"}
              {item === 3 && "İştirak Növü"}
              {item === 4 && "Fayl Yükləmə"}
              {item === 5 && "Şərh"}
</p>
                    </div>
                ))
            }
           
        </div>

        <div className="formdata">
            <div className="">
                 
                  
                    {step===1&&(
                        <div className='oneforumtop"'>
                              <h2>Şəxsi Məlumatlar</h2> 
                              <form action="">
                
                <div className="topinput">
                    <div className='label'> 
                        <label  htmlFor="">Ad*</label>
                    <input name='name' onChange={handleChange} placeholder='Adınız' type="text" />
                    </div>
                   <div className='label'>
                      <label   htmlFor="">Soyad*</label>
                    <input name='surname'  onChange={handleChange} placeholder='Soyadınız' type="text" />
                   </div>
                  
                </div>
                <div className="twoinp">
                  <div className='label'>
                      <label htmlFor="">Email*</label>
                    <input name='email'  onChange={handleChange} placeholder='email@numune.com' type="text" />
                   </div>
                     <div className='label'>
                      <label htmlFor="">Telefon*</label>
                    <input name='phone'  onChange={handleChange} placeholder='+994 xx xxx xx xx' type="text" />
                   </div>
                </div>
                <div className="topinput">
                   <div className='label'>
                      <label htmlFor="">Universitet/İş yeri</label>
                    <input name='organization'  onChange={handleChange} placeholder='Təşkilat Adı' type="text" />
                   </div>
                    <div className='label'>
                      <label htmlFor="">Vəzifə</label>
                    <input name='position'  onChange={handleChange} placeholder='Vəzifəniz' type="text" />
                   </div>
                </div>

             
            </form>
               <div className="next">
                    <div className="nextbuttontop">
                       
                    <button onClick={backStep} disabled={step===1}> <SlArrowLeft className='stepicon' />Geri</button>
                    </div>
                    <div className="nextbutton">
                       
                    <button onClick={nextStep} disabled={step===5}>Ireli <SlArrowRight className='steoicons' /></button>
                    </div>
                    
                </div>
                        </div>
            

            
           )}
            
                   
               
            </div>
        
           
           {
            step===2&&(
               
                <div className='twostep'>
                     <h2>Konfrans Seçimi</h2>
                     <p>Bir və ya bir neçə konfrans seçə bilərsiniz.</p>
                   <div className='stepcheckinp'>
                      <div className="checkb">
                        <div className="chechinp">
                             <input  onChange={() => handleCheckbox("Konfrans 1")} type="checkbox" name="" id="" />
                        </div>
                        <div className="checktext">
                            <h5>Davamlı İnkişaf Strategiyası: Qlobal Meyillər, Milli Təcrübə və Yeni Hədəflər</h5>
                            <p>2025-12-06</p>
                        </div>

                     </div>
                     <div className="checkb">
                        <div className="chechinp">
                             <input onChange={() => handleCheckbox("Konfrans 2")} type="checkbox" name="" id="" />
                        </div>
                        <div className="checktext">
                            <h5>Riyaziyyat, Mühəndislik, Təbiət və Tibb Elmləri üzrə 21-ci Beynəlxalq Avropa Konfransı (MAS)</h5>
                            <p>2026-03-02</p>
                        </div>

                     </div>
                     <div className="checkb">
                        <div className="chechinp">
                             <input onChange={() => handleCheckbox("Konfrans 3")} type="checkbox" name="" id="" />
                        </div>
                        <div className="checktext">
                            <h5> Heydər Əliyev irsinin strateji əhəmiyyəti: davamlı inkişaf perspektivləri</h5>
                            <p>2025-12-11</p>
                        </div>

                     </div>
                     <div className="checkb">
                        <div className="chechinp">
                             <input onChange={() => handleCheckbox("Konfrans 4")} type="checkbox" name="" id="" />
                        </div>
                        <div className="checktext">
                            <h5> Təhsildə keyfiyyət, dayanıqlılıq və innovasiya forumu</h5>
                            <p>2026-02-13</p>
                        </div>

                     </div>
                     <div className="checkb">
                        <div className="chechinp">
                             <input onChange={() => handleCheckbox("Konfrans 5")} type="checkbox" name="" id="" />
                        </div>
                        <div className="checktext">
                            <h5> Ekoloji təhlükəsizlik və ətraf mühitin qorunması</h5>
                            <p>2025-09-22</p>
                        </div>

                     </div>
                     <div className="checkb">
                        <div className="chechinp">
                             <input onChange={() => handleCheckbox("Konfrans 6")} type="checkbox" name="" id="" />
                        </div>
                        <div className="checktext">
                            <h5>Gənc alimlərin I Respublika Elmi Konfransı</h5>
                            <p>2025-11-15</p>
                        </div>

                     </div>
                   </div>

                      <div className="next">
                    <div className="nextbuttontop">
                       
                    <button onClick={backStep} disabled={step===1}> <SlArrowLeft className='stepicon' />Geri</button>
                    </div>
                    <div className="nextbutton">
                       
                    <button onClick={nextStep} disabled={step===5}>Ireli <SlArrowRight className='steoicons' /></button>
                    </div>
                    
                </div>
                    
                </div>
               
            )
           }
           {
            step===3&&(
            <div className='tresteptop'>
                <div className="treestep">
                    <h2>İştirak Növü</h2>
                    <div onClick={() => handleUserType("Dinləyici")} className={`trestepbox ${formData.userType === "Dinləyici" ? "activeType" : ""}`} >
                        <h4 >Dinləyici</h4>
                        <p>Konfransı dinləyici kimi izləyəcəyəm</p>
                    </div>
                    <div onClick={() => handleUserType("Məruzəçi")}  className={`trestepbox ${formData.userType === "Məruzəçi" ? "activeType" : ""}`}>
                        <h4 >Məruzəçi</h4>
                        <p>Məruzə ilə çıxış edəcəyəm</p>
                    </div>
                    <div onClick={() => handleUserType("Poster")} className={`trestepbox ${formData.userType === "Poster" ? "activeType" : ""}`}>
                        <h4 >Poster</h4>
                        <p>Poster təqdimatı ilə iştirak edəcəyəm</p>
                    </div>
                </div>
                  <div className="next">
                    <div className="nextbuttontop">
                       
                    <button onClick={backStep} disabled={step===1}> <SlArrowLeft className='stepicon' />Geri</button>
                    </div>
                    <div className="nextbutton">
                       
                    <button onClick={nextStep} disabled={step===5}>Ireli <SlArrowRight className='steoicons' /></button>
                    </div>
                    
                </div>
            </div>
            )
           }
           {
            step===4&&(
                <div className='filecommon'>
                    <h2>Məqalə / Tezis Yükləmə</h2>
                <div className='filebox'>
                  

                    <div className="file">
                        <GoDownload className='fileicon' />
                        <p>PDF faylını bura yükləyin</p>
                    <p>və ya</p>
                 <label label className="customFile">
  Fayl seçin
  <input type="file" onChange={handleFile} />
</label>
                    <p>Maxsimum 10 MB,yalnız PDF</p>
                    </div>
                </div>
                <div className="next">
                    <div className="nextbuttontop">
                       
                    <button onClick={backStep} disabled={step===1}> <SlArrowLeft className='stepicon' />Geri</button>
                    </div>
                    <div className="nextbutton">
                       
                    <button onClick={nextStep} disabled={step===5}>Ireli <SlArrowRight className='steoicons' /></button>
                    </div>
                    
                </div>
                </div>
                  
            )
           }
           {
            step===5&&(
                <div className='forumcontainers'>
                       
                    <div className='stepformbox'>
                        <h2>Əlavə Şərh</h2>
                        <form action="">
                           <textarea
  name="message"
  onChange={handleChange}
  placeholder='Əlavə Məlumat...'
/>
                        </form>
                    </div>
              
                <div className="next">
                    <div className="nextbuttontop">
                       
                    <button onClick={backStep} disabled={step===1}> <SlArrowLeft className='stepicon' />Geri</button>
                    </div>
                    <div className="nextbutton">
                       
                    <button onClick={submitForm}>Ireli <SlArrowRight className='steoicons' /></button>
                    </div>
                    
                </div>
                
                </div>
                
            )
           }
          
        </div>
    </div>
   </div>
   <Footer/>
  </div>
  )
}
