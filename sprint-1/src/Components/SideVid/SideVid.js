import React from 'react';

const Sidevid = (props) =>{
    return(
        <>
            <img src={props.image} alt ="Side Video Pic"></img>
            <ul>
                <li>{props.title}</li>
                <li>{props.channel}</li>
            </ul>
        </>
    )
}

export default Sidevid ;