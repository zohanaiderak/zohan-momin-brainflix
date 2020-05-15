import React from 'react'
import userImg from '../../../Assets/Images/Mohan-muruge.jpg'
import Sidevid from './SideVid'

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
                    description = {props.video.mainVideo.description}
                    comments = {props.video.mainVideo.comments.commentsarr} 
                />
                {props.video.sideVideo.map(sidevid =>
                    {if(props.video.mainVideo.title !== sidevid.title)
                        return(
                            <Sidevid 
                                key ={sidevid.id}
                                image ={sidevid.image}
                                title = {sidevid.title}
                                channel = {sidevid.channel}
                            />
                        )
                    }
                )}
        </div>   
    )  
}

const Vidd = (props) =>{
    const Comm = (props) =>{
        return(
            <React.Fragment>
            <ul className="Comments__desc">
                <li className="Comments__desc--name">{props.name}</li>
                <li className="Comments__desc--timestamp">{props.timestamp}</li>
            </ul>
            <p className="Comments__para">{props.comment}</p>
            </React.Fragment>
        )
    }
    
    return(
        <React.Fragment>
            <video controls poster={props.image}></video>
            <h1 className="mainVideo__title ">{props.title}</h1>
            <span className="mainVideo__channel">{props.channel}</span>
            <span className="mainVideo__timestamp">{props.timestamp}</span>
            <span className="mainVideo__views">{props.views}</span>
            <p className="mainVideo__desc">{props.description}</p>
            <p>{props.comments.length} Comments</p>
            <div className="mainVideo__form">
                <img src={userImg} alt="Mohan-Muruge"></img>
                <form>
                    <label className="form__label">Name</label>
                    <input type="text" className="form__input"></input>
                    <label>Comment</label>
                    <textarea></textarea>
                </form>
            </div>
            <div className="mainVideo__channel--comm"> 
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

export default Video;