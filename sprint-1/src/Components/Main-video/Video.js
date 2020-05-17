import React from 'react'
import './Video.scss'
import userImg from '../../Assets/Images/Mohan-muruge.jpg'
import Sidevid from '../SideVid/SideVid'
import play from '../../Assets/Icons/SVG/Icon-play.svg'
import mute from '../../Assets/Icons/SVG/Icon-volume.svg'
import screen from '../../Assets/Icons/SVG/Icon-fullscreen.svg'
import view from '../../Assets/Icons/SVG/Icon-views.svg'
import like from '../../Assets/Icons/SVG/Icon-likes.svg'

const Video = (props) =>{
    console.log(props.video.mainVideo.comments.commentsarr)
    return(
        <div className = "mainVideo">
            <Vidd 
                key ={props.video.mainVideo.id}
                image = {props.video.mainVideo.image}
                title = {props.video.mainVideo.title} 
                channel = {props.video.mainVideo.channel}
                timestamp = {props.video.mainVideo.timestamp}
                views = {props.video.mainVideo.views}
                likes = {props.video.mainVideo.likes}
                description = {props.video.mainVideo.description}
                comments = {props.video.mainVideo.comments.commentsarr} 
            />
            <div className="sideVideo">
                <p className="sideVideo__title">NEXT VIDEO</p>
                {props.video.sideVideo.map(sidevid =>{
                    if(props.video.mainVideo.title !== sidevid.title)
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
            </div>
        </div>   
    )  
}

const Vidd = (props) =>{ 
    return(
        <React.Fragment>
            <div className ="mainVideo__container">
                <video className="mainVideo__container--video" poster={props.image}></video>
                <div className="mainVideo__container--controls">
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
            <h1 className="mainVideo__title ">{props.title}</h1>
            <p className="mainVideo__sub1">
                <span className="mainVideo__sub1--channel spacing-likenView">{props.channel}</span>
                <span className="mainVideo__sub1--timestamp" >{props.timestamp}</span>
            </p>
            <p className="mainVideo__sub2">
                <span className="mainVideo__sub2--views">
                    <img className="spacing-likenView" src={view} alt="like"></img>
                    {props.views}
                </span>
                <span className="mainVideo__sub2--views">
                    <img className="spacing-likenView" src={like} alt="view"></img>
                    {props.likes}
                </span>
            </p>
            <p className="mainVideo__desc">{props.description}</p>
            <p className="mainVideo__comlength">{props.comments.length} Comments</p>
            <div className="mainVideo__form">
                <img className="mainVideo__form--face" src={userImg} alt="Mohan-Muruge"></img>
                <form className="form">
                    <label className="form--label">JOIN THE CONVERSATION</label>
                    <textarea className="form--input textArea"></textarea>
                    <button className="form--submit">COMMENT</button>
                </form>
            </div>
            <div className="mainVideo__comm">
                {props.comments.map(comm =>
                    <Comm 
                        key = {comm.id}
                        name = {comm.name}
                        timestamp = {comm.timestamp}
                        comment = {comm.comment}
                    />
                )}
            </div>
        </React.Fragment>
    )
}

const Comm = (props) =>{
    return(
        <React.Fragment>
            <div className="post">
                <p className="post__dp"></p>
                <div className="post__comment"> 
                    <p className="post__comment--name">{props.name}</p>
                    <p className="post__comment--timestamp">{props.timestamp}</p>
                    <p className="post__comment--text">{props.comment}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Video;