import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
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

function Modal({bar,setBar}) {
    return (
        <div>
            <div className="modal">
                <h1>Menu</h1>
                <div className="bar-container">
                    <NavLink to={"/tables"}><p onClick={()=>{setBar(!bar)}}  ><span><FaTable /></span>Tables</p></NavLink>
                    <p onClick={()=>{setBar(!bar)}} ><span><IoPersonSharp /></span>Profile</p>
                    <Link to={"/settings"}><p onClick={()=>{setBar(!bar)}} ><span><IoIosSettings /></span>Settings</p></Link>
                    <p onClick={()=>{setBar(!bar)}} ><span><FaCalendarAlt /></span>Calendar</p>
                    <p onClick={()=>{setBar(!bar)}} ><span><LuLayoutDashboard /></span>Dashboard</p>
                </div>
            </div></div>
    )
}

export default Modal