import React from 'react';
import './Header.css'
import Logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
          <Link to='/'>
          <img src={Logo} alt="" />
          </Link>
            <div>
            < Link to="/">Shop</Link>
            < Link to="/order">Order </Link>
            < Link to="/inventory">Inventory</Link>
            < Link to="/login">login</Link>
            </div>
        </nav>
    );
};

export default Header;