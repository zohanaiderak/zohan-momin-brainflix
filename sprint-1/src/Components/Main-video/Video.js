import React from 'react'
import './Video.scss'
import userImg from '../../Assets/Images/Mohan-muruge.jpg'
import play from '../../Assets/Icons/SVG/Icon-play.svg'
import mute from '../../Assets/Icons/SVG/Icon-volume.svg'
import screen from '../../Assets/Icons/SVG/Icon-fullscreen.svg'
import view from '../../Assets/Icons/SVG/Icon-views.svg'
import like from '../../Assets/Icons/SVG/Icon-likes.svg'
import Commenting from '../Comments/Commenting'
import SideVideo from '../SideVid/SideVid';
import Videos from '../Main/VideoData'

/*I know i shouldn't have broken down my children elements further but i wasn't 
sure which one is good practice. will wait for the feedback if anything*/

class Video extends React.Component{
    state = ({
        sdvideo: Videos
    })
    render(){
    return(
        <div className = "mainVideo">
            <Vidd 
                key ={this.props.video.mainVideo.id}
                image = {this.props.video.mainVideo.image}
                title = {this.props.video.mainVideo.title} 
                channel = {this.props.video.mainVideo.channel}
                timestamp = {this.props.video.mainVideo.timestamp}
                views = {this.props.video.mainVideo.views}
                likes = {this.props.video.mainVideo.likes}
                description = {this.props.video.mainVideo.description}
                comments = {this.props.video.mainVideo.comments.commentsarr} 
            />
          <SideVideo 
            sdvideo = {this.state.sdvideo}
          />  
        </div>   
    ) } 
}

const Vidd = (props) =>{ 
    return(
        <>
            <MainVid 
                image = {props.image}
            />
            <VidData
                title = {props.title}
                channel = {props.channel}
                timestamp = {props.timestamp}
                views = {props.views}
                likes = {props.likes}
                description = {props.description}
                comments = {props.comments}
            />
        </>
    )
}


const MainVid = (props) =>{
    return(
        <div className ="mainVideo__container">
                <video className="mainVideo__video" poster={props.image}></video>
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
    )
}

const VidData = (props) =>{
    return(
        <div className="mainVideo__data">
            <h1 className="mainVideo__title ">{props.title}</h1>
            <div className="mainVideo__sub">
                <p className="mainVideo__sub1">
                    <span className="mainVideo__sub1-channel spacing-likenView">{props.channel}</span>
                    <span className="mainVideo__sub1-timestamp" >{props.timestamp}</span>
                </p>
                <p className="mainVideo__sub2">
                    <span className="mainVideo__sub2-views">
                        <img className="spacing-likenView" src={view} alt="like"></img>
                            {props.views}
                    </span>
                    <span className="mainVideo__sub2-views">
                        <img className="spacing-likenView" src={like} alt="view"></img>
                            {props.likes}
                    </span>
                </p>
            </div>
            <p className="mainVideo__desc">{props.description}</p>
            <p className="mainVideo__comlength">{props.comments.length} Comments</p>
            <div className="mainVideo__form">
                <img className="mainVideo__form-face" src={userImg} alt="Mohan-Muruge"></img>
                <form className="form">
                    <span className="form__data">
                        <label className="form__data-label">JOIN THE CONVERSATION</label>
                        <textarea className="form__data-input textArea"></textarea>
                    </span>
                    <button className="form__submit">COMMENT</button>
                </form>
            </div>
            <Commenting
               comments = {props.comments}
            />
        </div>
    )
}

export default Video;