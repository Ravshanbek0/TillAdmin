import React, { useState } from 'react';
import "./Settings.css"
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

function Settings({ bar, setBar }) {
    return (
        <div className='table'>
            <div className={bar ? "bar-none" : "none"}>
                <h1><span className='btn-bar-none' onClick={() => { setBar(false) }}><RiMenuUnfold3Fill /></span></h1>

                <NavLink to={"/tables"}><p><span><LuLayoutDashboard /></span></p></NavLink>
                <p><span><IoPersonSharp /></span></p>
                <p><span><IoIosSettings /></span></p>
                <p><span><FaCalendarAlt /></span></p>
                <p><span><FaTable /></span></p>
            </div>

            <div className={bar ? "none" : "bar-lis"}>
                <h1>Menu</h1>
                <span className='btn-bar' onClick={() => { setBar(true) }}><RiMenuFold3Fill /></span>
                <div className="bar-container">
                    <NavLink to={"/tables"}><p><span><FaTable  /></span>Tables</p></NavLink>
                    <p><span><IoPersonSharp /></span>Profile</p>
                    <NavLink to={"/settings"}><p><span><IoIosSettings /></span>Settings</p></NavLink>
                    <p><span><FaCalendarAlt /></span>Calendar</p>
                    <p><span><LuLayoutDashboard/></span>Dashboard</p>
                </div>

            </div>
            <div className={bar ? "ss ss-none" : "ss"}>
                <div className="setting-asosiy">
                    <div className="settings-main">
                        <div className="setting-box">
                            <span className="setting-icon"><LuFactory /></span>
                            <p className="setting-write">
                                <span className='setting-box-color1'>Tashkilot</span>
                                <span>Tashkilotlar soni:3ta</span>
                            </p>
                        </div>
                        <div className="setting-box">
                            <span className="setting-icon green1"><LuFactory /></span>
                            <p className="setting-write ">
                                <span className='setting-box-color1 green2'>Tashkilot</span>
                                <span>Tashkilotlar soni:3ta</span>
                            </p>
                        </div>
                        <div className="setting-box">
                            <span className="setting-icon blue1"><LuFactory /></span>
                            <p className="setting-write">
                                <span className='setting-box-color1 blue2'>Tashkilot</span>
                                <span>Tashkilotlar soni:3ta</span>
                            </p>
                        </div>
                    </div>
                    <div className="settings-main">
                        <div className="setting-box">
                            <span className="setting-icon red1"><LuFactory /></span>
                            <p className="setting-write">
                                <span className='setting-box-color1 red2'>Tashkilot</span>
                                <span>Tashkilotlar soni:3ta</span>
                            </p>
                        </div>
                        <div className="setting-box">
                            <span className="setting-icon orange1"><LuFactory /></span>
                            <p className="setting-write">
                                <span className='setting-box-color1 orange2'>Tashkilot</span>
                                <span>Tashkilotlar soni:3ta</span>
                            </p>
                        </div>
                        <div className="setting-box">
                            <span className="setting-icon black1"><LuFactory /></span>
                            <p className="setting-write">
                                <span className='setting-box-color1 black2'>Tashkilot</span>
                                <span>Tashkilotlar soni:3ta</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings