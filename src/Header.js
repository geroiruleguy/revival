import React from "react";
import './Header.css';
import logo from './img/logo-ejemplo.jpg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Header = () => {
    return (
        <div>
        <img src={logo} alt=""/>    
        <h1>Contenido del header </h1>
        <nav>
            <a href="#"> Home</a>
            <a href="#"> Home</a>
            <a href="#"> Home</a>
        </nav>
        </div>

    )
}

export default Header;