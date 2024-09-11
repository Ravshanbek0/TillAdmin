import React, { useState } from 'react'
import "./App.css"
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import BarNav from './barNav/BarNav'
import Table from './tables/Table'
import Settings from './settings/Settings'
import Home from './home/Home'
import { LuLayoutDashboard } from "react-icons/lu";
import { IoPersonSharp } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { FaTable } from "react-icons/fa";
import { RiMenuUnfold3Fill } from "react-icons/ri";
import { RiMenuFold3Fill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { LuFactory } from "react-icons/lu";
import Modal from './modal/Modal'




function App() {
  const [bar, setBar] = useState(false)
  const [modal, setModal] = useState(false)

  return (
    <div className='app'>
      <BrowserRouter>
        <div>
          <BarNav modal={modal} setModal={setModal} bar={bar} setBar={setBar} />
          {modal && <Modal bar={modal} setBar={setModal}/>}
        </div>
        <Routes>
          <Route path='/' element={<Home bar={bar} setBar={setBar} />} />
          <Route path='/tables' element={<Table bar={bar} setBar={setBar} />} />
          <Route path='/settings' element={<Settings bar={bar} setBar={setBar} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App