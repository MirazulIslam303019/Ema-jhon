import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />

            <div>
                <a href="Shop">Shop</a>
                <a href="Order">Order</a>
                <a href="Order Review">Order Review</a>
                <a href="Login">Login</a>
            </div>
        </nav>
    );
};

export default Header;