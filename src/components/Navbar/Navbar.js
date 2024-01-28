import React from 'react';
import './Navbar.css';
import AppManager from "../../assets/navbar/app manager.png"
import { useState } from 'react';

const Navbar = () => {
    const [navIcons,sentNavIcons]=useState(true)
    let Icon="fa-solid fa-bars";
    if(navIcons===true){
        Icon="fa-solid fa-bars"
    }else{
        Icon="fa-solid fa-x"
    }
    const handleNacvIcons=()=>{
        sentNavIcons(current=>!current);
    }

    return (
        <div className={'Navbar'}>
            <nav className ='Navbar__container'>
                <div className={`Navbar__nav ${!navIcons ? "Sidebar__nav--active" : ""}`}>
                    <ul className='Navbar__nav--mainitem'>
                        <li className='Navbar__nav--items'>
                            <a className='Navbar__nav--link' href='#'>Home</a>
                        </li>
                    </ul>
                    <ul className='Navbar__nav--mainitem'>
                        <li className='Navbar__nav--items'>
                            <a className='Navbar__nav--link' href='#'>Orders</a>
                        </li>
                    </ul>
                    <ul className='Navbar__nav--mainitem'>
                        <li className='Navbar__nav--items'>
                            <a className='Navbar__nav--link' href='#'>Campanies</a>
                        </li>
                    </ul>
                    <ul className='Navbar__nav--mainitem'>
                        <li className='Navbar__nav--items'>
                            <a className='Navbar__nav--link' href='#'>Employees</a>
                        </li>
                    </ul>
                    <ul className='Navbar__nav--mainitem'>
                        <li className='Navbar__nav--items'>
                            <a className='Navbar__nav--link' href='#'>Locations </a>
                        </li>
                    </ul>
                    <ul className='Navbar__nav--appManager'>
                        <li className='Navbar__nav--items-appManager'>
                            <a className='Navbar__nav--link-appManager' href='#'>App Manager
                            <img className='app__manager' src={AppManager} alt='app manager'/>
                            <i class="fa-solid fa-caret-down app__manager--arrow"></i> </a>
                        </li>
                    </ul>
                    <div className='Navbar__icons'>
                       <i id='Navbar__icons--bx'  onClick={handleNacvIcons} class={Icon}></i>
                       
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;