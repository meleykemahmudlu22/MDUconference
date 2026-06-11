import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
import "./login.css";
import { Newheader } from "../../component/newheader/Newheader";
import { Footer } from "../../component/footer/Footer";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Zəhmət olmasa bütün xanaları doldurun!");
      return;
    }

    if (!emailRegex.test(formData.email)) {
      alert("Email düzgün formatda deyil!");
      return;
    }

    try {
      const res = await axios.get("https://678e58c7a64c82aeb1200f8c.mockapi.io/new");
      const users = res.data;

      const foundUser = users.find(
        (u) => u.email === formData.email && u.password === formData.password
      );

      if (foundUser) {
        alert("Uğurla daxil oldunuz!");
        
        setFormData({ email: "", password: "" });

        navigate("/"); 
      } else {
        alert("Belə bir istifadəçi mövcud deyil!");
      }
    } catch (err) {
      console.log(err);
      alert("Serverdə xəta baş verdi!");
    }
  };

  return (
    <div>
      <Newheader/>
      <div className="login-container">
        <h1>Daxil ol</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email*</label>
            <input
              type="text"
              name="email"
              value={formData.email}  
              placeholder="email@numune.com"
              onChange={handleChange}
               autoComplete="new-email"
            />
          </div>
          <div className="form-group">
            <label>Şifrə*</label>
            <input
              type="password"
              name="password"
              value={formData.password} 
              placeholder="Şifrənizi daxil edin"
              onChange={handleChange}
              autoComplete="new-password"
            />
          </div>
          <button type="submit">Daxil ol</button>
        </form>
      </div>
      <Footer/>
    </div>
  );
};
