import React, { useState } from 'react'
import axios from "axios"
import "./register.css"
import { Newheader } from '../../component/newheader/Newheader';
import { Footer } from '../../component/footer/Footer';

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    organization: "",
    position: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const validateForm = () => {
    if (!formData.name || !formData.surname || !formData.email || !formData.password) {
      alert("Zəhmət olmasa bütün xanaları doldurun!")
      return false
    }
    if (!emailRegex.test(formData.email)) {
      alert("📧 Email düzgün formatda deyil!")
      return false
    }
    return true
  }

  const submitForm = async (e) => {
    e.preventDefault()
    if (!validateForm()) return
    try {
      const res = await axios.post("https://678e58c7a64c82aeb1200f8c.mockapi.io/new", formData)
      console.log("SUCCESS:", res.data)
      alert("Qeydiyyat tamamlandı!")

    
      setFormData({
        name: "",
        surname: "",
        email: "",
        password: "",
        organization: "",
        position: ""
      })

    } catch (err) {
      console.log(err)
      alert("Xəta baş verdi!")
    }
  }

  return (
    <div className='registercontainers'>
      <Newheader />
      <div className='registertops'>
        <div className='registertopstext'>
          <h1>Qeydiyyat</h1>
          <p>Elmi fəaliyyətinizi bizimlə paylaşın</p>
        </div>

        <form autoComplete="off" className="formdata" onSubmit={submitForm}>
          <div className="topinput">
            <div className='label'>
              <label>Ad*</label>
              <input 
                name='name' 
                value={formData.name} 
                onChange={handleChange} 
                placeholder='Adınız' 
                type="text" 
              />
            </div>
            <div className='label'>
              <label>Soyad*</label>
              <input 
                name='surname' 
                value={formData.surname} 
                onChange={handleChange} 
                placeholder='Soyadınız' 
                type="text" 
              />
            </div>
          </div>

          <div className="twoinp">
            <div className='label'>
              <label>Email*</label>
              <input 
                name='email' 
                value={formData.email} 
                onChange={handleChange} 
                placeholder='email@numune.com' 
                type="text" 
                 autoComplete="new-email"

              />
            </div>
            <div className='label'>
              <label>Şifrə*</label>
              <input 
                name='password' 
                value={formData.password} 
                onChange={handleChange} 
                placeholder='Şifrənizi daxil edin' 
                type="password" 
                autoComplete="new-password"
              
              />
            </div>
          </div>

          <div className="topinput">
            <div className='label'>
              <label>Universitet/İş yeri</label>
              <input 
                name='organization' 
                value={formData.organization} 
                onChange={handleChange} 
                placeholder='Təşkilat Adı' 
                type="text" 
              />
            </div>
            <div className='label'>
              <label>Vəzifə</label>
              <input 
                name='position' 
                value={formData.position} 
                onChange={handleChange} 
                placeholder='Vəzifəniz' 
                type="text" 
              />
            </div>
          </div>

          <button type="submit">Göndər</button>
        </form>
      </div>
      <Footer />
    </div>
  )
}
