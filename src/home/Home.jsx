import React, { useState } from 'react';
import { LuLayoutDashboard } from "react-icons/lu";
import { IoPersonSharp } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { FaTable } from "react-icons/fa";
import { RiMenuUnfold3Fill } from "react-icons/ri";
import { RiMenuFold3Fill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdAddBox } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function Home({bar,setBar}) {
    return (
        <div className='home'>
            <div className={bar ? "bar-none" : "none"}>
                <h1><span className='btn-bar-none' onClick={() => { setBar(false) }}><RiMenuUnfold3Fill /></span></h1>

                <NavLink to={"/tables"}><p><span><FaTable /></span></p></NavLink>
                <p><span><IoPersonSharp /></span></p>
                <NavLink to={"/settings"}><p><span><IoIosSettings /></span></p></NavLink>
                <p><span><FaCalendarAlt /></span></p>
                <p><span><LuLayoutDashboard /></span></p>
            </div>

            <div className={bar ? "none" : "bar-lis"}>
                <h1>Menu</h1>
                <span className='btn-bar' onClick={() => { setBar(true) }}><RiMenuFold3Fill /></span>
                <div className="bar-container">
                    <NavLink to={"/tables"}><p><span><FaTable /></span>Tables</p></NavLink>
                    <p><span><IoPersonSharp /></span>Profile</p>
                    <NavLink to={"/settings"}><p><span><IoIosSettings /></span>Settings</p></NavLink>
                    <p><span><FaCalendarAlt /></span>Calendar</p>
                    <p><span><LuLayoutDashboard /></span>Dashboard</p>
                </div>

            </div>
            
        </div>
    )
}

export default Home