import React from 'react';
import Logo from '../../Assets/Logo/Logo-brainflix.svg';
import UserImg from '../../Assets/Images/Mohan-muruge.jpg'
import Styles from './Header.scss'
import Search from '../../Assets/Icons/SVG/Icon-search.svg'


function Header(){
    return(
        <header className = "header">
            <span className="header__logo"><img src={Logo}></img></span>
            <input className="header__search" type="text" placeholder="Search"></input>
            <div className="header__user">
                <button className="header__user--button">+ Upload</button>
                <img className="header__user--img" src={UserImg}></img>
            </div>
        </header>
    )
}

export default Header;