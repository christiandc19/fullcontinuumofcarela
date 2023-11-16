import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { BiMenuAltRight } from 'react-icons/bi'
import {NavLink, Link} from 'react-router-dom'
// import logo from '../../assets/nav-logo-wh2.png'
import {BsFillCaretDownFill } from "react-icons/bs";
// import Topbar from '../../components/topbar/Topbar';

import './NavbarStyles.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    const [isMenu, setisMenu] = useState(false);


    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }


    return (
        <>

        <div className='navbar' name="top">

            <div className='nav-box'>

                        <div className="navbar-logo">
                                <h1>LOGO</h1>
                            {/* <Link to='/'>
                            <img src={logo} alt="Oxnard Logo" loading="lazy"/>
                            </Link> */}

                        </div>


                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'>Home</Link></li>


                        <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to={`#`}> Detox <BsFillCaretDownFill /> </Link>
                            <ul className={boxClassSubMenu.join(' ')} id='submenu-item'> 
                                <li> <NavLink onClick={toggleClass} activeclassname='is-active'  to={`/detox-programs`}> Detox Program </NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeclassname='is-active' to={`/residential-programs`}> Residential Program </NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeclassname='is-active' to={`/detox-partial-hospitalization-program`}> Partial Hospitalization Program </NavLink> </li>
                            </ul>
                        </li>

                        <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to={`/substance-abuse`}> Subtance Abuse <BsFillCaretDownFill /> </Link>
                            <ul className={boxClassSubMenu.join(' ')} id='submenu-item'> 
                                <li> <NavLink onClick={toggleClass} activeclassname='is-active'  to={`/partial-hospitalization-program`}> Partial Hospitalization Program</NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeclassname='is-active' to={`/intensive-outpatient-program`}> Intensive Outpatient Program</NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeclassname='is-active' to={`/outpatient-program`}> Outpatient Program</NavLink> </li>
                            </ul>
                        </li>


                        <li><Link to='/sober-living'>Sober Living</Link> </li>
                        <li><Link to='/jobs'>Jobs Program</Link></li>
                        {/* <li><Link to='/about-us'>About Us</Link> </li> */}
                        {/* <li><Link to='/insurance'>Insurance</Link></li> */}
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>

                    <div className="hamburger" onClick={handleNav}>
                        {!nav ? (<BiMenuAltRight className='icon2' />) : (<FaTimes className='icon' />)}
                    </div>
            </div>
        </div>

        {/* <Topbar /> */}


        </>
    )
   
}

export default Navbar

