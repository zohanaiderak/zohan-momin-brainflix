import React from 'react';
import Logo from '../../Assets/Logo/Logo-brainflix.svg';
import UserImg from '../../Assets/Images/Mohan-muruge.jpg'
import Styles from './Header.scss'
import plus from '../../Assets/Icons/SVG/Icon-upload.svg'



function Header(){
    return(
        <header className = "header">
            <span className="header__logo"><img src={Logo} alt="Logo"></img></span>
            <input className="header__search" type="text" placeholder="Search"></input>
            <div className="header__user">
            <button className="header__user--button">
            <input type="image" src={plus}></input> &nbsp; UPLOAD
            </button>
            <img className="header__user--img" src={UserImg} alt="Mohan-Muruge"></img>
            </div>
        </header>
    )
}

export default Header;