import React from 'react'

import {Routes,Route} from 'react-router-dom'

import { Home } from './assets/Home/Home'
import { Register } from './assets/pages/register/Register'
import { Archive } from './assets/pages/Archivese/Archive'
import { About } from './assets/pages/about/About'
import { Contact } from './assets/pages/Contact/Contact'
import Calendar from './assets/pages/Calendar/Calendar'
import { Search } from './assets/pages/searchPge/Search'


export default function App() {
  return (
    <div>
<Routes>  
  <Route path='/' element={<Home/>}/>
  <Route path='/search' element={<Search/>}/>
<Route path='/archve' element={<Archive/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/calendar' element={<Calendar/>}/>
</Routes>
      
    </div>
  )
}
