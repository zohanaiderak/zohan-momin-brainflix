import React from 'react';
import LogoImg from '../../Assets/Logo/Logo-brainflix.svg';
import UserImg from '../../Assets/Images/Mohan-muruge.jpg'
import './Header.scss'
import plus from '../../Assets/Icons/SVG/Icon-upload.svg'
import { Link } from 'react-router-dom';



function Header(){
    return(
        <header className = "header">
            <Link to ="/" className="header__logo"><Logo/></Link>
            <input className="header__search" type="text" placeholder="Search"></input>
            <div className="header__user">
            <Link to="/Upload" className="header__user--button">
            <img src={plus} alt="upload icon"></img> &nbsp; <span>UPLOAD</span>
            </Link>
            <img className="header__user--img" src={UserImg} alt="Mohan-Muruge"></img>
            </div>
        </header>
    )
}


const Logo = (props) =>{
    return(
        <img src={LogoImg} alt="Logo"></img>
    )
}

export default Header;
export {Logo};
