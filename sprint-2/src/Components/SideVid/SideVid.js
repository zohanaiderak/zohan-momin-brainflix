import React from 'react';
import './SideVid.scss';
import axios from 'axios';
import {BrowserRouter ,Route ,Switch, Link} from 'react-router-dom'
import Video from '../Main-video/Video'

class SideVideo extends React.Component{
    state ={
        sdvideo : []
      }
    
    componentDidMount(){
      console.log('component did mount');
        axios
            .get(`https://project-2-api.herokuapp.com/videos?api_key=3150c1ea-e454-4fed-b9e5-31afa9947a74`)
            .then(response =>{
              this.setState({
                sdvideo: response.data
              })
            })
            .catch(err => console.log(err))
      }
    
    render(){
        console.log(this.state.sdvideo)
    return(
    <div className="sideVideo">
                <p className="sideVideo__title">NEXT VIDEO</p>
                {this.state.sdvideo.map(sidevid =>{
                    if(this.state.sdvideo.title !== sidevid.title)
                        return(
                            <><Link key = {sidevid.id}
                                  to={`/${sidevid.id}`}/>
                            <Sidevid 
                                key ={sidevid.id}
                                image ={sidevid.image}
                                title = {sidevid.title}
                                channel = {sidevid.channel}
                            /></>
                            
                        )
                    return true;
                    })
                }
        
        <BrowserRouter>
            <Route path="/videos" component={SideVideo} />
            <Switch>
          <Route path={`${this.props.match.path}/:id`} component={Video} />
        </Switch>
        </BrowserRouter> 
            </div>)
}}

const Sidevid = (props) =>{
    return(
        <div className="sideVideo__item">
            <img className="sideVideo__item--poster" src={props.image} alt ="Side Video Pic"></img>
            <ul className="sideVideo__item--data">
                <li className="title">{props.title}</li>
                <li className="channel">{props.channel}</li>
            </ul>
        </div>
    )
}

export default SideVideo ;