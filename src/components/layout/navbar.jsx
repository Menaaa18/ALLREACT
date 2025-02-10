import React from "react";
import {Link} from "react-router-dom"
export default function NavBarMain(){
    return (
        <div className="navbar"> 
        <h5>Logo</h5>
        <ul className="navGuys"> 
            <Link to="/home">
             <ol className='nav-item'>Home</ol>
            </Link>
            <Link to="/about">
            <ol className='nav-item'>About</ol>
            </Link>
            <Link to="/Make Payment">
            <ol className='nav-item'>Make Payment</ol>
            </Link>
            <Link to="/Account Settings">
            <ol className='nav-item'>Account Settings</ol>
            </Link>          
        </ul>
        </div> 
    );
}