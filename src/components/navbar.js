import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMoblibeMenu = () => setClick(false);
    return (
     <>
        <nav className = "navbar">
            <div className = "navbar-container">
                <Link to ="/" className = "navbar-logo">
                    Grace Fei
                </Link> 
                <div className = 'menu-icon' onClick = {handleClick}>
                    <i className = {click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div> 

                <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                    <li className = 'nav-item'>
                        <Link to ='/' className = 'nav-links' onClick = {closeMoblibeMenu}>
                            Home
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
     </>
    );
  }
  
  export default NavBar;