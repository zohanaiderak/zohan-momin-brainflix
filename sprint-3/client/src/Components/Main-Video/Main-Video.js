import React from 'react'
import play from '../../assets/icons/svg/Icon-play.svg'
import mute from '../../assets/icons/svg/Icon-volume.svg'
import screen from '../../assets/icons/svg/Icon-fullscreen.svg'


const MainVid = (props) =>{
    console.log(props)
    return(
        <span className="mainVideo__bgcolor">
            <div className ="mainVideo__container">
                <video className="mainVideo__video" poster={props.image} src={props.video} type="video/mp4"/>
                <div className="mainVideo__controls">
                    <button className="play">
                        <img className="play__align" src={play} alt="play-icon"></img>
                    </button>
                    <button className="play scrubber">
                        <hr className="play__scrubber"></hr>
                        <span className="video-length">0:00/0:42</span>
                    </button>
                    <button className="play">
                        <img className="play__align sec" src={mute} alt="mute-icon"></img>
                        <img className="play__align" src={screen} alt="vol-icon"></img>
                    </button>
                </div>
            </div>
        </span>
    )
}

export default MainVid;