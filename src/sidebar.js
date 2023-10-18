import React from "react";

import { AiFillSetting } from "react-icons/ai";
import{MdOutlineKeyboardArrowRight, MdSpaceDashboard, MdOutlineLiveHelp, MdOutlineKeyboardArrowDown} from "react-icons/md";
import{PiCubeBold} from "react-icons/pi";
import{CgProfile} from "react-icons/cg";
import{GiWallet} from "react-icons/gi";
import{BiSolidOffer} from "react-icons/bi";
import Pic from './img/kartik.jpg'

function Sidebar(){
    return(
        <aside id="sidebar">
            <div className="sidebar-title">
                <div className="sidebar-brand">
                    <AiFillSetting className="icon"/>Dashboard
                </div>
            </div>
            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                   <MdSpaceDashboard className="icon"/> <a href="">Dashboard</a>
                </li>
                <li className="sidebar-list-item">
                    <PiCubeBold className="icon"/><a href="">Product</a>
                    <MdOutlineKeyboardArrowRight className="arrow"/>
                </li>
                <li className="sidebar-list-item">
                   <CgProfile className="icon"/> <a href="">Customers</a>
                    <MdOutlineKeyboardArrowRight className="arrow" />
                </li>
                <li className="sidebar-list-item">
                    <GiWallet className="icon"/><a href="">Income</a>
                    <MdOutlineKeyboardArrowRight className="arrow" />
                </li>
                <li className="sidebar-list-item">
                    <BiSolidOffer className="icon"/><a href="">Promote</a>
                    <MdOutlineKeyboardArrowRight className="arrow" />
                </li>
                <li className="sidebar-list-item">
                    <MdOutlineLiveHelp className="icon"/><a href="">help</a>
                       
                    <MdOutlineKeyboardArrowRight className="arrow" />
                </li>
            </ul>
            <div className="login">
                <img className="user-pic" src={Pic} alt="user pic"></img><br/>
                    <div className="login-details">
                        
                        <h3>kartik</h3>
                        <h5>Project Manager</h5> 
                    </div>
                    
                <MdOutlineKeyboardArrowDown className="arrow" />
            </div>
        </aside>
    )
}

export default Sidebar