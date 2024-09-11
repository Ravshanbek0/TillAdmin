import React, { useState } from 'react';
import "./Table.css"
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

function Table({ bar, setBar }) {
    const [data, setData] = useState([{
        name: "Ravshanbek",
        age: 18,
        position: "Dasturchi",
        start: "2020-01-28",
        office: "Fergana"
    },
    {
        name: "Ravshanbek",
        age: 18,
        position: "Dasturchi",
        start: "2020-01-28",
        office: "Fergana"
    },
    {
        name: "Ravshanbek",
        age: 18,
        position: "Dasturchi",
        start: "2020-01-28",
        office: "Fergana"
    },
    {
        name: "Ravshanbek",
        age: 18,
        position: "Dasturchi",
        start: "2020-01-28",
        office: "Fergana"
    },
    {
        name: "Ravshanbek",
        age: 18,
        position: "Dasturchi",
        start: "2020-01-28",
        office: "Fergana"
    },
    {
        name: "Ravshanbek",
        age: 18,
        position: "Dasturchi",
        start: "2020-01-28",
        office: "Fergana"
    },
    {
        name: "Ravshanbek",
        age: 18,
        position: "Dasturchi",
        start: "2020-01-28",
        office: "Fergana"
    }])

    return (
        <div className='table'>
            <div className={bar ? "bar-none" : "none"}>
                <h1><span className='btn-bar-none' onClick={() => { setBar(false) }}><RiMenuUnfold3Fill /></span></h1>

                <NavLink to={"/tables"}><p><span><FaTable /></span></p></NavLink>
                <p><span><IoPersonSharp /></span></p>
                <NavLink to={"/settings"}><p><span><IoIosSettings /></span></p></NavLink>
                <p><span><FaCalendarAlt /></span></p>
                <p><span><LuLayoutDashboard/></span></p>
            </div>

            <div className={bar ? "none" : "bar-lis"}>
                <h1>Menu</h1>
                <span className='btn-bar' onClick={() => { setBar(true) }}><RiMenuFold3Fill /></span>
                <div className="bar-container">
                    <NavLink to={"/tables"}><p><span><FaTable /></span>Tables</p></NavLink>
                    <p><span><IoPersonSharp /></span>Profile</p>
                    <NavLink to={"/settings"}><p><span><IoIosSettings /></span>Settings</p></NavLink>
                    <p><span><FaCalendarAlt /></span>Calendar</p>
                    <p><span><LuLayoutDashboard/></span>Dashboard</p>
                </div>

            </div>
            <div className={bar ? "ss ss-none" : "ss"}>
                <div className="table-asosiy">
                    <div className="table-main">
                        <div className="table-1">
                            <div className="table-nav">
                                <div className="table-nav-search">
                                    <input type="text" placeholder='Search here...' />
                                    <span><FaSearch /></span>
                                </div>
                                <div className="select-page">
                                    <p>Per Page:</p>
                                    <select className="page-num">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="table-informations">
                            <div className="table-i-top">
                                <p className='black-p-table' >Name</p>
                                <p className='black-p-table' >Position</p>
                                <p className='black-p-table' >Office</p>
                                <p className='black-p-table' >Age</p>
                                <p className='black-p-table' >Start date</p>
                                <p className='black-p-table' >Form</p>
                            </div>
                            {data?.map((item) => {
                                return <div className="table-i-top">
                                    <p>{item.name}</p>
                                    <p>{item.position}</p>
                                    <p>{item.office}</p>
                                    <p>{item.age}</p>
                                    <p>{item.start}</p>
                                    <p className='table-i-top-btns'>
                                        <span className='t-t-btnEdit'><MdEdit /></span>
                                        <span className='t-t-btnAdd'><MdAddBox /></span>
                                        <span className='t-t-btnDelete'><MdDelete /></span>
                                    </p>
                                </div>
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table