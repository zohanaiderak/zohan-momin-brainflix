import React from 'react'
import userImg from '../../assets/images/Mohan-muruge.jpg'
import view from '../../assets/icons/svg/Icon-views.svg'
import like from '../../assets/icons/svg/Icon-likes.svg'
import Comments from '../../Components/Comments/Comments'

const VidData = (props) =>{
    console.log(props.comments)  
    return(
        <div className="mainVideo__data">
            <h1 className="mainVideo__title ">
                {props.title}
            </h1>
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
            <p className="mainVideo__comlength">3 Comments</p>
            <div className="mainVideo__form">
                <img className="mainVideo__form-face" src={userImg} alt="Mohan-Muruge"></img>
                <form className="form">
                    <span className="form__data">
                        <label className="form__data-label">JOIN THE CONVERSATION</label>
                        <textarea className="form__data-input textArea" placeholder="This was easily the most spectacular BMX moment ever"></textarea>
                    </span>
                    <button className="form__submit">COMMENT</button>
                </form>
            </div>
            <Comments
                comments = {props.comments}
            />
        </div>
    )
}

export default VidData;