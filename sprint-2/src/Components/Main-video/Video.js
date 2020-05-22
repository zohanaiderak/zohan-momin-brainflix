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
import axios from 'axios'
import {BrowserRouter , Route ,Link} from 'react-router-dom'

/*I know i shouldn't have broken down my children elements further but i wasn't 
sure which one is good practice. will wait for the feedback if anything*/
const API_URL = "https://project-2-api.herokuapp.com"
const API_KEY = "?api_key=3150c1ea-e454-4fed-b9e5-31afa9947a74"

class Video extends React.Component{
    state={
        video : {},
        sdvideo:[]
    }
    componentDidMount(){
        if(!this.props.match.params.id) { 
        axios
              .get(`${API_URL}/videos${API_KEY}`)
              .then(response =>{
                this.setState({
                  sdvideo: response.data
                },
                () => this.fetchVideoById(this.state.sdvideo[0].id)
                )
              })
              .catch(err => console.log(err))
        }
        else{
            axios.get(`${API_URL}/videos/${this.props.match.params.id}${API_KEY}`)
            .then(response =>{
                this.setState({
                    video : response.data
                },
                ()=>this.fetchSideVideoById() 
                )
            })
        }
    }

    fetchSideVideoById = () => {
        axios.get(`${API_URL}/videos/${API_KEY}`)
        .then(response =>{
            this.setState({
                sdvideo : response.data,
            })
        }) 
    }



    fetchVideoById = (id) => {
        axios.get(`${API_URL}/videos/${id}${API_KEY}`)
        .then(response =>{
            this.setState({
                video : response.data,
            })
        }) 
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.id !== this.props.match.params.id && !this.props.match.params.id){
            axios
                .get(`${API_URL}/videos/${API_KEY}`)
                .then(response=>{
                    this.setState({
                        sdvideo:response.data
                    },
                    ()=>this.fetchVideoById(this.state.sdvideo[0].id)
                    )
                })
        } else if (prevProps.match.params.id !== this.props.match.params.id){
            axios
                .get(`${API_URL}/videos/${this.props.match.params.id}${API_KEY}`)
                .then(response=>{
                    this.setState({
                        video: response.data,
                    })
                })
        }
    }

    render(){
        let othervideos= this.state.sdvideo.filter(video => video.id !== this.state.video.id)

    return(
        <main>
        <div className = "mainVideo">
            <Vidd 
                video={this.state.video}
            />
          <SideVideo sdvideo = {othervideos}
          /> 
        </div>  
        <section id="section"></section>
        </main> 
    ) } }

const Vidd = (props) =>{ 
    return(
        <>
            <MainVid 
                image = {props.video.image}
            />
            <VidData
                title = {props.video.title}
                channel = {props.video.channel}
                timestamp = {props.video.timestamp}
                views = {props.video.views}
                likes = {props.video.likes}
                description = {props.video.description}
                comments = {props.video.comments}
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
      console.log(props.comments)  
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
            <p className="mainVideo__comlength">3 Comments</p>
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