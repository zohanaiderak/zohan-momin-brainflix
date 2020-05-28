import React from 'react'
import './Video.scss'
import SideVideo from '../../Components/SideVid/SideVid';
import axios from 'axios'
import MainVid from '../../Components/Main-Video/Main-Video'
import VidData from '../../Components/Main-Video-Data/Main-Video-Data';

/*I know i shouldn't have broken down my children elements further but i wasn't 
sure which one is good practice. will wait for the feedback if anything*/
const API_URL = process.env.REACT_APP_API_URL;

class Video extends React.Component{
    state={
        video: {},
        sdvideo:[]
    }
    componentDidMount(){
        console.log(this.props.match)
        if(!this.props.match.params.id) { 
            axios
            .get(`${API_URL}`)
            .then(response =>{
                this.setState({
                    sdvideo: response.data
                },
                    () => this.fetchVideoById(this.state.sdvideo[0].id)
                )
                })
            .catch(err => console.log(err))
        }
        else {
            axios
            .get(`${API_URL}/${this.props.match.params.id}`)
            .then(response =>{
                this.setState({
                    video : response.data[0]
                },
                ()=>this.fetchSideVideoById() 
                )
            })
        }
    }

    fetchVideoById = (id) => {
        axios
        .get(`${API_URL}/${id}`)
        .then(response =>{
            this.setState({
                video : response.data[0],
            })
        }) 
    }

    fetchSideVideoById = () => {
        axios
        .get(`${API_URL}`)
        .then(response =>{
            this.setState({
                sdvideo : response.data,
            })
        }) 
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.id !== this.props.match.params.id && !this.props.match.params.id){
            axios
            .get(`${API_URL}`)
            .then(response=>{
                this.setState({
                    sdvideo:response.data
                },
                ()=>this.fetchVideoById(this.state.sdvideo[0].id)
                )
            })
        } 
        else if (prevProps.match.params.id !== this.props.match.params.id){
            axios
            .get(`${API_URL}/${this.props.match.params.id}`)
            .then(response=>{
                this.setState({
                    video: response.data[0]
                })
            })
        }
    }

    render(){
        console.log(this.state.video)
        let othervideos= this.state.sdvideo.filter(video => video.id !== this.state.video.id)
        return(
            <main>
                <div className = "mainVideo">
                    <Vidd 
                        video={this.state.video}
                    />
                    <SideVideo 
                        sdvideo = {othervideos}
                    /> 
                </div>  
                <section id="section"></section>
            </main> 
        )
    } 
}

const Vidd = (props) =>{ 
    console.log(props.video) 
    return(
        <>
            <MainVid 
                image = {props.video.image}
            />
            <VidData
                title = {props.video.title}
                channel = {props.video.channel}
                timestamp = {new Intl.DateTimeFormat('en-US',{year: 'numeric', month: '2-digit',day: '2-digit'}).format(props.video.timestamp)}
                views = {props.video.views}
                likes = {props.video.likes}
                description = {props.video.description}
                comments = {props.video.comments}
                video ={props.video.video}
            />
        </>
    )
}

export default Video;