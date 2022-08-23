import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <>
            <div className="nav_bar ">
                <div className="nav container">
                    <div className="logo">
                        <Link  to="/"><span style={{ color :'#ffff',marginTop:'15px' }}>My shop</span></Link>
                    </div>
                    <div className="main_menu">
                        <ul className='menu'>
                            <li className='nav-item'><Link className='nav-link' to="/">Market</Link></li>
                            <li className='nav-item'><Link className='nav-link' to="/myShop">My Shop</Link></li>
                            <li className='nav-item' href="#about" ><Link className='nav-link' >About</Link></li>
                            <li className='nav-item'><Link className='nav-link' to="/blog">Blog</Link></li>
                            <li className='nav-item'><Link className='nav-link' to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="resister_account">
                        <Link to="/signIn">SignIn</Link>
                        <Link to="/login">LogIn</Link>
                    </div>
                    <div className="app_bar">
                        <i className="fa fa-bars"></i> 
                    </div>
                </div>
            </div>
            
        </>

    );
};

export default Header;