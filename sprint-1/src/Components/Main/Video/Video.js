import React from 'react'


const Video = (props) =>{
    console.log(props.video.mainVideo.comments.commentsarr)
    return(
        <div className = "mainVideo">
                <Vidd 
                    key ={props.video.mainVideo.id}
                    image = {props.video.mainVideo.image.Video1}
                    title = {props.video.mainVideo.title} 
                    channel = {props.video.mainVideo.channel}
                    timestamp = {props.video.mainVideo.timestamp}
                    views = {props.video.mainVideo.views}
                    description = {props.video.mainVideo.description}
                    comments = {props.video.mainVideo.comments.commentsarr} 
                />
                {props.video.sideVideo.map((sidevid,i) =>
                    <Sidevid 
                        key ={sidevid.id}
                        image ={sidevid.image}
                        title = {sidevid.title}
                        channel = {sidevid.channel}
                    />

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
            <video width="320px" controls poster={props.image}></video>
            <h1 className="mainVideo__title ">{props.title}</h1>
            <span className="mainVideo__channel">{props.channel}</span>
            <span className="mainVideo__timestamp">{props.timestamp}</span>
            <span className="mainVideo__views">{props.views}</span>
            <p className="mainVideo__desc">{props.description}</p>
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

const Sidevid = (props) =>{
    return(
        <>
            <img src={props.image} ></img>
            <ul>
                <li>{props.title}</li>
                <li>{props.channel}</li>
            </ul>
        </>
    )
}






export default Video;