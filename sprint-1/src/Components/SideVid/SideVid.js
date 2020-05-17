import React from 'react';

const Sidevid = (props) =>{
    return(
        <div className="sideVideo__item">
            <img className="sideVideo__item--poster" src={props.image} alt ="Side Video Pic"></img>
            <ul className="sideVideo__item--data">
                <li className="title">{props.title}</li>
                <li className="channel">{props.channel}</li>
            </ul>
        </div>
    )
}

export default Sidevid ;