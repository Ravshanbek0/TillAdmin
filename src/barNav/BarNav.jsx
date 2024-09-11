import React, { useState } from 'react'
import "./BarNav.css"
import { LuLayoutDashboard } from "react-icons/lu";
import { IoPersonSharp } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { FaTable } from "react-icons/fa";
import { RiMenuUnfold3Fill } from "react-icons/ri";
import { RiMenuFold3Fill } from "react-icons/ri";
import { Link, NavLink } from 'react-router-dom';

function BarNav({ modal, setModal }) {

    return (
        <nav className='nav-bar'>
            <Link to={"/"}><p><img src="./public/Shape.png" alt="" />TailAdmin</p></Link>
            <span onClick={()=>{setModal(!modal)}} className='none-menu'><RiMenuUnfold3Fill /></span>
        </nav>
    )
}

export default BarNav