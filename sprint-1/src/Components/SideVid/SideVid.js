import React from 'react';
import './SideVid.scss';

const SideVideo = (props)  =>{
    return(
    <div className="sideVideo">
                <p className="sideVideo__title">NEXT VIDEO</p>
                {props.sdvideo.sideVideo.map(sidevid =>{
                    if(props.sdvideo.mainVideo.title !== sidevid.title)
                        return(
                            <Sidevid 
                                key ={sidevid.id}
                                image ={sidevid.image}
                                title = {sidevid.title}
                                channel = {sidevid.channel}
                            />
                        )
                    return true;
                    })
                }
            </div>)
}

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

export default SideVideo ;