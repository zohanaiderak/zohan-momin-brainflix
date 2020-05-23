import React from 'react';
import './Comments.scss';

const Comments = (props) =>{
    if(!props.comments){
        return(
            <h1>Loading</h1>
        )
    }
    return(
        <div className="mainVideo__comm">
            {
                props.comments.map(comm =>
                    <Comm 
                        key = {comm.id}
                        name = {comm.name}
                        timestamp = {new Intl.DateTimeFormat('en-US',{year: 'numeric', month: '2-digit',day: '2-digit'}).format(comm.timestamp)}
                        comment = {comm.comment}
                    />
                )
            }
        </div>
    )
}
    
const Comm = (props) =>{
    return(
        <React.Fragment>
            <div className="post">
                <p className="post__dp"></p>
                <div className="post__comment"> 
                    <p className="post__comment-name">{props.name}</p>
                    <p className="post__comment-timestamp">{props.timestamp}</p>
                    <p className="post__comment-text">{props.comment}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Comments;